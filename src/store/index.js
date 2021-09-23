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
    rex:0,  //热销
    zhek:0, //折扣
    haoc:0, //好吃
    zhaop:0,  //招牌
    mif:0 //米饭
  },
  mutations: { // 方法区域==methods
    rx(state,sumber){ //热销
      state.rex=sumber
    },
    zk(state,sumber){ //折扣
      state.zhek=sumber
    },
    hc(state,sumber){ //好吃
      state.haoc=sumber
    },
    zp(state,sumber){ //招牌
      state.zhaop=sumber
    },
    mf(state,sumber){ //米饭
      state.mif=sumber
    },
    getyeshu(state, sumber) { //记录商品详情页面的页数
      state.yeshu = sumber
      console.log("第" + state.yeshu + "页");
    },
    add(state, index) { //菜品总数量 增加
      state.shuliang++;
    },
    jian(state, index) { //菜品总数量 减少
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
    },
    ID(state,sumber){ //mock数据表id
      state.value.id=sumber
    },
    changespxqRoute(state,getpath){//改变商品详情返回的路由
      state.spxqRoute = getpath
    },
  },
  actions: {},
  modules: {}
})