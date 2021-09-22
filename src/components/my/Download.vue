<template>
  <div>
    <!-- 头部 -->
    <Header title="下载">
      <span
        class="iconfont icon-AS black"
        @click="$router.back(-1)"
        slot="black"
      ></span>
    </Header>
    <section class="sec">
      <div class="sec-con1">
        <div><img src="images/logo.png" alt=""></div>
        <p>下载APP</p>
      </div>
      <div class="sec-con2" @click="load">下载</div>
    </section>
  </div>
</template>

<script>
import Header from '../home/Header.vue'
export default {
components:{Header},
data() {
  return {

}
},
methods:{
  load(){
    this.$dialog
        .alert({
          title: "ios用户前往本地应用商店下载",
        })
        .then(() => {
          this.$dialog.close();
        })
  }
},
computed:{

},
mounted() {

},
}
</script>

<style scoped>
.sec{
  transform: translate(-50%,-50%);
  position: absolute;
  top: 33%;
  left: 50%;
  font-size: .35rem;
  text-align: center;
}
.sec-con1>div{
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border-radius: .6rem;
}
.sec-con1>div img{
  width: 100%;
  height: 100%;
}
.sec-con1 p{
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.sec-con2{
  width: 5rem;
  height: 0.7rem;
  background: #4CD964;
  color: #fff;
  border-radius: .1rem;
  line-height: .7rem;
}
</style>