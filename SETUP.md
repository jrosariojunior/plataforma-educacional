# 🚀 Guia de Setup Local

## Pré-requisitos

- **Node.js 18+** ([Download](https://nodejs.org/))
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop)) - Para PostgreSQL e Redis
- **Git** ([Download](https://git-scm.com/))
- **VS Code** (recomendado) com extensões:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Thunder Client (ou Postman)

## 1️⃣ Clone e Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/plataforma-educacional.git
cd plataforma-educacional

# Instale dependências do root (se houver)
npm install

# Configure git hooks (pre-commit, pre-push)
npm run prepare
```

## 2️⃣ Inicie Banco de Dados

```bash
# Inicie PostgreSQL, Redis, PgAdmin via Docker
docker-compose up -d

# Verifique status
docker ps
```

**Credenciais padrão:**
- **PostgreSQL**
  - Host: localhost
  - Port: 5432
  - User: postgres
  - Password: postgres
  - Database: plataforma_dev

- **Redis**
  - Host: localhost
  - Port: 6379

- **PgAdmin**
  - URL: http://localhost:5050
  - Email: admin@example.com
  - Password: admin

## 3️⃣ Backend Setup

```bash
cd backend

# Instale dependências
npm ci

# Configure arquivo .env
cp .env.example .env

# Edite .env com suas configurações
# DATABASE_URL=postgresql://postgres:postgres@localhost:5432/plataforma_dev
# REDIS_URL=redis://localhost:6379
# JWT_SECRET=seu_secret_aqui (gere com: openssl rand -base64 32)
# NODE_ENV=development
# PORT=3001

# Execute migrações do banco
npm run db:migrate

# (Opcional) Seed database com dados de teste
npm run db:seed

# Inicie servidor
npm run dev
```

**Verificar Backend:**
```bash
curl http://localhost:3001/health
# Response: { "status": "ok" }
```

## 4️⃣ Frontend Setup

```bash
cd frontend

# Instale dependências
npm ci

# Configure arquivo .env
cp .env.example .env

# Edite .env
# VITE_API_URL=http://localhost:3001
# VITE_APP_NAME=Plataforma Educacional

# Inicie dev server
npm run dev
```

**Verificar Frontend:**
- Abra http://localhost:5173 no navegador

## 5️⃣ Estrutura de Pastas

```
plataforma-educacional/
├── backend/
│   ├── src/
│   │   ├── routes/           # Endpoints da API
│   │   ├── controllers/      # Lógica de negócio
│   │   ├── services/         # Serviços (auth, activity, feedback)
│   │   ├── models/           # Prisma schema
│   │   ├── middleware/       # Auth, logging, error handling
│   │   ├── utils/            # Helpers e utilities
│   │   └── main.ts           # Entry point
│   ├── migrations/           # Prisma migrations
│   ├── tests/                # Jest tests
│   ├── .env.example          # Template de env
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # React components (Button, Card, etc)
│   │   ├── pages/            # Page components (Dashboard, Activity, etc)
│   │   ├── hooks/            # React hooks (useAuth, useActivity, etc)
│   │   ├── stores/           # Zustand stores (auth, activity, ui)
│   │   ├── services/         # API clients
│   │   ├── styles/           # Global styles, Tailwind config
│   │   ├── types/            # TypeScript types/interfaces
│   │   ├── utils/            # Helpers
│   │   ├── App.tsx           # Root component
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static assets
│   ├── .env.example
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
├── .github/
│   ├── workflows/            # CI/CD pipelines
│   └── ISSUE_TEMPLATE/       # Issue templates
│
├── docker-compose.yml        # Local dev environment
├── .gitignore
├── ARCHITECTURE.md           # Descrição arquitetura
├── API.md                    # API reference
├── README.md                 # Visão geral projeto
└── SETUP.md                  # Este arquivo
```

## 6️⃣ Variáveis de Ambiente

### Backend (.env)

```bash
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/plataforma_dev

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=gere-com-openssl-rand-base64-32
JWT_EXPIRE=7d
REFRESH_TOKEN_EXPIRE=30d

# Server
NODE_ENV=development
PORT=3001
LOG_LEVEL=debug

# Frontend
FRONTEND_URL=http://localhost:5173

# Email (para notificações)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-app
SMTP_FROM=noreply@plataforma-educacional.com

# Analytics (opcional)
SENTRY_DSN=https://sua-chave-sentry
```

### Frontend (.env)

```bash
# API
VITE_API_URL=http://localhost:3001

# App
VITE_APP_NAME=Plataforma Educacional
VITE_ENV=development

# Analytics (opcional)
VITE_SENTRY_DSN=https://sua-chave-sentry
```

## 7️⃣ Comandos Comuns

### Backend

```bash
cd backend

# Desenvolvimento
npm run dev          # Inicia com hot reload
npm run build        # Build para produção
npm run start        # Inicia versão compilada

# Database
npm run db:migrate   # Executa migrações pendentes
npm run db:reset     # Reseta banco (CUIDADO!)
npm run db:seed      # Popula com dados teste
npm run db:studio    # Abre Prisma Studio (UI do banco)

# Testes
npm run test         # Roda testes
npm run test:watch   # Testes com hot reload
npm run test:cov     # Coverage report

# Qualidade
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

### Frontend

```bash
cd frontend

# Desenvolvimento
npm run dev          # Inicia com hot reload
npm run build        # Build otimizado
npm run preview      # Preview da build

# Testes
npm run test         # Vitest
npm run test:ui      # UI test explorer
npm run test:cov     # Coverage report

# Qualidade
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

## 8️⃣ Troubleshooting

### Porta 5432 (PostgreSQL) já em uso

```bash
# Matando processo na porta
lsof -i :5432
kill -9 <PID>

# Ou usar porta diferente no docker-compose.yml
```

### Erro ao conectar no banco

```bash
# Verificar se Docker está rodando
docker ps

# Reiniciar containers
docker-compose restart

# Ver logs
docker-compose logs postgres
```

### Erro ao instalar dependências

```bash
# Limpar cache npm
npm cache clean --force

# Deletar node_modules e package-lock
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Port 5173 (Frontend) já em uso

```bash
# Matar processo
lsof -i :5173
kill -9 <PID>

# Ou especificar porta diferente
npm run dev -- --port 3000
```

### JWT_SECRET não definido

```bash
# Gerar secret seguro
openssl rand -base64 32

# Adicionar ao .env
JWT_SECRET=seu_secret_gerado_aqui
```

## 9️⃣ Git Workflow

```bash
# Criar branch para feature/fix
git checkout -b feature/nome-descritivo

# Fazer commits atomicamente
git commit -m "tipo(escopo): descrição"
# Exemplos:
# feat(auth): implementar login com JWT
# fix(activity): corrigir cálculo de feedback
# docs(api): atualizar documentação de endpoints

# Push para origem
git push origin feature/nome-descritivo

# Abrir Pull Request no GitHub
# Aguardar CI/CD passar (testes, lint, build)
# Solicitar review de 2 approvers
# Merge quando aprovado
```

## 🔟 Próximos Passos

1. ✅ Setup local completo
2. 🔄 Execute testes: `npm run test` em ambos os diretórios
3. 📚 Leia [ARCHITECTURE.md](ARCHITECTURE.md) para entender o design
4. 🚀 Leia [DEPLOY.md](DEPLOY.md) para preparar produção
5. 👀 Veja [API.md](API.md) para spec dos endpoints

