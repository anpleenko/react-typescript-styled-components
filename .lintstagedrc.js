module.exports = {
  '**/*.ts?(x)': () => ['prettier-eslint --write', 'git add'],
  '**/*.{png,jpeg,jpg,gif,svg}': () => ['imagemin-lint-staged', 'git add'],
};
