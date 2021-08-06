import { ChakraProvider } from '@chakra-ui/react';
import { DAppProvider } from '@usedapp/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { SEO } from '../components/SEO';
import { DAPP_CONFIG } from '../config';
import { SEO_TITLE } from '../constants';
import { theme } from '../theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Head>
      <title>{SEO_TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
    </Head>
    <SEO />
    <DAppProvider config={DAPP_CONFIG}>
      <Component {...pageProps} />
    </DAppProvider>
  </ChakraProvider>
);

export default MyApp;
