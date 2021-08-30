<template>   
  <div class="balance">
    <header class="header">
      <div class="top">
        <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
        我的余额
      </div>
      <div class="top-cont">
          <div class="txt1"><p class="txt1-l">当前余额</p><p class="txt1-r"><span class="iconfont icon-wenhao"></span>余额说明</p> </div>
          <p class="txt2"><span>0.00</span>元</p>
          <button class="btn">提现</button>
      </div>
    </header>
     <section class="sec">
        <p>交易明细</p>
        <div class="sec-cont">
            <span class="iconfont icon-not-found"></span>
            暂无明细记录
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  beforeCreate() {
      document.querySelector("body").setAttribute("style","background-color:#f5f5f5")
  },
};
</script>

<style scoped>
.header{
    width: 100%;
    background-color: #3190E8;
    box-sizing: border-box;
    height: 3.1rem;
}
.top{
    text-align: center;
    width: 100%;
    color: #fff;
    padding: .15rem;
    position: relative;
    font-size: .3rem;
    box-sizing: border-box;
}
.top span{
    position: absolute;
    top: .15rem;
    left: .1rem;
}
.top-cont{
    width: 97%;
    margin:.1rem;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: .05rem;
    padding: .1rem;
}
.txt1::after{
    content: "";
    display: block;
    clear: both;
}
.top-cont .txt1-l{
    float: left;
}
.top-cont .txt1-r{
    float: right;
    color: #3190E8;
}
.top-cont .txt2 span{
    font-size: .7rem;
}
.top-cont .btn{
    width: 95%;
    padding: .2rem;
    margin: .1rem;
    text-align: center;
    border: none;
    outline: none;
    color: #fff;
    background-color: #ccc;
    border-radius: .05rem;
}
.sec{
    padding: .2rem;
}
.sec-cont{
    width:1.5rem ;
    height: 1rem;
    /* border: 1px solid; */
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #989898;
}
.sec-cont span{
    font-size: 1.5rem;
    
}
</style>