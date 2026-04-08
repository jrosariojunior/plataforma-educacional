# 📡 API Reference

Base URL (Development): `http://localhost:3001`
Base URL (Production): `https://api.plataforma-educacional.com`

## 🔐 Autenticação

Todos os endpoints protegidos requerem header:
```
Authorization: Bearer {jwt_token}
```

### POST /auth/register

Registra novo estudante ou professor.

**Request:**
```json
{
  "email": "aluno@escola.com",
  "password": "senha_segura_123",
  "name": "João Silva",
  "role": "student" | "teacher",
  "grade": 6
}
```

**Response (201):**
```json
{
  "id": "uuid-1234",
  "email": "aluno@escola.com",
  "name": "João Silva",
  "role": "student",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### POST /auth/login

Faz login com email/password.

**Request:**
```json
{
  "email": "aluno@escola.com",
  "password": "senha_segura_123"
}
```

**Response (200):**
```json
{
  "id": "uuid-1234",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 604800
}
```

### POST /auth/refresh

Renova access token usando refresh token.

**Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 604800
}
```

---

## 📚 Atividades

### GET /activities

Lista atividades disponíveis filtradas por nível.

**Query Params:**
- `grade` (int) - Série (ex: 6)
- `topic` (string) - Tópico (ex: "divisao-decimal")
- `limit` (int) - Paginação (default: 20)
- `offset` (int) - Paginação (default: 0)

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-activity-1",
      "title": "Divisão Decimal Básica",
      "topic": "divisao-decimal",
      "grade": 6,
      "description": "Aprenda os fundamentos...",
      "estimatedDuration": 15,
      "difficulty": "beginner",
      "createdAt": "2026-04-07T10:00:00Z"
    }
  ],
  "total": 15,
  "page": 1
}
```

### GET /activities/:id

Obtém detalhes completos de uma atividade.

**Response (200):**
```json
{
  "id": "uuid-activity-1",
  "title": "Divisão Decimal Básica",
  "topic": "divisao-decimal",
  "grade": 6,
  "description": "Aprenda os fundamentos...",
  "estimatedDuration": 15,
  "difficulty": "beginner",
  "schema": {
    "questions": [
      {
        "id": "q1",
        "type": "multiple-choice",
        "question": "Quanto é 1,5 ÷ 3?",
        "options": ["0,5", "0,3", "1,5", "3,0"],
        "correctAnswer": "0",
        "misconceptions": ["ALIGN_DECIMALS", "IGNORE_COMMA"]
      }
    ]
  },
  "createdAt": "2026-04-07T10:00:00Z"
}
```

---

## 🎯 Sessões de Atividade

### POST /sessions

Inicia nova sessão de atividade.

**Request:**
```json
{
  "activityId": "uuid-activity-1"
}
```

**Response (201):**
```json
{
  "id": "uuid-session-1",
  "activityId": "uuid-activity-1",
  "studentId": "uuid-student-1",
  "status": "in_progress",
  "currentQuestion": 0,
  "totalQuestions": 5,
  "startedAt": "2026-04-07T15:30:00Z",
  "canRetry": false,
  "nextRetryAt": "2026-04-08T15:30:00Z"
}
```

**Erro (429):**
```json
{
  "error": "SESSION_LOCKED",
  "message": "Você já completou uma sessão hoje. Volte amanhã!",
  "nextAvailableAt": "2026-04-08T15:30:00Z"
}
```

### GET /sessions/:id

Obtém status atual da sessão.

**Response (200):**
```json
{
  "id": "uuid-session-1",
  "activityId": "uuid-activity-1",
  "status": "in_progress",
  "currentQuestion": {
    "id": "q1",
    "question": "Quanto é 1,5 ÷ 3?",
    "type": "multiple-choice",
    "options": ["0,5", "0,3", "1,5", "3,0"]
  },
  "progress": {
    "current": 1,
    "total": 5
  }
}
```

### POST /sessions/:id/submit

Submete resposta para questão atual.

**Request:**
```json
{
  "answer": "0",
  "responseTime": 45000
}
```

**Response (200):**
```json
{
  "isCorrect": true,
  "feedback": "Correto! 1,5 ÷ 3 = 0,5",
  "explanation": "Quando dividimos 1,5 por 3...",
  "misconception": null,
  "nextQuestion": {
    "id": "q2",
    "question": "Quanto é 2,4 ÷ 6?",
    "type": "multiple-choice",
    "options": ["0,4", "0,2", "0,6", "2,4"]
  },
  "progress": {
    "current": 2,
    "total": 5
  }
}
```

**Resposta Incorreta:**
```json
{
  "isCorrect": false,
  "feedback": "Não é essa resposta.",
  "scaffolding": {
    "level": 1,
    "hint": "Tente alinhar as casas decimais..."
  },
  "misconception": {
    "id": "ALIGN_DECIMALS",
    "title": "Desalinhamento de Casas Decimais",
    "count": 1
  },
  "remainingAttempts": 2,
  "nextQuestion": null
}
```

### POST /sessions/:id/complete

Finaliza sessão prematuramente (opcional).

**Response (200):**
```json
{
  "sessionId": "uuid-session-1",
  "completed": true,
  "score": 4,
  "total": 5,
  "correctRate": 0.8,
  "timeSpent": 240000,
  "misconceptionsIdentified": ["ALIGN_DECIMALS"],
  "consolidationStatus": {
    "ALIGN_DECIMALS": {
      "errors": 1,
      "progressTo24h": false,
      "progressTo3correct": false
    }
  }
}
```

---

## 👤 Perfil do Estudante

### GET /students/me

Obtém perfil do estudante autenticado.

**Response (200):**
```json
{
  "id": "uuid-student-1",
  "name": "João Silva",
  "email": "joao@escola.com",
  "grade": 6,
  "joinedAt": "2026-03-15T10:00:00Z",
  "profile": {
    "sessionsCompleted": 12,
    "activitiesCompleted": 3,
    "totalTimeSpent": 3600000,
    "lastSessionAt": "2026-04-07T15:30:00Z",
    "misconceptions": [
      {
        "id": "ALIGN_DECIMALS",
        "title": "Desalinhamento de Casas Decimais",
        "errors": 2,
        "status": "in_progress",
        "lastOccurrence": "2026-04-06T14:20:00Z",
        "consolidationDays": 0,
        "consolidationCorrect": 1
      }
    ],
    "consolidated": [
      {
        "id": "IGNORE_OPERATION",
        "title": "Ignorar Operação",
        "consolidatedAt": "2026-03-20T10:00:00Z"
      }
    ]
  }
}
```

### GET /students/:id/history

Obtém histórico imutável (professor apenas).

**Query Params:**
- `limit` (int) - Default: 50
- `offset` (int) - Default: 0

**Response (200):**
```json
{
  "studentId": "uuid-student-1",
  "history": [
    {
      "sessionId": "uuid-session-1",
      "activityId": "uuid-activity-1",
      "timestamp": "2026-04-07T15:30:00Z",
      "submissions": [
        {
          "questionId": "q1",
          "answer": "0",
          "isCorrect": true,
          "responseTime": 45000,
          "misconceptionDetected": null
        }
      ],
      "completed": true
    }
  ],
  "total": 156,
  "page": 1
}
```

### POST /students/:id/reset-profile

Reset do perfil (professor apenas, auditado).

**Request:**
```json
{
  "reason": "Reavaliação após recuperação"
}
```

**Response (200):**
```json
{
  "studentId": "uuid-student-1",
  "resetAt": "2026-04-07T16:00:00Z",
  "resetBy": "prof-uuid",
  "reason": "Reavaliação após recuperação",
  "historyPreserved": true,
  "profileCleared": true
}
```

---

## 👨‍🏫 Portal Professor

### GET /teachers/classes

Lista turmas do professor.

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-class-1",
      "name": "6º A",
      "grade": 6,
      "studentCount": 28,
      "createdAt": "2026-02-01T10:00:00Z"
    }
  ]
}
```

### GET /teachers/classes/:id/analytics

Análise da turma.

**Query Params:**
- `from` (date) - Data inicial (YYYY-MM-DD)
- `to` (date) - Data final (YYYY-MM-DD)

**Response (200):**
```json
{
  "classId": "uuid-class-1",
  "period": {
    "from": "2026-04-01",
    "to": "2026-04-07"
  },
  "summary": {
    "totalStudents": 28,
    "activeStudents": 24,
    "inactiveStudents": 4,
    "averageSessionsPerStudent": 4.2,
    "averageAccuracyRate": 0.76
  },
  "misconceptions": [
    {
      "id": "ALIGN_DECIMALS",
      "title": "Desalinhamento de Casas Decimais",
      "affectedStudents": 8,
      "totalOccurrences": 23,
      "consolidated": 5,
      "inProgress": 3
    }
  ],
  "studentRisk": [
    {
      "studentId": "uuid-student-5",
      "name": "Maria Santos",
      "riskLevel": "high",
      "lastSession": "2026-03-28",
      "daysSinceActivity": 10,
      "misconceptionsOpen": 3
    }
  ]
}
```

### POST /teachers/classes/:classId/invite

Gera link de convite para alunos.

**Request:**
```json
{
  "expiresIn": 7
}
```

**Response (201):**
```json
{
  "inviteCode": "ABX7K2M9",
  "inviteUrl": "https://plataforma-educacional.com/join/ABX7K2M9",
  "expiresAt": "2026-04-14T16:00:00Z",
  "maxUses": null
}
```

---

## ❌ Códigos de Erro

| Código | Status | Descrição |
|--------|--------|-----------|
| INVALID_CREDENTIALS | 401 | Email/senha incorretos |
| TOKEN_EXPIRED | 401 | JWT expirado |
| UNAUTHORIZED | 403 | Sem permissão |
| SESSION_LOCKED | 429 | Sessão já realizada hoje |
| NOT_FOUND | 404 | Recurso não existe |
| VALIDATION_ERROR | 400 | Dados inválidos |
| INTERNAL_ERROR | 500 | Erro no servidor |

**Resposta de Erro Padrão:**
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Descrição legível do erro",
  "details": {
    "field": "error_detail"
  }
}
```

---

## 🔄 Rate Limiting

- `X-RateLimit-Limit: 1000`
- `X-RateLimit-Remaining: 999`
- `X-RateLimit-Reset: 1617897600`

Limite: 1000 requisições por hora por IP

---

## 📊 Webhooks

### POST /webhooks/session-completed

Webhook enviado quando sessão é completada.

**Payload:**
```json
{
  "event": "session.completed",
  "timestamp": "2026-04-07T15:30:00Z",
  "data": {
    "sessionId": "uuid-session-1",
    "studentId": "uuid-student-1",
    "activityId": "uuid-activity-1",
    "score": 4,
    "total": 5,
    "misconceptionsIdentified": ["ALIGN_DECIMALS"]
  }
}
```

