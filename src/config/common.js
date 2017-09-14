require('@assets/css/common.scss')
require('@assets/fonts/iconfont.css')
import 'mint-ui/lib/style.css'
import 'vux/src/styles/reset.less'
require('./flexible.js')
// eslint-disable-next-line no-unused-vars
import FastClick from 'fastclick'
FastClick.attach(document.body)
//  注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
// import { WechatPlugin } from 'vux'
// import Vue from 'vue'
//
// Vue.use(WechatPlugin)

// import wx from './wx'

// import vueFilter from './vueFilter'
// export default{
//   wx
// }
