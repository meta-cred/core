const base = require('./jest.config.base.js');

module.exports = {
  ...base,
  projects: ['<rootDir>/{packages,apps}/*/jest.config.cjs'],
  coverageDirectory: '<rootDir>/coverage/',
};
