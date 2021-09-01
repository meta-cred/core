const base = require('../../jest.config.base.js');

const tsconfig = require('../../tsconfig.package.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  ...base,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/../jest.setup.cjs'],
  rootDir: './src',
  displayName: {
    name: 'UI',
    color: 'red',
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
};
