import type { Web3Provider } from '@ethersproject/providers';
import create from 'zustand';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';

export type Web3Auth = {
  logout: () => void;
  login: (provider: Web3Provider) => Promise<void>;
  checkAuth: (provider: Web3Provider) => Promise<void>;
  authToken: string | null;
  address: string | null;
  isLoggingIn: boolean;
  didRehydrate: boolean;
};

export const useAuthStore = create<Web3Auth>((set) => ({
  authToken: null,
  address: null,
  isLoggingIn: false,
  didRehydrate: false,
  checkAuth: async (provider: Web3Provider) => {
    const authToken = await getExistingAuth(provider);
    set({ authToken, didRehydrate: true });
  },
  login: async (provider: Web3Provider) => {
    set({ isLoggingIn: true });
    try {
      let authToken = await getExistingAuth(provider);
      if (!authToken) {
        authToken = await authenticateWallet(provider);
      }
      const address = (await provider.getSigner().getAddress())?.toLowerCase();
      set({ authToken, address, isLoggingIn: false });
    } catch (e) {
      set({ isLoggingIn: false });
      throw e;
    }
  },
  logout: () => {
    clearToken();
    set({ authToken: null, address: null, isLoggingIn: false });
  },
}));
