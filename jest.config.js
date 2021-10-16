module.exports = {
  rootDir: './src',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};
