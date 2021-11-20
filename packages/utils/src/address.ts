import { utils } from 'ethers';

function shortenString(str: string): string {
  return `${str.substring(0, 6)}...${str.substring(str.length - 4)}`;
}

export function shortenAddress(address: string): string {
  try {
    const formattedAddress = utils.getAddress(address);
    return shortenString(formattedAddress);
  } catch {
    throw new TypeError("Invalid input, address can't be parsed");
  }
}

export function shortenIfAddress(address: string | null | undefined): string {
  if (typeof address === 'string' && utils.isAddress(address)) {
    return shortenAddress(address);
  }
  return address || '';
}

export const isAddressEqual = (
  a: string | null | undefined,
  b: string | null | undefined,
): boolean => a?.toLowerCase() === b?.toLowerCase();
