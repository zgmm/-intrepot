<template>
  <div class="Evaluate">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>评价有礼</span>
    </header>
    <!-- 骑手部分 -->
    <div class="rider">

    </div>
    <!-- 商家部分 -->
    <div class="merchant">

    </div>
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
.Evaluate{
    width: 100%;
    height: auto;
    background: #f1f1f1;
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
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
}
.rider{
    margin: 0 auto;
    width: 95%;
    height: auto;
    background: #fff;
}
</style>
