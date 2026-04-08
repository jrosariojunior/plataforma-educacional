# 📑 Índice Completo do Projeto

## 🎯 Começar Aqui

1. **[README.md](README.md)** — Visão geral do projeto
2. **[docs/ORQUESTRACAO_AGENTES.md](docs/ORQUESTRACAO_AGENTES.md)** — Guia de uso dos agentes
3. **[agentes/lider/AGENT_Lider_Orquestrador.md](agentes/lider/AGENT_Lider_Orquestrador.md)** — Agente orquestrador

---

## 🧠 Agentes Disponíveis

### Orquestrador Central
- **[Líder Orquestrador](agentes/lider/AGENT_Lider_Orquestrador.md)** — Triagem, distribuição e garantia de qualidade

### Agentes de Sistema (6 skills)
- **[AvaliadorMat](agentes/skills-sistema/SKILL_AvaliadorMat.md)** — Gerador de provas e avaliações ✅ TESTADO
- **[ProblemistaMat](agentes/skills-sistema/SKILL_ProblemistaMat.md)** — Listas de exercícios
- **[SintetiZador](agentes/skills-sistema/SKILL_SintetiZador.md)** — Resumos e sínteses teóricas
- **[DiferenciadoMat](agentes/skills-sistema/SKILL_DiferenciadoMat.md)** — Atividades diferenciadas por nível
- **[InterativoMat](agentes/skills-sistema/SKILL_InterativoMat.md)** — Conteúdo interativo
- **[DesignerMat](agentes/skills-sistema/SKILL_DesignerMat.md)** — Designer de interfaces educativas

### Especialistas por Conteúdo (5 áreas)
- **[Números e Operações](agentes/skills-conteudo/SKILL_NumerosOperacoes.md)** — Aritmética
- **[Álgebra](agentes/skills-conteudo/SKILL_Algebra.md)** — Equações, funções
- **[Geometria](agentes/skills-conteudo/SKILL_Geometria.md)** — Formas, espaço
- **[Grandezas e Medidas](agentes/skills-conteudo/SKILL_GrandezasMedidas.md)** — Medição, conversão
- **[Estatística e Probabilidade](agentes/skills-conteudo/SKILL_EstatisticaProbabilidade.md)** — Dados, variação

---

## 📊 Conteúdo de Referência

### Dados Pedagógicos
- **[conteudo/conteudo1-3.csv](conteudo/conteudo1-3.csv)** — Conteúdo Fundamental I (1º-3º ano)
- **[conteudo/conteudo6-9.csv](conteudo/conteudo6-9.csv)** — Conteúdo Fundamental II (6º-9º ano)
- **[conteudo/conteudo6-9.xlsx](conteudo/conteudo6-9.xlsx)** — Planilha estruturada de conteúdo

### Resultados de Testes
- **[resultados/results.html](resultados/results.html)** — 📊 Relatório interativo (abrir no navegador)
- **[resultados/benchmark.json](resultados/benchmark.json)** — Dados de performance

---

## 📖 Documentação

### Sistema de Agentes
- **[docs/INDICE_Comunicacao_Agentes.md](docs/INDICE_Comunicacao_Agentes.md)** — 🔗 **COMECE AQUI** - Índice do sistema de comunicação
- **[docs/PROTOCOL_Comunicacao_Agentes.md](docs/PROTOCOL_Comunicacao_Agentes.md)** — Protocolo oficial de conversas entre agentes
- **[docs/TEMPLATE_Conversa_Agentes.md](docs/TEMPLATE_Conversa_Agentes.md)** — Templates prontos para usar
- **[agentes/PAPEL_Responsabilidades_Agentes.md](agentes/PAPEL_Responsabilidades_Agentes.md)** — Papéis e responsabilidades de cada agente

### Integração Geral
- **[docs/ORQUESTRACAO_AGENTES.md](docs/ORQUESTRACAO_AGENTES.md)** — Guia completo de integração dos agentes
- **Especificação Técnica Completa** — Salva em memória do projeto

---

## 🔄 Fluxos Típicos

### Fluxo 1: Criar uma Prova
1. Use **AvaliadorMat** → Gera prova + gabarito
2. Refine com **Líder** se necessário

### Fluxo 2: Preparar Aula Completa
1. **SintetiZador** → Resumo do conceito
2. **InterativoMat** → Apresentação visual
3. **ProblemistaMat** → Exercícios
4. **DiferenciadoMat** → Atividades por nível
5. **AvaliadorMat** → Prova de fechamento

### Fluxo 3: Diagnóstico e Remediação
1. **Líder** → Triagem do problema
2. **SintetiZador** → Simplifica conceito
3. **DiferenciadoMat** → Atividades abaixo do básico
4. **InterativoMat** → Engajamento/gamificação

---

## 🚀 Quick Links

| Necessidade | Arquivo |
|---|---|
| Entender o projeto | [README.md](README.md) |
| Usar os agentes | [docs/ORQUESTRACAO_AGENTES.md](docs/ORQUESTRACAO_AGENTES.md) |
| Orquestrar tudo | [agentes/lider/](agentes/lider/) |
| Fazer uma prova | [agentes/skills-sistema/SKILL_AvaliadorMat.md](agentes/skills-sistema/SKILL_AvaliadorMat.md) |
| Fazer exercícios | [agentes/skills-sistema/SKILL_ProblemistaMat.md](agentes/skills-sistema/SKILL_ProblemistaMat.md) |
| Resumir conteúdo | [agentes/skills-sistema/SKILL_SintetiZador.md](agentes/skills-sistema/SKILL_SintetiZador.md) |
| Diferenciar por nível | [agentes/skills-sistema/SKILL_DiferenciadoMat.md](agentes/skills-sistema/SKILL_DiferenciadoMat.md) |
| Conteúdo interativo | [agentes/skills-sistema/SKILL_InterativoMat.md](agentes/skills-sistema/SKILL_InterativoMat.md) |
| Ver testes | [resultados/results.html](resultados/results.html) |

---

## 📁 Estrutura Completa em Tree

```
professor-matemática/
├── 📄 README.md                              [Visão geral]
├── 📑 INDEX.md                               [Este arquivo]
│
├── 📁 docs/
│   └── ORQUESTRACAO_AGENTES.md               [Guia de uso]
│
├── 📁 agentes/
│   ├── lider/
│   │   └── AGENT_Lider_Orquestrador.md       [⭐ Orquestrador]
│   │
│   ├── skills-sistema/
│   │   ├── SKILL_AvaliadorMat.md             [✅ Provas]
│   │   ├── SKILL_ProblemistaMat.md           [✅ Exercícios]
│   │   ├── SKILL_SintetiZador.md             [✅ Resumos]
│   │   ├── SKILL_DiferenciadoMat.md          [✅ Diferenciação]
│   │   ├── SKILL_InterativoMat.md            [✅ Interativo]
│   │   └── SKILL_DesignerMat.md              [✅ Design]
│   │
│   └── skills-conteudo/
│       ├── SKILL_NumerosOperacoes.md         [Aritmética]
│       ├── SKILL_Algebra.md                  [Álgebra]
│       ├── SKILL_Geometria.md                [Geometria]
│       ├── SKILL_GrandezasMedidas.md         [Medidas]
│       └── SKILL_EstatisticaProbabilidade.md [Estatística]
│
├── 📁 conteudo/
│   ├── conteudo1-3.csv                       [Fund. I]
│   ├── conteudo6-9.csv                       [Fund. II]
│   └── conteudo6-9.xlsx                      [Planilha]
│
└── 📁 resultados/
    ├── results.html                          [📊 Relatório]
    └── benchmark.json                        [Performance]
```

---

## ✅ Checklist de Organização

- ✅ Agentes separados por função (sistema vs. conteúdo)
- ✅ Documentação centralizada em `docs/`
- ✅ Dados de entrada em `conteudo/`
- ✅ Resultados de testes em `resultados/`
- ✅ Orquestrador em local destacado
- ✅ Índice completo (este arquivo)
- ✅ README atualizado

---

**Projeto Organizado e Pronto para Uso! 🚀**

Data: 2026-04-07 | Status: ✅ ESTRUTURADO
