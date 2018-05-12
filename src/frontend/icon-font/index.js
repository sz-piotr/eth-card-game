const path = require('path')
const webfontsGenerator = require('webfonts-generator')

const icons = [
  'cart',
  'collection',
  'arena',
  'market',
  'sort-az',
  'sort-za',
  'clockwise',
  'counter-clockwise'
]

webfontsGenerator({
  fontName: 'icons',
  files: icons.map(icon => path.join(__dirname, `icons/plain/${icon}.svg`)),
  dest: path.join(__dirname, '../assets/icons'),
  cssTemplate: path.join(__dirname, 'css.hbs'),
  types: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
  formatOptions: {
    ttf: {
      ts: 0 // ensure deterministic output
    }
  }
}, function (error) {
  error && console.error(error)
})
