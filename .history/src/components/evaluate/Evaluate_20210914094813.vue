<template>
  <div class="Evaluate">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>评价有礼</span>
    </header>
    <!-- 骑手部分 -->
    <div class="rider">
      <div class="top">
        <div class="pic">
          <img src="/images/waimai.png" alt="" />
        </div>
        <div class="man">
          <p>蜂鸟快送</p>
          <span>吴川 准时送达</span>
        </div>
        <p class="anonymity">已对骑手匿名</p>
      </div>
    </div>
    <!-- 商家部分 -->
    <div class="merchant"></div>
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
.Evaluate {
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
  top: 0;
  left: 0;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
}
.rider {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.9rem;
}
.top {
  width: 100%;
  height: 1.2rem;
  font-size: 0.25rem;
  display: flex;
  align-items: center;
}
.pic {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
}
.pic img {
  background: #84baec;
  border-radius: 50%;
}
</style>
