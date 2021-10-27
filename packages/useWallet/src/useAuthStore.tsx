import { providers } from 'ethers';
import create from 'zustand';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';

export type Web3Auth = {
  logout: () => void;
  login: (provider: providers.Web3Provider) => Promise<void>;
  checkAuth: (provider: providers.Web3Provider) => Promise<void>;
  authToken: string | null;
  isLoggingIn: boolean;
};

export const useAuthStore = create<Web3Auth>((set) => ({
  authToken: null,
  isLoggingIn: false,
  checkAuth: async (provider: providers.Web3Provider) => {
    const authToken = await getExistingAuth(provider);
    set({ authToken });
  },
  login: async (provider: providers.Web3Provider) => {
    set({ isLoggingIn: true });
    try {
      let authToken = await getExistingAuth(provider);
      if (!authToken) {
        authToken = await authenticateWallet(provider);
      }
      set({ authToken, isLoggingIn: false });
    } catch (e) {
      set({ isLoggingIn: false });
      throw e;
    }
  },
  logout: () => {
    clearToken();
    set({ authToken: null, isLoggingIn: false });
  },
}));
