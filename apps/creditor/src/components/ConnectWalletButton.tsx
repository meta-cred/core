import { CheckIcon, UnlockIcon } from '@chakra-ui/icons';
import { Button, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import { AccountModal } from '@meta-cred/ui/AccountModal';
import { useWallet, useWeb3Auth } from '@meta-cred/usewallet';
import { shortenIfAddress, useCeramic } from '@meta-cred/utils';
import React from 'react';

import { ConnectCeramicButton } from './ConnectCeramicButton';
import { SelfIdUserCard } from './SelfIdUserCard';

export type Props = {
  connectLabel?: string;
};

export const ConnectWalletButton: React.FC<Props> = ({
  connectLabel = 'Connect Wallet',
}) => {
  const { connectWallet, address, ens, wallet, provider, disconnectWallet } =
    useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const displayName = ens?.name || shortenIfAddress(address);

  const { login, logout, authToken, isLoggingIn } = useWeb3Auth(
    provider,
    address,
  );
  const { disconnect: disconnectCeramic } = useCeramic();

  const onClickAuthenticate = async () => {
    try {
      if (authToken) logout();
      else await login();
    } catch (e) {
      toast({
        title: 'Error Authenticating',
        description: e instanceof Error ? e.message : (e as string),
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
    }
  };
  const disconnect = () => {
    disconnectWallet();
    logout();
    disconnectCeramic();
    connectWallet();
  };

  return (
    <>
      <Button
        onClick={() => {
          if (address) onOpen();
          else connectWallet();
        }}
      >
        {address ? displayName : connectLabel}
      </Button>
      <AccountModal
        onClose={onClose}
        connectedWallet={wallet?.name}
        isOpen={isOpen}
        address={address}
        displayName={displayName}
        onDisconnect={disconnect}
      >
        <VStack align="flex-start">
          <Button
            size="sm"
            colorScheme="green"
            leftIcon={authToken ? <CheckIcon /> : <UnlockIcon />}
            variant="ghost"
            isLoading={isLoggingIn}
            onClick={onClickAuthenticate}
          >
            {authToken ? 'Authenticated' : 'Authenticate Wallet'}
          </Button>
          <ConnectCeramicButton size="sm" />
          <SelfIdUserCard addressOrDid={address} />
        </VStack>
      </AccountModal>
    </>
  );
};
