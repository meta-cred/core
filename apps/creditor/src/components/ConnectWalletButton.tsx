import { CheckIcon, UnlockIcon } from '@chakra-ui/icons';
import { Button, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import { AccountModal } from '@meta-cred/ui/AccountModal';
import { useAuthStore, useWallet } from '@meta-cred/usewallet';
import { shortenIfAddress } from '@meta-cred/utils';
import React, { useEffect } from 'react';

import { useSelfId } from '../providers/SelfIdProvider';
import { ConnectCeramicButton } from './ConnectCeramicButton';

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

  const { login, logout, authToken, isLoggingIn, checkAuth } = useAuthStore();

  const selfId = useSelfId();

  const connectSelfId = async () => {
    if (selfId.mySelfId || selfId.isConnecting) return;

    try {
      await selfId.connect();
    } catch (e) {
      toast({
        title: 'Error Connecting to SelfID',
        description:
          'message' in (e as Error) ? (e as Error).message : undefined,
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
    }
  };

  // Rehydrate any existing auth tokens on mount or wallet change
  useEffect(() => {
    (async () => {
      if (!provider) return;

      await checkAuth(provider);
    })();
  }, [checkAuth, provider, address]);

  const onClickAuthenticate = async () => {
    try {
      if (!provider) throw new Error('No Ethereum Provider Detected');

      // user hasn't created a DID yet
      if (!selfId.myDID) {
        await connectSelfId();
      }

      if (!authToken) {
        await login(provider);
      }
    } catch (e) {
      toast({
        title: 'Error Authenticating',
        description:
          'message' in (e as Error) ? (e as Error).message : undefined,
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
    }
  };

  const disconnect = () => {
    disconnectWallet();
    logout();
    selfId.disconnect();
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
            isLoading={isLoggingIn || selfId.isConnecting}
            loadingText={
              selfId.isConnecting ? 'Connecting SelfID' : 'Authenticating'
            }
            onClick={onClickAuthenticate}
          >
            {authToken ? 'Authenticated' : 'Authenticate Wallet'}
          </Button>
          <ConnectCeramicButton size="sm" />
        </VStack>
      </AccountModal>
    </>
  );
};
