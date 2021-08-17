import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/indent',
    name: 'Indent',
    component: () => import('../views/Indent.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/takeaway',
    name: 'Takeaway',
    component: () => import('../views/Takeaway.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
