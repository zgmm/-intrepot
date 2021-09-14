import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 相当于data
    shuliang:0, // 定义变量
    sum:0,
    name:[],
    jiage:[],
    avatar:'',//头像
  },
  mutations: {  // 方法区域==methods
    add(state,index){
      state.shuliang++;
    },
    jian(state,index){
      state.shuliang--;
    },
    zongjia(state,index){
      state.sum=index;
    },
    getname(state,name){
      state.name = name;
    },
    getjiage(state,sumber){
      state.jiage=sumber;
    },
    getsum(state,sumber){
      state.sum=sumber+8
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