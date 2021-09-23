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
</style>
