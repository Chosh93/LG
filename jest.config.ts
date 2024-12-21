import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig: Config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
