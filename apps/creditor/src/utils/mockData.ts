/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { contribution, user as UserType, user_contribution } from '@/gqty';

export const mockUser = {
  did: '1',
  eth_address: '0x0000000000000000000000000000000000000000',
  profile: {
    name: 'Kanye West',
  },
} as UserType;

export const mockUserList = [
  mockUser,
  {
    did: '2',
    profile: {
      name: 'Kid Cudi',
    },
  },
  {
    did: '3',
    profile: {
      name: 'Kendrick Lamar',
    },
  },
  {
    did: '4',
    profile: {
      name: 'Travis Scott',
    },
  },
] as UserType[];

export const mockUserContributionList = mockUserList.map((user) => ({
  user,
  contribution_share: 1 / mockUserList.length,
})) as user_contribution[];

export const mockContribution = {
  id: 'contribution1',
  contributors: () => mockUserContributionList,
  title: 'Contribution Title',
  description:
    'This is the description for this mock contribution. Details the work that was done for this contribution.',
  created_at: new Date(2021, 9, 1).toString(),
  author: {
    user: mockUser,
  },
} as contribution;
