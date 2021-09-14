<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS"></span>
      <input type="text" placeholder="输入订单中的商家或商品名称" class="search">
      <span>搜索</span>
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
  height: 0.9rem;
  line-height: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.3rem;
  font-weight: bold;
  color: #fff;
  z-index: 100;
  text-align: center;
  background: #3190e8;
}
.icon-AS {
    width: 15%;
    font-size: 0.4rem;
    position: absolute;
    right: 0.3rem;
    left: 0rem;
    font-weight: normal;
}
.search{
  width: 70%;
  height: 0.6rem;
  font-size: 0.23rem;
  font-weight: normal;
  text-indent: 0.2rem;
  border: none;
  color: #666;
  border-radius: 0.15rem;
}
</style>
