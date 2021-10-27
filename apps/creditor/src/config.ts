interface IConfig {
  chainId: number;
  onboardDappId: string;
  infuraId: string;
  ipfsEndpoint: string;
  ceramicUrl: string;
  ceramicEndpoint: string;
  graphqlEndpoint: string;
  graphqlAdminSecret: string;
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
  chainId: parseEnv(process.env.NEXT_PUBLIC_CHAIN_ID, 1),
  onboardDappId: parseEnv(process.env.NEXT_PUBLIC_ONBOARD_DAPP_ID, ''),
  infuraId: parseEnv(process.env.NEXT_PUBLIC_INFURA_ID),
  ipfsEndpoint: parseEnv(
    process.env.NEXT_PUBLIC_IPFS_ENDPOINT,
    'https://ipfs.infura.io',
  ),
  ceramicUrl: parseEnv(
    process.env.NEXT_PUBLIC_CERAMIC_URL,
    'https://gateway-clay.ceramic.network',
  ),
  ceramicEndpoint: parseEnv(
    process.env.NEXT_PUBLIC_CERAMIC_ENDPOINT,
    'testnet-clay',
  ),
  graphqlEndpoint: parseEnv(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    'https://metacred.hasura.app/v1/graphql',
  ),
  graphqlAdminSecret: parseEnv(process.env.GRAPHQL_ADMIN_SECRET, ''),
};
