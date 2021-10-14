const base = require('./jest.config.base.js');

module.exports = {
  ...base,
  globalSetup: './global.setup.js',
  projects: ['<rootDir>/{packages,apps}/*/jest.config.cjs'],
  coverageDirectory: '<rootDir>/coverage/',
};
