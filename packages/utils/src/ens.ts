import { isAddress } from '@ethersproject/address';
import type { BaseProvider } from '@ethersproject/providers';

export const resolveIfEnsName = async (
  ensName: string | null | undefined,
  provider: BaseProvider,
): Promise<string | null> => {
  if (!ensName) return null;

  if (isAddress(ensName)) return ensName;

  return provider.resolveName(ensName);
};

export const lookupEnsAddress = async (
  ethAddress: string | null | undefined,
  provider: BaseProvider,
): Promise<string | null> => {
  if (!ethAddress || !isAddress(ethAddress)) return null;

  return provider.lookupAddress(ethAddress);
};
