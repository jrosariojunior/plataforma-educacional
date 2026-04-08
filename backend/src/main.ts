import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import dotenv from 'dotenv';

import { errorHandler } from './middleware/errorHandler';
import { authRouter } from './routes/auth';
import { activitiesRouter } from './routes/activities';
import { sessionsRouter } from './routes/sessions';
import { studentsRouter } from './routes/students';
import { teachersRouter } from './routes/teachers';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ==================== MIDDLEWARE ====================

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== ROUTES ====================

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'NOT_FOUND',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// ==================== ERROR HANDLER ====================

app.use(errorHandler);

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 API docs: http://localhost:${PORT}/api`);
});
