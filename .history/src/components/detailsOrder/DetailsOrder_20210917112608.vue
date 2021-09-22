<template>
  <div class="details">
    <header>
      <span>我的订单</span>
      <p class="icon">
        <span
          class="iconfont icon-sousou"
          @click="$router.push('ordersearch')"
        ></span>
        <span
          class="iconfont icon-kefuzhongxin"
          @click="$router.push('information')"
        ></span>
        <span class="red">{{ iniflength }}</span>
      </p>
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
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.3rem;
  font-weight: bold;
  background: #3190e8;
  color: #fff;
  z-index: 100;
  text-align: center;
}
.icon {
  width: 1.3rem;
  position: absolute;
  right: 0.3rem;
  top: -0.01rem;
}

.iconfont {
  font-size: 0.35rem;
  padding: 0 0.1rem;
  font-weight: bold;
}

.icon-kefuzhongxin {
  font-size: 0.4rem;
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
