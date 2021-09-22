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
            号码保护<span> · </span> 极速退<span> · </span>
            食安险
            <van-icon name="arrow" />
          </p>
          <h2>感谢信任，欢迎再次光临</h2>
          <div class="operate">
            <div class="pingjia">
              <van-icon name="star-o" />
              <p>去评价</p>
            </div>
            <div class="shangjia">
              <van-icon name="smile-comment-o" />
              <p>联系商家</p>
            </div>
            <div class="qishi">
              <van-icon name="smile-comment-o" />
              <p>联系骑士</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 食品安全理赔 -->
    <div class="safety">
      <p><van-icon name="info-o" />食品安全问题理赔</p>
      <span>如发现食品变质，存在异物或引发就医，均可申请理赔</span>
    </div>
    <!-- 订单详情 -->
    <div class="content">
      <div class="biaoti">
        <p>沪上阿姨鲜果茶（深圳元芬店）</p><span><van-icon name="arrow" /></span>
        <span>再来一单</span>
      </div>
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
  height: 2.6rem;
  background-image: linear-gradient(#3190e8, #ffffff);
  padding: 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.8rem;
}
.title {
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #fff;
  vertical-align: middle;
  font-family: emoji;
}
.title .van-icon {
  vertical-align: middle;
}
.box {
  width: 100%;
  height: 2.2rem;
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
  color: #38b7eb;
  font-weight: bold;
  border-radius: 0.1rem;
}
.baoxian .van-icon {
  font-size: 0.25rem;
  color: #38b7eb;
  vertical-align: middle;
  margin-top: -0.03rem;
}
.baoxian span {
  color: #7ebaf0;
}
.box h2 {
  margin: 0 auto;
  width: 95%;
  font-size: 0.29rem;
  line-height: 1rem;
  box-sizing: border-box;
  color: #000;
  border-bottom: 1px solid #eee;
}
.operate {
  margin: 0 auto;
  width: 95%;
  height: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.operate div {
  text-align: center;
  color: #444;
}
.operate div .van-icon {
  font-size: 0.25rem;
  font-weight: bold;
  color: #444;
}
.safety {
  margin: 0 auto;
  width: 95%;
  padding: 0.5rem 0.15rem;
  background: #fff;
  border-radius: 0.1rem;
}
.safety p {
  font-size: 0.25rem;
  font-weight: bold;
  vertical-align: middle;
  color: #444;
}
.safety p .van-icon {
  font-size: 0.23rem;
  vertical-align: middle;
  color: #38b7eb;
}
.safety span{
  /* font-size: 0.2rem; */
  margin-top: .25rem;
}
.content{
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
}
</style>
