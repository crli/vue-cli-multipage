require('@assets/css/common.scss')
require('@assets/fonts/iconfont.css')
require('./flexible.js')
import FastClick from 'fastclick'
FastClick.attach(document.body)
//  注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import { AlertPlugin, LoadingPlugin, ToastPlugin, WechatPlugin } from 'vux'
import Vue from 'vue'

Vue.use(WechatPlugin)
// ------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin) // 全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin) // 全局注册loading事件，注册之后，不需要每个页面都import loading
Vue.use(ToastPlugin) // 全局注册toast事件，注册之后，不需要每个页面都import toast
// --- VUX UI 注册 END --

// import wx from './wx'

// import vueFilter from './vueFilter'
// export default{
//   wx
// }
