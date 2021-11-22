import DAO from '../../pages/d/[daoName]';

export default {
  title: 'Pages/DAO',
  component: DAO,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DAOPage = () => <DAO />;

DAOPage.story = {
  parameters: {
    nextRouter: {
      path: '/d/[daoName]',
      asPath: '/profile/metafactory',
      query: {
        id: 'metafactory',
      },
    },
  },
};
