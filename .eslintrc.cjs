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
    'react-refresh/only-export-components': 'warn',

    // turn on errors for missing imports
    'import/no-unresolved': 'error',
  },
}
