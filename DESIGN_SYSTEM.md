# 🎨 Design System - Plataforma Educacional

## Guia para Agentes de Design (Figma + Canva)

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Cores e Tipografia](#cores-e-tipografia)
3. [Componentes](#componentes)
4. [Atividades em Canva](#atividades-em-canva)
5. [Materiais Printáveis](#materiais-printáveis)
6. [Diretrizes de Acessibilidade](#diretrizes-de-acessibilidade)

---

## 🎯 Visão Geral

A plataforma é para **alunos do 6º ano** aprendendo **divisão decimal**.

**Princípios:**
- ✅ Visualmente atrativa e lúdica
- ✅ Fácil de entender
- ✅ Motivadora (feedback positivo)
- ✅ Acessível (cores, fontes, contraste)

---

## 🎨 Cores e Tipografia

### Paleta de Cores

| Contexto | Cor | Hex | Uso |
|----------|-----|-----|-----|
| Primário | Azul | #0EA5E9 | Botões, links, destaques |
| Sucesso | Verde | #22C55E | Respostas corretas, progresso |
| Erro | Vermelho | #EF4444 | Respostas incorretas, alertas |
| Aviso | Amarelo | #F59E0B | Dicas, equívocos detectados |
| Fundo | Cinza | #F9FAFB | Background apps |
| Texto | Cinza | #1F2937 | Texto principal |

### Tipografia

```
Título (h1): Inter Bold, 28px, #1F2937
Subtítulo (h2): Inter SemiBold, 22px, #1F2937
Parágrafo (p): Inter Regular, 16px, #1F2937
Label (small): Inter Medium, 12px, #4B5563
Monoespacial: Monaco, 14px (para números)
```

---

## 🧩 Componentes (Canva + React)

### 1. Activity Card

**Canva Template:**
- Tamanho: 400px × 300px
- Seções:
  - Cover image (top 50%)
  - Title (16px, bold)
  - Description (12px, regular)
  - Difficulty badge (12px, label)
  - Duration (12px, label)

**Exemplo:**
```
┌─────────────────────────┐
│  [Cover Image/Icon]     │
├─────────────────────────┤
│ Divisão Decimal Básica  │
│ Aprenda os fundamentos  │
│ 🌱 Iniciante | ⏱️ 15min │
└─────────────────────────┘
```

**React Rendering:**
- Import Canva image as `coverImage`
- Dinamically color border by `difficulty`
- Button gradient using `primaryColor` from visual assets

---

### 2. Question Display

**Canva Template:**
- Tamanho: 800px × 600px (landscape)
- Seções:
  - Question text (24px, bold, top 20%)
  - Visual representation (40%)
  - Options/input (40%)
  - Progress bar (bottom)

**Exemplo para Divisão Decimal:**
```
┌────────────────────────────────────┐
│ ❓ Quanto é 1,5 ÷ 3?              │
├────────────────────────────────────┤
│  Visual: 🔴🔴🔴 (1.5 circles)      │
│         ÷ 3 = ?                    │
├────────────────────────────────────┤
│  ⭕ A) 0,5   ⭕ B) 0,3             │
│  ⭕ C) 1,5   ⭕ D) 3,0             │
├────────────────────────────────────┤
│ Progresso: ███░░ (1/5)             │
└────────────────────────────────────┘
```

**React Rendering:**
- Map Canva template to `<QuestionDisplay>`
- Dynamically update colors for selected/correct answers
- Animate progress bar on submission

---

### 3. Feedback Display

**Canva Templates (3 variações):**

#### A) Resposta Correta
```
┌────────────────────────────┐
│         🎉 PARABÉNS!      │
│    Resposta Correta!      │
│                           │
│  ✅ Explicação clara      │
│  📊 Progresso atualizado  │
│  ➡️ Próxima Questão      │
└────────────────────────────┘
```

#### B) Resposta Incorreta
```
┌────────────────────────────┐
│       🤔 Vamos Tentar!    │
│    Resposta Incorreta.    │
│                           │
│  ⚠️ Equívoco detectado:   │
│     Desalinhamento de ... │
│  💡 Dica: [helpful hint]  │
│  ➡️ Tentar Novamente     │
└────────────────────────────┘
```

#### C) Tutoria/Scaffolding
```
┌────────────────────────────┐
│      📚 Vamos Aprender?   │
│                           │
│  1️⃣ Nível 1: Dica         │
│  2️⃣ Nível 2: Explicação   │
│  3️⃣ Nível 3: Tutorial     │
└────────────────────────────┘
```

**React Rendering:**
- Display appropriate template based on `isCorrect`
- Progressively show scaffolding levels
- Animate result banner

---

## 📚 Atividades em Canva

### Processo de Criação (para Agentes)

1. **Mestre do Design (Designer Principal)**
   - Cria template base no Canva
   - Define paleta de cores para o tópico
   - Cria cover image para a atividade

2. **Designer Interativo**
   - Cria representações visuais das questões
   - Usa diagramas, ícones, ilustrações
   - Testa acessibilidade (cores, contraste)

3. **Curador de Conteúdo**
   - Valida clareza do texto
   - Verifica alinhamento pedagógico
   - Aprova para publicação

### Template Divisão Decimal

**Canva Community Template Link:** `[To be filled by Design Master]`

**Elementos Visuais Obrigatórios:**
- ✅ Representação visual do dividendo (círculos, barras, etc)
- ✅ Operação clara (÷ símbolo)
- ✅ Opções coloridas (A, B, C, D)
- ✅ Feedback visual (checkmark/X para respostas)

**Exemplo Temático:**
- **Tema:** Mercado/Dinheiro
- **Ícones:** 💵 🛒 🏪 
- **Cor Primária:** Verde (#22C55E) - relacionado a dinheiro
- **Subtema:** "Dividir o troco" ou "Repartir compras"

---

## 📄 Materiais Printáveis

### Para Professores (Canva Design)

**Formato:** A4, horizontal, cores vibrantes

**Conteúdo:**
1. Título da atividade
2. 5-10 problemas (versão simplificada)
3. Espaço para respostas
4. Gabarito (verso)

**Template:** `printable-activity-divisao-decimal.canva`

**Exemplo:**
```
╔════════════════════════════════════════╗
║   DIVISÃO DECIMAL - Folha de Atividade ║
║         6º Ano - Sem Calculadora      ║
╠════════════════════════════════════════╣
║                                        ║
║  1) Quanto é 1,5 ÷ 3?                 ║
║     Resposta: ____________________    ║
║                                        ║
║  2) Quanto é 2,4 ÷ 6?                 ║
║     Resposta: ____________________    ║
║                                        ║
║  [... mais 3 problemas ...]            ║
║                                        ║
╚════════════════════════════════════════╝
```

---

## ♿ Diretrizes de Acessibilidade

### Cores
- ✅ Contraste mínimo 4.5:1 para texto vs background
- ✅ Não use cor sozinha para comunicar (use também texto)
- ✅ Teste com simulador de daltonismo

### Tipografia
- ✅ Mínimo 16px para corpo de texto
- ✅ Line-height ≥ 1.5 para legibilidade
- ✅ Sem mais de 80 caracteres por linha

### Imagens
- ✅ Sempre adicione alt-text descritivo
- ✅ Ícones devem ter labels
- ✅ Verifique se a imagem é compreendida em escala de cinza

### Animações
- ✅ Respeite `prefers-reduced-motion`
- ✅ Transições ≤ 300ms
- ✅ Sem piscadas/flashes (> 3/seg)

---

## 🔗 Integração com Sistema

### Como os Agentes Criam no Canva

1. **Abrir Canva**
   - Criar novo design: "800 x 600 pixels" (para questões)
   - Ou "400 x 300 pixels" (para cards)

2. **Usar Tema**
   - Acessar biblioteca: Brands → Plataforma Educacional
   - Aplicar colors: #0EA5E9, #22C55E, #EF4444, #F59E0B

3. **Inserir Elementos**
   - Textos: usar fontes da biblioteca
   - Ícones: buscar "education", "math", "division"
   - Formas: círculos, setas, para representar divisão

4. **Exportar**
   - Formato: PNG (transparente) ou JPG (RGB)
   - Resolução: 2x (para Retina displays)
   - Salvar em pasta: `/canva-designs/[topico]/[atividade].png`

5. **Registrar no Sistema**
   - URL do Canva design: `https://canva.com/design/[ID]`
   - Asset ID (se uploaded ao sistema)
   - Descrição visual

### Exemplo de Visual Assets JSON

```json
{
  "visualAssets": {
    "canvaUrl": "https://canva.com/design/DAE2nJ4x/edit",
    "canvaDesignId": "DAE2nJ4x",
    "coverImage": "https://cdn.plataforma.com/covers/divisao-decimal.png",
    "colors": {
      "primary": "#0EA5E9",
      "secondary": "#22C55E",
      "accent": "#F59E0B"
    },
    "theme": "mercado",
    "questionsTemplate": "https://canva.com/design/[question-template-id]",
    "feedbackTemplate": "https://canva.com/design/[feedback-template-id]"
  },
  "printableUrl": "https://canva.com/design/[printable-id]"
}
```

---

## 📞 Contato & Suporte

- **Designer Principal:** Responsável por cores, temas, templates master
- **Designer Interativo:** Responsável por componentes, ícones, layouts
- **Curador:** Responsável por validação final

**Slack Channel:** #design-system
**Canva Team Link:** [Link to Shared Team]

---

## 📅 Cronograma de Criação

### Fase 1 (Semana 1-2): Templates Base
- [ ] Cover card template
- [ ] Question display template
- [ ] Feedback templates (correct/incorrect)

### Fase 2 (Semana 3-4): Atividades Divisão Decimal
- [ ] Activity 1: Básica (1.5 ÷ 3, etc)
- [ ] Activity 2: Intermediária (12.5 ÷ 5, etc)
- [ ] Activity 3: Aplicação Prática (moeda)

### Fase 3 (Semana 5): Materiais Printáveis
- [ ] Folha de atividade
- [ ] Gabarito
- [ ] Poster motivacional

---

**Versão:** 1.0  
**Última atualização:** 2026-04-08  
**Responsável:** Mestre do Design
