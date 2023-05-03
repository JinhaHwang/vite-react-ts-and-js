module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:react-hooks/recommended',
    // eslint와 중복되는 포맷팅 룰을 끄는 프리셋
    'prettier',
  ],
  plugins: [
    'react',
    'react-refresh',
    // module import 관련 룰을 활성화시키기 위한 플러그인
    'import',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      alias: {
        map: [
          ['@/vuexy', './src/libs/vuexy'],
          ['@/components', './src/components'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    //
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',

    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    'import/no-cycle': 'warn',

    'react-refresh/only-export-components': 'warn',

    // <tag attribute={"text"} /> 와 같은 구문을 <tag attribute="text" /> 으로 사용하라는 rule, (fixable)
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}
