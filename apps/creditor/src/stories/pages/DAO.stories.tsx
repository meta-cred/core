import DAO from '../../pages/dao/[daoName]';

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
      path: '/dao/[daoName]',
      asPath: '/profile/metafactory',
      query: {
        id: 'metafactory',
      },
    },
  },
};
