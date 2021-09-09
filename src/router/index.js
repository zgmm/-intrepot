import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home', //一级路由我的页面
        component: () => import('../views/Home.vue'),
        children: [{ //二级路由
                path: '',
                redirect: 'homed', //默认显示登录前页面
                meta: { //用来判断一级路由是否显示在底部 true显示；false不显示
                    isturn: true
                }
            },
            {
                path: 'homed',
                component: () =>
                    import('../components/home/Homed.vue'),
                meta: {
                    isturn: true
                }
            },
            {
                path: 'homei', //登录后的页面
                component: () =>
                    import('../components/home/Homei.vue'),
                meta: {
                    isturn: true
                }
            },
            {
                path: 'acountInfo', //账户信息
                component: () =>
                    import('../components/my/AccountInfo.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'balance', //我的余额
                component: () =>
                    import('../components/my/Balance.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'integral', //我的积分
                component: () =>
                    import('../components/my/Integral.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'discounts', //我的优惠
                component: () =>
                    import('../components/my/Discounts.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'product', //产品列表
                name: 'Product',
                component: () =>
                    import('../components/product/ProductList.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'midifyUser', //修改用户名
                name: 'MidifyUser',
                component: () =>
                    import('../components/my/MidifyUser.vue'),
                    meta: {
                        isturn: false
                    }
            },
            {
                path: 'vip', //vip
                name: 'Vip',
                component: () =>
                    import('../components/my/Vip.vue'),
                    meta: {
                        isturn: false
                    }
            },
        ],
    },
    {
        path:'/product',
        component: ()=>import('../components/product/ProductList.vue')
    },
    {
        path: '/indent',
        component: () =>
            import('../views/Indent.vue'),
        meta: {
            isturn: true
        }
    },
    {
        path: '/search',
        component: () =>
            import('../views/Search.vue'),
        meta: {
            isturn: true
        }
    },
    {
        path: '/takeaway',
        name: 'Takeaway',
        component: () =>
            import('../views/Takeaway.vue'),
        meta: {
            isturn: true
        }
    },
    {
        path: '/xuandizhi',
        name: 'Xuandizhi',
        component: () => import('../components/Xuandizhi.vue'),
        meta: {
            isturn: false
        }
    },
    {
        path: '/tiandizhi',
        name: 'Tiandizhi',
        component: () => import('../components/Tiandizhi.vue'),
        meta: {
            isturn: false
        }
    },
    {
        path: '/zfdingdan',
        name: 'Zfdingdan',
        component: () => import('../components/Zfdingdan.vue'),
        meta: {
            isturn: false
        }
    },
    {
        path: '/spxiangqing',
        component: () => import('../components/Spxiangqing.vue'),
        children: [{
                path: "/",
                component: () => import('../components/Shangpin.vue'),
            },
            {
                path: 'shangpin',
                component: () => import('../components/Shangpin.vue'),
            },
            {
                path: 'pingjia',
                component: () => import('../components/Pingjia.vue'),
            },
        ],
        meta: {
            isturn: false
        },
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            isturn: false
        }
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/forget.vue'),
        meta: {
            isturn: false
        }
    }
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