const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const target = 'browserslist:browserslist config, not maintained node versions';

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      target: target,
      resolve: {
        ...config.resolve,
        plugins: [new TsconfigPathsPlugin()],
        fallback: {
          ...config.resolve.fallback,
          stream: false,
          os: false,
          http: false,
          https: false,
        },
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
        },
        // alias: {
        //   ...config.resolve.alias,
        //   '@emotion/core': toPath('node_modules/@emotion/react'),
        //   'emotion-theming': toPath('node_modules/@emotion/react'),
        // },
      },
    };
  },
  managerWebpack(config) {
    config.target = target;
    return config;
  },
};
