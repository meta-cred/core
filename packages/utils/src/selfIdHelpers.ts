import type { ImageSources } from '@datamodels/identity-profile-basic';
import { utils } from 'ethers';

import { ChainId } from './constants';
import { Maybe } from './typeUtils';

export const addressToCaip10String = (
  address: string,
  chainId: number = ChainId.Mainnet,
): string => `${address.toLowerCase()}@eip155:${chainId}`;

export const formatCeramicId = (addressOrDID: string | null): string | null =>
  addressOrDID && utils.isAddress(addressOrDID)
    ? addressToCaip10String(addressOrDID)
    : addressOrDID;

export const getIpfsUrl = (
  hash: string,
  ipfsEndpoint = 'https://gateway.ipfs.io',
): string => `${ipfsEndpoint}/ipfs/${hash.slice(7)}`;

export const getSelfIdImageUrl = (
  image: Maybe<ImageSources>,
  ipfsEndpoint?: string,
): string =>
  image?.original?.src ? getIpfsUrl(image.original.src, ipfsEndpoint) : '';

export const getSelfIdProfileLink = (did: string): string =>
  `https://self.id/${did}`;
