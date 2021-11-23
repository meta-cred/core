import DAO from '../../pages/d/[daoName]';

const DAO_NAME = 'metafactory';

export default {
  title: 'Pages/DAO',
  component: DAO,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DAOPage = () => <DAO daoName={DAO_NAME} />;

DAOPage.story = {
  parameters: {
    nextRouter: {
      path: '/d/[daoName]',
      asPath: `/d/${DAO_NAME}`,
      query: {
        daoName: DAO_NAME,
      },
    },
  },
};
