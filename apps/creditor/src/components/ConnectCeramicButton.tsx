import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';
import { Avatar, Button, ButtonProps } from '@chakra-ui/react';
import { useWallet } from '@meta-cred/usewallet';
import { getSelfIdImageUrl, getSelfIdProfileLink } from '@meta-cred/utils';
import React from 'react';

import { useSelfIdProfile } from '../hooks/useSelfIdProfile';
import { useSelfId } from '../providers/SelfIdProvider';

export type Props = ButtonProps & {
  connectLabel?: string;
};

export const ConnectCeramicButton: React.FC<Props> = (props) => {
  const { mySelfId, isConnecting, connect } = useSelfId();
  const { address } = useWallet();

  const { data } = useSelfIdProfile(address);

  if (!address) return null;

  if (mySelfId && data) {
    return (
      <Button
        as="a"
        target="_blank"
        rounded="full"
        pl={2}
        leftIcon={
          <Avatar
            size="xs"
            src={getSelfIdImageUrl(data.image)}
            name={data.name}
          />
        }
        rightIcon={<ExternalLinkIcon />}
        color="gray.500"
        href={getSelfIdProfileLink(mySelfId.id)}
        {...props}
      >
        {data?.name || 'SelfID Connected'}
      </Button>
    );
  }

  return (
    <Button
      leftIcon={<LinkIcon />}
      rightIcon={mySelfId ? <ExternalLinkIcon /> : undefined}
      color="gray.500"
      isLoading={isConnecting}
      loadingText="Connecting"
      onClick={() => {
        if (!mySelfId && !isConnecting) connect();
      }}
      {...props}
    >
      {mySelfId ? `${data?.name || 'SelfID Connected'}` : 'Connect SelfID'}
    </Button>
  );
};
