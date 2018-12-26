/*
 * @Author: Brainy 
 * @Date: 2018-12-18 14:07:52 
 * @Last Modified by: Brainy
 * @Last Modified time: 2018-12-18 14:24:05
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

const staticRouters = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login')
}, {
  path: '*',
  name: 'notfound',
  component: () => import('@/views/Exception/404.vue')
}]

const allowRouter = [
  '/login'
]


export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: staticRouters
})

export const dynamicRouters = [{
  path: '/',
  component: Dashboard,
  children: [{
    path: '/',
    name: 'home',
    meta: {
      permissions: []
    },
    component: () => import('@/views/Home')
  }, {
    path: '/menu2',
    name: 'mebu1',
    meta: {
      permissions: []
    },
    component: () => import('@/views/Report/mergeRange')
  }]
}]

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!sessionStorage.getItem("Token")) {
    if (to.path === "/login") {
      router.replace('/')
    } else {
      if (store.state.permissionList.length === 0) {
        store.dispatch('getPermission').then(() => {
          //拿到权限列表生成router
          router.addRoutes(dynamicRouters);
          next(to.path)
        }).catch(() => {
          router.replace('/login')
        })
      } else {
        next()
      }

    }
  } else {
    if (allowRouter.indexOf(to.path) === -1) {
      router.replace('/login')
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})