module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-var': 'error',
    'no-console': 'warn',
    'arrow-parens': ['error', 'always'],
    'no-else-return': ['error', { allowElseIf: false }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: '(useAsyncEffect)' },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin'],
          ['external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
          ['object', 'type', 'unknown'],
        ],
        pathGroups: [
          { pattern: 'react*', group: 'builtin' },
          { pattern: 'react*/*', group: 'builtin' },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
