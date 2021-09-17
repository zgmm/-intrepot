<template>
  <div class="box">
    <header>
      <div class="fanhui" @click="$router.back(-1)"><img src="../../../public/images/zuo.png"></div>
      <div class="header-img"><img src="../../../public/images/dianpu3.jpeg" /></div>
      <div class="header-text">
        <h3>有亿点点好吃</h3>
        <p>商家配送 / 分钟配送 / 配送费￥5</p>
        <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
      </div>
    </header>
    <div class="router">
      <div><router-link to="/spxiangqing3/shangpin">商品</router-link></div>
      <div><router-link to="/spxiangqing3/pingjia">评价</router-link></div>
    </div>
    <router-view></router-view>
    
  </div>
</template>
<script>
export default {
   mounted() {
     this.$store.commit("getyeshu",3)
   },
}
</script>
<style scoped>
.box{
  text-align: center;
}
header {
  width: 100%;
  height: 2rem;
  background-color: #adb0c2;
}
header .fanhui{
  width: .4rem;
  height: .4rem;
  position: absolute;
  top: 0rem;
  left: .1rem;
}
.fanhui img{
  width: 100%;
  height: 100%;
}
.header-img {
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  margin:.4rem .225rem 0 .225rem;
}
.header-img img {
  width: 100%;
  height: 100%;
}
.header-text {
  width: 65%;
  height: 1.5rem;
  float: left;
  margin-top: 0.225rem;
  text-align: left;
  color: white;
  position: relative;
}
.header-text > h3 {
  font-size: 0.3rem;
  margin: 0.15rem 0;
}
.header-text > p {
  margin: 0.2rem 0;
}
.router {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #ebebeb;
  font-size: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 0.8rem;
  background-color: #fff;
}
.router div {
  width: 50%;
  height: 100%;
}
.router a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;
  color: gray;
}
.router a.router-link-active{
     background-color:#e8f0fe;
     color: lightseagreen;
}
</style>