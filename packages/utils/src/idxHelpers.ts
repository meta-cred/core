import { ImageSources } from '@ceramicstudio/idx-constants';

export const getIpfsUrl = (
  hash: string,
  ipfsEndpoint = 'https://ipfs.infura.io',
): string => `${ipfsEndpoint}/ipfs/${hash.slice(7)}`;

export const getIdxImageUrl = (
  image: ImageSources | undefined,
  ipfsEndpoint?: string,
): string =>
  image?.original?.src ? getIpfsUrl(image?.original.src, ipfsEndpoint) : '';

export const getIdxProfileLink = (did: string): string =>
  `https://self.id/${did}`;
