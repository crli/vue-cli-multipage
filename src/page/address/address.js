import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
import '@config/common'
let app = r => require.ensure([], () => r(require('./app')), 'app')
let addresschange = r => require.ensure([], () => r(require('./addresschange')), 'addresschange')

const routes = [
  {
    path: '/',
    component: app,
    children: [
      {
        path: '/addresschange',
        component: addresschange
      }
    ]
  }
]
const router = new Router({
  routes
})
const store = new Vuex.Store({
  state: {
    list: 'list'
  },
  mutations: {
    addAdressList (state, data) {
      state.list = data
    }
  }
})
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store
})
