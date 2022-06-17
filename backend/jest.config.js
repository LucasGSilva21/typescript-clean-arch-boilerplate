module.exports = {
  roots: ['<rootDir>/tests'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: [
    '**/**/*spec.ts'
  ]
}
