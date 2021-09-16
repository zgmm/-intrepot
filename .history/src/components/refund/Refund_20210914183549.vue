<template>
  <div class="refund">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>退款详情</span>
    </header>
    <div class="refundList"></div>
  </div>
</template>


<script>
export default {
  name: "",
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
body,
html {
  height: 100%;
  background: #f1f1f1;
}
.refund {
  width: 100%;
}
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
}
</style>
