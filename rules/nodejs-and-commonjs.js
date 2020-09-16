module.exports = {
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'handle-callback-err': ['error', '^.*(e|E)rr'],
  },
};
