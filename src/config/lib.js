import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

var Rxports = {
  // 微信相关，获取签名
  wxConfig () {
    const wx = Vue.wechat
    this.ajax({
      'url': '',
      'data': {},
      'success': function (data) {
        console.log(data.errCode)
        if (data.errCode === 0) {
          wx.config(data.data)
        } else {
          console.log('获取签名失败...')
        }
      }
    })
    wx.ready(() => {
      // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
      // 则可以直接调用，不需要放在ready函数中。
      const link = document.location.href // 当前url
      wx.onMenuShareAppMessage({ // 分享给朋友
        title: '',       // 分享标题
        desc: '',   // 分享描述
        link: link,       // 分享链接 默认以当前链接
        imgUrl: '' // 分享图标
      })
      // 分享到朋友圈
      wx.onMenuShareTimeline({
        title: '',       // 分享标题
        desc: '',   // 分享描述
        link: link,       // 分享链接 默认以当前链接
        imgUrl: '' // 分享图标
      })
    })
  },
  /**
   * 封装axios，减少学习成本，参数基本跟jq ajax一致
   * @param {String} type      请求的类型，默认post
   * @param {String} url        请求地址
   * @param {String} time      超时时间
   * @param {Object} data      请求参数
   * @param {String} dataType    预期服务器返回的数据类型，xml html json ...
   * @param {Object} headers      自定义请求headers
   * @param {Function} success    请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
   * @param {Function} error    发送请求前
   * @param return
   */
  ajax: function (opt) {
    var opts = opt || {}

    if (!opts.url) {
      alert('请填写接口地址')
      return false
    }

    axios({
      method: opts.type || 'post',
      url: opts.url,
      params: opts.params || {},
      data: qs.stringify(opts.data),
      headers: opts.headers || {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      baseURL: '',
      timeout: opts.time || 10 * 1000,
      responseType: opts.dataType || 'json',
      withCredentials: true
    }).then(function (res) {
      if (res.status === 200) {
        if (opts.success) {
          opts.success(res.data, res)
        }
      } else {
        // if (data.error) {
        //   opts.error(error)
        // } else {
        //   alert('好多人在访问呀，请重新试试[timeout]')
        // }
      }
    }).catch(function (error) {
      console.log(error)
      if (opts.error) {
        opts.error(error)
      } else {
        console.log('好多人在访问呀，请重新试试[timeout]')
      }
    })
  }
}

export default Rxports
