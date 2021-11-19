import { Button, MenuItem, useToast } from '@chakra-ui/react';
import type { ImageSources } from '@datamodels/identity-profile-basic';
import { AccountMenu } from '@meta-cred/ui/AccountMenu';
import { useAuthStore, useWallet } from '@meta-cred/usewallet';
import {
  addressToCaip10String,
  getErrorMessage,
  getSelfIdImageUrl,
  Maybe,
} from '@meta-cred/utils';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';

import { ConnectCeramicButton } from '@/components/ConnectCeramicButton';
import { useSelfIdProfile } from '@/hooks/useSelfIdProfile';
import { useSelfId } from '@/providers/SelfIdProvider';
import { getSelfIdCore } from '@/utils/selfid';

export type Props = {
  connectLabel?: string;
};

export const ConnectWalletButton: React.FC<Props> = ({
  connectLabel = 'Connect Wallet',
}) => {
  const { connectWallet, address, ens, wallet, provider, disconnectWallet } =
    useWallet();
  const toast = useToast();

  const router = useRouter();

  const { login, logout, authToken, isLoggingIn, checkAuth, didRehydrate } =
    useAuthStore();

  const selfId = useSelfId();
  const { data: myProfile } = useSelfIdProfile(address);

  const displayName = myProfile?.name || ens?.name;
  const imageUrl = getSelfIdImageUrl(myProfile?.image as Maybe<ImageSources>);

  const connectSelfId = useCallback(async () => {
    if (selfId.mySelfId || selfId.isConnecting) return;

    try {
      await selfId.connect();
    } catch (e) {
      toast({
        title: 'Error Connecting to SelfID',
        description: getErrorMessage(e),
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
        if (getErrorMessage(e)?.includes('No DID found')) {
          await connectSelfId();
        }
      }

      if (!authToken) {
        await login(provider);
      }
    } catch (e) {
      toast({
        title: 'Error Authenticating',
        description: getErrorMessage(e),
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
      await onClickAuthenticate();
    })();
  }, [didPrompt, didRehydrate, authToken, address, onClickAuthenticate]);

  const disconnect = () => {
    disconnectWallet();
    logout();
    selfId.disconnect();
    connectWallet();
    setDidPrompt(false);
  };

  const connect = async () => {
    await connectWallet();
  };
  const loadingText = selfId.isConnecting ? 'Connecting DID' : 'Authenticating';

  if (address) {
    return (
      <AccountMenu
        address={address}
        displayName={displayName}
        imageUrl={imageUrl}
        connectedWallet={wallet?.name}
        onDisconnect={disconnect}
        authenticated={Boolean(authToken)}
        onAuthenticate={onClickAuthenticate}
        authLoadingText={
          isLoggingIn || selfId.isConnecting ? loadingText : null
        }
        topItems={
          <>
            <MenuItem icon={<FiUser />} onClick={() => router.push('/profile')}>
              Profile
            </MenuItem>
          </>
        }
        bottomItems={<ConnectCeramicButton size="sm" />}
      />
    );
  }

  return (
    <Button onClick={connect}>{address ? displayName : connectLabel}</Button>
  );
};
