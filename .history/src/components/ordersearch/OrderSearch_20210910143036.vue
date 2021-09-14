<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <input
        type="text"
        placeholder="请输入订单中的商家或商品名称"
        class="search"
        v-model="content"
      />
      <button class="ssou">搜索</button>
    </header>
    <!-- 展示订单部分 -->
    <section class="indentBox">
      <div class="without">
        <!-- <p>很抱歉！无搜索结果</p> -->
      </div>
      <div class="orderList">
        <ul>
          <li>
            <div class="shopinf">
              <img src="/images/fuzhu.jpg" />
              <div class="title">
                <p>书亦烧仙草（龙华人民路店）></p>
                <div class="youhui">
                  <span>25减3</span>
                  <span>35减5</span>
                  <span>49减8</span>
                  <span>...</span>
                </div>
              </div>
              <p class="finish">已完成</p>
            </div>
            <div class="details">

            </div>
          </li>
        </ul>
      </div>
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
      content: "",
    };
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
  border: none;
}
.indentBox {
  margin-top: 1rem;
}
.orderList {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.orderList li {
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.shopinf {
  display: flex;
  align-items: center;
  height: 0.8rem;
  background: #f8f8f8;
}
.shopinf img{
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
}
.title{
  width: 70%;
  height: 0.8rem;
}
.title p{
  font-size: 0.23rem;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.youhui{
  display: flex;
}
.youhui span{
  display: inline-block;
  border: 1px solid #d76026;
  color: #d76026;
  margin-top: .15rem;
  margin-right: 0.1rem;
  padding: 0 .05rem;
}
.youhui span:last-child{
  border: none;
  font-weight: bold;
}
.finish{
  font-size: 0.23rem;
}
</style>
