import { create } from 'zustand'

interface AppState {
  isLoading: boolean
  currentSection: string
  setLoading: (loading: boolean) => void
  setCurrentSection: (section: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: true,
  currentSection: 'hero',
  setLoading: (loading) => set({ isLoading: loading }),
  setCurrentSection: (section) => set({ currentSection: section }),
}))
