/*
 * @Author: crli
 * @Date: 2020-07-02 09:13:09
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 15:33:23
 * @Description: 移动例子
 */
import Vue from 'vue'
import router from '@/router/mobile'
import Vuex from 'vuex'
import '@/utils/mobile'
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
