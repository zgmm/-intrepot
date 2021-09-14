<template>
    
  <div>
    <header class="top"  @click="account">
      <p class="top-con1"><span class="iconfont icon-AS" @click="$router.push('/home/takeaway')"></span>我的</p>
      <div class="top-con2">
        <span class="iconfont icon-icon-copy top-text1"></span>
        <div class="top-text2">
          <!-- 接收登录数据 -->
          <p>
            <router-link to="/">登录</router-link>&ensp;/&ensp;
            <router-link to="/">注册</router-link>
          </p>
          <p><span class="iconfont icon-shouji"></span>暂无绑定手机</p>
        </div>
        <span class="iconfont icon-right top-text3"></span>
      </div>
    </header>
    <section>
       <ul class="sec-con1">
        <li @click="$router.push('/home/balance')">
            <p><span>0.00</span>元</p>
            <p>我的金额</p>
        </li>
        <li @click="$router.push('/home/discounts')">
            <p><span>3</span>个</p>
            <p>我的优惠</p>
        </li>
        <li @click="$router.push('/home/integral')">
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
          <router-link to="">
            <span class="iconfont icon-huangguan"></span>
            饿了么会员卡
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
            下载饿了么APP
            <span class="iconfont icon-right"></span>
          </router-link>
        </li>
      </ul>
    </section>
      
  </div>
</template>

<script>
export default {
  name: "homei",
  data() {
    return {};
  },
  methods: {
    account(){
      this.$dialog.confirm({
        title:"",
        message:"请前往登录页面登录"
      })
       .then(() => {
          // on confirm
          this.$router.push('/')
        })
        .catch(() => {
          // on cancel
          return;
        });
    }
  },
  computed: {},
  mounted() {},
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
  height: 0.5rem;
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
  color: #fff;
}
.top-con2 .top-text1 {
  font-size: 0.8rem;
  float: left;
  margin: 0.1rem 0.1rem 0.2rem 0.5rem;
}
.top-con2 .top-text2 {
  float: left;
  margin: 0.1rem 0.1rem;
  position: relative;
  top: 0.15rem;
}
.top-con2 .top-text2 a {
  color: #fff;
}
.top-con2 .top-text3 {
  float: right;
  margin: 0.2rem 0.1rem;
  color: #fff;
}
section {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  /* padding-bottom: 4rem; */
}
.sec-con1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-sizing: border-box;
}
.sec-con1 li{
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
.sec-con2 li a{
  padding: 0.2rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
  color: #000;
    display: block;
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
.sec-con3 li a{
  padding: 0.2rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
  color: #000;
  display: block;
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