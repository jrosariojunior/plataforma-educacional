# 🏗️ Arquitetura do Sistema

## Visão Geral

Plataforma educacional baseada em multiagentes para ensino de divisão decimal para alunos do 6º ano, com foco em adaptatividade pedagógica e histórico imutável.

## 📊 Arquitetura em Camadas

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (React + TypeScript + Tailwind)               │
│  - Interactive Activities                                │
│  - Student Dashboard                                     │
│  - Professor Portal                                      │
└────────────────────────┬────────────────────────────────┘
                         │ REST API / WebSocket
┌────────────────────────▼────────────────────────────────┐
│  Backend (Node.js + Express + TypeScript)               │
│  - Activity Engine                                       │
│  - Feedback Generator                                    │
│  - Analytics & Reporting                                │
└────────────────────────┬────────────────────────────────┘
                         │ Prisma ORM
┌────────────────────────▼────────────────────────────────┐
│  Database (PostgreSQL 15)                               │
│  - Student Profiles (Immutable History)                 │
│  - Activities & Sessions                                │
│  - Misconception Taxonomy                               │
└─────────────────────────────────────────────────────────┘
```

## 🤖 Ecossistema Multiagente

### 10 Agentes Especializados

**Camada de Execução (6):**
1. **Líder** - Orquestra todo o workflow, gerencia prioridades
2. **Mestre do Backlog** - Refinamento contínuo, story grooming
3. **Gestor de Workflow** - Coordena sprints, capacidades de time
4. **Refinement** - Transforma requisitos em tarefas implementáveis
5. **QA** - Testes, validação, relatórios de qualidade
6. **Validator** - Aprovação final, conformidade com requisitos

**Inteligência Estratégica (4):**
7. **Analista de Retenção** - Monitora engajamento, taxa dropout
8. **Curador de Conteúdo** - Atualiza taxonomia de equívocos, recomenda novos materiais
9. **Arquiteto de Evolução** - Planeja expansão para outros tópicos matemáticos
10. **Especialista em Segurança Pedagógica** - Audita qualidade educacional, valida scaffolding

### Protocolo de Comunicação

```
1. Líder recebe nova tarefa
2. Mestre do Backlog refina especificação
3. Gestor de Workflow aloca ao time apropriado
4. Refinement decompõe em subtarefas
5. Time executa em paralelo
6. QA valida
7. Validator aprova
8. Agentes Estratégicos coletam aprendizados
```

## 📚 Modelo Pedagógico

### Ciclo de Consolidação 3/6

- **3 erros consecutivos** = Deficiência identificada
- **3 acertos em 6 sessões** = Consolidação parcial
- **3 dias consecutivos de acertos** = Domínio (erro removido do perfil)

### Bloqueio de Sessão

- 1 sessão por dia (bloqueio 24h)
- Mensagens motivacionais ao tentar acessar
- Reset automático à meia-noite (PT)

### Taxonomia de Equívocos

Classificação em 3 níveis de suporte:

1. **Dica de Tooltip** - Sutil, orienta sem revelar
2. **Scaffolding Pedagógico** - Passo-a-passo estruturado
3. **Tutorial Completo** - Explicação didática com exemplos

## 📦 Stack Tecnológico

**Frontend:**
- React 18 + TypeScript
- Vite (build)
- Tailwind CSS (styling)
- React Query (data fetching)
- Zustand (state management)
- React Router (navigation)

**Backend:**
- Node.js 18
- Express.js
- TypeScript
- Prisma (ORM)
- PostgreSQL 15
- Redis (cache/sessions)
- JWT (authentication)

**DevOps:**
- Docker (local development)
- GitHub Actions (CI/CD)
- Vercel (frontend deployment)
- Railway (backend deployment)

## 🗄️ Modelo de Dados

### Entidades Principais

```
Student
├── id (UUID)
├── email
├── name
├── grade
├── profile (JSON - histórico imutável)
└── createdAt

Activity
├── id (UUID)
├── title
├── topic (e.g., "divisão decimal")
├── ageGroup
├── schema (JSON)
└── createdAt

Session
├── id (UUID)
├── studentId (FK)
├── activityId (FK)
├── submissions (JSON array - imutável)
├── status (in_progress, completed, locked)
└── createdAt

Misconception
├── id (UUID)
├── code (e.g., "ALIGN_DECIMALS")
├── title
├── description
├── level (1-3)
├── scaffolding (JSON)
└── examples (array)
```

### Imutabilidade de Histórico

- Todas as submissões são armazenadas em arrays JSON (append-only)
- Nunca sobrescrever dados históricos
- Professor pode resetar perfil via action explícita (auditada)
- Cada mudança de estado registra timestamp + agente responsável

## 🔄 Fluxos Principais

### Fluxo de Atividade (Aluno)

```
1. Aluno acessa dashboard
2. Verifica bloqueio de sessão (24h)
3. Seleciona atividade (recomendada ou livre)
4. Inicia sessão
5. Responde questão
6. Sistema valida + gera feedback
7. Registra submissão no histórico
8. Próxima questão ou conclusão
```

### Fluxo de Feedback

```
1. Submissão recebida
2. Validar resposta
3. Se incorreta:
   a. Identificar equívoco via taxonomia
   b. Registrar em perfil
   c. Aplicar nível de suporte apropriado
4. Se correta:
   a. Registrar acerto
   b. Checar consolidação (3/6)
   c. Se domínio: remover equívoco
5. Retornar feedback + próxima questão
```

### Fluxo Professor

```
1. Login professor
2. Visualizar turma
3. Análise por aluno:
   - Equívocos em aberto
   - Taxa de consolidação
   - Histórico completo (imutável)
4. Ações:
   - Reset de perfil (auditado)
   - Ajustar recomendações
   - Gerar relatório
```

## 🔐 Segurança

- JWT com expiração 7 dias
- Refresh tokens rotacionados
- HTTPS obrigatório (produção)
- CORS apenas domínios autorizados
- Rate limiting por IP
- Auditoria de alterações no histórico estudantil

## 📊 Monitoramento

**Métricas Críticas:**
- Taxa de conclusão por atividade
- Distribuição de equívocos
- Tempo até consolidação
- Engajamento (sessões/semana)
- Taxa dropout (30 dias sem sessão)

**Dashboards:**
- Líder: KPIs de plataforma
- Professor: Desempenho da turma
- Especialista em Retenção: Tendências de risco
- Curador: Taxonomia de equívocos

## 🚀 Roadmap

**MVP (Fase 1):**
- Divisão decimal (6º ano)
- 1 atividade interativa
- Dashboard estudante básico
- Histórico imutável

**Fase 2:**
- Múltiplas atividades por tópico
- Portal professor avançado
- Relatórios PDF
- Integração LMS

**Fase 3:**
- Expansão para álgebra (7º-8º anos)
- Gamificação (badges)
- Análise preditiva de risco
- Recomendação adaptativa automática

## 📄 Decisões Arquiteturais

| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| Banco de dados | PostgreSQL | ACID compliance para histórico imutável, suporte JSON |
| Frontend framework | React | Ecossistema maduro, reatividade, comunidade grande |
| Linguagem | TypeScript | Type safety reduz bugs educacionais críticos |
| ORM | Prisma | Migrations versionadas, integração DB fácil |
| Deploy Frontend | Vercel | Zero-config, preview deployments, edge functions |
| Deploy Backend | Railway | Suporte PostgreSQL nativo, envvar simples |
| State management | Zustand | Simples para app educacional, sem boilerplate |

