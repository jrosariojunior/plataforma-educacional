import { SessionResponse, Misconception } from '../types';

interface FeedbackDisplayProps {
  feedback: SessionResponse;
  onNext: () => void;
}

export default function FeedbackDisplay({ feedback, onNext }: FeedbackDisplayProps) {
  const { isCorrect, feedback: feedbackText, scaffolding, misconception } = feedback;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-up space-y-6">
      {/* Result Banner */}
      <div
        className={`p-6 rounded-lg text-center ${
          isCorrect ? 'bg-green-100 border-2 border-green-400' : 'bg-orange-100 border-2 border-orange-400'
        }`}
      >
        <div className="text-5xl mb-3">{isCorrect ? '🎉' : '🤔'}</div>
        <h3 className={`text-2xl font-bold ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
          {isCorrect ? 'Parabéns!' : 'Vamos tentar novamente!'}
        </h3>
        <p className={`text-lg ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
          {feedbackText}
        </p>
      </div>

      {/* Explanation */}
      {feedback.explanation && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h4 className="font-semibold text-blue-900 mb-2">📚 Explicação:</h4>
          <p className="text-blue-800">{feedback.explanation}</p>
        </div>
      )}

      {/* Misconception Detected */}
      {misconception && (
        <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
          <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Ponto de atenção:</h4>
          <p className="text-yellow-800 mb-3">
            Detectamos uma dificuldade comum: <strong>{misconception.title}</strong>
          </p>

          {/* Scaffolding Levels */}
          {scaffolding && (
            <div className="space-y-3">
              {scaffolding.level >= 1 && scaffolding.hint && (
                <div className="bg-white border-l-4 border-yellow-300 p-3 rounded">
                  <p className="text-sm">
                    <span className="font-semibold">💡 Dica:</span> {scaffolding.hint}
                  </p>
                </div>
              )}

              {scaffolding.level >= 2 && scaffolding.explanation && (
                <div className="bg-white border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-sm">
                    <span className="font-semibold">📖 Explicação:</span> {scaffolding.explanation}
                  </p>
                </div>
              )}

              {scaffolding.level >= 3 && scaffolding.tutorial && (
                <div className="bg-white border-l-4 border-yellow-500 p-3 rounded">
                  <p className="text-sm">
                    <span className="font-semibold">🎓 Tutorial:</span> {scaffolding.tutorial}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Stats */}
      {feedback.progress && (
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-2xl font-bold text-blue-600">{feedback.progress.current}</p>
            <p className="text-xs text-gray-600">Questão atual</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-2xl font-bold text-gray-600">/</p>
            <p className="text-xs text-gray-600">De</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-2xl font-bold text-blue-600">{feedback.progress.total}</p>
            <p className="text-xs text-gray-600">Total</p>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
          style={{
            width: `${(feedback.progress.current / feedback.progress.total) * 100}%`,
          }}
        />
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
      >
        {feedback.progress.current >= feedback.progress.total
          ? '✅ Atividade Concluída!'
          : '➡️ Próxima Questão'}
      </button>

      {/* Remaining Attempts */}
      {feedback.remainingAttempts && !isCorrect && (
        <p className="text-center text-sm text-gray-600">
          Tentativas restantes: <span className="font-bold">{feedback.remainingAttempts}</span>
        </p>
      )}
    </div>
  );
}
