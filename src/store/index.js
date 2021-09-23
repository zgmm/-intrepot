import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 相当于data
    seat: "正在定位...",
    shuliang: 0, // 定义变量
    sum: 0, // 菜品总价
    dingdan:[], // /下单的信息-菜名、数量、单价
    yeshu: 0, //记录商品详情页面的页数
    xinxi:{}, // 下单成功，添加进订单的信息
    value:{},  // tap切换栏下标/mock数据表id
    spxqRoute:"/product",//商品详情默认路由
  },
  mutations: { // 方法区域==methods
    getyeshu(state, sumber) { //记录商品详情页面的页数
      state.yeshu = sumber
    },
    add(state) { //菜品总数量 增加
      state.shuliang++;
    },
    jian(state) { //菜品总数量 减少
      state.shuliang--;
    },
    zongjia(state, index) { //菜品总价
      state.sum = index;
    },
    getdingdan(state, sumber) { //下单的信息-菜名、数量、单价
      state.dingdan = sumber
    },
    getshuliang(state, sumber) { //菜品总数量
      state.shuliang = sumber
    },
    index(state,sumber){  // tap切换栏下标
      state.value.index=sumber+1
      window.sessionStorage.setItem("stateIndex",JSON.stringify(sumber+1))
    },
    ID(state,sumber){ //mock数据表id
      state.value.id=sumber
      window.sessionStorage.setItem("stateId",JSON.stringify(sumber))
    },
    changespxqRoute(state,getpath){//改变商品详情返回的路由
      state.spxqRoute = getpath
    },
  },
  actions: {},
  modules: {}
})