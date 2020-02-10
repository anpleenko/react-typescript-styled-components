module.exports = {
  '**/*.ts?(x)': () => ['eslint --fix', 'prettier-eslint --write', 'git add'],
  '**/*.{png,jpeg,jpg,gif,svg}': () => ['imagemin-lint-staged', 'git add'],
};
