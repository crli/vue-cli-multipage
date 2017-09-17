import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)
import '@config/common'
// let address = r => require.ensure([], () => r(require('./address.vue')), 'address')
// let addresschange = r => require.ensure([], () => r(require('./addresschange')), 'addresschange')
let address = require('./address.vue')
let addresschange = require('./addresschange')
const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/address'
      },
      {
        path: '/address',
        component: address,
        children: [
          {
            path: '/address/addresschange',
            component: addresschange
          }
        ]
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
  template: '<App/>',
  router,
  store,
  components: {
    App
  }
})
