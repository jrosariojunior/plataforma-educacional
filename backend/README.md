# Backend - Plataforma Educacional

Node.js + Express + TypeScript + Prisma

## Estrutura

```
backend/
├── src/
│   ├── main.ts                    # Entry point
│   ├── middleware/
│   │   ├── auth.ts               # JWT authentication
│   │   └── errorHandler.ts       # Error handling
│   ├── routes/
│   │   ├── auth.ts              # Login/register endpoints
│   │   ├── activities.ts        # List/get activities
│   │   ├── sessions.ts          # Start/submit/complete sessions
│   │   ├── students.ts          # Student profile, history, reset
│   │   └── teachers.ts          # Teacher classes, analytics
│   ├── services/                # Business logic (TODO)
│   ├── db/
│   │   └── seed.ts             # Database seeding
│   └── utils/                   # Helpers (TODO)
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
├── tests/                       # Jest test files (TODO)
├── .env.example                 # Environment variables template
├── tsconfig.json               # TypeScript config
├── package.json
├── .eslintrc.json              # Linting rules
└── .prettierrc.json            # Code formatting
```

## Quick Start

```bash
cd backend

# Install dependencies
npm ci

# Setup environment
cp .env.example .env
# Edit .env with your values

# Setup database
npm run db:migrate
npm run db:seed

# Start development
npm run dev
```

## Available Commands

```bash
npm run dev          # Development with hot reload
npm run build        # TypeScript build
npm run start        # Run compiled version
npm run lint         # ESLint check
npm run format       # Prettier format
npm run type-check   # TypeScript check without emit
npm run test         # Run tests
npm run test:cov     # Coverage report

# Database
npm run db:migrate   # Run migrations
npm run db:dev       # Create new migration
npm run db:reset     # Reset database (⚠️ deletes data)
npm run db:seed      # Seed with test data
npm run db:studio    # Open Prisma Studio UI
```

## API Endpoints

See [../API.md](../API.md) for complete API reference.

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token

### Activities
- `GET /api/activities` - List activities
- `GET /api/activities/:id` - Get activity detail

### Sessions
- `POST /api/sessions` - Start new session
- `GET /api/sessions/:id` - Get session status
- `POST /api/sessions/:id/submit` - Submit answer
- `POST /api/sessions/:id/complete` - Complete session

### Students
- `GET /api/students/me` - Get my profile
- `GET /api/students/:id/history` - Get student history (teacher only)
- `POST /api/students/:id/reset-profile` - Reset profile (teacher only)

### Teachers
- `GET /api/teachers/classes` - List my classes
- `GET /api/teachers/classes/:id/analytics` - Class analytics
- `POST /api/teachers/classes/:id/invite` - Generate invite

## Database Schema

See [prisma/schema.prisma](./prisma/schema.prisma) for full schema.

### Core Models
- **User** - Student/teacher accounts
- **Student** - Student profile + immutable history
- **Activity** - Questions and exercises
- **Session** - Student activity attempt
- **Submission** - Individual answer record
- **Misconception** - Common errors taxonomy

## Environment Variables

```bash
DATABASE_URL=postgresql://...     # PostgreSQL connection
REDIS_URL=redis://...             # Redis cache
JWT_SECRET=your-secret-key        # JWT signing key
NODE_ENV=development              # development | production
PORT=3001                         # Server port
FRONTEND_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173
```

## Error Handling

All errors follow this structure:

```json
{
  "error": "ERROR_CODE",
  "message": "Human readable message",
  "details": { "field": "error" }
}
```

Common codes:
- `VALIDATION_ERROR` (400)
- `UNAUTHORIZED` (401)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `CONFLICT` (409)
- `SESSION_LOCKED` (429)
- `INTERNAL_ERROR` (500)

## Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:cov
```

## Deployment

See [../DEPLOY.md](../DEPLOY.md) for production deployment.

Deploy to **Railway** with:
```bash
railway link <project-id>
railway up
```

