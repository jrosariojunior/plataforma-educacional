import { Activity } from '../types';
import clsx from 'clsx';

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
  isSelected?: boolean;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 border-green-300',
  intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  advanced: 'bg-red-100 text-red-800 border-red-300',
};

const difficultyLabels = {
  beginner: '🌱 Iniciante',
  intermediate: '📈 Intermediário',
  advanced: '🚀 Avançado',
};

export default function ActivityCard({ activity, onClick, isSelected }: ActivityCardProps) {
  const visual = activity.visualAssets as {
    coverImage?: string;
    colors?: { primary: string; secondary: string };
    theme?: string;
  } | null;

  const primaryColor = visual?.colors?.primary || '#0ea5e9';
  const coverImage = visual?.coverImage;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer',
        'border-2',
        isSelected ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-blue-300',
      )}
    >
      {/* Cover Image */}
      {coverImage ? (
        <div
          className="w-full h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white overflow-hidden"
          style={{ backgroundImage: `url(${coverImage})`, backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
      ) : (
        <div
          className="w-full h-40 bg-gradient-to-br flex items-center justify-center text-white text-3xl"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
          }}
        >
          📚
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{activity.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{activity.description}</p>

        {/* Metadata */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={clsx(
              'text-xs font-semibold px-2 py-1 rounded-full border',
              difficultyColors[activity.difficulty as keyof typeof difficultyColors],
            )}
          >
            {difficultyLabels[activity.difficulty as keyof typeof difficultyLabels]}
          </span>
          <span className="text-xs text-gray-500">⏱️ {activity.estimatedDuration} min</span>
        </div>

        {/* Topics Badge */}
        <div className="flex gap-2 mb-4">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {activity.topic}
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
            {activity.grade}º ano
          </span>
        </div>

        {/* CTA Button */}
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
          }}
        >
          ▶️ Iniciar Atividade
        </button>
      </div>
    </div>
  );
}
