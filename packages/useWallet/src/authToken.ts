import type { Web3Provider } from '@ethersproject/providers';
import { storage } from '@meta-cred/utils';

import * as did from './web3JWT';

const STORAGE_KEY =
  process.env.AUTH_TOKEN_STORAGE_KEY || 'use-wallet-auth-token';

export const getTokenFromStore = (): string | null => storage.get(STORAGE_KEY);
export const setTokenInStore = (token: string): void =>
  storage.set(STORAGE_KEY, token);
export const clearToken = (): void => storage.remove(STORAGE_KEY);

export async function getExistingAuth(
  ethersProvider: Web3Provider,
  appName: string,
): Promise<string | null> {
  const token = getTokenFromStore();
  if (!token) return null;

  try {
    const claim = await did.verifyToken(token, ethersProvider, appName);
    const address = await ethersProvider.getSigner().getAddress();

    if (claim?.iss !== address) throw new Error('User changed');

    return token;
  } catch (e) {
    clearToken();
    return null;
  }
}

export async function authenticateWallet(
  ethersProvider: Web3Provider,
  appName: string,
): Promise<string> {
  const token = await did.createToken(ethersProvider, appName);
  setTokenInStore(token);
  return token;
}
