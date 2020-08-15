const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    tr: 'tr',
    en: 'en',
    de: 'de'
}

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
}