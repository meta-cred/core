import { Button } from '@chakra-ui/react';
import { useWallet } from '@meta-cred/usewallet';
import { shortenIfAddress } from '@meta-cred/utils';
import React from 'react';

export type Props = {
  connectLabel?: string;
};

export const ConnectWalletButton: React.FC<Props> = ({
  connectLabel = 'Connect Wallet',
}) => {
  const { connectWallet, address, ens, disconnect, isConnecting } = useWallet();

  const displayName = ens?.name || shortenIfAddress(address);

  return (
    <Button
      isLoading={isConnecting}
      onClick={() => {
        if (address) {
          disconnect();
        } else {
          connectWallet();
        }
      }}
    >
      {address ? displayName : connectLabel}
    </Button>
  );
};
