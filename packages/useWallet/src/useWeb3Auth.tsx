import { providers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';

export type Web3Auth = {
  logout: () => void;
  login: () => Promise<void>;
  authToken: string | null;
  isLoggingIn: boolean;
};

export const useWeb3Auth = (
  provider: providers.Web3Provider | null,
  address: string | null,
): Web3Auth => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Rehydrate any existing auth tokens on mount or wallet change
  useEffect(() => {
    (async () => {
      if (!provider) return;

      const token = await getExistingAuth(provider);
      setAuthToken(token);
    })();
  }, [provider, address]);

  const login = useCallback(async () => {
    if (!provider)
      throw new Error('No Ethereum Provider, cannot authenticate!');

    setIsLoggingIn(true);
    try {
      let token: string | null = await getExistingAuth(provider);
      if (!token) {
        token = await authenticateWallet(provider);
      }
      setAuthToken(token);
    } finally {
      setIsLoggingIn(false);
    }
  }, [provider]);

  const logout = useCallback(() => {
    clearToken();
    setAuthToken(null);
  }, []);

  return {
    authToken,
    login,
    logout,
    isLoggingIn,
  };
};
