/*
 * @Author: crli
 * @Date: 2020-07-02 09:13:09
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 15:08:49
 * @Description: 移动例子
 */
import Vue from 'vue'
import router from '@/router/mobile'
import Vuex from 'vuex'
import '@/utils/mobile'
if (process.env.ENV !== 'production') {
  const { mockXHR } = require('../../../mock')
  mockXHR()
}
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    xx: false
  },
  mutations: {
    canToForm (state, flag) {
      state.xx = flag
    }
  }
})
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store
})
