/*
 * @Author: crli
 * @Date: 2020-02-04 16:00:11
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 15:35:00
 * @Description: file content
 */
import axios from 'axios'
// import qs from 'qs'
import { Toast } from 'vant'
import Vue from 'vue'
Vue.prototype.$ajax = axios

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 1000 * 10 // request timeout
})
// axios.defaults.timeout = 10000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.withCredentials = true
service.interceptors.request.use((config) => {
  // if (config.method === 'post') {
  //   config.data = qs.stringify(config.data)
  // }
  return config
}, (error) => {
  Toast({
    message: '加载超时',
    position: 'middle',
    duration: 3000
  })
  return Promise.reject(error)
})

service.interceptors.response.use((res) => {
  if (process.env.VUE_APP_IS_DEMO) {
    const {
      config,
      data
    } = res
    console.group('%c网络响应' + config.url, 'color:orange')
    console.info(`url: %c${config.url}`, 'color:green')
    console.info(`type: %c${config.method}`, 'color:green')
    console.info(`data: %c${config.data}`, 'color:green')
    console.info(`params: %c${JSON.stringify(config.params)}`, 'color:green')
    console.info(`result: %c${JSON.stringify(data)}`, 'color:#1890ff')
    console.groupEnd('网络响应' + config.url)
  }
  return res
}, (error) => {
  console.log('好多人在访问呀，请重新试试[timeout]')
  if (error) {
    let errortime = null
    clearTimeout(errortime)
    errortime = setTimeout(() => {
      Toast({
        message: error.message,
        position: 'middle',
        duration: 2000
      })
      clearTimeout(errortime)
    }, 0)
  }
  return Promise.reject(error)
})
export default service
