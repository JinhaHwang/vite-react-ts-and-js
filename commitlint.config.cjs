module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 보통 빌드 프로세스, 패키지 매니저, 프로젝트 구성, 도구, 프로젝트 문서와 같은 부분에서 발생하는 변경 사항을 다룹니다
        'chore',
        'fix',
        'feat',
        'perf',
        'refactor',
        'docs',
        // 코드의 로직이나 기능에는 영향을 주지 않는 스타일 관련 변경 사항을 나타냅니다. 이러한 변경 사항은 코드의 일관성, 가독성 또는 서식을 개선하기 위한 것입니다.
        'style',
        'test',
        'revert',

        // 신규 타입 추가
        'merge',
      ],
    ],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}
