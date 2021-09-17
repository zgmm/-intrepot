import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'
import '../public/font_6f8ftcxawn/iconfont.css'

// 导入视图插件
import view from "view-design"
import 'view-design/dist/styles/iview.css'
Vue.use(view)

// 导入vant的插件，vant内都可以使用
import './plugins/vant'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: require('../public/images/zcool.gif'), //加载中图片，一定要有，不然会一直重复加载占位图
});


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import animated from 'animate.css'
Vue.use(animated)

//导入mint-ui组件
// 按需引入部分组件 
import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')