'use strict';

module.exports = {
  'env': {
    'node': true,
    'es6': true,
  },
  'extends': 'eslint:recommended',
  'plugins': [
    'import',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'VariableDeclarator': {
          'let': 2,
          'const': 3,
        },
        'MemberExpression': 1,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
    'no-loop-func': [
      'error',
    ],
    'strict': [
      'error',
      'global',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true,
      },
    ],
    'camelcase': [
      'error',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'eol-last': [
      'error',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'handle-callback-err': [
      'error',
      '^.*(e|E)rr',
    ],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'minimum',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
        'overrides': {
          'function': {
            'after': false,
          },
        },
      },
    ],
    'max-len': [
      'error',
      {
        'code': 80,
        'ignoreUrls': true,
      },
    ],
    'max-nested-callbacks': [
      'error',
      {
        'max': 5,
      },
    ],
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': true,
        'properties': true,
      },
    ],
    'new-parens': [
      'error',
    ],
    'no-lonely-if': [
      'error',
    ],
    'no-trailing-spaces': [
      'error',
    ],
    'no-unneeded-ternary': [
      'error',
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'operator-linebreak': [
      'error',
      'after',
    ],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
    ],
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false,
        'overrides': {
          'typeof': false,
        },
      },
    ],
    'no-unreachable': [
      'error',
    ],
    'no-global-assign': [
      'error',
    ],
    'no-self-compare': [
      'error',
    ],
    'no-unmodified-loop-condition': [
      'error',
    ],
    'no-constant-condition': [
      'error',
      {
        'checkLoops': false,
      },
    ],
    'no-console': [
      'off',
    ],
    'no-useless-concat': [
      'error',
    ],
    'no-useless-escape': [
      'error',
    ],
    'no-shadow-restricted-names': [
      'error',
    ],
    'no-use-before-define': [
      'error',
      {
        'functions': false,
      },
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        'requireForBlockBody': true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': [
      'error',
    ],
    'no-confusing-arrow': [
      'error',
      {
        'allowParens': true,
      },
    ],
    'no-useless-computed-key': [
      'error',
    ],
    'no-useless-rename': [
      'error',
    ],
    'no-var': [
      'error',
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
    'prefer-arrow-callback': [
      'error',
    ],
    'prefer-const': [
      'error',
    ],
    'prefer-numeric-literals': [
      'error',
    ],
    'prefer-rest-params': [
      'error',
    ],
    'prefer-spread': [
      'error',
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'template-curly-spacing': [
      'error',
      'never',
    ],
    'import/no-unresolved': [
      'error',
      {
        'commonjs': true,
      },
    ],
  },
};
