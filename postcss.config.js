module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(min-width: 960px)' }
        },
        {
          customMedia: { '--m': '(min-width: 740px)' }
        }
      ]
    }
  }
}