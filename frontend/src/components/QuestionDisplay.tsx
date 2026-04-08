import { Question } from '../types';
import { useState } from 'react';

interface QuestionDisplayProps {
  question: Question;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer?: string;
  isSubmitted?: boolean;
  isCorrect?: boolean;
}

const questionTypeIcons = {
  'multiple-choice': '❓',
  'short-answer': '📝',
  numeric: '🔢',
};

export default function QuestionDisplay({
  question,
  onAnswerSelect,
  selectedAnswer,
  isSubmitted,
  isCorrect,
}: QuestionDisplayProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">
            {questionTypeIcons[question.type as keyof typeof questionTypeIcons]}
          </span>
          <h2 className="text-2xl font-bold text-gray-800">{question.question}</h2>
        </div>

        {isSubmitted && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isCorrect
                ? 'bg-green-100 border border-green-300'
                : 'bg-red-100 border border-red-300'
            }`}
          >
            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
            <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Parabéns! Resposta correta!' : 'Resposta incorreta. Tente novamente!'}
            </span>
          </div>
        )}
      </div>

      {/* Answer Options */}
      {question.type === 'multiple-choice' && question.options ? (
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === String(index);
            const isCorrectAnswer = String(question.correctAnswer) === String(index);
            const showCorrect = isSubmitted && isCorrectAnswer;
            const showIncorrect = isSubmitted && isSelected && !isCorrectAnswer;

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && onAnswerSelect(String(index))}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                disabled={isSubmitted}
                className={`w-full p-4 rounded-lg font-semibold transition-all duration-200 border-2 ${
                  showCorrect
                    ? 'bg-green-100 border-green-400 text-green-800'
                    : showIncorrect
                      ? 'bg-red-100 border-red-400 text-red-800'
                      : isSelected && !isSubmitted
                        ? 'bg-blue-100 border-blue-400 text-blue-800'
                        : hovered === index && !isSubmitted
                          ? 'bg-gray-100 border-gray-400 text-gray-800'
                          : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold ${
                      isSelected
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'bg-white border-gray-400'
                    }`}
                  >
                    {showCorrect && '✓'}
                    {showIncorrect && '✗'}
                    {!isSelected && String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Digite sua resposta..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            disabled={isSubmitted}
          />
        </div>
      )}

      {/* Visual Hint Area */}
      {!isSubmitted && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <p className="text-sm text-blue-700">
            <span className="font-semibold">💡 Dica:</span> Pense bem antes de responder. Você pode
            tentar novamente se errar!
          </p>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Questão {question.id}</span>
        <div className="flex gap-2">
          <span className="text-gray-400">●●●●●</span>
        </div>
      </div>
    </div>
  );
}
