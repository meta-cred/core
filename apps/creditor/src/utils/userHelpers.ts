import type { ImageSources } from '@datamodels/identity-profile-basic';
import { EthAvatarProps } from '@meta-cred/ui/EthAvatar';
import { getSelfIdImageUrl, Maybe, shortenIfAddress } from '@meta-cred/utils';

import { user as UserType } from '@/gqty';

export const getUserName = (user: Maybe<UserType>): string =>
  user?.profile?.name || user?.ensName || shortenIfAddress(user?.eth_address);

export const getUserAvatarProps = (user: Maybe<UserType>): EthAvatarProps => ({
  name: user?.profile?.name || user?.ensName || '',
  address: user?.ensName || user?.eth_address,
  imageUrl: getSelfIdImageUrl(user?.profile?.image as Maybe<ImageSources>),
});
