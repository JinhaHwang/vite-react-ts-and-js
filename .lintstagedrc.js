export default {
  '*.{js,jsx,ts,tsx}': [
    'vitest related --run',
    'eslint --fix',
    'prettier --write',
  ],
}
