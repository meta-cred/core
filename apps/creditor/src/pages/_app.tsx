import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SEO } from '../components/SEO';
import { SEO_TITLE } from '../constants';
import { SelfIdProvider } from '../providers/SelfIdProvider';
import { ThemedWalletProvider } from '../providers/ThemedWalletProvider';
import { theme } from '../theme';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Head>
      <title>{SEO_TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
    </Head>
    <SEO />
    <QueryClientProvider client={queryClient}>
      <ThemedWalletProvider>
        <SelfIdProvider>
          <Component {...pageProps} />
        </SelfIdProvider>
      </ThemedWalletProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

export default MyApp;
