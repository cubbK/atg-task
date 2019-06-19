module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    // ... other setup files ...
    'jest-dom/extend-expect'
  ],
  // ... other options ...
}