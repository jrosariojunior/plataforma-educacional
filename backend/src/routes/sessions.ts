import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest, authenticate } from '../middleware/auth';

const prisma = new PrismaClient();
export const sessionsRouter = Router();

// ==================== POST /sessions ====================

sessionsRouter.post('/', authenticate, async (req: AuthRequest, res) => {
  const { activityId } = req.body;
  const userId = req.user!.id;

  // Get student
  const student = await prisma.student.findUnique({
    where: { userId },
  });

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Check if activity exists
  const activity = await prisma.activity.findUnique({
    where: { id: activityId },
  });

  if (!activity) {
    return res.status(404).json({ error: 'Activity not found' });
  }

  // Create session
  const session = await prisma.session.create({
    data: {
      studentId: student.id,
      activityId,
    },
  });

  res.status(201).json({
    id: session.id,
    activityId: session.activityId,
    studentId: session.studentId,
    status: session.status,
    startedAt: session.startedAt,
  });
});

// ==================== GET /sessions/:id ====================

sessionsRouter.get('/:id', authenticate, async (req, res) => {
  const { id } = req.params;

  const session = await prisma.session.findUnique({
    where: { id },
    include: {
      activity: true,
      submissions: true,
    },
  });

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

  res.json(session);
});

// ==================== POST /sessions/:id/submit ====================

sessionsRouter.post('/:id/submit', authenticate, async (req: AuthRequest, res) => {
  const { id } = req.params;
  const { questionId, answer, responseTime } = req.body;

  const session = await prisma.session.findUnique({
    where: { id },
    include: { activity: true },
  });

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

  // Record submission
  const submission = await prisma.submission.create({
    data: {
      sessionId: id,
      studentId: session.studentId,
      questionId,
      answer,
      isCorrect: false, // TODO: Implement answer validation logic
      responseTime,
    },
  });

  res.json({
    id: submission.id,
    isCorrect: submission.isCorrect,
    feedback: 'Answer recorded',
  });
});

// ==================== POST /sessions/:id/complete ====================

sessionsRouter.post('/:id/complete', authenticate, async (req, res) => {
  const { id } = req.params;

  const session = await prisma.session.update({
    where: { id },
    data: {
      status: 'COMPLETED',
      completedAt: new Date(),
    },
    include: { submissions: true },
  });

  res.json({
    sessionId: session.id,
    completed: true,
    totalSubmissions: session.submissions.length,
  });
});
