import { storage } from '@meta-cred/utils';
import { providers } from 'ethers';

import * as did from './web3JWT';

const STORAGE_KEY =
  process.env.AUTH_TOKEN_STORAGE_KEY || 'use-wallet-auth-token';

export const getTokenFromStore = (): string | null => storage.get(STORAGE_KEY);
export const setTokenInStore = (token: string): void =>
  storage.set(STORAGE_KEY, token);
export const clearToken = (): void => storage.remove(STORAGE_KEY);

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
  console.log({ token });

  setTokenInStore(token);
  return token;
}
