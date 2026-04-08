// ==================== USER TYPES ====================

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
  grade?: number;
}

export interface AuthResponse {
  id: string;
  email: string;
  name?: string;
  role?: string;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

// ==================== ACTIVITY TYPES ====================

export interface Activity {
  id: string;
  title: string;
  description?: string;
  topic: string;
  grade: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number;
  createdAt: string;
  schema?: ActivitySchema;
}

export interface ActivitySchema {
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'numeric';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  misconceptions?: string[];
}

// ==================== SESSION TYPES ====================

export interface Session {
  id: string;
  activityId: string;
  studentId: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'ABANDONED';
  currentQuestion: number;
  totalQuestions: number;
  submissions: Submission[];
  startedAt: string;
  completedAt?: string;
  canRetry: boolean;
  nextRetryAt?: string;
}

export interface Submission {
  id: string;
  sessionId: string;
  questionId: string;
  answer: string;
  isCorrect: boolean;
  misconceptionId?: string;
  responseTime?: number;
  createdAt: string;
}

export interface SessionResponse {
  isCorrect: boolean;
  feedback: string;
  explanation?: string;
  misconception?: Misconception | null;
  scaffolding?: {
    level: 1 | 2 | 3;
    hint?: string;
    explanation?: string;
    tutorial?: string;
  };
  remainingAttempts?: number;
  nextQuestion?: Question | null;
  progress: {
    current: number;
    total: number;
  };
}

// ==================== MISCONCEPTION TYPES ====================

export interface Misconception {
  id: string;
  code: string;
  title: string;
  description?: string;
  level: 1 | 2 | 3;
  count?: number;
}

// ==================== STUDENT PROFILE TYPES ====================

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  grade: number;
  joinedAt: string;
  profile: {
    sessionsCompleted: number;
    activitiesCompleted: number;
    totalTimeSpent: number;
    lastSessionAt?: string;
    misconceptions: MisconceptionStatus[];
    consolidated: ConsolidatedMisconception[];
  };
}

export interface MisconceptionStatus {
  id: string;
  title: string;
  errors: number;
  status: 'new' | 'in_progress' | 'near_mastery';
  lastOccurrence: string;
  consolidationDays: number;
  consolidationCorrect: number;
}

export interface ConsolidatedMisconception {
  id: string;
  title: string;
  consolidatedAt: string;
}

// ==================== API RESPONSE TYPES ====================

export interface ApiError {
  error: string;
  message: string;
  details?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
}
