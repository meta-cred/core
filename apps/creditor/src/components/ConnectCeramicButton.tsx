import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';
import { Avatar, Button, ButtonProps, useToast } from '@chakra-ui/react';
import { useWallet } from '@meta-cred/usewallet';
import { getSelfIdImageUrl, getSelfIdProfileLink } from '@meta-cred/utils';
import React from 'react';

import { useSelfIdProfile } from '../hooks/useSelfIdProfile';
import { useSelfId } from '../providers/SelfIdProvider';

export type Props = ButtonProps & {
  connectLabel?: string;
};

export const ConnectCeramicButton: React.FC<Props> = (props) => {
  const { mySelfId, isConnecting, myDID } = useSelfId();
  const { address } = useWallet();

  const { data } = useSelfIdProfile(mySelfId?.id || address);

  if (!address || !myDID) return null;

  const hasProfile = data?.image || data?.name;

  return (
    <Button
      leftIcon={
        hasProfile ? (
          <Avatar
            size="xs"
            src={getSelfIdImageUrl(data.image)}
            name={data.name}
          />
        ) : undefined
      }
      pl={hasProfile ? '2' : undefined}
      rightIcon={<ExternalLinkIcon />}
      color="gray.500"
      isLoading={isConnecting}
      loadingText="Connecting"
      as="a"
      target="_blank"
      rounded="full"
      href={getSelfIdProfileLink(myDID)}
      {...props}
    >
      {`${data?.name || 'Your Profile'}`}
    </Button>
  );
};
