const base = require('../../jest.config.base.js');

const tsconfig = require('../../tsconfig.package.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  ...base,
  name: '@meta-cred/utils',
  displayName: 'Utils',
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths , {
    // This has to match the baseUrl defined in tsconfig.json.
    prefix: '<rootDir>'
  }),
};
