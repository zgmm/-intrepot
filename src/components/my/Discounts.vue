<template>
    
  <div>
    <Header title="我的优惠">
      <span class="iconfont icon-AS black" slot="black" @click="$router.replace('/home')"></span>
    </Header>
    <section class="sec">
      <ul class="sec-tab">
        <li @click="num = 0" :class="{ active: num === 0 }">红包</li>
        <li @click="num = 1" :class="{ active: num === 1 }">商家代金券</li>
      </ul>
      <div v-if="num === 0" class="tab-cont">
        <div class="txt1">
          <p class="txt1-l">有<span>X</span>个红包即将过期</p>
          <p class="txt1-r" @click="$router.push('/home/packetplain')">
            <span class="iconfont icon-wenhao"></span>红包说明
          </p>
        </div>
        <div class="txt2">
          <div class="txt2-cc">
            <div class="txt2-cc1">
              <p>￥<span>1.</span>0</p>
              <p>满20元可用</p>
            </div>
            <div class="txt2-cc2">
              <p>分享红包</p>
              <p>XXXX-XX-XX到期</p>
              <p>限收货手机号为 136XXXX1254</p>
            </div>
            <p class="txt2-cc3">仅限指定商家可用</p>
          </div>
        </div>
        <div class="txt2">
          <div class="txt2-cc">
            <div class="txt2-cc1">
              <p>￥<span>2.</span>0</p>
              <p>满40元可用</p>
            </div>
            <div class="txt2-cc2">
              <p>分享红包</p>
              <p>XXXX-XX-XX到期</p>
              <p>限收货手机号为 136XXXX1254</p>
            </div>
            <p class="txt2-cc3">仅限指定商家可用</p>
          </div>
        </div>
        <div class="txt2">
          <div class="txt2-cc">
            <div class="txt2-cc1">
              <p>￥<span>4.</span>5</p>
              <p>满30元可用</p>
            </div>
            <div class="txt2-cc2">
              <p>分享红包</p>
              <p>XXXX-XX-XX到期</p>
              <p>限收货手机号为 136XXXX1254</p>
            </div>
            <p class="txt2-cc3">仅指定活动可用</p>
          </div>
          <p class="txt2-c2">
            限品类：快餐便当，特色菜系，小吃夜宵，甜品饮品，异国料理
          </p>
        </div>
        <p class="txt3">
          查看历史红包<span class="iconfont icon-right"></span>
        </p>
        <ul class="txt4">
          <li>兑换红包</li>
          <li>推荐有奖</li>
        </ul>
      </div>
      <div v-if="num === 1">
        <p class="txt-con2" @click="$router.push('/home/chitplain')">
          <span class="iconfont icon-wenhao"></span>商家代金券
        </p>
        <div class="txt-con3">
          <span class="iconfont icon-not-found"></span>
          <p>无法使用代金券</p>
          <p>非客户端或客户端版本过低</p>
          <button>下载或升级客户端</button>
        </div>
      </div>
    </section>
      
  </div>
</template>

<script>
import Header from "../home/Header.vue";
export default {
  components: { Header },
  name: "",
  component: {},
  data() {
    return {
      num: 0,
      show:true
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f5f5f5");
  },
  watch:{
    change(){
      
    }
  }
};
</script>

<style scoped>
.sec{
  margin-top: .75rem;
}
.sec-tab {
  font-size: 0.25rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
}
.sec-tab li {
  width: 50%;
  padding: 0.2rem;
  text-align: center;
}
.active {
  color: #3190e8;
  border-bottom: 2px solid #3190e8;
}
.tab-cont {
  padding: 0.2rem;
}
.txt1::after {
  content: "";
  display: block;
  clear: both;
}
.tab-cont .txt1-l {
  float: left;
}
.tab-cont .txt1-l span {
  color: #ff5340;
}
.tab-cont .txt1-r {
  float: right;
  color: #3190e8;
  position: relative;
  top: -0.08rem;
}
.txt2 {
  border-top: 1px solid #ff5340;
  margin: 0.2rem 0;
  box-sizing: border-box;
  border-radius: 0.05rem;
  background-color: #f9f9f9;
}
.txt2-cc {
  display: flex;
  border-top: 2px dashed #ff5340;
  box-sizing: border-box;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.05rem;
}
.txt2-cc1 {
  width: 1.2rem;
  border-right: solid 1px #eee;
  color: #676767;
}
.txt2-cc1 p:nth-child(1) {
  color: #ff5340;
}
.txt2-cc1 span {
  font-size: 0.7rem;
}
.txt2-cc2 {
  margin-left: 0.3rem;
  line-height: 0.3rem;
}
.txt2-cc2 p:nth-child(1) {
  font-size: 0.25rem;
}
.txt2-cc3 {
  width: 1.5rem;
  color: #ff5340;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.4rem;
}
.txt2-c2 {
  color: #898989;
  padding: 0.2rem;
  line-height: 0.3rem;
}
.txt3 {
  width: 100%;
  text-align: center;
  color: #898989;
  margin: 0.3rem 0;
  line-height: 0.3rem;
}
.txt3 span {
  vertical-align: bottom;
}
.txt4 {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.txt4 li {
  width: 50%;
  outline: 1px solid #eee;
  background-color: #fff;
  text-align: center;
  padding: 0.3rem;
  box-sizing: border-box;
  font-size: 0.35rem;
}
.txt-con2 {
  color: #3190e8;
  float: right;
  padding: 0.2rem;
}
.txt-con2 span {
  vertical-align: bottom;
}
.txt-con3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 3rem;
  line-height: 0.4rem;
  color: #898989;
}
.txt-con3 span {
  font-size: 1.2rem;
  color: #3190e8;
}
.txt-con3 p:nth-child(2) {
  font-size: 0.3rem;
}
.txt-con3 button {
  padding: 0.1rem;
  margin-top: 0.1rem;
  color: #fff;
  font-size: 0.3rem;
  background-color: #56d176;
  border: none;
  outline: none;
  border-radius: 0.05rem;
}
/* 页面切换动画 */
/* .v-enter,.v-leave-to{
  opacity: 0;
}
.v-enter-to,.v-leave{
  opacity: 1;
} */
.v-enter-active {
  transition: all .3s ease;
}
.v-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>