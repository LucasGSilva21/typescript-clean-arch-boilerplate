export default {
  roots: ['<rootDir>/tests'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: [
    '**/**/*spec.ts'
  ]
}
