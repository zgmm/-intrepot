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
          <span>吴川 12:30~12:40准时送达</span>
        </div>
        <p class="anonymity">已对骑手匿名</p>
      </div>
      <div class="expression">
        <div class="bad" @click="change(0)" :class="{ active: 0 === number }">
          <p><img src="/images/bad.png" alt="" /></p>
          <p>非常差</p>
        </div>
        <div
          class="ordinary"
          @click="change(1)"
          :class="{ active: 1 === number }"
        >
          <p><img src="/images/ordinary.png" alt="" /></p>
          <p>一般</p>
        </div>
        <div
          class="praise"
          @click="change(2)"
          :class="{ active: 2 === number }"
        >
          <p><img src="/images/praise.png" alt="" /></p>
          <p>超赞</p>
        </div>
      </div>
      <!-- 评价选项部分 -->
      <div class="coutainer">
        <div class="bad-box" v-show="0 === number">
            <ul>
                <li class="tips">抱歉影响您的体验，平台将对骑手进行管束</li>
                <li>提前点送达</li>
                <li>服务态度差</li>
                <li>额外索取费用</li>
                <li>餐品翻洒</li>
                <li>配送满</li>
                <li>未穿制服</li>
                <li>食品凉了</li>
                <li>未带保温箱</li>
                <li>着装脏乱</li>
                <li>不送上楼</li>
                <li><van-icon name="edit" />文字评价</li>
            </ul>
        </div>
        <div class="ordinary-box" v-show="1 === number">2</div>
        <div class="praise-box" v-show="2 === number">3</div>
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
    return {
      number: 5,
    };
  },
  methods: {
    change(index) {
      this.number = index;
    },
  },
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
  padding: 0.2rem 0;
}
.top {
  width: 100%;
  height: 1.2rem;
  font-size: 0.25rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  box-sizing: border-box;
}
.pic {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
  margin-right: 0.15rem;
}
.pic img {
  width: 100%;
  background: #84baec;
  border-radius: 50%;
}
.man {
  width: 60%;
}
.man p {
  font-weight: bold;
  font-size: 0.25rem;
  color: #444;
}
.man span {
  font-size: 0.22rem;
  color: #aaa;
}
.anonymity {
  font-size: 0.21rem;
  margin-top: -0.4rem;
  color: #aaa;
}
.expression {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
}
.expression div {
  width: 1.3rem;
  padding: 0.1rem 0;
  text-align: center;
  border-radius: 0.1rem;
  margin: 0 0.15rem;
}
.expression div img {
  width: 0.7rem;
}
.expression p {
  font-size: 0.22rem;
  line-height: 0.35rem;
}
.active {
  background: #84baec;
}
.coutainer {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.4rem;
  text-align: center;
}
.bad-box ul{
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}
.bad-box ul .tips{
    border: none;
    text-align: center;
}
.bad-box ul li{
    padding: .15rem .2rem;
    border-radius: .05rem;
    border: 1px solid #aaa;
}
</style>
