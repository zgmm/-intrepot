<template>
    
  <div class="balance">
    <header class="header">
      <div class="top">
        <span class="iconfont icon-AS" @click="$router.replace('/home')"></span>
        我的余额
      </div>
      <div class="top-cont">
        <div class="txt1">
          <p class="txt1-l">当前余额</p>
          <p class="txt1-r" @click="$router.push('/home/blanceexplain')">
            <span class="iconfont icon-wenhao"></span>余额说明
          </p>
        </div>
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
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f5f5f5");
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #3190e8;
  box-sizing: border-box;
  height: 3.5rem;
}
.top {
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 0.15rem;
  position: relative;
  font-size: 0.3rem;
  box-sizing: border-box;
}
.top span {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.4rem;
}
.top-cont {
  width: 97%;
  margin: 0.1rem;
  margin-top: 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.05rem;
  padding: 0.1rem;
}
.txt1::after {
  content: "";
  display: block;
  clear: both;
}
.top-cont .txt1-l {
  float: left;
}
.top-cont .txt1-r {
  float: right;
  color: #3190e8;
}
.top-cont .txt2 span {
  font-size: 0.7rem;
}
.top-cont .btn {
  width: 95%;
  padding: 0.2rem;
  margin: 0.1rem;
  text-align: center;
  border: none;
  outline: none;
  color: #fff;
  background-color: #ccc;
  border-radius: 0.05rem;
}
.sec {
  padding: 0.2rem;
}
.sec-cont {
  width: 1.5rem;
  height: 1rem;
  /* border: 1px solid; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #989898;
}
.sec-cont span {
  font-size: 1.5rem;
}
</style>