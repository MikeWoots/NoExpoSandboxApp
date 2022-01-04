module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks'],
  env: {
    jest: true,
    'react-native/react-native': true,
    browser: true,
    es2021: true,
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: { 'import/resolver': { typescript: {} } },
  globals: { fetch: false },
};
