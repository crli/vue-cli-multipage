vue-Multipage

## 主要功能
 2. 支持字体图标
 3. 构建时，增加对css打包的支持
 4. 提取公共模块
 5. 多页面可使用vue-router2路由,路由按需加载
 6. 可自定义页面模块名，例如 http:// localhost:8091/`page`/home/list.html，`page`就是我们线上的模块名，
 7. 模块下静态文件可直接调用
 8. 整合了vue最流行的UI框架，`vuxui2.x`，`mint-ui`
 9. 基于`webpack2`，更高的构建速度，包体积更小，全面支持`ES6 Modules`
 10. 热更新，效率提升神器呀
 11. 支持`Less`css预处理,`Sass`css预处理
 12. 全局注册vue全局过滤器的方法 

## Build Setup

``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。


## 目录结构
```
webpack
 |---build
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---fonts/    #字体图标
 |---components 组件
     |---tpl.vue  按钮组件
 |---config 插件
     |---js/common.js    #全局样式依赖与公共组建
     |---js/fleible.js    #手淘rem自适应
     |---js/wx.js    #微信相关方法
     |---js/mUtils.js    # 自定义方法
     |---js/vueFilter.js    #注册vue的全局过滤器
 |---server 接口
     |---http.js    #自己定义的站点以及接口名
     |---index.js    #axios配置以及暴露接口名给组件调用
 |---page    #各个页面模块，模块名可以自定义哦！
     |---address    #一级目录
        |---address.html
        |---address.js
        |---addresschange.vue
        |---addressRoot.vue
        |---app.vue
     |---list    
        |---list.html#二级目录
        |---list.js
        |---listApp.vue
......

  ```

例如 http:// localhost:8091/`page`/list.html，`page`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/page`的这个文件夹名称，是否会报错的。

从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。其实我们所有的文件，最主要都是放在`page`文件夹里，以文件夹名为html的名称。

在`page`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。

还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

## common.js库使用

我们做多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

如果看过源码的童鞋，在`*.js`页面里，都统一import了一个文件

```
import '@config/common'
```
这就是全局统一公共模块


## 公共模块
我们通常会把常用的库都打包成公共模块，`CommonsChunkPlugin` 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

不同的项目，使用到的插件库数量有所不同，我们可以调整`minChunks`以达到公共模块的大小，文件路径为`/build/webpack.prod.conf.js`，cart+F查找`minChunks`参数，`minChunks: 3` 意思代表为至少被3个页面引用了，就打包进入公共模块，具体的使用方法，可以再详细了解`webpack`中文文档。http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/


## 结束言
此vue多页面脚手架，并不局限于vux ui 框架，。
