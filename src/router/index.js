import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '',
        redirect: 'homei',
        meta:{
          isturn:true
        }
      },
      {
        path: 'homei',
        component: () => import('../components/home/Homei.vue'),
        meta:{
          isturn:true
        }
      },
      {
        path: 'homed',
        component: () => import('../components/home/Homed.vue'),
        meta:{
          isturn:true
        }
      },
      {
        path: 'acountInfo',
        component: () => import('../components/my/AccountInfo.vue'),
        meta:{
          isturn:false
        }
      },
      {
        path: 'balance',
        component: () => import('../components/my/Balance.vue'),
        meta:{
          isturn:false
        }
      },
      {
        path: 'integral',
        component: () => import('../components/my/Integral.vue'),
        meta:{
          isturn:false
        }
      },
      {
        path: 'discounts',
        component: () => import('../components/my/Discounts.vue'),
        meta:{
          isturn:false
        }
      },
    ],
  },
  {
    path: '/indent',
    component: () => import('../views/Indent.vue'),
    meta:{
      isturn:true
    }
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue'),
    meta:{
      isturn:true
    }
  },
  {
    path: '/takeaway',
    name: 'Takeaway',
    component: () => import('../views/Takeaway.vue'),
    meta:{
      isturn:true
    }
  },
]

const router = new VueRouter({
  routes
})

export default router