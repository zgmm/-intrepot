import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('../views/forget.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
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

router.beforeEach((to, from, next) => {
  if (to.path == '/' || to.path == '/login' || to.path == '/forget') {
    next();
  } else {
    if (window.sessionStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  }
})
export default router