module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  preset: 'ts-jest',
  transform: {
    '.+\\.{ts|tsx}$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  }
}
