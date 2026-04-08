import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest, authenticate, requireRole } from '../middleware/auth';

const prisma = new PrismaClient();
export const teachersRouter = Router();

// ==================== GET /teachers/classes ====================

teachersRouter.get(
  '/classes',
  authenticate,
  requireRole('TEACHER', 'ADMIN'),
  async (req: AuthRequest, res) => {
    const userId = req.user!.id;

    const teacher = await prisma.teacher.findUnique({
      where: { userId },
    });

    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    const classes = await prisma.class.findMany({
      where: { teacherId: teacher.id },
    });

    res.json({ data: classes });
  }
);

// ==================== GET /teachers/classes/:classId/analytics ====================

teachersRouter.get(
  '/classes/:classId/analytics',
  authenticate,
  requireRole('TEACHER', 'ADMIN'),
  async (req, res) => {
    const { classId } = req.params;
    const { from, to } = req.query;

    // TODO: Implement class analytics
    // Filter sessions by date range, calculate metrics

    res.json({
      classId,
      period: { from, to },
      summary: {
        totalStudents: 0,
        activeStudents: 0,
        averageSessionsPerStudent: 0,
        averageAccuracyRate: 0,
      },
      misconceptions: [],
      studentRisk: [],
    });
  }
);

// ==================== POST /teachers/classes/:classId/invite ====================

teachersRouter.post(
  '/classes/:classId/invite',
  authenticate,
  requireRole('TEACHER', 'ADMIN'),
  async (req, res) => {
    const { classId } = req.params;
    const { expiresIn = 7 } = req.body;

    // TODO: Implement invite code generation

    const inviteCode = 'ABC123DEF'; // Placeholder
    const expiresAt = new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000);

    res.status(201).json({
      inviteCode,
      inviteUrl: `https://plataforma-educacional.com/join/${inviteCode}`,
      expiresAt,
      maxUses: null,
    });
  }
);
