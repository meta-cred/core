import Home from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
};

export const HomePage: React.FC = () => <Home />;
