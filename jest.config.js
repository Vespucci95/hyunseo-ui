/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'https://localhost:3000',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
