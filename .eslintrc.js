// https://dev.to/cosmvs/tslint-eslint-cra-typescript-prettier-2h40
// https://gist.github.com/1natsu172/a65a4b45faed2bd3fa74b24163e4256e

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'jest', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
