import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from './errorHandler';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: 'STUDENT' | 'TEACHER' | 'ADMIN';
  };
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    throw new UnauthorizedError('Missing or invalid authorization header');
  }

  const token = authHeader.slice(7);

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      role: 'STUDENT' | 'TEACHER' | 'ADMIN';
    };
    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthorizedError('Invalid or expired token');
  }
};

export const requireRole = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new UnauthorizedError('Insufficient permissions');
    }
    next();
  };
};

export const generateToken = (payload: {
  id: string;
  email: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
}): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

export const generateRefreshToken = (payload: {
  id: string;
}): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE || '30d',
  });
};
