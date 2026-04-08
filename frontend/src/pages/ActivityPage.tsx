import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { activitiesService, sessionsService } from '../services/api';
import { useActivityStore } from '../stores/activity';

export default function ActivityPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');

  const { data: activity, isLoading } = useQuery({
    queryKey: ['activity', id],
    queryFn: () => activitiesService.getById(id!),
    enabled: !!id,
  });

  const { mutate: submitAnswer, isPending } = useMutation({
    mutationFn: async (sessionId: string) => {
      return sessionsService.submit(sessionId, {
        questionId: 'q1', // TODO: Use actual question ID
        answer,
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading activity...</p>
      </div>
    );
  }

  if (!activity?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Activity not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline text-sm mb-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{activity.data.title}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-6">{activity.data.description}</p>

          {/* Question Display */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Question 1 of 5
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This is where the question will be displayed
            </p>

            {/* Answer Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Answer:
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your answer..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => submitAnswer('session-id')}
                disabled={isPending || !answer}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isPending ? 'Checking...' : 'Check Answer'}
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Exit Activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
