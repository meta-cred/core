/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from '@gqty/react';
import { getTokenFromStore, useAuthStore } from '@meta-cred/usewallet';
import type { QueryFetcher } from 'gqty';
import { createClient } from 'gqty';
import type { ExecutionResult } from 'graphql';

import { CONFIG } from '@/config';

import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';
import { generatedSchema, scalarsEnumsHash } from './schema.generated';

const queryFetcher: QueryFetcher = async (query, variables) => {
  const authToken = useAuthStore.getState().authToken || getTokenFromStore();

  const isServer = typeof window === 'undefined';

  const response = await fetch(CONFIG.graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && !isServer
        ? { authorization: `Bearer ${authToken}` }
        : null),
      ...(isServer
        ? { 'X-Hasura-Admin-Secret': CONFIG.graphqlAdminSecret }
        : null),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  });

  return (await response.json()) as ExecutionResult;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
  track,
} = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
    transactionFetchPolicy: 'cache-and-network',
  },
});

export * from './schema.generated';
