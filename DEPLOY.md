# 🌐 Guia de Deploy

## Visão Geral

A plataforma usa **Vercel** para frontend (Next.js/Vite) e **Railway** para backend (Node.js + PostgreSQL).

```
┌─────────────────────┐         ┌──────────────────┐
│   seu-repo.git      │──────▶  │  GitHub Actions  │
│  (main branch)      │         │  (CI/CD Pipeline)│
└─────────────────────┘         └─────────┬────────┘
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
                    ▼                     ▼                     ▼
              ┌──────────┐          ┌──────────┐         ┌──────────┐
              │  Vercel  │          │ Railway  │         │  Codecov │
              │Frontend  │          │Backend + │         │Coverage  │
              │ (Edge)   │          │Database  │         │Reports   │
              └──────────┘          └──────────┘         └──────────┘
```

## Stage 1: Preparar Contas Externas

### ✅ Railway.app Setup

1. Acesse https://railway.app
2. Faça login/registre com GitHub
3. Crie novo projeto: `plataforma-educacional`
4. Adicione PostgreSQL service
   - Configurar backup automático (weekly)
   - Habilitar SSL connection
5. Gere Railway API token
   - Settings → Account → API tokens
   - Salve como `RAILWAY_TOKEN`

### ✅ Vercel Setup

1. Acesse https://vercel.com
2. Faça login/registre com GitHub
3. Importe repositório
4. Configure:
   - **Project Name:** plataforma-educacional
   - **Root Directory:** frontend
   - **Node Version:** 18.x
5. Na seção Environment Variables, adicione:
   - `VITE_API_URL` (apontará para Railway backend)
6. Anote:
   - `VERCEL_PROJECT_ID` (Settings → General)
   - `VERCEL_ORG_ID` (Settings → Integrations)

### ✅ Codecov Setup

1. Acesse https://codecov.io
2. Conecte com GitHub
3. Selecione repositório
4. Token gerado automaticamente
5. (Já está no .github/workflows/backend.yml e frontend.yml)

## Stage 2: GitHub Secrets

Adicione secrets no repositório GitHub:
```
Settings → Secrets and Variables → Actions → New Repository Secret
```

### Backend Secrets

```
RAILWAY_TOKEN=<seu_token_railway>
RAILWAY_PROJECT_ID=<seu_project_id_railway>
```

### Frontend Secrets

```
VERCEL_TOKEN=<seu_vercel_token>
VERCEL_ORG_ID=<seu_org_id>
VERCEL_PROJECT_ID=<seu_project_id>
```

**Como gerar Vercel Token:**
1. Acesse https://vercel.com/account/tokens
2. Create new token
3. Copie o valor

## Stage 3: Variáveis de Ambiente Produção

### Backend (Railway)

Configurar na console do Railway:

```bash
# Database
DATABASE_URL=postgresql://postgres:...@...railway.app:5432/railway

# JWT
JWT_SECRET=<gerar_novo_com_openssl>
JWT_EXPIRE=7d
REFRESH_TOKEN_EXPIRE=30d

# Server
NODE_ENV=production
PORT=3001
LOG_LEVEL=info

# Frontend
FRONTEND_URL=https://seu-app.vercel.app

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=<app_password>
SMTP_FROM=noreply@plataforma-educacional.com

# Security
CORS_ORIGIN=https://seu-app.vercel.app

# Monitoring (opcional)
SENTRY_DSN=https://seu-sentry-key@sentry.io/...
```

### Frontend (Vercel)

Configurar em Vercel Dashboard → Settings → Environment Variables:

```bash
# API
VITE_API_URL=https://seu-backend-railway.up.railway.app

# App
VITE_APP_NAME=Plataforma Educacional
VITE_ENV=production

# Monitoring (opcional)
VITE_SENTRY_DSN=https://seu-sentry-key@sentry.io/...
```

## Stage 4: Deploy Inicial

### Backend (Railway)

```bash
# 1. Instale Railway CLI
npm install -g @railway/cli

# 2. Faça login
railway login

# 3. Conecte ao projeto
railway link <seu_project_id>

# 4. Deploy
railway up

# 5. Verifique
railway open
# Acesse Logs para confirmar startup sem erros
```

### Database Migration (Railway)

```bash
# Executar via GitHub Actions (automático no push para main)
# OU manualmente:

# 1. Obtenha DATABASE_URL do Railway
railway shell
echo $DATABASE_URL

# 2. Migrate localmente apontando para remote DB
DATABASE_URL="postgresql://..." npm run db:migrate

# 3. Verifique no PgAdmin: https://seu-pgadmin.railway.app
```

### Frontend (Vercel)

```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Deploy (automático ao push para main, mas para testar:)
vercel --prod

# 3. Confirme deployment
vercel open
```

## Stage 5: Monitorar Primeira Deploy

### Checklist Pós-Deploy

```bash
# 1. Health Checks
curl https://seu-backend-railway.up.railway.app/health
# Esperado: { "status": "ok" }

curl https://seu-app.vercel.app
# Esperado: página HTML do app

# 2. Verificar Logs
# Backend: Railway Dashboard → Logs
# Frontend: Vercel Dashboard → Deployments → Logs

# 3. Testar API
curl -X GET https://seu-backend-railway.up.railway.app/activities \
  -H "Authorization: Bearer your_test_token"

# 4. Verificar Database
# PgAdmin: https://seu-pgadmin.railway.app
# Verificar: tables exist, migrations applied

# 5. SSL/HTTPS
# Vercel: automático
# Railway: verificar em Railway Dashboard
```

## Troubleshooting Deploy

### Railway não consegue conectar ao banco

```bash
# Verificar variável DATABASE_URL
railway env

# Revisar Network access
# Railway Dashboard → PostgreSQL → Info → Connection Pooling
# Habilitar public network (com cuidado em prod)
```

### Vercel não consegue conectar ao backend

```bash
# Verificar VITE_API_URL
vercel env ls

# Testar conectividade
curl https://seu-backend-railway.up.railway.app/health

# Verificar CORS no backend
# Adicionar frontend URL em CORS_ORIGIN
```

### Migrations não rodaram

```bash
# Manualmente no Railway shell
railway shell
cd /app/backend
npm run db:migrate

# Ou via GitHub Actions
# Verificar Actions tab → veja logs de "Run migrations"
```

### Build falha no GitHub Actions

```bash
# Verificar logs
GitHub → Actions → failing workflow → step com erro

# Comum:
# - NODE_VERSION mismatch
# - npm ci falhando (lock file desatualizado)
# - type-check/lint errors

# Solucionar localmente:
npm ci
npm run lint
npm run type-check
npm run build

# Commit fix
git push origin feature-branch
```

## Stage 6: Configurar CD (Continuous Deployment)

### Fluxo Automático

Quando você faz `git push` para `main`:

1. **GitHub Actions** roda CI/CD pipeline:
   - Checkout code
   - Install dependencies
   - Lint + Type-check
   - Run tests
   - Build

2. **Se tudo passar:**
   - Backend: Deploy automático para Railway
   - Frontend: Deploy automático para Vercel

3. **Se falhar:**
   - Notificação no GitHub
   - Pipeline para (requer fix)

### Branch Protections (Recomendado)

GitHub → Settings → Branches → Add rule para `main`:

```
✅ Require status checks to pass
   - backend / test
   - backend / lint
   - frontend / test
   - frontend / lint

✅ Require 2 approving reviews

✅ Require branches to be up to date

✅ Include administrators
```

## Stage 7: Monitoramento Contínuo

### Métricas para Monitorar

**Frontend (Vercel):**
- Build time
- Page load time (Core Web Vitals)
- Error rate

**Backend (Railway):**
- CPU usage
- Memory usage
- Database connections
- Error rate (5xx responses)
- Response time p95

**Database:**
- Connection pool utilization
- Slow queries
- Disk usage

### Alertas Recomendados

Configure em Railway Dashboard:

```
⚠️ CPU > 80% por 5 min
⚠️ Memory > 80%
⚠️ Error rate > 5%
⚠️ Response time p95 > 2s
```

### Logs Centralizados (Opcional)

Integrar com:
- Sentry (error tracking)
- Datadog (monitoring)
- LogRocket (frontend analytics)

## Rollback

Se algo quebrou em produção:

```bash
# 1. Revert código
git revert <commit_hash>
git push origin main

# 2. GitHub Actions roda novamente
# 3. Vercel + Railway fazem rollback automático

# 4. Se precisar rollback imediato:
# Vercel: Deployments → older version → Promote
# Railway: Deployments → older version → Restart
```

## Scaling

Quando a plataforma cresce:

```
1. Railway PostgreSQL
   - Upgrade plan para mais CPU/RAM
   - Ativar read replicas para analytics

2. Railway Backend
   - Aumentar replicas (load balancing)
   - Implementar caching com Redis

3. Vercel Frontend
   - Automático (edge network global)
   - Incrementar Edge Middleware para analytics

4. Banco de Dados
   - Monitorar lentidão
   - Adicionar índices (Prisma migrations)
   - Considerar sharding se > 100M registros
```

## Checklist Pre-Production

- [ ] Todos os secrets configurados no GitHub
- [ ] DATABASE_URL apontando para Railway PostgreSQL
- [ ] JWT_SECRET gerado com `openssl rand -base64 32`
- [ ] FRONTEND_URL aponta para Vercel domain
- [ ] CORS_ORIGIN permite apenas frontend domain
- [ ] SSL/HTTPS habilitado em ambas (automático)
- [ ] Backups automáticos habilitados (Railway)
- [ ] Monitoring/alertas configurados
- [ ] Testes passando 100%
- [ ] Code coverage > 80%
- [ ] Zero type errors
- [ ] Zero lint warnings

