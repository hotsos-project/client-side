module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['/node_modules/', '/dist/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off',
    'react/display-name': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'storybook/prefer-pascal-case': 'off',
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  ignorePatterns: ['**/dist/**/*', '.eslintrc.js'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
