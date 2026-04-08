import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export const errorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const code = error.code || 'INTERNAL_ERROR';
  const message = error.message || 'Internal server error';

  console.error(`[${code}]`, message, error);

  res.status(status).json({
    error: code,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};

export class ValidationError extends Error implements AppError {
  status = 400;
  code = 'VALIDATION_ERROR';
  details: Record<string, string>;

  constructor(message: string, details: Record<string, string> = {}) {
    super(message);
    this.details = details;
  }
}

export class UnauthorizedError extends Error implements AppError {
  status = 401;
  code = 'UNAUTHORIZED';

  constructor(message = 'Unauthorized') {
    super(message);
  }
}

export class ForbiddenError extends Error implements AppError {
  status = 403;
  code = 'FORBIDDEN';

  constructor(message = 'Forbidden') {
    super(message);
  }
}

export class NotFoundError extends Error implements AppError {
  status = 404;
  code = 'NOT_FOUND';

  constructor(message = 'Not found') {
    super(message);
  }
}

export class ConflictError extends Error implements AppError {
  status = 409;
  code = 'CONFLICT';

  constructor(message = 'Conflict') {
    super(message);
  }
}

export class RateLimitError extends Error implements AppError {
  status = 429;
  code = 'RATE_LIMIT';

  constructor(message = 'Too many requests', public retryAfter?: number) {
    super(message);
  }
}
