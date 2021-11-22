import type { Story } from '@storybook/react';
import React from 'react';

import { ContributionCard, Props } from './ContributionCard';

export default {
  title: 'UI/ContributionCard',
  component: ContributionCard,
  args: {
    isLoaded: true,
    author: 'METADREAMER',
    title: 'Contribution Title',
    description:
      'This is the description for this mock contribution. Details the work that was done for this contribution.',
    category: 'Category',
    createdAt: new Date(2021, 9, 1),
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default: Story<Props> = (args) => <ContributionCard {...args} />;

export const Skeleton = Default.bind({});
Skeleton.args = {
  isLoaded: false,
};
