import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { SEO } from '@/components/SEO';
import { SEO_TITLE } from '@/constants';
import { SelfIdProviderProps } from '@/providers/SelfIdProvider';
import { ThemedWalletProvider } from '@/providers/ThemedWalletProvider';
import { theme } from '@/theme';

const SelfIdProvider = dynamic<SelfIdProviderProps>(
  () => import('@/providers/SelfIdProvider').then((mod) => mod.SelfIdProvider),
  { ssr: false },
);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <SEO />
      <QueryClientProvider client={queryClient}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */}
        <Hydrate state={pageProps.dehydratedState}>
          <ThemedWalletProvider>
            <SelfIdProvider>
              <Component {...pageProps} />
            </SelfIdProvider>
          </ThemedWalletProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default MyApp;
