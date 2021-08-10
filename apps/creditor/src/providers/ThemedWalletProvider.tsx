import { useColorModeValue } from '@chakra-ui/react';
import { deferComponentRender } from '@meta-cred/utils';
import { WalletProvider } from '@meta-cred/utils/WalletProvider';
import React from 'react';

import { CONFIG } from '../config';

// TODO: Something weird happening with ESLint + TS monorepo setup, needs fixing
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
const DeferredWalletProvider = deferComponentRender(WalletProvider);

export const ThemedWalletProvider: React.FC = ({ children }) => {
  const isDark = useColorModeValue(false, true);

  return (
    <DeferredWalletProvider
      networkId={CONFIG.chainId}
      onboardDappId={CONFIG.onboardDappId}
      infuraKey={CONFIG.infuraId}
      darkMode={isDark}
      appName="MetaCred"
    >
      {children}
    </DeferredWalletProvider>
  );
};
