import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 相当于data
    shuliang:0, // 菜品总数量
    sum:0,  // 菜品总价
    name:[],  // 菜品名字
    jiage:[], // 各菜品的价格
    count:[], // 各菜品的数量
    yeshu:0, //记录商品详情页面的页数
    avatar:'',//头像
  },
  mutations: {  // 方法区域==methods
    getyeshu(state,sumber){ //记录商品详情页面的页数
      state.yeshu=sumber
      console.log("第"+state.yeshu+"页");
    },
    add(state,index){ //菜品总数量 增加
      state.shuliang++;
    },
    jian(state,index){  //菜品总数量 减少
      state.shuliang--;
    },
    zongjia(state,index){ //菜品总价
      state.sum=index;
    },
    getname(state,name){ //菜品名字
      state.name = name;
    },
    getjiage(state,sumber){ //各菜品的价格
      state.jiage=sumber;
    },
    getsum(state,sumber){ //菜品总价+配送费+餐盒费
      state.sum=sumber+8
    },
    getcount(state,sumber){ //各菜品的数量
      state.count=sumber
    },
    getshuliang(state,sumber){ //菜品总数量
      state.shuliang=sumber
    },
    //传入头像
    userImg(state,avatar){
      state.avatar = avatar
    }
  },
  //action是对我们定义的一些操作，正常情况下，我们很少会直接调用action方法来改变state
  actions: {},
  modules: {
  },
  //是对数据的包装，例如对数据进行拼装，或者过滤
  getters:{

  }
})
// export default app