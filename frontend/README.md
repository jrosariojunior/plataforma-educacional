# Frontend - Plataforma Educacional

React + Vite + TypeScript + Tailwind CSS

## Estrutura

```
frontend/
├── src/
│   ├── main.tsx                 # Entry point
│   ├── App.tsx                  # Root router component
│   ├── components/              # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Alert.tsx
│   │   ├── Modal.tsx
│   │   └── Badge.tsx
│   ├── pages/                   # Page components
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── ActivityPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/                   # Custom React hooks (TODO)
│   │   ├── useAuth.ts
│   │   ├── useActivity.ts
│   │   └── useDebounce.ts
│   ├── stores/                  # Zustand state management
│   │   ├── auth.ts
│   │   └── activity.ts
│   ├── services/                # API clients
│   │   └── api.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── styles/                  # Global and component styles
│   │   └── globals.css
│   └── utils/                   # Helper functions (TODO)
│       └── helpers.ts
├── public/                      # Static assets
├── index.html                   # HTML entry point
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── .env.example                # Environment template
├── .eslintrc.json              # Linting rules
└── .prettierrc.json            # Code formatting
```

## Quick Start

```bash
cd frontend

# Install dependencies
npm ci

# Setup environment
cp .env.example .env
# Edit .env - set VITE_API_URL to your backend

# Start development
npm run dev
```

## Available Commands

```bash
npm run dev          # Development with hot reload
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run format       # Prettier format
npm run type-check   # TypeScript check
npm run test         # Run tests
npm run test:ui      # Test UI explorer
npm run test:cov     # Coverage report
```

## Pages

### LoginPage (`/login`)
- User registration and login
- Role selection (STUDENT/TEACHER)
- Form validation

### DashboardPage (`/`)
- User greeting
- List of available activities
- Quick start buttons
- Activity filtering by grade

### ActivityPage (`/activity/:id`)
- Display questions
- Answer submission
- Feedback display
- Progress tracking

## State Management

Uses **Zustand** for lightweight state:

### `useAuthStore`
- `user` - Current logged-in user
- `token` - JWT token
- `loginSuccess()` - Update state after login
- `logout()` - Clear auth state

### `useActivityStore`
- `currentSession` - Active session
- `currentQuestionIndex` - Current question
- `getCurrentQuestion()` - Get active question
- `goToNextQuestion()` - Navigate questions

## API Client

Axios-based with automatic token injection:

```typescript
import { authService, activitiesService, sessionsService } from './services/api';

// Login
const response = await authService.login(email, password);

// List activities
const activities = await activitiesService.list({ grade: 6 });

// Start session
const session = await sessionsService.create(activityId);
```

See [../API.md](../API.md) for complete API reference.

## Styling

**Tailwind CSS** utility-first CSS framework:

- Colors defined in `tailwind.config.js`
- Global styles in `src/styles/globals.css`
- Component-specific styles inline with Tailwind classes

Example:
```tsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
  Click me
</button>
```

## Environment Variables

```bash
VITE_API_URL=http://localhost:3001     # Backend API URL
VITE_APP_NAME=Plataforma Educacional   # App name
VITE_ENV=development                   # Environment
```

## TypeScript Types

All types defined in `src/types/index.ts`:
- User, Activity, Session, Submission
- StudentProfile, Misconception
- API responses

## Deployment

See [../DEPLOY.md](../DEPLOY.md) for production deployment.

Deploy to **Vercel** with:
```bash
vercel --prod
```

## Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:cov

# UI explorer
npm run test:ui
```

