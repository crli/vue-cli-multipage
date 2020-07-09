vue-cli-multipage2.0

## 主要功能

 1. 支持字体图标,css分离打包
 2. 各入口文件分离打包,第三方库模块打包,公共组件分离打包
 3. 支持vue-router路由按需加载
 4. 可自定义页面入口模块名
 5. 整合了UI框架，`vant`
 6. 基于`webpack4`
 7. 热更新
 8. 支持`Sass`css预处理
 9. 全局注册vue全局过滤器的方法 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Compiles and minifies for production test
```
npm run build:uat
```
### Lints and fixes files
```
npm run lint
```

## 目录结构
```
webpack
|---build
|---src
  |---assets    #资源
    |---images  #图片
    |---styles  #css&&scss
    |---fonts/    #字体图标
  |---components 组件
    |---Screenfull.vue  组件
  |---page    #各个页面入口模块，模块名可以自定义哦！
    |---mobile  （移动端示例）
      |---mobile.html
      |---mobile.js
    |---pc
      |---pc.html (pc端示例)
      |---pc.js
  |---router    #各个页面路由管理
    |---mobile
      |---index.js
    |---pc
      |---index.js
  |---server 接口
    |---request.js    #axios配置，及异常处理
    |---user.js    #接口模块
    |---xx.js    #接口模块
  |---store 状态管理
    |---index.js    #可以自由配置发挥
  |---utils 插件
    |---mobile.js    #移动端项目全局样式依赖
    |---fleible.js    #手淘rem自适应
    |---mUtils.js    # 自定义方法
    |---vueFilter.js    #注册vue的全局过滤器
    |---hybrid.js    #与原生联调传参使用
    |---pc.js    #pc端项目全局样式依赖
    |---pcrem.js    #pc端rem自适应
  |---view    #各个页面视图模块
    |---mobile  （移动端示例）
      |---app.vue
      |---xx.vue
    |---pc  (pc端示例)
      |---app.vue
      |---xx.vue
......

  ```

从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。其实我们所有的文件，最主要都是放在`page`文件夹里，以文件夹名为html的名称。

在`page`里二级文件夹，一个文件夹就是一个入口，`js``html` 都统一放在当前文件夹里


## 移动自适应

`vue.config` 中配置了`postcss-plugin-px2rem`

因为vant 默认大小`375`,为了与`fleible.js`兼容 配置 `rootValue: 37.5`以及`propBlackList: ['font-size'] // 保持font-size不转换成rem`

此时如果如果页面基准是`750`,者如果PSD图大小`100px`, 字号大小`32`,则代码编写为 `width:50px; font-size:16px`

pc端如果页面基准是`1920`  rootValue设置192

编译结果`width` 转为了`rem` , `font-size` 保持`16px`不变

## mobile.js&&pc.js库使用

我们做多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

如果看过源码的童鞋，在`*.js`页面里，都统一import了一个文件

```
import '@/utils/mobile'
或者
import '@/utils/pc'
```
这就是全局统一公共模块

## mUtils.js库使用

在`mUtils.js`调用方法

``` bash
import {setStore} from 'mUtils'
setStore('name','crli')
```
## 启动
``` bash
页面1 http://localhost:8080/mobile.html#/ 

页面2 http://localhost:8080/pc.html#/
```
## 注意
移动端和pc端页面不可同时开发