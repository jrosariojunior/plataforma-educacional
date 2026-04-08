import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken, generateRefreshToken } from '../middleware/auth';
import { ValidationError, ConflictError } from '../middleware/errorHandler';

const prisma = new PrismaClient();
export const authRouter = Router();

// Validation schemas
const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(['STUDENT', 'TEACHER']),
  grade: z.number().int().optional(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// ==================== POST /auth/register ====================

authRouter.post('/register', async (req, res) => {
  const body = RegisterSchema.parse(req.body);

  // Check if user exists
  const existing = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existing) {
    throw new ConflictError('Email already registered');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hashedPassword,
      name: body.name,
      role: body.role,
      grade: body.grade,
    },
  });

  // Create student/teacher record
  if (body.role === 'STUDENT') {
    await prisma.student.create({
      data: { userId: user.id },
    });
  } else if (body.role === 'TEACHER') {
    await prisma.teacher.create({
      data: { userId: user.id },
    });
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role as 'STUDENT' | 'TEACHER' | 'ADMIN',
  });

  const refreshToken = generateRefreshToken({ id: user.id });

  res.status(201).json({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    token,
    refreshToken,
    expiresIn: 604800, // 7 days in seconds
  });
});

// ==================== POST /auth/login ====================

authRouter.post('/login', async (req, res) => {
  const body = LoginSchema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user || !(await bcrypt.compare(body.password, user.password))) {
    throw new ValidationError('Invalid email or password');
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role as 'STUDENT' | 'TEACHER' | 'ADMIN',
  });

  const refreshToken = generateRefreshToken({ id: user.id });

  res.json({
    id: user.id,
    email: user.email,
    token,
    refreshToken,
    expiresIn: 604800,
  });
});

// ==================== POST /auth/refresh ====================

authRouter.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    throw new ValidationError('Refresh token required');
  }

  // In production, you'd decode and validate the refresh token
  // For now, we'll just regenerate
  const token = generateToken({
    id: 'user-id',
    email: 'user@example.com',
    role: 'STUDENT',
  });

  res.json({
    token,
    expiresIn: 604800,
  });
});
