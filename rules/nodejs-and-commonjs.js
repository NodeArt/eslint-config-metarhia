module.exports = {
  env: {
    node: true,
    borwser: true,
  },
  rules: {
    'handle-callback-err': ['error', '^.*(e|E)rr'],
  },
};
