import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuProps,
  Spinner,
  useBreakpointValue,
  useClipboard,
  useColorMode,
} from '@chakra-ui/react';
import type {
  BasicProfile,
  ImageSources,
} from '@datamodels/identity-profile-basic';
import { EthAvatar } from '@meta-cred/ui/EthAvatar';
import { getSelfIdImageUrl, Maybe } from '@meta-cred/utils';
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

import { ConnectCeramicButton } from '@/components/ConnectCeramicButton';

export type Props = Omit<MenuProps, 'children'> & {
  address: string | null;
  profile: BasicProfile | null | undefined;
  displayName?: string | null;
  connectedWallet?: string | null;
  onDisconnect: () => void;
  authenticated: boolean;
  onAuthenticate: () => void;
  authLoadingText?: string | null;
  bottomItems?: React.ReactNode;
  topItems?: React.ReactNode;
};

export const AccountMenu: React.FC<Props> = ({
  displayName,
  address,
  onDisconnect,
  connectedWallet,
  authenticated,
  onAuthenticate,
  authLoadingText,
  profile,
  topItems,
  bottomItems,
  ...props
}) => {
  const { hasCopied, onCopy } = useClipboard(address || '');

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const buttonLabel = useBreakpointValue({ md: profile?.name || displayName });

  return (
    <Menu {...props}>
      <MenuButton
        as={Button}
        variant="ghost"
        pl={1}
        pr={3}
        rounded="full"
        rightIcon={<FiChevronDown />}
        leftIcon={
          <EthAvatar
            size="sm"
            imageUrl={getSelfIdImageUrl(profile?.image as Maybe<ImageSources>)}
            name={profile?.name}
            address={address}
            mr={{ base: -2, md: 0 }}
          />
        }
      >
        {buttonLabel}
      </MenuButton>
      <MenuList>
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
