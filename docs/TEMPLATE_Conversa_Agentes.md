# 📝 Template para Conversa Entre Agentes

Use este template para estruturar conversas entre agentes, garantindo clareza, contexto e resultados pedagógicos.

---

## 🔵 CONVERSA TIPO 1: Aluno Cometeu Erro

### Situação
```
Aluno: [nome/ID]
Série: [série]
Conceito: [tópico matemático]
Erro cometido: [descrição exata]
Tentativa: [1ª, 2ª, 3ª...]
Contexto anterior: [tem erro similar antes?]
```

### Fluxo de Conversa

#### PASSO 1: Sistema → Especialista Matemático
```
FROM: Sistema de Detecção
TO: Especialista Matemático
TIPO: ERRO
PRIORIDADE: ALTA

---
ERRO DETECTADO

Aluno: [nome]
Série: [série]
Conceito: [conceito]

Tentou: [o que aluno fez]
Esperado: [o que deveria fazer]
Diferença: [qual é o gap]

Pergunta:
1. Que misconception causou isso?
2. Por que o aluno pensou assim?
3. Como recuperar?
```

#### PASSO 2: Especialista Matemático → Sintetizador
```
FROM: Especialista Matemático
TO: Sintetizador
TIPO: ANÁLISE
PRIORIDADE: ALTA

---
ANÁLISE DO ERRO

Misconception: [qual é]
Causa Raiz: [por que aconteceu]
Conceitos Faltando: [quais pré-requisitos faltam]
Nível do Aluno: [iniciante/intermediário/avançado]

DICAS NECESSÁRIAS:

Nível 1 (Sutil):
[Tooltip, pergunta provocadora]

Nível 2 (Processo):
[Passo a passo, andaime]

Nível 3 (Tutorial):
[Explicação completa, exemplos]

Por favor, formule as dicas em linguagem adequada para [série]
```

#### PASSO 3: Sintetizador → Refinamento UX
```
FROM: Sintetizador
TO: Refinamento UX
TIPO: DESIGN
PRIORIDADE: MÉDIA

---
COMO APRESENTAR?

Dica 1: [texto]
Dica 2: [texto]
Dica 3: [texto]

Restrições:
- Aluno é [visual/auditivo/cinestésico]
- Dispositivo: [desktop/tablet/mobile]
- Tempo: [precisa ser rápido]
- Linguagem: [nível de série]

Sugestões de apresentação:
- Layout (onde colocar?)
- Cores (qual emoção?)
- Interatividade (clicável? animado?)
- Exemplos visuais (desenho? diagrama? número?)
```

#### PASSO 4: Refinamento UX → Interativo (se necessário)
```
FROM: Refinamento UX
TO: Interativo
TIPO: ENRIQUECIMENTO
PRIORIDADE: MÉDIA

---
PODE ENRIQUECER?

Interface proposta: [descrição]
Espaço disponível: [quanto espaço tem?]
Tempo: [quanto tempo aluno tem?]

Oportunidades:
- Animação pode ajudar?
- Jogo/desafio pode reforçar?
- Som/feedback visual?
- Série: [qual série?]

Objetivo: Deixar aprendizado memorável
```

#### PASSO 5: QA valida tudo
```
FROM: Garantia de Qualidade
TO: Todos (Especialista, Sintetizador, UX, Interativo)
TIPO: VALIDAÇÃO
PRIORIDADE: ALTA

---
VALIDAÇÃO FINAL

Checklist:
☐ Dica responde o erro? Sim/Não
☐ Dica é clara? Sim/Não
☐ Dica é pedagogicamente correta? Sim/Não
☐ UX é intuitiva? Sim/Não
☐ Funciona em todos os dispositivos? Sim/Não
☐ Tempo de apresentação < 10s? Sim/Não
☐ Aluno consegue entender sozinho? Sim/Não

Status: ✅ APROVADO / ❌ REJEITAR COM FEEDBACK
```

#### PASSO 6: Líder aprova entrega
```
FROM: Líder Orquestrador
TO: Sistema
TIPO: APROVAÇÃO
PRIORIDADE: CRÍTICA

---
ENTREGA APROVADA

Pacote:
✅ Análise: [resumo]
✅ Dicas: [três níveis]
✅ UX: [interface]
✅ Interatividade: [sim/não]
✅ QA: [validado]

AÇÃO: Apresentar ao aluno agora
Mensagem: [exibir na tela]
Próximo passo: [monitorar se acertou]
```

---

## 🟢 CONVERSA TIPO 2: Criar Nova Atividade

### Situação
```
Tipo: [Prova/Lista/Exercício/Jogo]
Conceito: [tópico]
Série: [série]
Objetivo: [o que aluno deve aprender]
Duração: [quanto tempo tem?]
```

### Fluxo de Conversa

#### PASSO 1: Líder Orquestrador → Avaliador/Problemista
```
FROM: Líder Orquestrador
TO: Avaliador/Problemista
TIPO: CRIAÇÃO
PRIORIDADE: ALTA

---
CRIAR ATIVIDADE

Tipo: [prova/lista/exercício]
Conceito: [tópico completo]
Série: [série/ano]
Quantidade: [número de questões]
Tempo: [minutos disponíveis]
Contexto: [Rousseau/Estado SP/outro?]
Regras: [calculadora? regras especiais?]

Entregar:
- Questões bem formuladas
- Progressão de dificuldade
- Gabarito completo
- Sugestões de correção
```

#### PASSO 2: Avaliador/Problemista → Especialista Matemático
```
FROM: Avaliador/Problemista
TO: Especialista Matemático
TIPO: REVISÃO
PRIORIDADE: ALTA

---
VALIDAÇÃO MATEMÁTICA

Questões propostas:
1. [questão]
2. [questão]
3. [questão]
...

Verificar:
- Conceitos são precisos?
- Progressão está correta?
- Gabarito bate?
- Há ambuidade?
- Nível está ok para [série]?

Sugestões de melhoria?
```

#### PASSO 3: Especialista → Diferenciado
```
FROM: Especialista Matemático
TO: Diferenciado
TIPO: ADAPTAÇÃO
PRIORIDADE: MÉDIA

---
ADAPTAR 4 NÍVEIS

Atividade original: [nome]
Série: [série]
Conceitos-chave: [lista]

Criar versões:
NÍVEL ABAIXO (alunos com defasagem)
- Simplificar conceitos
- Mais passos
- Exemplos mais básicos

NÍVEL ESPERADO (base)
- Conforme original
- Com andaimes adequados

NÍVEL ACIMA (alunos avançados)
- Mais complexo
- Menos passo-a-passo
- Problemas contextualizados

NÍVEL DESAFIADOR (gifted)
- Muito complexo
- Pensamento crítico
- Problemas abertos
```

#### PASSO 4: Diferenciado → Refinamento UX
```
FROM: Diferenciado
TO: Refinamento UX
TIPO: LAYOUT
PRIORIDADE: ALTA

---
DESIGN DOS 4 NÍVEIS

Versão Abaixo: [descrição]
Versão Esperada: [descrição]
Versão Acima: [descrição]
Versão Desafiadora: [descrição]

Requisitos:
- Todas as 4 versões cabem na mesma interface?
- Aluno vê só a sua versão?
- Seleção de nível automática?
- Como indicar visualmente o nível?
- Navegação clara entre versões?

Propor interface...
```

#### PASSO 5: Refinamento UX → Sintetizador
```
FROM: Refinamento UX
TO: Sintetizador
TIPO: PREPARAÇÃO
PRIORIDADE: MÉDIA

---
PREPARAR SUPORTES

Atividade: [nome]
Interface: [descrita acima]

Criar para cada nível:
- Resumo/Formulário de conceitos
- Exemplos resolvidos
- Dicas de processo (para quando errar)
- Referência rápida

Série: [série]
Linguagem: [adequada ao nível]
```

#### PASSO 6: Refinamento UX → Interativo (opcional)
```
FROM: Refinamento UX
TO: Interativo
TIPO: ENRIQUECIMENTO
PRIORIDADE: BAIXA/MÉDIA

---
PODE GAMIFICAR?

Atividade: [nome]
Contexto: [série, conceito]
Tempo disponível: [x minutos]

Oportunidades:
- Medir tempo (speedrun)?
- Pontos/estrelas?
- Badges/prêmios?
- Leaderboard?
- Feedback animado?
- Som de sucesso?

Objetivo: Manter engagement sem desviar do aprendizado
```

#### PASSO 7: QA testa tudo
```
FROM: Garantia de Qualidade
TO: Todos
TIPO: VALIDAÇÃO
PRIORIDADE: ALTA

---
VALIDAÇÃO FINAL

Checklist:
☐ Questões são claras? Sim/Não
☐ Gabarito está 100% correto? Sim/Não
☐ Progressão de dificuldade faz sentido? Sim/Não
☐ Interface é intuitiva? Sim/Não
☐ Os 4 níveis funcionam? Sim/Não
☐ Acessibilidade OK? Sim/Não
☐ Performance OK em todos os dispositivos? Sim/Não
☐ Tempo estimado é realista? Sim/Não

Status: ✅ APROVADO / ❌ REJEITAR
Feedback: [se rejeitar, detalhar]
```

#### PASSO 8: Líder aprova
```
FROM: Líder Orquestrador
TO: Sistema + Professor
TIPO: ENTREGA
PRIORIDADE: CRÍTICA

---
ATIVIDADE PRONTA

Nome: [nome]
Tipo: [prova/lista/exercício]
Série: [série]
Conceito: [conceito]
Níveis: [abaixo/esperado/acima/desafiador]

Pacote de entrega:
✅ Questões validadas
✅ Gabarito completo
✅ 4 versões diferenciadas
✅ Suportes pedagógicos
✅ Interface otimizada
✅ Recursos interativos
✅ QA validado

Pronto para:
👨‍🏫 Professor usar
👨‍🎓 Aluno responder
📊 Sistema registrar progresso
```

---

## 🟡 CONVERSA TIPO 3: Aluno em Defasagem

### Situação
```
Aluno: [nome]
Série: [série]
Conceito: [tópico com problema]
Erros: [3+ sessões com mesmo erro]
Histórico: [quando começou?]
```

### Fluxo de Conversa

#### PASSO 1: Sistema → Especialista Matemático
```
FROM: Sistema de Monitoramento
TO: Especialista Matemático
TIPO: DIAGNÓSTICO
PRIORIDADE: CRÍTICA

---
ALUNO EM DEFASAGEM

Aluno: [nome]
Série: [série]
Conceito: [tópico]
Tentativas: [número]
Taxa de erro: [%]
Duração: [quantos dias?]

Pergunta diagnóstica:
1. Qual é a raiz do problema?
2. Que conceito anterior está faltando?
3. É misconception ou falta de prática?
4. Precisar de qual intervenção?
```

#### PASSO 2: Especialista → Sintetizador
```
FROM: Especialista Matemático
TO: Sintetizador
TIPO: REMEDIAÇÃO
PRIORIDADE: CRÍTICA

---
PREPARAR REMEDIAÇÃO

Diagnóstico: [resumo]
Aluno: [série/perfil]
Raiz: [causa do problema]

Criar:
EXPLICAÇÃO SUPER SIMPLES
- Apenas essencial
- Sem jargão
- Com exemplos do mundo real

PASSO A PASSO
- Muito detalhado
- Visual/concreto
- Repetitivo (ok repetir)

EXEMPLOS RESOLVIDOS
- Vários exemplos
- Mostrando cada passo
- Verificando resposta
```

#### PASSO 3: Sintetizador → Diferenciado
```
FROM: Sintetizador
TO: Diferenciado
TIPO: JORNADA
PRIORIDADE: CRÍTICA

---
PREPARAR JORNADA DE RECUPERAÇÃO

Aluno: [nome/perfil]
Objetivo: Recuperar [conceito]
Duração: [quantas sessões?]

Criar jornada com:

SESSÃO 1 - CONFIANÇA
- Muito fácil
- Prática repetida
- Feedback muito positivo

SESSÃO 2 - CONSOLIDAÇÃO
- Pouco mais difícil
- Ainda fácil
- Reforço positivo

SESSÃO 3 - APLICAÇÃO
- Dificuldade normal
- Com andaimes
- Progressão visível

SESSÃO 4 - DOMÍNIO
- Sem andaimes
- Pronto para avançar
```

#### PASSO 4: Diferenciado → Interativo
```
FROM: Diferenciado
TO: Interativo
TIPO: ENGAJAMENTO
PRIORIDADE: ALTA

---
GAMIFICAR RECUPERAÇÃO

Jornada: [descrita acima]
Aluno: [perfil/série]
Objetivo: Manter altíssimo engagement

Implementar:
- Badges por etapa
- Contador de progresso
- Prêmios em cada acerto
- Efeitos sonoros positivos
- Mensagens de encorajamento
- Celebração ao completar
- Histórico visual de melhora

Objetivo: Aluno QUER fazer próxima sessão
```

#### PASSO 5: Refinamento UX otimiza
```
FROM: Refinamento UX
TO: Interativo/Sistema
TIPO: OTIMIZAÇÃO
PRIORIDADE: MÉDIA

---
OTIMIZAR INTERFACE

Jornada: [descrita]
Aluno: [perfil]

Interface deve:
- Ser muito clara (sem confusão)
- Mostrar progresso visualmente
- Ter botões bem identificados
- Evitar frustração
- Ser mobile-friendly
- Carregar rápido
- Ser acessível

Foco: Experiência positiva acima de tudo
```

#### PASSO 6: QA testa intensamente
```
FROM: Garantia de Qualidade
TO: Todos
TIPO: VALIDAÇÃO INTENSIVA
PRIORIDADE: CRÍTICA

---
VALIDAÇÃO DE REMEDIAÇÃO

Jornada: [descrita]
Aluno: [perfil]

Testar:
☐ Cada sessão está correto matematicamente?
☐ Progressão faz sentido pedagógico?
☐ Aluno realmente vai aprender?
☐ Interface não é frustrante?
☐ Gamificação ajuda ou distrai?
☐ Feedback é claro?
☐ Pronto para aluno em defasagem?

Status: ✅ APROVADO / ❌ AJUSTAR
```

#### PASSO 7: Líder entrega para professor
```
FROM: Líder Orquestrador
TO: Professor + Sistema
TIPO: RECOMENDAÇÃO
PRIORIDADE: CRÍTICA

---
PLANO DE REMEDIAÇÃO

Aluno: [nome]
Conceito: [tópico]
Status: Defasagem detectada

Recomendação:
✅ Jornada de recuperação de [duração]
✅ Foco em [conceitos específicos]
✅ Nível super adaptado para [aluno]
✅ Altamente gamificado para engagement

O que o professor pode fazer:
1. Monitorar progresso no dashboard
2. Deixar dica personalizada
3. Oferecer ajuda extra se necessário
4. Celebrar quando completar

O sistema vai:
1. Guiar aluno passo a passo
2. Dar feedback imediato
3. Adaptar dificuldade
4. Registrar tudo

Comece agora?
```

---

## 📊 Checklist Rápido

### Sempre que agente recebe conversa:
- ✅ Li o contexto completo?
- ✅ Entendi o que é pedido?
- ✅ Tenho todas as informações?
- ✅ Preciso pedir mais informação?

### Sempre que agente responde:
- ✅ Respondi a pergunta?
- ✅ Considerei pedagogia?
- ✅ Pensei em UX?
- ✅ Propus alternativas?
- ✅ Validei com especialista?

### Sempre que QA valida:
- ✅ Funciona tecnicamente?
- ✅ Funciona pedagogicamente?
- ✅ É claro para aluno/professor?
- ✅ Pronto para produção?

---

## 🚀 Como Usar Este Template

1. **Identifique o tipo de conversa** (Erro / Atividade / Defasagem)
2. **Copie o fluxo** correspondente
3. **Preenchha os campos** [entre colchetes]
4. **Siga o PASSO A PASSO**
5. **QA valida ao final**
6. **Líder aprova entrega**

---

**Data:** 2026-04-07  
**Status:** ✅ READY TO USE  
**Versão:** 1.0
