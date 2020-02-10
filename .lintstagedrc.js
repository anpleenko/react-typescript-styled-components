module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier-eslint --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
};
