/*
 * @Author: crli
 * @Date: 2020-07-01 15:37:55
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 15:29:13
 * @Description: file content
 */
const glob = require('glob')

// 配置pages多页面获取当前文件夹下的html和js
function getEntry (globPath) {
  const entries = {}
  let tmp = []
  const htmls = {}

  // 读取src/pages/**/底下所有的html文件
  glob.sync(globPath + 'html').forEach(function (entry) {
    tmp = entry.split('/').splice(-3)
    htmls[tmp[1]] = entry
  })

  // 读取src/pages/**/底下所有的js文件
  glob.sync(globPath + 'js').forEach(function (entry) {
    tmp = entry.split('/').splice(-3)
    entries[tmp[1]] = {
      entry,
      template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
      filename: tmp[1] + '.html'//  以文件夹名称.html作为访问地址
    }
  })
  console.log(entries)
  return entries
}
const htmls = getEntry('./src/pages/**/*.')
let defualthtml = ''
Object.keys(htmls).forEach((ele, i) => {
  if (i === 0) {
    defualthtml = `/${htmls[ele].filename}`
  }
})
console.log(defualthtml)
module.exports = {
  pages: htmls,
  publicPath: './', //  解决打包之后静态文件路径404的问题
  devServer: {
    open: true, //  npm run serve 自动打开浏览器
    index: defualthtml, //  默认启动页面
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://xx.x..x.x./',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // pc端设置192
            mediaQuery: false,
            minPixelValue: 0,
            propBlackList: ['font-size'] // 如果要保持font-size不转换
          })
        ]
      }
    }
  }
}
