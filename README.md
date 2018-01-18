vue-Multipage

## 主要功能

 1. 支持字体图标,css分离打包
 2. 各入口文件分离打包,第三方库模块打包,公共组件分离打包
 3. 支持vue-router路由按需加载
 4. 可自定义页面入口模块名
 5. 整合了UI框架，`vuxui2.x`，`mint-ui`(弹窗提示使用的mint-ui,不用可不引入)
 6. 基于`webpack2`，全面支持`ES6 Modules`
 7. 热更新
 8. 支持`Less`css预处理,`Sass`css预处理
 9. 全局注册vue全局过滤器的方法 

## Build Setup

``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:1234
npm run dev

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为1234，需要更改的童鞋请到项目目录文件`config/index.js`修改。


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
     |---js/lib.js    #微信,以及封装的方法
     |---js/mUtils.js    # 自定义方法
     |---js/vueFilter.js    #注册vue的全局过滤器
 |---server 接口
     |---domains.js    #域名地址及接口地址
     |---http.js    #axios配置，及异常处理
     |---index.js    #暴露接口名给组件调用
 |---page    #各个页面模块，模块名可以自定义哦！
     |---address    #一级目录
        |---address.html
        |---address.js
        |---addresschange.vue
        |---app.vue
     |---list
        |---list.html#二级目录
        |---list.js
        |---app.vue
......

  ```

例如 http:// localhost:1234/`page`/list.html，`page`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/page`的这个文件夹名称，是否会报错的。

从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。其实我们所有的文件，最主要都是放在`page`文件夹里，以文件夹名为html的名称。

在`page`里二级文件夹，一个文件夹就是一个入口，`js``vue``html` 都统一放在当前文件夹里


## 移动自适应

`/build/webpack.prod.conf.js` 中配置了`postcss-plugin-px2rem`

因为vux 默认大小`375`,为了与`fleible.js`兼容 配置 `rootValue: 37.5`以及`propBlackList: ['font-size'] // 保持font-size不转换成rem`

此时如果如果页面基准是`750`,者如果PSD图大小`100px`, 字号大小`32`,则代码编写为 `width:50px; font-size:16px`

编译结果`width` 转为了`rem` , `font-size` 保持`16px`不变

## common.js库使用

我们做多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

如果看过源码的童鞋，在`*.js`页面里，都统一import了一个文件

```
import '@config/common'
```
这就是全局统一公共模块

## lib.js库使用

在`lib.js`调用事件

``` bash
import { wxInit } from '@config/lib';
wxInit({
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature
    }, {
    share_title: '分享标题',
    share_description: '分享的描述',
    thumb: '分享图片'
    }, '分享链接');
```

## mUtils.js库使用

在`mUtils.js`调用方法

``` bash
import {setStore} from 'mUtils'
setStore('name','crli')
```
