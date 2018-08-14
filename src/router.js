import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/users',
      component: () => import('./views/Users.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:id',
      component: () => import('./views/Edit.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/add',
      component: () => import('./views/Add.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

export default router
