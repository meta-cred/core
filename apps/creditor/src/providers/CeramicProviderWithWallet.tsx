import { useWallet } from '@meta-cred/usewallet';
import { CeramicProvider } from '@meta-cred/utils/CeramicProvider';
import React from 'react';

import { CONFIG } from '../config';

export const CeramicProviderWithWallet: React.FC = ({ children }) => {
  const { provider, address } = useWallet();

  if (!provider) return <>{children}</>;

  return (
    <CeramicProvider
      ceramicUrl={CONFIG.ceramicUrl}
      provider={provider.provider}
      address={address}
    >
      {children}
    </CeramicProvider>
  );
};
