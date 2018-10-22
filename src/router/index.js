import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/pages/Dashboard')
    },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
