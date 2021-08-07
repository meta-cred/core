import { Button } from '@chakra-ui/react';
import { shortenAddress, useEthers } from '@usedapp/core';
import React from 'react';

export type Props = {
  connectLabel?: string;
};

export const ConnectWalletButton: React.FC<Props> = ({
  connectLabel = 'Connect Wallet',
}) => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <Button
      onClick={() => {
        if (account) {
          deactivate();
        } else {
          activateBrowserWallet();
        }
      }}
    >
      {account ? shortenAddress(account) : connectLabel}
    </Button>
  );
};
