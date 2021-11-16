/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useAuthStore, useWallet } from '@meta-cred/usewallet';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useTransactionQuery } from '@/gqty';

type UseUserOpts = {
  redirectTo?: string;
  redirectIfFound?: boolean;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUser = ({ redirectTo, redirectIfFound }: UseUserOpts = {}) => {
  const { didInit, provider, address } = useWallet();
  const { didRehydrate, authToken } = useAuthStore();
  const router = useRouter();

  const { data, isLoading } = useTransactionQuery(
    (query) => {
      const { user } = query.me()[0];
      user?.did;
      return user;
    },
    { skip: !authToken },
  );

  const user = data;
  const isReady = didInit && provider ? didRehydrate : didInit;

  useEffect(() => {
    if (!redirectTo) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && isReady && !isLoading && !user) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.did)
    ) {
      router.push(redirectTo);
    }
  }, [isReady, router, isLoading, user, redirectIfFound, redirectTo]);

  return { user: data, isLoading, address };
};
