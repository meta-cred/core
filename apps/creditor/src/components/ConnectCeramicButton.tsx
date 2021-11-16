import { ButtonProps, MenuItem, Spinner } from '@chakra-ui/react';
import { useWallet } from '@meta-cred/usewallet';
import React from 'react';
import { FiKey, FiLink2 } from 'react-icons/fi';

import { useSelfId } from '@/providers/SelfIdProvider';

export type Props = ButtonProps & {
  connectLabel?: string;
};

export const ConnectCeramicButton: React.FC<Props> = (props) => {
  const { mySelfId, myDID, connect, isConnecting } = useSelfId();
  const { address } = useWallet();

  if (!address || !myDID) return null;

  let icon = isConnecting ? <Spinner size="xs" thickness="1px" /> : <FiLink2 />;
  let label = isConnecting ? 'Connecting DID' : 'Connect DID';
  if (mySelfId) {
    icon = <FiKey />;
    label = 'DID Connected';
  }

  return (
    <MenuItem
      closeOnSelect={false}
      color="green.500"
      icon={icon}
      onClick={mySelfId ? undefined : connect}
      {...props}
    >
      {label}
    </MenuItem>
  );
};
