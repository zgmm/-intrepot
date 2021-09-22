<template>
  <div class="details">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <div class="service">
        <van-icon name="service" />
        <p>客服</p>
      </div>
    </header>
    <section class="recently">
      <div class="often">
        <p class="title">
          <span>订单已送达</span>
          <span @click="more()">查看更多商家></span>
        </p>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "记住更换你的组件名",
  computed: {},
  props: [],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
header {
  text-align: center;
  width: 100%;
  z-index: 2;
  height: 0.9rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  color: #fff;
  position: fixed;
  background: #3190e8;
  font-weight: bold;
  top: 0;
  left: 0;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
  font-weight: normal;
}
.service {
  width: 1rem;
  height: 100%;
  position: absolute;
  right: 0.31rem;
  top: 0.03rem;
  font-size: 0.2rem;
  font-weight: normal;
}
.service .van-icon{
    margin-top: -.1rem;
}
.recently {
  margin-top: 0.78rem;
  width: 100%;
  height: 3.5rem;
  background-image: linear-gradient(#3190e8, #ffffff);
  padding: 0.2rem;
  box-sizing: border-box;
}
</style>
