<template>
  <div class="Evaluate">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>评价</span>
      <span>发表</span>
    </header>
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
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
}
header span:nth-child(3) {
  position: absolute;
  right: 0.31rem;
  top: 0.03rem;
  font-size: 0.26rem;
  font-weight: normal;
}
</style>
