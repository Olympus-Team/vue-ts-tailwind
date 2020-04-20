module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'single',
    'comment-empty-line-before': 'never'
  }
}
