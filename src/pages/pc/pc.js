/*
 * @Author: crli
 * @Date: 2020-07-02 09:13:09
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 14:56:36
 * @Description: PC例子
 */
import Vue from 'vue'
import router from '@/router/pc'
import Vuex from 'vuex'
import '@/utils/pc'
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
