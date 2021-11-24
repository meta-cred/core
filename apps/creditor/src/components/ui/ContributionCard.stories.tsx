import type { Story } from '@storybook/react';
import React from 'react';

import { mockContribution } from '@/utils/mockData';

import { ContributionCard, Props } from './ContributionCard';

const args: Props = {
  contribution: mockContribution,
};

export default {
  title: 'UI/ContributionCard',
  component: ContributionCard,
  args,
};

export const Default: Story<Props> = (props) => <ContributionCard {...props} />;

export const Editable = Default.bind({});
Editable.args = {
  canEdit: true,
  contribution: {
    ...mockContribution,
    title: 'This contribution title is a longer one to test',
  },
};

export const SkeletonCard = Default.bind({});
SkeletonCard.args = {
  contribution: undefined,
};
