module.exports = {
  rules: {
    'max-len': [
      'error',
      {
        code: 140,
        ignoreUrls: true,
      },
    ],
    'global-require': 'off',
    'import/extensions': 0,
    'import/prefer-default-export': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/no-danger': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
