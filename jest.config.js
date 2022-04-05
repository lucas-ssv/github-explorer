module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  preset: 'ts-jest',
  transform: {
    '.+\\.{ts|tsx}$': 'ts-jest'
  }
}