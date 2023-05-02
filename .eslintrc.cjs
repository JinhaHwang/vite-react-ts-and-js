module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // eslint와 중복되는 포맷팅 룰을 끄는 프리셋
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    'react',
    'react-refresh',
    // module import 관련 룰을 활성화시키기 위한 플러그인
    'import',
  ],
  settings: {
    'import/resolver': {
      // import 구문을 해석할 때 alias 등을 참조할 파일로 tsconfig.json 설정
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/parsers': {
      // lint @typescript-eslint/parser 로 해석할 파일 확장자
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'no-unused-vars': 'error',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

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
