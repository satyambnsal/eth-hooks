module.exports = {
  spec: 'test/**/*.test.{ts,tsx}',
  require: 'ts-node/register',
  timeout: 10000,
  reporter: process.env.GITHUB_ACTIONS === 'true' ? 'mocha-junit-reporter' : 'spec',
  reporterOptions: {
    mochaFile: './test/testresult.xml',
  },
};
