import { Session } from "next-auth";
import { create } from "zustand";

interface AuthState {
  userProfile: Session | null;
  setUserProfile: (profile: Session) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  userProfile: null, // initial value
  setUserProfile: (profile: Session) => set(() => ({ userProfile: profile })),
}));
