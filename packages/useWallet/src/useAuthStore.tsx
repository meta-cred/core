import type { Web3Provider } from '@ethersproject/providers';
import create from 'zustand';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';

export type Web3Auth = {
  logout: () => void;
  login: (provider: Web3Provider, appName: string) => Promise<void>;
  checkAuth: (provider: Web3Provider, appName: string) => Promise<void>;
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
  checkAuth: async (provider: Web3Provider, appName: string) => {
    const authToken = await getExistingAuth(provider, appName);
    set({ authToken, didRehydrate: true });
  },
  login: async (provider: Web3Provider, appName: string) => {
    set({ isLoggingIn: true });
    try {
      let authToken = await getExistingAuth(provider, appName);
      if (!authToken) {
        authToken = await authenticateWallet(provider, appName);
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
