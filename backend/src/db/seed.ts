import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Dados de atividades para divisão decimal (6º ano)
const decimalDivisionActivities = [
  {
    title: 'Divisão Decimal Básica',
    description: 'Aprenda os fundamentos da divisão com números decimais',
    topic: 'divisao-decimal',
    grade: 6,
    difficulty: 'beginner',
    estimatedDuration: 15,
    visualAssets: {
      canvaUrl: 'https://canva.com/design/DAE2nJ4x/edit',
      canvaDesignId: 'DAE2nJ4x',
      coverImage: 'https://images.unsplash.com/photo-1577720643272-265e434f5d6f?w=400&h=300&fit=crop',
      colors: {
        primary: '#0EA5E9',
        secondary: '#22C55E',
        accent: '#F59E0B',
      },
      theme: 'basic-math',
    },
    printableUrl: 'https://canva.com/design/printable-divisao-basica/edit',
    schema: {
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Quanto é 1,5 ÷ 3?',
          options: ['0,5', '0,3', '1,5', '3,0'],
          correctAnswer: '0',
          misconceptions: ['ALIGN_DECIMALS', 'IGNORE_COMMA'],
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Quanto é 2,4 ÷ 6?',
          options: ['0,4', '0,2', '0,6', '2,4'],
          correctAnswer: '0',
          misconceptions: ['ALIGN_DECIMALS'],
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Quanto é 3,6 ÷ 4?',
          options: ['0,9', '1,2', '1,4', '0,8'],
          correctAnswer: '0',
          misconceptions: ['IGNORE_OPERATION'],
        },
      ],
    },
  },
  {
    title: 'Divisão com Decimais Intermediário',
    description: 'Divisões mais complexas com números decimais',
    topic: 'divisao-decimal',
    grade: 6,
    difficulty: 'intermediate',
    estimatedDuration: 20,
    schema: {
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Quanto é 12,5 ÷ 5?',
          options: ['2,5', '2,3', '3,5', '1,5'],
          correctAnswer: '0',
          misconceptions: ['PLACE_VALUE_ERROR'],
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Quanto é 7,2 ÷ 8?',
          options: ['0,9', '0,8', '1,0', '0,7'],
          correctAnswer: '0',
          misconceptions: ['ROUNDING_ERROR'],
        },
      ],
    },
  },
  {
    title: 'Aplicações Práticas de Divisão Decimal',
    description: 'Use divisão decimal em problemas do dia a dia',
    topic: 'divisao-decimal',
    grade: 6,
    difficulty: 'intermediate',
    estimatedDuration: 25,
    schema: {
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question:
            'Se você tem R$ 15,60 para dividir igualmente entre 4 amigos, quanto cada um recebe?',
          options: ['R$ 3,90', 'R$ 3,60', 'R$ 4,10', 'R$ 3,50'],
          correctAnswer: '0',
          misconceptions: ['REAL_WORLD_APPLICATION'],
        },
      ],
    },
  },
];

// Dados de equívocos comuns
const misconceptions = [
  {
    code: 'ALIGN_DECIMALS',
    title: 'Desalinhamento de Casas Decimais',
    description: 'Aluno não alinha corretamente as casas decimais na divisão',
    level: 1,
    scaffolding: {
      level1: 'Dica: Conte quantas casas após a vírgula tem no número.',
      level2:
        'Alinha o ponto decimal acima do ponto decimal do divisor. Isso ajuda a manter a ordem das casas decimais.',
      level3:
        'Na divisão 1,5 ÷ 3, você vê que 1,5 tem uma casa decimal. Então você alinha: 1.5 ÷ 3.0 para ajudar a visualizar melhor.',
    },
    examples: [
      { problem: '1,5 ÷ 3', wrongAnswer: '5', rightAnswer: '0,5' },
      { problem: '2,4 ÷ 6', wrongAnswer: '4', rightAnswer: '0,4' },
    ],
  },
  {
    code: 'IGNORE_COMMA',
    title: 'Ignorar a Vírgula',
    description: 'Aluno ignora a vírgula e faz a divisão como se fosse inteira',
    level: 1,
    scaffolding: {
      level1: 'Dica: A vírgula é importante! Ela mostra onde está a unidade.',
      level2:
        'Antes de dividir, observe onde está a vírgula. Isso muda o tamanho do número. 15 é diferente de 1,5!',
      level3:
        'Em 1,5 ÷ 3: primeiro você vê que 1,5 é menor que 3, então o resultado tem que ser menor que 1. Isso significa que começa com 0,',
    },
    examples: [
      { problem: '1,5 ÷ 3', wrongAnswer: '5', rightAnswer: '0,5' },
    ],
  },
  {
    code: 'IGNORE_OPERATION',
    title: 'Não Executar a Operação',
    description: 'Aluno não realiza a divisão e dá qualquer resposta',
    level: 2,
    scaffolding: {
      level1: 'Dica: Você precisa fazer a conta inteira, passo a passo.',
      level2:
        'Divida passo a passo: quantas vezes o divisor cabe no dividendo? Conte nos dedos se precisar.',
      level3:
        'Em 3,6 ÷ 4: Quantas vezes 4 cabe em 3? 0 vezes. Então coloca 0, antes da vírgula. Depois: 36 ÷ 4 = 9. Então é 0,9',
    },
    examples: [
      { problem: '3,6 ÷ 4', wrongAnswer: '3.6 ou 4', rightAnswer: '0,9' },
    ],
  },
  {
    code: 'PLACE_VALUE_ERROR',
    title: 'Erro de Valor Posicional',
    description: 'Aluno não respeita o valor posicional dos algarismos',
    level: 2,
    scaffolding: {
      level1:
        'Dica: Cada posição tem um valor diferente. O primeiro número é as unidades.',
      level2:
        'Na divisão 12,5 ÷ 5, você tem 12 unidades e 5 décimos. Divida as unidades primeiro.',
      level3:
        'Em 12,5 ÷ 5: divide 12 por 5 = 2 com resto 2. Resto 2 + 5 décimos = 25 décimos. 25 ÷ 5 = 5 décimos. Total: 2,5',
    },
    examples: [
      { problem: '12,5 ÷ 5', wrongAnswer: '2,1 ou 1,2', rightAnswer: '2,5' },
    ],
  },
  {
    code: 'ROUNDING_ERROR',
    title: 'Arredondamento Incorreto',
    description: 'Aluno arredonda o resultado quando não deveria ou vice-versa',
    level: 2,
    scaffolding: {
      level1: 'Dica: Nem sempre precisa arredondar. O resultado exato é melhor.',
      level2:
        'Faça a divisão completa. Se sobrar resto, continue com casas decimais.',
      level3:
        'Em 7,2 ÷ 8: 7,2 = 72 décimos. 72 ÷ 8 = 9 décimos = 0,9. Resultado exato, sem necessidade de arredondar.',
    },
    examples: [
      { problem: '7,2 ÷ 8', wrongAnswer: '0,8 ou 1,0', rightAnswer: '0,9' },
    ],
  },
  {
    code: 'REAL_WORLD_APPLICATION',
    title: 'Dificuldade em Aplicação Prática',
    description: 'Aluno não consegue aplicar divisão decimal em problemas reais',
    level: 3,
    scaffolding: {
      level1:
        'Dica: Leia o problema com calma. O que você precisa encontrar? Uma parte igual de algo.',
      level2:
        'Identifique: qual é o total? Quantas partes? Depois divida o total pelo número de partes.',
      level3:
        'Em "R$ 15,60 para 4 amigos": Total = 15,60. Partes = 4. Então: 15,60 ÷ 4 = 3,90. Cada amigo recebe R$ 3,90.',
    },
    examples: [
      {
        problem: 'Dividir R$ 15,60 para 4 amigos',
        wrongAnswer: 'R$ 3,60 ou R$ 4,10',
        rightAnswer: 'R$ 3,90',
      },
    ],
  },
];

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...\n');

  try {
    // Limpar dados anteriores (opcional)
    console.log('🧹 Limpando dados anteriores...');
    await prisma.submission.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.activity.deleteMany({});
    await prisma.misconception.deleteMany({});
    console.log('✅ Dados anteriores removidos\n');

    // Criar equívocos
    console.log('📝 Criando equívocos comuns...');
    for (const misconception of misconceptions) {
      await prisma.misconception.create({
        data: misconception,
      });
    }
    console.log(`✅ ${misconceptions.length} equívocos criados\n`);

    // Criar atividades
    console.log('📚 Criando atividades de divisão decimal...');
    for (const activity of decimalDivisionActivities) {
      await prisma.activity.create({
        data: activity,
      });
    }
    console.log(`✅ ${decimalDivisionActivities.length} atividades criadas\n`);

    // Criar usuário de teste
    console.log('👤 Criando usuário de teste...');
    const user = await prisma.user.create({
      data: {
        email: 'teste@teste.com',
        password: 'senha123', // Em produção, criptografar!
        name: 'Aluno Teste',
        role: 'STUDENT',
        grade: 6,
      },
    });

    const student = await prisma.student.create({
      data: {
        userId: user.id,
        profile: {
          sessionsCompleted: 0,
          totalTimeSpent: 0,
          misconceptions: [],
          consolidated: [],
        },
      },
    });
    console.log(`✅ Usuário criado: teste@teste.com\n`);

    console.log('✨ Seed completo!');
    console.log('\n📋 Resumo:');
    console.log(`   - ${misconceptions.length} equívocos criados`);
    console.log(`   - ${decimalDivisionActivities.length} atividades criadas`);
    console.log(`   - 1 usuário de teste criado`);
    console.log('\n🧪 Para testar:');
    console.log('   Email: teste@teste.com');
    console.log('   Senha: senha123');
  } catch (error) {
    console.error('❌ Erro durante seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
