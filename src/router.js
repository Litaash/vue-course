import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
