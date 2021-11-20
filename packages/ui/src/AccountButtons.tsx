import {
  Button,
  ButtonProps,
  Tooltip,
  useClipboard,
  Wrap,
  WrapItem,
  WrapProps,
} from '@chakra-ui/react';
import { shortenIfAddress } from '@meta-cred/utils';
import React from 'react';
import { FaEthereum, FaGithub, FaTwitter } from 'react-icons/fa';

import { Link } from './Link';

export type AccountButtonsProps = WrapProps & {
  accounts:
    | Array<{
        host: string | null | undefined;
        id: string | null | undefined;
        protocol: string | null | undefined;
      }>
    | null
    | undefined;
  ethAddress?: string | null;
};

const PROPS_MAP: Record<string, ButtonProps> = {
  'twitter.com': {
    leftIcon: <FaTwitter />,
    colorScheme: 'twitter',
  },
  'github.com': {
    leftIcon: <FaGithub />,
    colorScheme: 'blackAlpha',
    backgroundColor: 'black',
    color: 'white',
  },
};

export const AccountButtons: React.FC<AccountButtonsProps> = ({
  accounts,
  ethAddress,
  ...props
}) => {
  const { hasCopied, onCopy } = useClipboard(ethAddress || '');

  return (
    <Wrap {...props}>
      {ethAddress ? (
        <WrapItem>
          <Tooltip
            label={hasCopied ? 'Copied!' : 'Copy to clipboard'}
            closeOnClick={false}
            hasArrow
          >
            <Button
              onClick={onCopy}
              size="xs"
              colorScheme="gray"
              leftIcon={<FaEthereum />}
            >
              {shortenIfAddress(ethAddress)}
            </Button>
          </Tooltip>
        </WrapItem>
      ) : null}
      {accounts?.map((acc) => {
        if (!acc.id || !acc.host || !acc.protocol) return null;
        const link = `${acc.protocol}://${acc.host}/${acc.id}`;
        const extraProps = PROPS_MAP[acc.host];
        return (
          <WrapItem key={link}>
            <Button
              as={Link}
              isExternal
              href={link}
              size="xs"
              noUnderline
              {...extraProps}
            >
              {acc.id}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
