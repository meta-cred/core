module.exports = {
  preset: 'ts-jest',
  setupFiles: ['jest-date-mock'],
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$'],
  verbose: true,
  clearMocks: true,
  testTimeout: 30000,
};
