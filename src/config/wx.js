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
  }
}

export default Rxports
