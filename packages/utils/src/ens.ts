import type { BaseProvider } from '@ethersproject/providers';
import { utils } from 'ethers';

export const resolveIfEnsName = async (
  ensName: string | null | undefined,
  provider: BaseProvider,
): Promise<string | null> => {
  if (!ensName) return null;

  if (utils.isAddress(ensName)) return ensName;

  return provider.resolveName(ensName);
};
