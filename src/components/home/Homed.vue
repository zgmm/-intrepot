<template>
    
  <div>
    <header class="top">
      <p class="top-con1"><span class="iconfont icon-AS"></span>我的</p>
      <div class="top-con2">
        <router-link to="/home/acountInfo">
          <div class="top-text1"><img :src="imgsrc" alt="" /></div>
          <div class="top1-text2" v-if="isLogin">
            <!-- 接收登录数据 -->
            <p>{{ login.username }}</p>
            <p><span class="iconfont icon-shouji"></span>暂无绑定手机</p>
          </div>
          <div class="top2-text2" v-else>
            <!-- 未登录显示 -->
            <p>
              <router-link to="/">登录</router-link>&ensp;/&ensp;
              <router-link to="/">注册</router-link>
            </p>
            <p><span class="iconfont icon-shouji"></span>暂无绑定手机</p>
          </div>
          <span class="iconfont icon-right top-text3"></span>
        </router-link>
      </div>
    </header>
    <section>
      <ul class="sec-con1">
        <li @click="balance">
          <p><span>0.00</span>元</p>
          <p>我的金额</p>
        </li>
        <li @click="discounts">
          <p><span>3</span>个</p>
          <p>我的优惠</p>
        </li>
        <li @click="integral">
          <p><span>0</span>分</p>
          <p>我的积分</p>
        </li>
      </ul>
      <ul class="sec-con2">
        <li>
          <router-link to="/indent">
            <span class="iconfont icon-icon-"></span>
            我的订单
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-shangcheng"></span>
            积分商城
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/vip">
            <span class="iconfont icon-huangguan"></span>
            会员卡
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
      </ul>
      <ul class="sec-con3">
        <li>
          <router-link to="">
            <span class="iconfont icon-fuwuzhongxin"></span>
            服务中心
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-eliaomo"></span>
            下载APP
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
      </ul>
    </section>
      
  </div>
</template>

<script>
export default {
  name: "homed",
  components: {},
  data() {
    return {
      login: {},
      loginId: 1,
      imgsrc: require("../../../public/images/login.png"),
      isLogin: false,
    };
  },
  methods: {
    // 跳转到余额
    balance() {
      this.$router.push({ path: "/home/balance" });
    },
    // 跳转到优惠
    discounts() {
      this.$router.push("/home/discounts");
    },
    // 跳转到积分
    integral() {
      this.$router.push("/home/integral");
    },

    showUsername() {
      if (window.sessionStorage.getItem("token") == null) {
        this.isLogin = false;
        return;
      } else {
        this.isLogin = true;
        this.loginId = window.sessionStorage.getItem("token");
      }
      this.axios.get("/login/" + this.loginId).then((res) => {
        this.login = res.data;
      });
    },
  },
  computed: {},
  mounted() {
    
    this.showUsername();
    if (window.sessionStorage.getItem("rtoken") == null) {
      return;
    } else {
      this.imgsrc = window.sessionStorage.getItem("rtoken");
    }
  },
};
</script>

<style scoped>
.top {
  font-size: 0.3rem;
  background-color: #3190e8;
  width: 100%;
  box-sizing: border-box;
}
.top-con1 {
  width: 100%;
  height: 0.6rem;
  text-align: center;
  position: relative;
  color: #fff;
  padding-top: 0.1rem;
  font-size: 0.3rem;
}
.top-con1 span {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  font-size: 0.4rem;
}

.top-con2::after {
  content: "";
  display: block;
  clear: both;
}
.top-con2 {
  padding-bottom: 0.2rem;
}
.top-con2 > a {
  display: block;
  color: #fff;
}
.top-con2 .top-text1 {
  font-size: 0.8rem;
  float: left;
  margin: 0.1rem 0.1rem 0.2rem 0.5rem;
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  background: #fff;
  border-radius: 50%;
  position: relative;
}
.top-con2 .top-text1 img {
  width: 100%;
  height: 100%;
  /* vertical-align: top; */
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}
.top-con2 .top1-text2 {
  float: left;
  margin: 0rem 0.1rem;
  position: relative;
  top: 0.15rem;
}
.top-con2 .top1-text2 a {
  color: #fff;
}
.top-con2 .top2-text2 {
  float: left;
  margin: 0.1rem 0.1rem;
  position: relative;
  top: 0.15rem;
}
.top-con2 .top2-text2 a {
  color: #fff;
}
.top-con2 a .top-text3 {
  float: right;
  margin: 0.2rem 0.1rem;
  color: #fff;
}
section {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  /* padding-bottom:4rem; */
}
.sec-con1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-sizing: border-box;
}
.sec-con1 li {
  border-right: 1px solid #eee;
  padding: 0.1rem;
  width: 35%;
  text-align: center;
}
.sec-con1 span {
  font-size: 0.4rem;
  font-weight: bold;
}
.sec-con1 li:nth-child(1) span {
  color: #ff9900;
}
.sec-con1 li:nth-child(2) span {
  color: #ff5f3e;
}
.sec-con1 li:nth-child(3) span {
  color: #6ac20b;
}
.sec-con2 {
  margin-top: 0.2rem;
  background-color: #fff;
}
.sec-con2 li::after {
  content: "";
  display: block;
  clear: both;
}
.sec-con2 li a {
  padding: 0.2rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
  display: block;
  color: #000;
}
.sec-con2 li span:nth-child(2) {
  float: right;
  color: #686868;
}
.sec-con2 li:nth-child(2) span:nth-child(1) {
  color: #fc7b53;
}
.sec-con2 li:nth-child(3) span:nth-child(1) {
  color: #ffc636;
}

.sec-con3 {
  margin: 0.2rem 0;
  background-color: #fff;
}
.sec-con3 li::after {
  content: "";
  display: block;
  clear: both;
}
.sec-con3 li a {
  padding: 0.2rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
  display: block;
  color: #000;
}
.sec-con3 li span:nth-child(2) {
  float: right;
  color: #686868;
}
.sec-con3 li span:nth-child(1) {
  color: #3190e8;
}
.sec-con3 li:nth-child(1) span:nth-child(1) {
  font-size: 0.4rem;
  position: relative;
  top: 0.1rem;
}
</style>