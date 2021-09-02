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
import {
    Swipe,
    SwipeItem
} from 'vant';
import {
    Lazyload
} from 'vant';

Vue.use(Lazyload);

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