import tseslint from 'typescript-eslint';

const eslintConfig = {
  files: ['src/**/*.ts'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'ESNext',
      sourceType: 'module',
    },
  },
  plugins: { '@typescript-eslint': tseslint.plugin },
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/semi': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'off',
  },
};

export default eslintConfig;
