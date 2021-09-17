import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '../views/login.vue'
import blanceexplain from '../components/explain/Blanceexplain.vue' //余额说明
import chitplain from '../components/explain/Chitplain.vue' //代金券说明
import integralplain from '../components/explain/Integralplain.vue' //积分说明
import packetplain from '../components/explain/Packetplain.vue' //红包说明

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/home', //一级路由我的页面
        component: () =>
            import ('../views/Home.vue'),
        children: [{ //二级路由
                path: '',
                component: () =>
                    import ('../components/home/Homed.vue'), //默认显示登录前页面
                meta: { //用来判断一级路由是否显示在底部 true显示；false不显示
                    isturn: true,
                    islogin: true
                }
            },
            {
                path: 'homed',
                component: () =>
                    import ('../components/home/Homed.vue'),
                meta: { isturn: true, islogin: true }
            },
            {
                path: 'acountInfo',
                component: () =>
                    import ('../components/my/AccountInfo.vue')
            }, //账户信息
            {
                path: 'balance',
                component: () =>
                    import ('../components/my/Balance.vue')
            }, //我的余额
            {
                path: 'integral',
                component: () =>
                    import ('../components/my/Integral.vue')
            }, //我的积分
            {
                path: 'discounts',
                component: () =>
                    import ('../components/my/Discounts.vue')
            }, //我的优惠
            {
                path: 'product',
                component: () =>
                    import ('../components/product/ProductList.vue')
            }, //产品列表
            {
                path: 'midifyUser',
                component: () =>
                    import ('../components/my/MidifyUser.vue')
            }, //修改用户名
            {
                path: 'vip',
                component: () =>
                    import ('../components/my/Vip.vue'),
            }, //vip页面
            { path: 'blanceexplain', component: blanceexplain }, //余额说明
            { path: 'chitplain', component: chitplain }, //代金券说明
            { path: 'integralplain', component: integralplain }, //积分说明
            { path: 'packetplain', component: packetplain }, //红包说明
        ],
    },
    {
        path: '/product',
        component: () =>
            import ('../components/product/ProductList.vue')
    },
    {
        path: '/indent',
        component: () =>
            import ('../views/Indent.vue'),
        meta: { isturn: true, islogin: true }
    },
    {
        path: '/search',
        component: () =>
            import ('../views/Search.vue'),
        meta: { isturn: true, islogin: true }
    },
    {
        path: '/takeaway',
        component: () =>
            import ('../views/Takeaway.vue'),
        meta: { isturn: true, islogin: true }
    },
    {
        path: '/xuandizhi',
        component: () =>
            import ('../components/address/Xuandizhi.vue')
    }, // 选择地址
    {
        path: '/tiandizhi',
        component: () =>
            import ('../components/address/Tiandizhi.vue')
    }, // 添加地址
    {
        path: '/gaidizhi',
        component: () =>
            import ('../components/address/Gaidizhi.vue')
    }, // 修改地址
    {
        path: '/zfdingdan',
        component: () =>
            import ('../components/Zfdingdan.vue')
    }, // 支付订单
    {
        path: '/zfmima',
        component: () =>
            import ('../components/Zfmima.vue')
    }, // 支付订单
    {
        path: '/spxiangqing1', // 商品详情1
        component: () =>
            import ('../components/details/Spxiangqing1.vue'),
        children: [{
                path: "/",
                component: () =>
                    import ('../components/details/Shangpin.vue'),
            }, //二级路由-默认
            {
                path: 'shangpin',
                component: () =>
                    import ('../components/details/Shangpin.vue')
            }, //二级路由-商品
            {
                path: 'pingjia',
                component: () =>
                    import ('../components/details/Pingjia.vue')
            }, //二级路由-评价
        ],
        meta: {
            islogin: true
        }
    },
    {
        path: '/spxiangqing2', // 商品详情2
        component: () =>
            import ('../components/details/Spxiangqing2.vue'),
        children: [{
                path: "/",
                component: () =>
                    import ('../components/details/Shangpin.vue'),
            }, //二级路由-默认
            {
                path: 'shangpin',
                component: () =>
                    import ('../components/details/Shangpin.vue')
            }, //二级路由-商品
            {
                path: 'pingjia',
                component: () =>
                    import ('../components/details/Pingjia.vue')
            }, //二级路由-评价
        ],
        meta: {
            islogin: true
        }
    },
    {
        path: '/spxiangqing3', // 商品详情3
        component: () =>
            import ('../components/details/Spxiangqing3.vue'),
        children: [{
                path: "/",
                component: () =>
                    import ('../components/details/Shangpin.vue'),
            }, //二级路由-默认
            {
                path: 'shangpin',
                component: () =>
                    import ('../components/details/Shangpin.vue')
            }, //二级路由-商品
            {
                path: 'pingjia',
                component: () =>
                    import ('../components/details/Pingjia.vue')
            }, //二级路由-评价
        ],
        meta: {
            islogin: true
        }
    },
    {
        path: '/spxiangqing4', // 商品详情
        component: () =>
            import ('../components/details/Spxiangqing4.vue'),
        children: [{
                path: "/",
                component: () =>
                    import ('../components/details/Shangpin.vue'),
            }, //二级路由-默认
            {
                path: 'shangpin',
                component: () =>
                    import ('../components/details/Shangpin.vue')
            }, //二级路由-商品
            {
                path: 'pingjia',
                component: () =>
                    import ('../components/details/Pingjia.vue')
            }, //二级路由-评价
        ],
        meta: {
            islogin: true
        }
    },
    {
        path: '/forget',
        name: 'forget',
        component: () =>
            import ('../views/forget.vue'),
        meta: {
            isturn: false
        }
    },
    {
        path: '/evaluate', //订单评价页面
        name: 'Fvaluate',
        component: () =>
            import ('../components/evaluate/Evaluate.vue')
    },
    {
        path: '/refund', //订单评价页面
        name: 'Refund',
        component: () =>
            import ('../components/refund/Refund.vue')
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path == '/' || to.path == '/login' || to.path == '/forget' || to.meta.islogin) {
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