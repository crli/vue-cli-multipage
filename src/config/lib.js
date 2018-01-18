import Vue from 'vue'
import {WechatPlugin} from 'vux'
Vue.use(WechatPlugin) //  微信
/**
 * 微信分享
 * @param {微信签名所需对象} sd
 * @param {分享所需字段} sharobj
 * @param {分享所需链接地址} href
 */
export const wxInit = (sd, sharobj, href) => {
  const wx = Vue.wechat
  wx.config({
    debug: true,
    appId: sd.appId,
    timestamp: sd.timestamp,
    nonceStr: sd.nonceStr,
    signature: sd.signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
  })
  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: sharobj.share_title, // 分享标题
      desc: sharobj.share_description, // 分享描述
      // link: window.location.origin + '/app/dmstore?store_id=' + _this.storeid, // 分享链接
      link: href, // 分享链接
      imgUrl: sharobj.thumb, // 分享图标
      success: function () {
        // alert("分享到朋友圈成功")
      },
      cancel: function () {
        // alert("分享失败,您取消了分享!")
      }
    })
    wx.onMenuShareAppMessage({
      title: sharobj.share_title, // 分享标题
      desc: sharobj.share_description, // 分享描述
      link: href, // 分享链接
      imgUrl: sharobj.thumb, // 分享图标
      success: function () {
        // alert("成功分享给朋友")
      },
      cancel: function () {
        // alert("分享失败,您取消了分享!")
      }
    })
    wx.onMenuShareQQ({
      title: sharobj.share_title, // 分享标题
      desc: sharobj.share_description, // 分享描述
      link: href, // 分享链接
      imgUrl: sharobj.thumb, // 分享图标
      success: function () {},
      cancel: function () {}
    })
    wx.onMenuShareWeibo({
      title: sharobj.share_title, // 分享标题
      desc: sharobj.share_description, // 分享描述
      link: href, // 分享链接
      imgUrl: sharobj.thumb, // 分享图标
      success: function () {
        // alert("成功分享给朋友")
      },
      cancel: function () {
        // alert("分享失败,您取消了分享!")
      }
    })
    wx.onMenuShareQZone({
      title: sharobj.share_title, // 分享标题
      desc: sharobj.share_description, // 分享描述
      link: href, // 分享链接
      imgUrl: sharobj.thumb, // 分享图标
      success: function () {
        // alert("成功分享给朋友")
      },
      cancel: function () {
        // alert("分享失败,您取消了分享!")
      }
    })
  })
  wx.error(function (res) {
    // alert(JSON.stringify(res))
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
    // 对于SPA可以在这里更新签名。
  })
}
