# 🔄 Protocolo de Comunicação entre Agentes

## Visão Geral

Este documento define como os agentes trabalham **colaborativamente** para verificar erros, propor melhorias, gerar dicas pedagógicas e otimizar a experiência do aluno.

---

## 1. 🎯 Objetivos da Comunicação

### Para Cada Erro do Aluno:
1. ✅ **Detectar** o tipo de erro (misconception, processo, visualização)
2. ✅ **Diagnosticar** a causa raiz
3. ✅ **Gerar** dicas pedagógicas (3 níveis)
4. ✅ **Sugerir** melhorias de UX
5. ✅ **Propor** atividades de remediação

---

## 2. 🔗 Arquitetura de Comunicação

```
┌─────────────────────────────────────────────────────────────┐
│                    LÍDER ORQUESTRADOR                       │
│          (Coordena fluxos e distribui tarefas)              │
└────────┬──────────────────────────────────────────┬─────────┘
         │                                          │
         ▼                                          ▼
    ┌────────────────┐                    ┌────────────────┐
    │  ESPECIALISTA  │ ◄──────────────►  │      QA        │
    │  MATEMÁTICO    │                    │                │
    │ (Análise erro) │                    │ (Valida tudo)  │
    └────────┬───────┘                    └────────┬───────┘
             │                                     │
             ▼                                     ▼
    ┌────────────────┐                    ┌────────────────┐
    │ AVALIADOR/     │ ◄──────────────►  │ REFINAMENTO    │
    │ PROBLEMISTA    │                    │ UX             │
    │                │                    │ (Interface)    │
    └────────┬───────┘                    └────────┬───────┘
             │                                     │
             ▼                                     ▼
    ┌────────────────┐                    ┌────────────────┐
    │ SINTETIZADOR   │ ◄──────────────►  │ INTERATIVO     │
    │                │                    │                │
    │ (Dicas/Resumos)│                    │ (Gamificação)  │
    └────────┬───────┘                    └────────────────┘
             │
             ▼
    ┌────────────────┐
    │ DIFERENCIADO   │
    │                │
    │ (4 Níveis)     │
    └────────────────┘

    ◄──────────────► = Fluxo de Comunicação Bidirecional
```

---

## 3. 📋 Fluxos de Interação

### Fluxo 1: Quando Aluno Comete Erro

```
1. ALUNO COMETE ERRO
   ↓
2. SISTEMA DETECTA
   ├─ Tipo de erro
   ├─ Conceito afetado
   └─ Tentativa anterior
   ↓
3. ESPECIALISTA MATEMÁTICO ANALISA
   ├─ Qual misconception?
   ├─ Qual é a causa?
   └─ Qual é o nível do aluno?
   ↓
4. REFINAMENTO UX PROPÕE
   ├─ Como apresentar dica (visual/texto)?
   ├─ Qual é o melhor formato?
   └─ Precisa de interatividade?
   ↓
5. SINTETIZADOR GERA DICAS
   ├─ Nível 1: Tooltip sutil
   ├─ Nível 2: Andaime (passo a passo)
   └─ Nível 3: Tutorial completo
   ↓
6. INTERATIVO PREPARA
   ├─ Animação visual?
   ├─ Jogo/Desafio?
   └─ Feedback positivo
   ↓
7. QA VALIDA
   ├─ Dica é clara?
   ├─ Soluciona o erro?
   └─ Pronto para aluno?
   ↓
8. SISTEMA APRESENTA AO ALUNO
```

---

### Fluxo 2: Melhoria de Atividade

```
1. ATIVIDADE CRIADA
   (Ex: Prova, Lista, Exercício)
   ↓
2. AVALIADOR/PROBLEMISTA PROPÕE
   ├─ Questões bem formuladas?
   ├─ Respostas claras?
   └─ Gabarito completo?
   ↓
3. ESPECIALISTA MATEMÁTICO REVISA
   ├─ Conceitos corretos?
   ├─ Sequência lógica?
   └─ Progressão de dificuldade?
   ↓
4. REFINAMENTO UX OTIMIZA
   ├─ Layout claro?
   ├─ Instruções visuais?
   └─ Acessibilidade OK?
   ↓
5. DIFERENCIADO ADAPTA
   ├─ Nível Básico (abaixo)
   ├─ Nível Esperado
   ├─ Nível Avançado (acima)
   └─ Nível Desafiador (muito acima)
   ↓
6. SINTETIZADOR PREPARA RESUMO
   ├─ Conceitos-chave
   ├─ Fórmulas importantes
   └─ Exemplos resolvidos
   ↓
7. INTERATIVO ENRIQUECE
   ├─ Simulador?
   ├─ Animação?
   └─ Gamificação?
   ↓
8. QA TESTA
   ├─ Funciona em todos os casos?
   ├─ Sem bugs?
   └─ Performance OK?
   ↓
9. ATIVIDADE PRONTA PARA USAR
```

---

### Fluxo 3: Diagnóstico de Defasagem

```
1. ALUNO EM DEFASAGEM DETECTADO
   (3 erros no mesmo conceito)
   ↓
2. ESPECIALISTA MATEMÁTICO DIAGNOSTICA
   ├─ Qual é a raiz do problema?
   ├─ Qual conceito anterior falta?
   └─ Qual é o nível de entendimento?
   ↓
3. SINTETIZADOR SIMPLIFICA
   ├─ Resumo super simples
   ├─ Apenas essencial
   └─ Com exemplos básicos
   ↓
4. DIFERENCIADO PREPARA
   ├─ Nível MUITO abaixo (recuperação)
   ├─ Com muita repetição
   ├─ Passo a passo
   └─ Feedback positivo abundante
   ↓
5. INTERATIVO GAMIFICA
   ├─ Desafios pequenos
   ├─ Prêmios/Badges
   ├─ Diversidade de formatos
   └─ Alto engagement
   ↓
6. PROBLEMISTA CRIA EXERCÍCIOS
   ├─ Muito fáceis (confiança)
   ├─ Progressivamente difíceis
   └─ Com feedback detalhado
   ↓
7. QA VALIDA JORNADA
   ├─ Faz sentido pedagógico?
   ├─ Vai realmente ajudar?
   └─ Pronto para professor ver?
   ↓
8. PROFESSOR RECEBE RECOMENDAÇÃO
```

---

## 4. 🗣️ Protocolo de Conversa Entre Agentes

### Formato de Mensagem

```markdown
FROM: [Nome do Agente]
TO: [Nome(s) do(s) Agente(s)]
TIPO: [ERRO | MELHORIA | DIAGNÓSTICO | VALIDAÇÃO]
PRIORIDADE: [CRÍTICA | ALTA | MÉDIA | BAIXA]

---

## Situação
[Contexto completo]

## Pergunta / Solicitação
[O que você precisa?]

## Restrições / Contexto
[Limites, restrições, requisitos especiais]

## Esperado
[Qual é o resultado esperado?]

---

## [Assinatura]
```

---

### Exemplo 1: Erro Detectado

```markdown
FROM: Sistema de Detecção
TO: Especialista Matemático
TIPO: ERRO
PRIORIDADE: ALTA

---

## Situação
Aluno do 6º ano tentou: 3,5 ÷ 2.5 = 5,0
Resposta esperada: 1,4
Tentativa número: 2 (mesmo erro anterior)

## Pergunta
Qual é o misconception aqui? Qual é a melhor dica?

## Restrições
- Aluno é iniciante em decimais
- Primeira tentativa foi ignorar a vírgula
- Necessário reforço visual

## Esperado
1. Identificação do erro
2. 3 dicas (Nível 1, 2, 3)
3. Sugestão de atividade remediadora

---
Aguardando análise...
```

---

### Exemplo 2: Melhoria de UX

```markdown
FROM: Especialista Matemático
TO: Refinamento UX
TIPO: MELHORIA
PRIORIDADE: MÉDIA

---

## Situação
Dica gerada: "Você ignorou a vírgula. Lembre-se: 3,5 tem 1 casa decimal e 2,5 também."

## Pergunta
Como apresentar isso visualmente?

## Restrições
- Aluno é visual-learner
- Tela pequena (mobile)
- Precisa ser rápido entender

## Esperado
- Mockup de como mostrar
- Sugestões de cores/ícones
- Fluxo de interação

---
Aguardando proposta...
```

---

## 5. 🔍 Especialidades na Conversa

### Especialista Matemático
**Responsável por:**
- ✅ Identificar misconceptions
- ✅ Explicar a causa do erro
- ✅ Sugerir conceitos-chave para dica
- ✅ Validar precisão matemática
- ✅ Propor pré-requisitos

**Comunica com:**
- Sistema de Detecção (recebe erros)
- Refinamento UX (como mostrar)
- Sintetizador (conteúdo da dica)
- Diferenciado (adaptação)

---

### Refinamento UX
**Responsável por:**
- ✅ Design da interface
- ✅ Fluxo de interação
- ✅ Acessibilidade
- ✅ Clareza visual
- ✅ Experiência do usuário

**Comunica com:**
- Especialista Matemático (entender problema)
- Sintetizador (como apresentar dica)
- Interativo (enriquecimento)
- Avaliador (layout de atividades)

---

### Sintetizador
**Responsável por:**
- ✅ Simplificar conceitos
- ✅ Gerar dicas em 3 níveis
- ✅ Criar resumos
- ✅ Escrever exemplos
- ✅ Formulações claras

**Comunica com:**
- Especialista (qual é o conceito?)
- Refinamento UX (como formatar?)
- Diferenciado (adaptação por nível)
- Interativo (enriquecimento)

---

### Interativo
**Responsável por:**
- ✅ Gamificação
- ✅ Animações
- ✅ Simuladores
- ✅ Feedback visual
- ✅ Engagement

**Comunica com:**
- Refinamento UX (validar design)
- Sintetizador (conteúdo interativo)
- Diferenciado (adaptação lúdica)
- QA (funcionalidade)

---

### Diferenciado
**Responsável por:**
- ✅ Adaptar 4 níveis
- ✅ Progressão pedagógica
- ✅ Inclusão
- ✅ Individualização
- ✅ Jornadas personalizadas

**Comunica com:**
- Especialista (qual conceito?)
- Sintetizador (conteúdo simplificado)
- Problemista (exercícios por nível)
- Interativo (engajamento)

---

### Avaliador/Problemista
**Responsável por:**
- ✅ Questões bem formuladas
- ✅ Progressão de dificuldade
- ✅ Gabaritos corretos
- ✅ Feedback detalhado
- ✅ Validação pedagógica

**Comunica com:**
- Especialista (conceitos corretos?)
- Refinamento UX (layout das questões)
- Diferenciado (versões por nível)
- QA (validação)

---

### QA
**Responsável por:**
- ✅ Validar tudo antes de ir ao aluno
- ✅ Testar casos extremos
- ✅ Verificar clareza
- ✅ Garantir pedagogia
- ✅ Aprovar entrega

**Comunica com:**
- Todos os agentes (tira dúvidas finais)
- Líder Orquestrador (aprova)

---

## 6. 📊 Exemplo Completo: Aluno Erra Divisão de Decimais

### Cenário
- Aluno: 6º ano
- Erro: 3,5 ÷ 2,5 = 5,0 (ignorou vírgula)
- Tentativa: 2ª (mesma classe de erro)

### Conversa Entre Agentes

**PASSO 1: Sistema detecta e encaminha**

```
Sistema → Especialista Matemático:
"Aluno 6º ano tentou 3,5 ÷ 2,5 = 5,0. 
Qual é o misconception?"
```

**PASSO 2: Especialista analisa**

```
Especialista → Sintetizador:
"Misconception: Aluno ignora vírgula decimal.
Pensa: 35 ÷ 25 = 5/5 = 1... mas escreveu 5,0.
Conceitos que faltam:
1. Entender ordem de grandeza (3,5 é ~4, não ~35)
2. Divisão reduz número menor (3,5÷2,5 ≠ 35÷25)
3. Posição da vírgula no resultado

Gere dicas por favor!"
```

**PASSO 3: Sintetizador cria dicas**

```
Sintetizador → Refinamento UX:
"Criei 3 dicas:

Nível 1 (Sutil):
'Dica: 3,5 é maior que 2,5 ou menor?'

Nível 2 (Processo):
'Se 3,5 ≈ 4 e 2,5 ≈ 2, então 4÷2 = 2.
Seu resultado (5,0) é maior. Faz sentido?'

Nível 3 (Tutorial):
Passo a passo: conversão, divisão, reposicionamento

Como apresentar visualmente?"
```

**PASSO 4: Refinamento UX propõe layout**

```
Refinamento UX → Especialista/Sintetizador:
"Proposta:

[DICA VISUAL]
Mostrar na tela:
- 3,5 (destacado em vermelho)
- 2,5 (destacado em azul)
- Seta: 'Qual é maior?'
- Resposta do aluno (5,0) em cinza errado

[ANIMAÇÃO]
Mostrar bola de tamanho 3,5
Dividir por bola de 2,5
Ver quantas cabem...

Faz sentido pedagogicamente?"
```

**PASSO 5: Especialista + Sintetizador validam**

```
Especialista → Refinamento UX:
"✅ Perfeito! A ordem de grandeza é a chave.
Muito visual, excelente para 6º ano.
Sugestão: Usar Nível 1 (sutil) primeiro."
```

**PASSO 6: Diferenciado adapta para 4 níveis**

```
Diferenciado → Sintetizador/Interativo:
"Para os 4 níveis:

ABAIXO: Trabalhar ordem de grandeza com inteiros
(3÷2, 35÷25 lado a lado)

ESPERADO: Divisão decimal direto + visualização

ACIMA: Divisão decimal com mais casas
(12,75 ÷ 2,5)

DESAFIADOR: Problemas contextualizados
('Tenho 3,5L de suco em garrafas de 2,5L.
Quantas garrafas preciso?')"
```

**PASSO 7: Interativo enriquece**

```
Interativo → Refinamento:
"Vou adicionar:
- Animação da divisão
- Jogo: 'Qual é maior?'
- Badge: 'Mestre de Decimais'
- Feedback positivo ao acertar próxima vez"
```

**PASSO 8: QA valida tudo**

```
QA → Todos:
"Testei:
✅ Dica clara e eficaz
✅ Pedagogia correta
✅ UX intuitiva
✅ Funciona em mobile
✅ Pronto para aluno!"
```

**PASSO 9: Líder aprova e aluno recebe**

```
Líder → Sistema:
"✅ APROVADO. Apresente ao aluno agora."

[ALUNO VÊ A DICA VISUAL + ANIMAÇÃO]
[CONSEGUE ACERTAR A PRÓXIMA]
✅ SUCESSO!
```

---

## 7. 📋 Checklist de Comunicação

### Antes de Cada Conversa
- ✅ Mensagem está clara?
- ✅ Contexto está completo?
- ✅ Prioridade é apropriada?
- ✅ Resultado esperado é específico?

### Resposta do Agente
- ✅ Adress a pergunta?
- ✅ Forneceu alternativas?
- ✅ Validou pedagogicamente?
- ✅ Considerou UX?

### Integração Final
- ✅ Todos estão alinhados?
- ✅ Não há contradições?
- ✅ QA validou?
- ✅ Líder aprovou?

---

## 8. 🚀 Como Iniciar Comunicação Entre Agentes

### Quando o Usuário Submete Uma Tarefa:

1. **Líder Orquestrador** recebe
2. Identifica qual agente deve falar com qual
3. **Inicia conversa estruturada** entre eles
4. Aguarda validação QA
5. Aprova resultado final

### Quando Aluno Comete Erro:

1. **Sistema detecta**
2. **Especialista Matemático** analisa
3. **Convida Sintetizador, Refinamento, Interativo**
4. Trabalham **colaborativamente**
5. **QA valida**
6. **Aluno recebe resposta melhorada**

---

## ✅ Status
**PROTOCOLO PRONTO PARA IMPLEMENTAÇÃO**

Próximos passos:
1. Cada agente entender seu papel
2. Usar este protocolo em toda interação
3. Registrar conversas para melhoria contínua
4. Validar com QA antes de entregar ao aluno

---

**Data:** 2026-04-07  
**Status:** ✅ ATIVO  
**Versão:** 1.0
