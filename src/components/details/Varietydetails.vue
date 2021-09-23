<template>
  <div class="variety">
    <transition>
      <span
        class="iconfont icon-AS"
        @click="$router.replace('/spxiangqing1')"
      ></span>
    </transition>

    <div class="top-img"><img :src="variety.src" alt="" /></div>
    <section class="sec">
      <div class="con1">
        <h1 class="con1-txt1">{{ variety.name }}</h1>
        <p class="con1-txt2">好评率26%</p>
        <p class="con1-txt2">月销 {{ variety.xiaoliang }}</p>
        <p class="con1-txt3">0.91折 | 限1份</p>
        <div class="con1-txt4">
          <p>
            ￥<span>{{ variety.jiage }}</span>
          </p>
          <p>￥{{ variety.jiage + 2 }}</p>
          <!-- <p>包装费￥1/份</p> -->
          <p v-if="isCart" @click="addCart()" class="cartinit">+加入购物车</p>
          <p v-else class="shuliang">
            <span class="jian" @click="jianNum">-</span>
            <span>{{ num }}</span>
            <span class="jia" @click="jiaNum">+</span>
          </p>
        </div>
      </div>
      <ul class="con2 backTop">
        <li>详情</li>
        <li>评价</li>
      </ul>
      <div class="con3">
        <h2>商品详情</h2>
        <p><span>产品描述</span>好</p>
        <p><span>口味</span>粤菜</p>
      </div>
      <div class="con4">
        <h2>商品评价</h2>
        <ul>
          <li class="pl-box">
            <div class="pl-tx">
              <img src="../../../public/images/touxiang1.jpg" />
            </div>
            <div class="pl-text">
              <p>最后的土狗<span>2021-8-22</span></p>
              <p class="pl-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <div class="pl-img">
                <img src="../../../public/images/lsf.jpg" /><img
                  src="../../../public/images/yufeiyan.png"
                />
              </div>
              <p><span>螺丝粉...</span><span>水煮鱼...</span></p>
            </div>
          </li>
          <li class="pl-box2">
            <div class="pl-tx">
              <img src="../../../public/images/touxiang1.jpg" />
            </div>
            <div class="pl-text">
              <p>z****f<span>2021-8-22</span></p>
              <p class="pl-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <p class="hp-neirong">
                老八秘制小汉堡，即实惠又管饱,汉堡就要老八牌秘制小汉堡
              </p>
            </div>
          </li>
          <li class="pl-box">
            <div class="pl-tx">
              <img src="../../../public/images/touxiang2.jpeg" />
            </div>
            <div class="pl-text">
              <p>3***5<span>2021-8-22</span></p>
              <p class="pl-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <div class="pl-img">
                <img src="../../../public/images/lsf.jpg" /><img
                  src="../../../public/images/yufeiyan.png"
                />
              </div>
              <p><span>螺丝粉...</span><span>水煮鱼...</span></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      variety: {
        name: "豆腐花",
        jiage: 23,
        src: "",
        xiaoliang: "",
        caixi: "",
      },
      isCart: true,
      num: 0,
      state: {},
      stateIndex: 1,
    };
  },
  computed: {
    ...mapState(["value"]),
  },
  methods: {
    jianNum() {
      //减数量
      if (this.num <= 1) {
        this.isCart = true;
        this.num = 0;
        return;
      } else {
        this.num--;
      }
    },
    jiaNum() {
      //加数量
      this.num++;
      // console.log(this.value)
    },
    addCart() {
      this.isCart = false;
      this.num++;
    },
    handleScroll() {
      //吸顶
      var backTop = document.querySelector(".backTop");
      if (window.pageYOffset >= 389) {
        backTop.style.position = "fixed";
        backTop.style.backgroundColor = "#fff";
        backTop.style.top = "0";
        backTop.style.left = "0";
      } else {
        backTop.style.position = "relative";
        backTop.style.backgroundColor = "#f1f1f1";
      }
    },
  },
  computed: {},
  mounted() {
    // console.log(this.value);
    //滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
    if (this.num >= 1) {
      this.isCart = false;
    }
    this.state.id = window.sessionStorage.getItem("stateId");
    this.state.index = window.sessionStorage.getItem("stateIndex");
    console.log(this.state.index);
    // this.stateIndex.join();
    this.axios
      .get("/deta" + this.state.index + "/" + this.state.id)
      .then((res) => {
        this.variety = res.data;
      });
  },
};
</script>

<style scoped>
.icon-AS {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.3rem;
  color: rgba(0, 0, 0, 0.5);
}
.top-img {
  width: 100%;
  height: 3.5rem;
}
.top-img img {
  width: 100%;
  height: 100%;
}
.con1 {
  margin: 0.2rem;
  border-radius: 0.15rem;
  background: #fff;
  padding: 0.1rem;
}
.con1-txt2 {
  color: #aaa;
  margin: 0.1rem 0;
}
.con1-txt3 {
  color: #aaa;
  border: 1px solid #aaa;
  font-size: 0.13rem;
  border-radius: 0.1rem;
  width: 1.5rem;
  text-align: center;
  line-height: 0.25rem;
}
.con1-txt4 {
  display: flex;
  margin: 0.1rem 0;
  position: relative;
  align-items: center;
}
.con1-txt4 p:nth-child(1) {
  color: #ea6322;
}
.con1-txt4 p:nth-child(1) span {
  font-size: 0.3rem;
  margin-right: 0.1rem;
}
.con1-txt4 p:nth-child(2) {
  text-decoration: line-through;
}
.con1-txt4 p.cartinit {
  position: absolute;
  top: 0;
  right: 0.1rem;
  background-color: #3190e8;
  color: #fff;
  border-radius: 0.1rem;
  padding: 0.08rem;
}
.con1-txt4 p.shuliang {
  position: absolute;
  top: 0.05rem;
  right: 0.1rem;
}
.con1-txt4 p.shuliang span {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.25rem;
}

.con1-txt4 p.shuliang span.jian {
  color: #3190e8;
  border: 1px solid #3190e8;
  border-radius: 50%;
}
.con1-txt4 p.shuliang span.jia {
  background: #3190e8;
  color: #fff;
  border-radius: 50%;
}
.con2 {
  display: flex;
  justify-content: space-around;
  font-size: 0.25rem;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}
.con3 {
  background: #fff;
  border-radius: 0.15rem;
  padding: 0.1rem;
  margin: 0.2rem;
}
.con3 p {
  font-size: 0.2rem;
  margin: 0.1rem 0;
}
.con3 p span {
  display: inline-block;
  width: 1rem;
  color: #aaa;
  margin-right: 0.3rem;
  text-align: left;
}
.con4 {
  background: #fff;
  border-radius: 0.15rem;
  padding: 0.1rem;
  margin: 0.2rem;
}
.con4 h2 {
  margin: 0.2rem 0;
}
.pl-box {
  width: 90%;
  height: 3.7rem;
  margin-left: 5%;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.2rem;
}
.pl-tx {
  float: left;
  width: 15%;
}
.pl-tx > img {
  width: 100%;
  border-radius: 50%;
}
.pl-text {
  float: right;
  width: 80%;
  height: 100%;
  text-align: left;
}
.pl-text > p {
  margin: 0.1rem 0;
  font-size: 0.23rem;
}
.pl-text > p:first-child {
  font-weight: bold;
}
.pl-text > p:first-child > span {
  font-weight: 200;
  float: right;
  color: gray;
}
.pl-xx {
  color: gray;
}
.pl-xx img {
  vertical-align: middle;
}
.pl-img {
  width: 100%;
  overflow: hidden;
  margin-top: 0.15rem;
}
.pl-img img {
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.2rem;
}
.pl-text > p:last-child {
  margin-top: 0.15rem;
}
.pl-text > p:last-child > span {
  padding: 0.05rem;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 0.15rem;
  display: inline-block;
}
.pl-box2 {
  width: 90%;
  height: 2.4rem;
  margin: 0.2rem 0;
  margin-left: 5%;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.2rem;
}
.hp-neirong {
  background: #ebf5ff;
}

.v-enter-active {
  transition: all 0.3s ease;
}
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-enter,
.v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>