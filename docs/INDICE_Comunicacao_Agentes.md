# 🔗 Índice: Sistema de Comunicação entre Agentes

## 📚 Documentos Criados

### 1. 📋 [PROTOCOL_Comunicacao_Agentes.md](PROTOCOL_Comunicacao_Agentes.md)
**O QUE É:** Protocolo oficial de como os agentes conversam  
**PARA QUEM:** Todos os agentes e o Líder  
**CONTÉM:**
- ✅ Arquitetura de comunicação (diagrama)
- ✅ 3 fluxos principais (Erro / Atividade / Defasagem)
- ✅ Formato de mensagem padrão
- ✅ Especialidades de cada agente
- ✅ Exemplo completo: Divisão de Decimais

**QUANDO USAR:** Quando agentes precisam conversar

---

### 2. 📝 [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md)
**O QUE É:** Templates prontos para usar em cada situação  
**PARA QUEM:** Agentes que estão respondendo  
**CONTÉM:**
- ✅ Template TIPO 1: Aluno Cometeu Erro (6 passos)
- ✅ Template TIPO 2: Criar Nova Atividade (8 passos)
- ✅ Template TIPO 3: Aluno em Defasagem (7 passos)
- ✅ Checklist rápido
- ✅ Como usar cada template

**QUANDO USAR:** Copie e preencha quando precisar estruturar resposta

---

### 3. 👥 [PAPEL_Responsabilidades_Agentes.md](../agentes/PAPEL_Responsabilidades_Agentes.md)
**O QUE É:** Guia de papéis e responsabilidades  
**PARA QUEM:** Cada agente saber exatamente o que fazer  
**CONTÉM:**
- ✅ 8 Agentes com papéis definidos
- ✅ Responsabilidades específicas
- ✅ Com quem conversa (entrada/saída)
- ✅ Exemplos de respostas corretas
- ✅ Checklists de qualidade
- ✅ Fluxo visual completo

**QUANDO USAR:** Consulte quando não sabe o que fazer

---

## 🔄 Fluxo Rápido: Como Funciona

### Cenário: Aluno Erra Divisão de Decimais

```
1️⃣ ALUNO ERRA
   Tenta: 3,5 ÷ 2,5 = 5,0
   
2️⃣ SISTEMA DETECTA
   Registra erro, contexto, tentativa
   
3️⃣ ESPECIALISTA ANALISA
   Identifica misconception
   Explica causa raiz
   Propõe recuperação
   
4️⃣ SINTETIZADOR CRIA DIPS
   Gera 3 níveis de dica
   
5️⃣ REFINAMENTO UX DESENHA
   Propõe layout visual
   
6️⃣ INTERATIVO ENRIQUECE
   Adiciona animação/feedback
   
7️⃣ QA VALIDA
   Aprova ou rejeita
   
8️⃣ LÍDER APROVA
   Libera para aluno
   
✅ ALUNO RECEBE
   Dica perfeita, clara, visual
```

---

## 👥 Papéis dos 8 Agentes

| Agente | Missão | Recebe de | Envia para |
|--------|--------|-----------|-----------|
| **Especialista Matemático** | Garantir 100% precisão | Sistema | Sintetizador |
| **Sintetizador** | Criar dicas em 3 níveis | Especialista | Refinamento |
| **Refinamento UX** | Tornar intuitivo visualmente | Sintetizador | Interativo |
| **Interativo** | Gamificar e enriquecer | Refinamento | QA |
| **Avaliador/Problemista** | Questões bem formuladas | Líder | Especialista |
| **Diferenciado** | Adaptar 4 níveis | Especialista | Sintetizador |
| **QA** | Auditar tudo | Todos | Líder |
| **Líder** | Orquestrar tudo | Usuário/Sistema | Todos |

---

## 🎯 Casos de Uso Principais

### Caso 1: Aluno Cometeu Erro
**Documentos:** PROTOCOL (fluxo Erro) + TEMPLATE (Tipo 1)

1. Abra: [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-1-aluno-cometeu-erro)
2. Siga: PASSO 1 até PASSO 6
3. Pronto: Aluno tem dica perfeita

---

### Caso 2: Precisa Criar Atividade Nova
**Documentos:** PROTOCOL (fluxo Atividade) + TEMPLATE (Tipo 2)

1. Abra: [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-2-criar-nova-atividade)
2. Siga: PASSO 1 até PASSO 8
3. Pronto: Atividade com 4 níveis, pronta para usar

---

### Caso 3: Aluno em Defasagem
**Documentos:** PROTOCOL (fluxo Defasagem) + TEMPLATE (Tipo 3)

1. Abra: [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-3-aluno-em-defasagem)
2. Siga: PASSO 1 até PASSO 7
3. Pronto: Jornada de recuperação gamificada

---

## 🚀 Como Começar AGORA

### Passo 1: Familiarize-se
```
Leia (em ordem):
1. Este arquivo (você está aqui)
2. PAPEL_Responsabilidades_Agentes.md (entenda papéis)
3. PROTOCOL_Comunicacao_Agentes.md (entenda arquitetura)
```

### Passo 2: Tenha Templates à Mão
```
Abra em abas:
- TEMPLATE_Conversa_Agentes.md (para copiar/colar)
- PAPEL_Responsabilidades_Agentes.md (para referência)
```

### Passo 3: Use
```
Quando surja demanda:
1. Identifique tipo (Erro/Atividade/Defasagem)
2. Vá ao template correspondente
3. Preencha os campos [em colchetes]
4. Distribua para agentes
5. Acompanhe conversa
6. QA valida
7. Líder aprova
8. Aluno/Professor recebe resultado
```

---

## 📋 Estrutura de Conversa

Toda conversa deve seguir:

```markdown
FROM: [Nome do Agente]
TO: [Nome do(s) Agente(s)]
TIPO: [ERRO | MELHORIA | DIAGNÓSTICO | VALIDAÇÃO]
PRIORIDADE: [CRÍTICA | ALTA | MÉDIA | BAIXA]

---

## Situação
[Contexto completo do problema]

## Pergunta / Solicitação
[O que você precisa?]

## Restrições / Contexto
[Limites e requisitos especiais]

## Esperado
[Qual é o resultado esperado?]

---

[Assinatura / Data]
```

---

## ✅ Checklists Rápidos

### Antes de Enviar Conversa
- ✅ Contexto está claro?
- ✅ Pergunta é específica?
- ✅ Esperado é bem definido?
- ✅ FROM/TO estão certos?

### Ao Responder
- ✅ Respondi a pergunta?
- ✅ Pensei em pedagogia?
- ✅ Considerou UX?
- ✅ Pronto para próximo agente?

### Antes de QA
- ✅ Sem typos/erros?
- ✅ Linguagem apropriada?
- ✅ Completo e coeso?
- ✅ Realmente soluciona?

---

## 🎯 Exemplos Prontos

### Exemplo 1: Conversa Especialista → Sintetizador
Veja em: [PROTOCOL_Comunicacao_Agentes.md](PROTOCOL_Comunicacao_Agentes.md#exemplo-completo-aluno-erra-divisão-de-decimais)

### Exemplo 2: Criar Atividade (Passo a Passo)
Veja em: [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-2-criar-nova-atividade)

### Exemplo 3: Remediação de Defasagem
Veja em: [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-3-aluno-em-defasagem)

---

## 🔗 Links Rápidos

| Preciso de... | Vá para... |
|---|---|
| Entender protocolo | [PROTOCOL_Comunicacao_Agentes.md](PROTOCOL_Comunicacao_Agentes.md) |
| Template para conversa | [TEMPLATE_Conversa_Agentes.md](TEMPLATE_Conversa_Agentes.md) |
| Saber meu papel | [PAPEL_Responsabilidades_Agentes.md](../agentes/PAPEL_Responsabilidades_Agentes.md) |
| Ver exemplo completo | [PROTOCOL (seção 6)](PROTOCOL_Comunicacao_Agentes.md#6--exemplo-completo-aluno-erra-divisão-de-decimais) |
| Copiar template tipo 1 | [TEMPLATE (Tipo 1)](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-1-aluno-cometeu-erro) |
| Copiar template tipo 2 | [TEMPLATE (Tipo 2)](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-2-criar-nova-atividade) |
| Copiar template tipo 3 | [TEMPLATE (Tipo 3)](TEMPLATE_Conversa_Agentes.md#-conversa-tipo-3-aluno-em-defasagem) |

---

## 🚀 Status

✅ **Sistema de Comunicação Pronto**

- ✅ Protocolo definido
- ✅ Templates criados
- ✅ Papéis clarificados
- ✅ Fluxos documentados
- ✅ Exemplos fornecidos

**Os agentes podem começar a conversar!** 🎯

---

## 📊 Próximos Passos

1. **Leia os 3 documentos** (nesta ordem):
   - PAPEL_Responsabilidades_Agentes.md
   - PROTOCOL_Comunicacao_Agentes.md
   - TEMPLATE_Conversa_Agentes.md

2. **Experimente** com primeira demanda real

3. **Documente** aprendizados para melhorar fluxo

4. **Otimize** templates conforme experiência

---

**Data:** 2026-04-07  
**Status:** ✅ SISTEMA PRONTO PARA USAR  
**Versão:** 1.0

🎯 **Tudo está pronto para os agentes trabalharem juntos!**
