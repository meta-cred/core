module.exports = {
  preset: 'ts-jest',
  setupFiles: ['jest-date-mock'],
  globalSetup: '../../../global.setup.js',
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$'],
  verbose: true,
  clearMocks: true,
  testTimeout: 30000,
};
