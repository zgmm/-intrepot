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
            <div
              class="pingjia"
              @click="$router.push({ path: 'evaluate', query: {} })"
            >
              <van-icon name="star-o" />
              <p>去评价</p>
            </div>
            <div class="shangjia" @click="showPopup()">
              <van-icon name="smile-comment-o" />
              <p>联系商家</p>
            </div>
            <van-popup
              v-model="show"
              round
              closeable
              position="bottom"
              :style="{ height: '20%' }"
            >
              <p class="tanchu">联系商家</p>
              <div class="neiron">
                <div id="phone" @click="downApp()">
                  <van-icon name="phone-o" />
                  <p>电话商家</p>
                </div>
                <div id="message" @click="downApp()">
                  <van-icon name="comment-o" />
                  <p>在线联系</p>
                </div>
              </div>
            </van-popup>
            <div class="qishi" @click="showqishi()">
              <van-icon name="smile-comment-o" />
              <p>联系骑士</p>
              <van-popup
                v-model="qishi"
                round
                closeable
                position="bottom"
                :style="{ height: '20%' }"
              >
                <p class="tanchu">联系骑士</p>
                <div class="neiron">
                  <div id="phone" @click="downApp()">
                    <van-icon name="phone-o" />
                    <p>电话骑士</p>
                  </div>
                  <div id="message" @click="downApp()">
                    <van-icon name="comment-o" />
                    <p>在线联系</p>
                  </div>
                </div>
              </van-popup>
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
      <div class="biaoti" @click="$router.push('spxiangqing1')">
        <p>沪上阿姨鲜果茶(深圳元芬店)<van-icon name="arrow" /></p>
        <span class="add"><van-icon name="bill" />再来一单</span>
      </div>
      <div class="commodity">
        <div class="pic">
          <img src="/images/披萨意面.jpeg" alt="" />
        </div>
        <div class="xiangqing">
          <p class="name">手酿古物酸奶</p>
          <p class="desc">少冰/标准糖</p>
          <p class="num">x1</p>
        </div>
        <div class="money">¥16</div>
      </div>
      <div class="youhui">
        <p><span>减</span>配送费<span class="jian">0</span></p>
        <p><span>减</span>店铺满减 <span class="jian">-¥2.0</span></p>
        <p><span>百</span>百亿补贴 <span class="jian">-¥2.0</span></p>
        <p><span>¥</span>红包/抵用券 <span class="jian">-¥5.0</span></p>
      </div>
      <div class="total">
        <p>总优惠<span class="mian">¥12</span></p>
        <p>总计<span>¥25</span></p>
      </div>
      <!-- 收货信息 -->
      <div class="receiving">
        <div class="row">
          <p>收货信息</p>
          <span>中兴小区25号楼707室F（先生）1777972880</span>
        </div>
        <div class="row">
          <p>备注</p>
          <span>无需餐具</span>
        </div>
        <div class="row">
          <p>订单号码</p>
          <span>12345698745612357856</span>
        </div>
        <div class="row">
          <p>送达时间</p>
          <span>尽快送达</span>
        </div>
        <div class="row">
          <p>配送方式</p>
          <span>蜂鸟快送</span>
        </div>
        <div class="row">
          <p>配送骑士</p>
          <span>林潮</span>
        </div>
        <div class="row">
          <p>支付方式</p>
          <span>在线支付</span>
        </div>
        <div class="row">
          <p>下单时间</p>
          <span>2021-09-16 20:50</span>
        </div>
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
    return {
      show: false, //显示联系商家
      qishi: false,
    };
  },
  methods: {
    /* 显示联系商家 */
    showPopup() {
      this.show = true;
    },
    /* 显示联系骑士 */
    showqishi(){
      this.qishi = true;
    },
    /* 显示下载APP */
    downApp() {
      this.$dialog.alert({
        message: "请前往app联系商家！",
      });
    },
  },
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
  margin-bottom: 0.65rem;
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
  padding: 0.35rem 0.15rem;
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
.safety span {
  margin-top: 0.25rem;
}
.content {
  margin: 0 auto;
  margin-top: 0.15rem;
  width: 95%;
  height: auto;
  background: #fff;
  border-radius: 0.1rem;
  padding: 0 0.15rem;
}
.biaoti {
  display: flex;
  width: 100%;
  height: 0.5rem;
  align-items: center;
  line-height: 0.5rem;
  position: relative;
}
.biaoti p {
  font-size: 0.25rem;
  font-weight: bold;
  color: #444;
  vertical-align: middle;
}
.biaoti p .van-icon {
  vertical-align: middle;
  color: #ccc;
}
.add {
  position: absolute;
  top: 0;
  right: 0;
  color: #38b7eb;
  vertical-align: middle;
}
.add .van-icon {
  vertical-align: middle;
  font-size: 0.22rem;
}
.commodity {
  margin: 0 auto;
  width: 95%;
  height: 1.5rem;
  display: flex;
  align-items: center;
}
.commodity .pic {
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.25rem;
}
.commodity .pic img {
  width: 0.9rem;
  height: 0.9rem;
}
.xiangqing {
  width: 70%;
  height: auto;
}
.xiangqing .name {
  font-size: 0.24rem;
  color: #444;
}
.xiangqing .desc {
  line-height: 0.45rem;
}
.money {
  font-size: 0.24rem;
  font-weight: bold;
}
.youhui {
  width: 100%;
  height: 1.8rem;
}
.youhui p {
  display: flex;
  line-height: 0.3rem;
  vertical-align: middle;
  margin-bottom: 0.15rem;
  font-size: 0.22rem;
  position: relative;
}
.youhui p span:first-child {
  width: 0.3rem;
  height: 0.3rem;
  background: #fd503c;
  line-height: 0.3rem;
  text-align: center;
  vertical-align: middle;
  margin-right: 0.1rem;
  color: #fff;
  border-radius: 0.05rem;
}
.jian {
  position: absolute;
  right: 0;
  top: 0;
  color: #fd503c;
  font-weight: bold;
}
.total {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #ccc;
}
.total p {
  font-size: 0.24rem;
  line-height: 0.5rem;
  margin-bottom: 0.1rem;
}
.total p span {
  background: #fff;
  color: #000;
  font-weight: bold;
  padding: 0 0.1rem;
}
.total p .mian {
  color: #fd503c;
}
.receiving {
  margin: 0 auto;
  width: 95%;
  height: auto;
  padding: 0.25rem 0;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.22rem;
  color: #444;
  margin: 0.15rem 0;
}
.row p {
  width: 50%;
}
.row span {
  display: inline-block;
  width: 50%;
  text-align: right;
}
.tanchu {
  font-size: 0.28rem;
  line-height: 1rem;
}
.neiron {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 0.25rem;
  font-size: 0.25rem;
  line-height: 0.5rem;
}
#phone .van-icon {
  font-size: 0.35rem;
}
#message .van-icon {
  font-size: 0.35rem;
}
</style>
