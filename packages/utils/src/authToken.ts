import { providers } from 'ethers';

import * as did from './did';
import * as store from './storage';

const STORAGE_KEY = process.env.AUTH_TOKEN_STORAGE_KEY || 'metacred-auth-token';

export const getTokenFromStore = (): string | null => store.get(STORAGE_KEY);
export const setTokenInStore = (token: string): void =>
  store.set(STORAGE_KEY, token);
export const clearToken = (): void => store.remove(STORAGE_KEY);

export async function getExistingAuth(
  ethersProvider: providers.Web3Provider,
): Promise<string | null> {
  const token = getTokenFromStore();
  if (!token) return null;

  try {
    await did.verifyToken(token, ethersProvider);
    return token;
  } catch (e) {
    clearToken();
    return null;
  }
}

export async function authenticateWallet(
  ethersProvider: providers.Web3Provider,
): Promise<string> {
  const token = await did.createToken(ethersProvider);
  setTokenInStore(token);
  return token;
}
