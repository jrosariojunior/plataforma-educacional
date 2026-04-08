import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

// ==================== AUTH ENDPOINTS ====================

export const authService = {
  register: (data: {
    email: string;
    password: string;
    name: string;
    role: 'STUDENT' | 'TEACHER';
    grade?: number;
  }) => apiClient.post('/auth/register', data),

  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),

  refresh: (refreshToken: string) =>
    apiClient.post('/auth/refresh', { refreshToken }),
};

// ==================== ACTIVITIES ENDPOINTS ====================

export const activitiesService = {
  list: (filters?: { grade?: number; topic?: string; limit?: number; offset?: number }) =>
    apiClient.get('/activities', { params: filters }),

  getById: (id: string) => apiClient.get(`/activities/${id}`),
};

// ==================== SESSIONS ENDPOINTS ====================

export const sessionsService = {
  create: (activityId: string) =>
    apiClient.post('/sessions', { activityId }),

  getById: (id: string) => apiClient.get(`/sessions/${id}`),

  submit: (id: string, data: { questionId: string; answer: string; responseTime?: number }) =>
    apiClient.post(`/sessions/${id}/submit`, data),

  complete: (id: string) => apiClient.post(`/sessions/${id}/complete`),
};

// ==================== STUDENT ENDPOINTS ====================

export const studentsService = {
  getProfile: () => apiClient.get('/students/me'),

  getHistory: (studentId: string, limit?: number, offset?: number) =>
    apiClient.get(`/students/${studentId}/history`, { params: { limit, offset } }),

  resetProfile: (studentId: string, reason: string) =>
    apiClient.post(`/students/${studentId}/reset-profile`, { reason }),
};

// ==================== TEACHER ENDPOINTS ====================

export const teachersService = {
  getClasses: () => apiClient.get('/teachers/classes'),

  getAnalytics: (classId: string, filters?: { from?: string; to?: string }) =>
    apiClient.get(`/teachers/classes/${classId}/analytics`, { params: filters }),

  generateInvite: (classId: string, expiresIn?: number) =>
    apiClient.post(`/teachers/classes/${classId}/invite`, { expiresIn }),
};
