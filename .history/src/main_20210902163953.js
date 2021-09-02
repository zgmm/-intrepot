import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css/normalize.css'
import '../public/font_6f8ftcxawn/iconfont.css'
import view from "view-design"
import 'view-design/dist/styles/iview.css'
import { Swipe, SwipeItem } from 'vant';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: require('images/jiazai.jpg'), //加载中图片，一定要有，不然会一直重复加载占位图
    error: require('') //加载失败图片
});

Vue.use(VueAxios, axios)
Vue.use(view)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')