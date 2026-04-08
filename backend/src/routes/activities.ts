import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth';

const prisma = new PrismaClient();
export const activitiesRouter = Router();

// ==================== GET /activities ====================

activitiesRouter.get('/', authenticate, async (req, res) => {
  const { grade, topic, limit = '20', offset = '0' } = req.query;

  const activities = await prisma.activity.findMany({
    where: {
      ...(grade && { grade: Number(grade) }),
      ...(topic && { topic: String(topic) }),
    },
    take: Number(limit),
    skip: Number(offset),
  });

  const total = await prisma.activity.count({
    where: {
      ...(grade && { grade: Number(grade) }),
      ...(topic && { topic: String(topic) }),
    },
  });

  res.json({
    data: activities,
    total,
    page: Math.floor(Number(offset) / Number(limit)) + 1,
  });
});

// ==================== GET /activities/:id ====================

activitiesRouter.get('/:id', authenticate, async (req, res) => {
  const { id } = req.params;

  const activity = await prisma.activity.findUnique({
    where: { id },
  });

  if (!activity) {
    return res.status(404).json({
      error: 'NOT_FOUND',
      message: 'Activity not found',
    });
  }

  res.json(activity);
});
