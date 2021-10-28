import { Suspense as ReactSuspense, SuspenseProps } from 'react';

export const SafeSuspense =
  typeof window !== 'undefined'
    ? ReactSuspense
    : function SuspenseSSR({ children }: SuspenseProps) {
        return <>{children}</>;
      };
