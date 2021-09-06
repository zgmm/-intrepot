import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 相当于data
    shuliang:0, // 定义变量
    sum:0,
    name:[],
    jiage:[],
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
    }
  },
  actions: {
  },
  modules: {
  }
})
