module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        htmlWhitespaceSensitivity: 'ignore',
        endOfLine: 'lf',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }], // 扩展名为’.tsx’的文件中不允许使用JSX，改为允许或者是直接关闭
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
