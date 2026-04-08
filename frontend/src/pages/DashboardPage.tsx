import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { activitiesService } from '../services/api';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { data: activitiesData, isLoading } = useQuery({
    queryKey: ['activities', user?.grade],
    queryFn: () => activitiesService.list({ grade: user?.grade }),
  });

  const activities = activitiesData?.data || [];

  const handleStartActivity = (activityId: string) => {
    navigate(`/activity/${activityId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">📚 Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.name}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name}! 👋
          </h2>
          <p className="text-gray-600">Choose an activity to get started with your learning</p>
        </div>

        {/* Activities Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading activities...</p>
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No activities available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {activity.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">
                    ⏱️ {activity.estimatedDuration} min
                  </span>
                </div>

                <button
                  onClick={() => handleStartActivity(activity.id)}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
                >
                  Start Activity
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
