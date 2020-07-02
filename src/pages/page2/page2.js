/*
 * @Author: crli
 * @Date: 2020-07-02 09:13:09
 * @LastEditors: crli
 * @LastEditTime: 2020-07-02 09:53:00
 * @Description: file content
 */
import Vue from 'vue'
import router from '@/router/page2'
import Vuex from 'vuex'
import '@/utils/common'
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
