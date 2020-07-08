/*
 * @Author: crli
 * @Date: 2020-07-02 09:04:26
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 15:22:00
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '@/views/pc/app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: app
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
