import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import 'vant/lib/index.css'
import axios from "axios"
import vueaxios from "vue-axios"

import 'normalize.css/normalize.css'
import '../public/font_6f8ftcxawn/iconfont.css'

Vue.use(vueaxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
