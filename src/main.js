import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'
import '../public/font_6f8ftcxawn/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import animated from 'animate.css'

Vue.use(animated)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require('../public/images/zcool.gif')
})
import view from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(view)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')