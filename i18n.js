const path = require('path')
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  otherLanguages: ['tr', 'de'],
  localePath: path.resolve('./public/static/locales'),
})
