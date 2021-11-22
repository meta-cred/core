import {
  Button,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  useClipboard,
  useColorMode,
} from '@chakra-ui/react';
import { shortenIfAddress } from '@meta-cred/utils';
import React from 'react';
import {
  FiCheck,
  FiChevronDown,
  FiCopy,
  FiLogOut,
  FiMoon,
  FiSun,
  FiUnlock,
} from 'react-icons/fi';

import { AccountMenuHeader } from './AccountMenuHeader';
import { EthAvatar, EthAvatarProps } from './EthAvatar';

export type Props = Omit<MenuButtonProps, 'children'> & {
  address: string | null;
  displayName?: string | null;
  connectedWallet?: string | null;
  onDisconnect: () => void;
  authenticated: boolean;
  onAuthenticate: () => void;
  authLoadingText?: string | null;
  bottomItems?: React.ReactNode;
  topItems?: React.ReactNode;
  avatarProps: EthAvatarProps;
};

export const AccountMenu: React.FC<Props> = ({
  displayName,
  address,
  onDisconnect,
  connectedWallet,
  authenticated,
  onAuthenticate,
  authLoadingText,
  avatarProps,
  topItems,
  bottomItems,
  ...props
}) => {
  const { hasCopied, onCopy } = useClipboard(address || '');

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const shortAddress = shortenIfAddress(address);

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        pl={1}
        pr={3}
        rounded="full"
        rightIcon={<FiChevronDown />}
        leftIcon={<EthAvatar size="sm" mr={-2} {...avatarProps} />}
        {...props}
      />
      <MenuList>
        {address && (
          <AccountMenuHeader
            title={displayName || shortAddress}
            subtitle={displayName ? shortAddress : undefined}
            avatarProps={avatarProps}
          />
        )}

        {topItems}
        <MenuItem closeOnSelect={false} icon={<FiCopy />} onClick={onCopy}>
          {hasCopied ? 'Copied' : 'Copy Address'}
        </MenuItem>

        <MenuItem
          icon={isDark ? <FiSun /> : <FiMoon />}
          onClick={toggleColorMode}
          closeOnSelect={false}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </MenuItem>
        <MenuDivider />
        <MenuGroup
          fontSize="xs"
          textColor="gray.500"
          title={
            connectedWallet ? `Connected to ${connectedWallet}` : undefined
          }
        >
          {!authenticated ? (
            <MenuItem
              closeOnSelect={false}
              alignItems="baseline"
              color="green.500"
              icon={
                // eslint-disable-next-line no-nested-ternary
                authenticated ? (
                  <FiCheck />
                ) : authLoadingText ? (
                  <Spinner size="xs" thickness="1px" />
                ) : (
                  <FiUnlock />
                )
              }
              onClick={onAuthenticate}
            >
              {authenticated
                ? 'Authenticated'
                : authLoadingText || 'Authenticate'}
            </MenuItem>
          ) : null}
          {bottomItems}
          <MenuItem icon={<FiLogOut />} color="red.400" onClick={onDisconnect}>
            Sign Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
