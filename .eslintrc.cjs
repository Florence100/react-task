module.exports = {
    env: {
        'browser': true,
        'es2021': true
  },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        "prettier/prettier": "warn",
        'react/react-in-jsx-scope': 0,
        "react/destructuring-assignment": 0,
        "no-console": "warn",
    },
};
