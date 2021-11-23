import type { CeramicNetwork } from '@self.id/core/src/types';
import type { ConnectNetwork } from '@self.id/web/src/client';

interface IConfig {
  appUrl: string;
  chainId: number;
  onboardDappId: string;
  infuraId: string;
  alchemyId: string;
  pocketId: string;
  ipfsEndpoint: string;
  ceramicGateway: CeramicNetwork;
  ceramicEndpoint: ConnectNetwork;
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
  appUrl: parseEnv(process.env.NEXT_PUBLIC_VERCEL_URL, 'localhost:3000'),
  chainId: parseEnv(process.env.NEXT_PUBLIC_CHAIN_ID, 1),
  onboardDappId: parseEnv(process.env.NEXT_PUBLIC_ONBOARD_DAPP_ID, ''),
  infuraId: parseEnv(process.env.NEXT_PUBLIC_INFURA_ID),
  alchemyId: parseEnv(process.env.NEXT_PUBLIC_ALCHEMY_ID, ''),
  pocketId: parseEnv(process.env.NEXT_PUBLIC_POCKET_ID, ''),
  ipfsEndpoint: parseEnv(
    process.env.NEXT_PUBLIC_IPFS_ENDPOINT,
    'https://ipfs.infura.io',
  ),
  ceramicGateway: parseEnv<CeramicNetwork>(
    process.env.NEXT_PUBLIC_CERAMIC_GATEWAY,
    'mainnet-gateway',
  ),
  ceramicEndpoint: parseEnv<ConnectNetwork>(
    process.env.NEXT_PUBLIC_CERAMIC_ENDPOINT,
    'mainnet',
  ),
  graphqlEndpoint: parseEnv(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    'https://metacred.hasura.app/v1/graphql',
  ),
  graphqlAdminSecret: parseEnv(process.env.GRAPHQL_ADMIN_SECRET, ''),
};
