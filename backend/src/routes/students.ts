import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest, authenticate, requireRole } from '../middleware/auth';

const prisma = new PrismaClient();
export const studentsRouter = Router();

// ==================== GET /students/me ====================

studentsRouter.get('/me', authenticate, async (req: AuthRequest, res) => {
  const userId = req.user!.id;

  const student = await prisma.student.findUnique({
    where: { userId },
    include: {
      user: true,
      sessions: {
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
  });

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json({
    id: student.id,
    name: student.user.name,
    email: student.user.email,
    grade: student.user.grade,
    profile: student.profile,
    sessionsCompleted: student.sessions.length,
    createdAt: student.createdAt,
  });
});

// ==================== GET /students/:id/history ====================

studentsRouter.get(
  '/:id/history',
  authenticate,
  requireRole('TEACHER', 'ADMIN'),
  async (req, res) => {
    const { id } = req.params;
    const { limit = '50', offset = '0' } = req.query;

    const sessions = await prisma.session.findMany({
      where: { studentId: id },
      include: { submissions: true },
      orderBy: { createdAt: 'desc' },
      take: Number(limit),
      skip: Number(offset),
    });

    const total = await prisma.session.count({
      where: { studentId: id },
    });

    res.json({
      studentId: id,
      history: sessions,
      total,
      page: Math.floor(Number(offset) / Number(limit)) + 1,
    });
  }
);

// ==================== POST /students/:id/reset-profile ====================

studentsRouter.post(
  '/:id/reset-profile',
  authenticate,
  requireRole('TEACHER', 'ADMIN'),
  async (req: AuthRequest, res) => {
    const { id } = req.params;
    const { reason } = req.body;

    // Log audit
    await prisma.auditLog.create({
      data: {
        action: 'reset_student_profile',
        entityType: 'student',
        entityId: id,
        details: { reason, resetBy: req.user!.id },
      },
    });

    // Reset profile
    const student = await prisma.student.update({
      where: { id },
      data: {
        profile: {
          sessionsCompleted: 0,
          totalTimeSpent: 0,
          misconceptions: [],
          consolidated: [],
        },
      },
    });

    res.json({
      studentId: student.id,
      resetAt: new Date(),
      historyPreserved: true,
      profileCleared: true,
    });
  }
);
