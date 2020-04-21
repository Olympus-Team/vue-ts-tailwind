const tailwindRules = [
  true,
  {
    ignoreAtRules: ['tailwind', 'apply', 'screen', 'variants', 'responsive']
  }
]

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': tailwindRules,
    'scss/at-rule-no-unknown': tailwindRules,
    'selector-pseudo-element-colon-notation': 'single',
    'comment-empty-line-before': 'never'
  }
}
