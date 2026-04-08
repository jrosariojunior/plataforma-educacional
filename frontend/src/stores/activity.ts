import { create } from 'zustand';
import { Session, Question, SessionResponse } from '../types';

interface ActivityState {
  currentSession: Session | null;
  currentQuestionIndex: number;
  currentFeedback: SessionResponse | null;
  isLoading: boolean;
  error: string | null;

  setCurrentSession: (session: Session) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setCurrentFeedback: (feedback: SessionResponse) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearSession: () => void;

  // Helpers
  getCurrentQuestion: () => Question | undefined;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
}

export const useActivityStore = create<ActivityState>((set, get) => ({
  currentSession: null,
  currentQuestionIndex: 0,
  currentFeedback: null,
  isLoading: false,
  error: null,

  setCurrentSession: (session) => {
    set({
      currentSession: session,
      currentQuestionIndex: 0,
      currentFeedback: null,
    });
  },

  setCurrentQuestionIndex: (index) => {
    set({ currentQuestionIndex: index });
  },

  setCurrentFeedback: (feedback) => {
    set({ currentFeedback: feedback });
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },

  setError: (error) => {
    set({ error });
  },

  clearSession: () => {
    set({
      currentSession: null,
      currentQuestionIndex: 0,
      currentFeedback: null,
      error: null,
    });
  },

  getCurrentQuestion: () => {
    const { currentSession, currentQuestionIndex } = get();
    if (!currentSession?.activity?.schema?.questions) return undefined;
    return currentSession.activity.schema.questions[currentQuestionIndex];
  },

  goToNextQuestion: () => {
    const { currentQuestionIndex, currentSession } = get();
    if (currentSession?.activity?.schema?.questions) {
      const maxIndex = currentSession.activity.schema.questions.length - 1;
      if (currentQuestionIndex < maxIndex) {
        set({ currentQuestionIndex: currentQuestionIndex + 1, currentFeedback: null });
      }
    }
  },

  goToPreviousQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1, currentFeedback: null });
    }
  },
}));
