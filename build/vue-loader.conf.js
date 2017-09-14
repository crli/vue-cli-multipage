var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    }),
    require('postcss-plugin-px2rem')({
      rootValue: 37.5, // 这里对应的是750的设计图尺寸
      selectorBlackList: ['html'],
      mediaQuery: true,
      propBlackList: ['font-size'] // 如果要保持font-size不转换
    })
  ]
}
