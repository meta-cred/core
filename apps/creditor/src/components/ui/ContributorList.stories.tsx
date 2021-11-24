import type { Story } from '@storybook/react';
import React from 'react';

import { mockUserContributionList } from '@/utils/mockData';

import { ContributorList, Props } from './ContributorList';

const args: Props = {
  contributors: mockUserContributionList,
  showAvatar: false,
};

export default {
  title: 'UI/ContributorList',
  component: ContributorList,
  args,
};

export const Default: Story<Props> = (props) => <ContributorList {...props} />;

export const WithAvatars = Default.bind({});
WithAvatars.args = {
  showAvatar: true,
};
