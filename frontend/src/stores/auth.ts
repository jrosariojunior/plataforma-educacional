import { create } from 'zustand';
import { User, AuthResponse } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;

  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;

  // Derived from auth response
  loginSuccess: (response: AuthResponse) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // Load from localStorage on init
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken,
    refreshToken: localStorage.getItem('refreshToken'),
    isLoading: false,
    error: null,

    setUser: (user) => {
      set({ user });
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    },

    setToken: (token) => {
      set({ token });
      localStorage.setItem('token', token);
    },

    setRefreshToken: (refreshToken) => {
      set({ refreshToken });
      localStorage.setItem('refreshToken', refreshToken);
    },

    setLoading: (isLoading) => set({ isLoading }),

    setError: (error) => set({ error }),

    logout: () => {
      set({
        user: null,
        token: null,
        refreshToken: null,
        error: null,
      });
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },

    loginSuccess: (response) => {
      const user: User = {
        id: response.id,
        email: response.email,
        name: response.name || '',
        role: (response.role as 'STUDENT' | 'TEACHER') || 'STUDENT',
      };

      set({
        user,
        token: response.token,
        refreshToken: response.refreshToken,
        error: null,
        isLoading: false,
      });

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
    },
  };
});
