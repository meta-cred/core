import type { Story } from '@storybook/react';
import React from 'react';

import { ContributionRatingButtons, Props } from './ContributionRatingButtons';

const args: Props = {};

export default {
  title: 'UI/ContributionRatingButtons',
  component: ContributionRatingButtons,
  args,
};

export const Default: Story<Props> = (props) => (
  <ContributionRatingButtons {...props} />
);
