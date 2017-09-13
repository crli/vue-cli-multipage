const postcss = require('postcss')
const cssObj = require('css')
const onePxRegExp = /\b1px\b/;

module.exports = postcss.plugin('mycss', function (options) {
  return function (css, result) {
    let oldCssText = css.toString()
    if(oldCssText.indexOf('font-size') === -1) return
    let astObj = cssObj.parse(oldCssText)
    let rules = astObj.stylesheet.rules
    rules.forEach((rule, i) => {
      if(Array.isArray(rule.declarations)) {
        rule.declarations.forEach((declaration, j) => {
          if (declaration.type === 'declaration' && onePxRegExp.test(declaration.value)) {
            let newRule = {
              type: 'comment',
              comment: 'no'
            }
            rule.declarations.splice(j + 1, 0, newRule)
          }

        })
      }
    })
    let newCssText = cssObj.stringify(astObj)
    result.root = postcss.parse(newCssText);
  };
});
