<template>
    
  <div>
    <!-- 头部 -->
    <header class="header">
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <p>修改用户名</p>
    </header>
    <section class="sec">
      <input type="text" v-model="userName" />
      <span>用户名长度在4-20位之间</span>
      <button @click="verify">确认修改</button>
    </section>
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        userName:'',
        save:false
    };
  },
  methods: {
      verify(){
          let reg=/\w{4,20}/;
          
          let span = document.querySelector(".sec span");
          if(!reg.test(this.userName)){
              return;
          } else{
              this.$router.replace('/acountInfo');
          }
      }
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.header{
    width: 100%;
    position: relative;
    text-align: center;
    font-size: .4rem;
    padding: .1rem;
    background-color: #1fa7ff;
    color: #fff;
}
.header span{
    position: absolute;
    top: .1rem;
    left: .2rem;
    font-size: .3rem;
}
.sec{
    padding: .2rem;
}
.sec input{
    width: 97%;
    height: .7rem;
    box-sizing: border-box;
    outline: #1fa7ff;
    border: 1px solid #ddd;
    margin: auto;
    background-color: #f5f5f5;
    padding-left: .2rem;
    border-radius: .05rem;
    margin-bottom: .1rem;
}
.sec button{
    width: 97%;
    margin:.2rem auto;
    background-color: #1fa7ff;
    height: .7rem;
    outline: none;
    border: none;
    font-size: .4rem;
    color: #A6D3F5;
    border-radius: .05rem;
};
</style>