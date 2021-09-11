<template>
    
  <div>
    <header class="header">
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      会员中心
    </header>
    <section class="sec">
      <p class="con1">为账户<span>{{login.username}}</span>购买会员</p>
      <ul class="con2">
        <li class="txt1">
          <p>会员特权</p>
          <p>会员说明<span class="iconfont icon-right"></span></p>
        </li>
        <li class="txt2">
          <p>省</p>
          <p>减免配送费<span>每月减免30单，蜂鸟专送专享</span></p>
          <p>每日可减免3单，每单最高减免4元</p>
        </li>
        <li class="txt2">
          <p><span class="iconfont icon-shangcheng"></span></p>
          <p>减免配送费<span>每月减免30单，蜂鸟专送专享</span></p>
          <p>每日可减免3单，每单最高减免4元</p>
        </li>
      </ul>
      <ul class="con3">
        <li>开通会员</li>
        <li>
          <p>1个月<span>￥20</span></p>
          <p>购买</p>
        </li>
      </ul>
      <ul class="con4">
        <li>兑换会员</li>
        <li>使用卡号卡密<span class="iconfont icon-right"></span></li>
      </ul>
      <ul class="con4">
        <li>购买记录</li>
        <li>开发票<span class="iconfont icon-right"></span></li>
      </ul>
    </section>
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        login:{},
        loginId:1
    };
  },
  methods: {
    showUsername() {
      this.loginId = window.sessionStorage.getItem('token')
      this.axios
        .get("http://localhost:3000/login/" + this.loginId)
        .then((res) => {
          this.login = res.data;
          console.log(this.login);
        });
    },
  },
  computed: {},
  mounted() {
    this.showUsername()
    // 获取保存在sessionstorage里面的user
    // this.login = JSON.parse(window.sessionStorage.getItem('login'))
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  position: relative;
  text-align: center;
  font-size: 0.4rem;
  padding: 0.1rem;
  background-color: #1fa7ff;
  color: #fff;
}
.header span {
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  font-size: 0.3rem;
}
.sec .con1{
  padding: .1rem;
  font-size:.25rem;
}
.sec .con1 span{
  font-weight: bold;
}
.sec .con2{
  background-color: #fff;
}
.sec .con2 li{
  padding: .1rem;
  font-size:.25rem;
  border:1px solid #eee;
}
.sec .con2 .txt1{
  display: flex;
  justify-content: space-between;
}
.sec .con2 .txt1 p:nth-child(1){
  color: #000;
}
.sec .con2 .txt1 p:nth-child(2){
  font-size:.16rem;
}
.sec .con2 .txt2{
  display: flex;
  align-items: center;
}
.sec .con2 .txt2 p{
  margin: .2rem .1rem;
  line-height: .3rem;
}
.sec .con2 .txt2 p:nth-child(1){
  border: 2px solid #1fa7ff;
  border-radius: 50%;
  padding: 1;
  width:.6rem;
  height:.6rem;
  text-align: center;
  line-height: .6rem;
  font-size: .35rem;
  color: #1fa7ff;
}
.sec .con2 .txt2 p:nth-child(2){
  width: 1.43rem;
  color: #000;
}
.sec .con2 .txt2 p:nth-child(2) span{
font-size: .2rem;
color: #898989;
}
.sec .con2 .txt2 p:nth-child(3){
  font-size: .2rem;
}
.sec .con3{
  background-color: #fff;
  margin: .2rem 0;
  
}
.sec .con3 li{
  display: flex;
  font-size: .25rem;
  border-bottom: 1px solid #eee;
  padding: .2rem;
  justify-content: space-between;
  color: #000;
}
.sec .con3 li span{
  color: #FF6600;
}
.sec .con3 li:nth-child(2) p:nth-child(2){
  color: #FF6600;
  padding:.05rem .1rem;
  border: 1px solid #FF6600;
  border-radius: .1rem;
}
.sec .con4{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom:.2rem ;
  font-size: .25rem;
  padding: .2rem;
}
</style>