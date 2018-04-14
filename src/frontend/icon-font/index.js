const path = require('path')
const webfontsGenerator = require('webfonts-generator')

const icons = [
  'cart',
  'collection',
  'arena',
  'market'
]

webfontsGenerator({
  fontName: 'icons',
  files: icons.map(icon => path.join(__dirname, `icons/plain/${icon}.svg`)),
  dest: path.join(__dirname, '../assets/icons'),
  cssTemplate: path.join(__dirname, 'css.hbs')
}, function (error) {
  error && console.error(error)
})
