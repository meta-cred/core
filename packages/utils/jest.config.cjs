const base = require('../../jest.config.base.js');

const tsconfig = require('../../tsconfig.package.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  ...base,
  rootDir: './src',
  displayName: {
    name: 'UTILS',
    color: 'blue',
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
};
