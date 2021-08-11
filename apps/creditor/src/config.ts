interface IConfig {
  chainId: number;
  onboardDappId: string;
  infuraId: string;
  ipfsEndpoint: string;
  ceramicUrl: string;
}

function parseEnv<T extends string | number>(
  v: string | undefined,
  defaultValue?: T,
): T {
  if (v) {
    return typeof defaultValue === 'number' ? (Number(v) as T) : (v as T);
  }

  if (defaultValue == null) throw new Error('Missing ENV Variable');

  return defaultValue;
}

export const CONFIG: IConfig = {
  chainId: parseEnv(process.env.CHAIN_ID, 1),
  onboardDappId: parseEnv(process.env.ONBOARD_DAPP_ID, ''),
  infuraId: parseEnv(process.env.INFURA_ID, 'a60f8c4d3d4a40a49c4568570a7546b7'),
  ipfsEndpoint: parseEnv(process.env.IPFS_ENDPOINT, 'https://ipfs.infura.io'),
  ceramicUrl: parseEnv(
    process.env.CERAMIC_URL,
    'https://gateway-clay.ceramic.network',
  ),
};
