module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/**',
    '!src/pages/api/**',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
