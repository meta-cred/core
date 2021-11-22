import type { Story } from '@storybook/react';
import React from 'react';

import { DaoPageHeader, Props } from './DaoPageHeader';

const args: Props = {
  daoName: 'MetaFactory',
  isLoaded: true,
  pageName: 'Page Title',
};

export default {
  title: 'UI/DaoPageHeader',
  component: DaoPageHeader,
  args,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default: Story<Props> = (props) => <DaoPageHeader {...props} />;
