import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.use(Router)
Vue.use(Vuex)

let address = r => require.ensure([], () => r(require('./addressRoot.vue')), 'address')
let addresschange = r => require.ensure([], () => r(require('./addresschange.vue')), 'addresschange')
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
import Lib from '@config/Lib'
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: {
    App
  }
})
