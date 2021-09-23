<template>
  <div class="details">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <div class="service">
        <van-icon name="service" />
        <p>客服</p>
      </div>
    </header>
    <section class="recently">
      <div class="often">
        <p class="title">订单已送达<van-icon name="arrow" /></p>
        <div class="box">
          <p class="baoxian">
            <van-icon name="info-o" />
            号码保护<span>·</span> 极速退<span>·</span>
            食安险
          </p>
        </div>
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
  top: 0;
  left: 0;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
  font-weight: normal;
}
.service {
  width: 1rem;
  height: 100%;
  position: absolute;
  right: 0.31rem;
  top: 0.03rem;
  font-size: 0.2rem;
  font-weight: normal;
}
.service .van-icon {
  position: absolute;
  top: 0.15rem;
  font-size: 0.3rem;
}
.service p {
  position: absolute;
  top: 0.2rem;
  left: 0.45rem;
}
.recently {
  margin-top: 0.78rem;
  width: 100%;
  height: 3.5rem;
  background-image: linear-gradient(#3190e8, #ffffff);
  padding: 0.2rem;
  box-sizing: border-box;
}
.title {
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.28rem;
  color: #fff;
  font-weight: bold;
  vertical-align: middle;
}
.title .van-icon {
  vertical-align: middle;
}
.box {
  width: 100%;
  height: 2rem;
  background: #fff;
  border-radius: 0.1rem;
}
.baoxian {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #f3fbfd;
  padding: 0 0.15rem;
  vertical-align: middle;
}
.baoxian .van-icon {
  font-size: 0.25rem;
  color: #3190e8;
  vertical-align: middle;
  margin-top: -.02rem;
}
</style>
