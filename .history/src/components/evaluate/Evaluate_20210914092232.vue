<template>
  <div class="Evaluate">
    <header>
      <span class="iconfont icon-sousou" @click="$router.back(-1)"></span>
      <span>深圳市</span>
      <span class="iconfont icon-mine-active"></span>
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
  width: 100%;
  z-index: 2;
  height: 0.86rem;
  font-size: 0.34rem;
  line-height: 0.86rem;
  color: #fff;
  position: fixed;
  background: #3190e8;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.43rem;
}
header span:nth-child(3) {
  position: absolute;
  right: 0.31rem;
  top: 0.03rem;
  font-size: 0.43rem;
}
</style>
