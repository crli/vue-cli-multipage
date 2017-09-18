var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')

var glob = require('glob');
var entries =  utils.getMultiEntry('./src/'+config.moduleName+'/**/**/*.js'); // 获得入口js文件

var chunks = Object.keys(entries);

console.log(chunks)

var comps = glob.sync('./src/components/*.vue');
var compsEntry = {components: comps};

var projectRoot = path.resolve(__dirname, '../')

var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {

  entry: {
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@config': path.resolve(__dirname, '../src/config'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@server': path.resolve(__dirname, '../src/server'),
      '@components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }

    ]
  },
  plugins: []
}
webpackConfig.entry = Object.assign({},webpackConfig.entry, entries);
webpackConfig.entry = Object.assign({},webpackConfig.entry, compsEntry);
console.log('----------------------------------------------------------------')
console.log(webpackConfig.entry)
console.log('----------------------------------------------------------------')
const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
