<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <input
        type="text"
        placeholder="请输入订单中的商家或商品名称"
        class="search" v-model="content"
      />
      <button class="ssou">搜索</button>
    </header>
    <!-- 展示订单部分 -->
    <section class="indentBox">
      <div v-show="without" class="without">
        <p>很抱歉！无搜索结果</p>
      </div>
      <div v-show="orderList" class="orderList"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  computed: {},
  props: [],
  data() {
    return {
      content:"",
    };
  },
  methods: {
  },
  mounted() {
  },
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3190e8;
}
.icon-AS {
  display: inline-block;
  width: 15%;
  font-size: 0.4rem;
  font-weight: normal;
  text-align: center;
}
.search {
  width: 70%;
  height: 0.6rem;
  font-size: 0.23rem;
  font-weight: normal;
  text-indent: 0.2rem;
  border: none;
  color: #666;
  border-radius: 0.15rem;
}
.ssou {
  display: inline-block;
  width: 15%;
  font-size: 0.25rem;
  font-weight: normal;
  text-align: center;
  background: none;
}
.indentBox{
  margin-top: 1rem;
}
</style>
