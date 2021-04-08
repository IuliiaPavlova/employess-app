module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'arrow-body-style': ['error', 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
  },
};
