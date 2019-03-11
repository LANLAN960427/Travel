/**
 * @file 路由封装
 * @author LPC
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
// @指的是在src目录下

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})
