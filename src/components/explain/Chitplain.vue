<template>
  <div>
    <Header title="代金券说明">
      <span
        class="iconfont icon-AS black"
        slot="black"
        @click="$router.back(-1)"
      ></span>
    </Header>
    <section class="sec">
      <h2>Q1:什么是商家代金券？</h2>
      <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用</p>
      <h2>Q2:怎么获取商家代金券</h2>
      <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
      <p>
        「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次。
      </p>
      <h2>Q3:商家代金券使用条件</h2>
      <p>商家代金券仅限在指定商家使用</p>
      <p>商家代金券仅限在线支付使用</p>
      <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
    </section>
  </div>
</template>

<script>
import Header from "../home/Header.vue";

export default {
  components: { Header },
};
</script>
<style scoped>
.sec {
  font-family: "Courier New", Courier, monospace;
  margin: 0.75rem 0.2rem;
}
.sec h2 {
  font-size: 0.35rem;
  margin: 0.1rem 0;
}
.sec p {
  font-size: 0.25rem;
  line-height: 0.4rem;
}
</style>