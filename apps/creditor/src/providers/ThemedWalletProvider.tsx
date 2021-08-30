import { useColorModeValue } from '@chakra-ui/react';
import { WalletProvider } from '@meta-cred/usewallet';
import React from 'react';

import { CONFIG } from '../config';

export const ThemedWalletProvider: React.FC = ({ children }) => {
  const isDark = useColorModeValue(false, true);

  return (
    <WalletProvider
      networkId={CONFIG.chainId}
      onboardDappId={CONFIG.onboardDappId}
      infuraKey={CONFIG.infuraId}
      darkMode={isDark}
      appName="MetaCred"
    >
      {children}
    </WalletProvider>
  );
};
