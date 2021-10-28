import { CheckIcon, UnlockIcon } from '@chakra-ui/icons';
import { Button, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import { AccountModal } from '@meta-cred/ui/AccountModal';
import { useAuthStore, useWallet } from '@meta-cred/usewallet';
import { addressToCaip10String, shortenIfAddress } from '@meta-cred/utils';
import React, { useCallback, useEffect, useState } from 'react';

import { useSelfId } from '../providers/SelfIdProvider';
import { getSelfIdCore } from '../utils/selfid';
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

  const { login, logout, authToken, isLoggingIn, checkAuth, didRehydrate } =
    useAuthStore();

  const selfId = useSelfId();

  const connectSelfId = useCallback(async () => {
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
  }, [selfId, toast]);

  // Rehydrate any existing auth tokens on mount or wallet change
  useEffect(() => {
    if (!provider) return;

    checkAuth(provider);
  }, [checkAuth, provider, address]);

  const onClickAuthenticate = useCallback(async () => {
    try {
      if (!provider || !address)
        throw new Error('No Ethereum Provider Detected');
      const core = getSelfIdCore();

      try {
        await core.getAccountDID(addressToCaip10String(address));
      } catch (e) {
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
  }, [address, authToken, connectSelfId, login, provider, toast]);

  const [didPrompt, setDidPrompt] = useState(false);

  // Prompt user to authenticate if they haven't yet
  useEffect(() => {
    (async () => {
      if (didPrompt || !address || authToken || !didRehydrate) return;

      setDidPrompt(true);
      onOpen();
      await onClickAuthenticate();
    })();
  }, [
    onOpen,
    didPrompt,
    didRehydrate,
    authToken,
    address,
    onClickAuthenticate,
  ]);

  const disconnect = () => {
    disconnectWallet();
    logout();
    selfId.disconnect();
    connectWallet();
    setDidPrompt(false);
  };

  const connect = async () => {
    if (address) {
      onOpen();
      return;
    }

    await connectWallet();
  };

  return (
    <>
      <Button onClick={connect}>{address ? displayName : connectLabel}</Button>
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
              selfId.isConnecting ? 'Connecting DID' : 'Authenticating'
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
