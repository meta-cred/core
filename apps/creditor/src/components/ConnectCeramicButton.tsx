import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';
import { Avatar, Button, ButtonProps } from '@chakra-ui/react';
import {
  getIdxImageUrl,
  getIdxProfileLink,
  useCeramic,
} from '@meta-cred/utils';
import React from 'react';

import { useIdxProfile } from '../hooks/useIdxProfile';

export type Props = ButtonProps & {
  connectLabel?: string;
};

export const ConnectCeramicButton: React.FC<Props> = (props) => {
  const { idx, connect3ID, isAvailable, isConnected, isConnecting } =
    useCeramic();

  const { isLoading, data } = useIdxProfile();

  if (!isAvailable) return null;

  if (isConnected && data && idx) {
    return (
      <Button
        as="a"
        target="_blank"
        rounded="full"
        pl={2}
        leftIcon={
          <Avatar size="xs" src={getIdxImageUrl(data.image)} name={data.name} />
        }
        rightIcon={<ExternalLinkIcon />}
        color="gray.500"
        href={getIdxProfileLink(idx.id)}
        {...props}
      >
        {data?.name || 'IDX Connected'}
      </Button>
    );
  }

  return (
    <Button
      leftIcon={<LinkIcon />}
      rightIcon={isConnected ? <ExternalLinkIcon /> : undefined}
      color="gray.500"
      isLoading={isConnecting || isLoading}
      loadingText="Connecting"
      onClick={() => {
        if (!isConnected && !isConnecting) connect3ID();
      }}
      {...props}
    >
      {isConnected ? `${data?.name || 'IDX Connected'}` : 'Connect IDX'}
    </Button>
  );
};
