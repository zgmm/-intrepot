<template>
  <div class="box">
    <header>
      <div class="fh" @click="fanhui">&lt;</div>
      <p>支付订单</p>
      <div id="wode"><img src="../../public/images/wode.png" /></div>
    </header>
    <div class="dizhi">
      <p>
        <img src="../../public/images/dingwei.png" />请添加一个收货地址<span @click="xuanze">></span>
      </p>
      <div><img src="../../public/images/bg.jpg" /></div>
    </div>
    <div class="time">
      <div class="time-lf">送达时间</div>
      <div class="time-rh">
        <p class="rh1">尽快送达 | 预计 06:29</p>
        <p class="rh2"><span>蜂鸟专送</span></p>
      </div>
    </div>
    <div class="zf">
      <p class="zf-fs">支付方式 <span>在线支付&nbsp;&nbsp;></span></p>
      <p class="zf-hb">红包<span>暂时只支持在饿了么APP使用</span></p>
    </div>
    <div class="gmsp">下单的商品</div>
    <div class="by">
     <div class="by-left">
        <p v-for="i in name" :key="i.id">{{i.name}}</p>
        <p v-if="active">餐盒</p>
        <p v-if="active">配送费</p>
     </div>
     <div class="by-right">
        <p v-for="val in jiage" :key="val.id" class="shuliang">x 1<span id="jiage">￥{{val.sumber}}</span></p>
        <p v-if="active"><span id="jiage">￥3</span></p>
        <p v-if="active"><span id="jiage">￥5</span></p>
     </div>
    </div>
    <div class="sum">
      <div class="sum-lf">待支付 ￥{{sum}}</div>
      <div class="sum-rh" @click="xianshi" >确认</div>
    </div>
    <div class="alght" id="alght" v-if="show">
      <div class="alght-mb" @click="yincang"></div>
      <div class="alght-box">
        <h3>支付方式</h3>
        <p class="alght-jy">货到付款 (商家不支持货到付款)<input type="checkbox" :disabled="true" value="货到付款" id="alght-inp"></p>
        <p>在线支付<input type="checkbox"  v-model="nan" value="在线支付" id="alght-inp"></p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
import Indent from '../views/Indent.vue';
import {mapState} from 'vuex';
export default {
  components: { Indent },
  data() {
    return {
      nan:"",
      show:false,
      active:false
    };
  },
  computed: {
    getshow(){
      this.active=false;
      if(this.name.length>0){
        this.active=true;
        this.$store.commit("getsum",this.sum)
      }
    },
    ...mapState(["sum","name","jiage"])
  },
  methods: {
    xianshi(){
      this.show=true;
    },
    yincang(){
      this.show=false
    },
    fanhui(){
      this.$router.push('/spxiangqing')
    },
    xuanze(){
      this.$router.push('/xuandizhi')
    }
  },
  mounted() {
      console.log(this.name);
      this.getshow;
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.box {
  background-color: #f5f5f5;
  overflow: hidden;
  width: 100%;
}
header {
  width: 100%;
  height: 0.8rem;
  background-color: #3190e8;
  color: white;
  font-size: 0.3rem;
  position: relative;
}
header .fh {
  position: absolute;
  font-size: 0.4rem;
  height: 0.5rem;
  width: 0.4rem;
  top: 0.2rem;
  left: 0.2rem;
}
header p {
  line-height: 0.8rem;
}
header #wode {
  position: absolute;
  right: 0.3rem;
  top: 0.2rem;
}
.dizhi {
  width: 100%;
  height: 1.3rem;
  font-size: 0.27rem;
  text-align: left;
  background-color: #fff;
}
.dizhi p {
  margin: 0.35rem 0;
  position: relative;
  width: 100%;
  float: left;
}
.dizhi p > img {
  vertical-align: middle;
  margin: 0 0.1rem;
}
.dizhi p > span {
  position: absolute;
  display: inline-block;
  font-size: 0.35rem;
  right: 0.3rem;
  padding: 0.01rem 0.02rem;
}
.dizhi div {
  float: left;
}
.time {
  width: 100%;
  height: 1.3rem;
  margin: 0.2rem 0;
  background-color: #fff;
  border-left:3px solid  #2265a2;
}
.time .time-lf {
  width: 40%;
  float: left;
  height: 100%;
  font-size: 0.3rem;
  font-weight: bold;
  line-height: 1.3rem;
}
.time .time-rh {
  width: 60%;
  float: left;
  height: 100%;
  text-align: right;
}
.time-rh p {
  width: 85%;
  float: left;
  margin-top: 0.2rem;
}
.time-rh .rh1 {
  color: #3190ec;
  font-size: 0.27rem;
}
.time-rh .rh2 span {
  background-color: #3190e8;
  color: white;
  padding: 0.05rem;
  border-radius: 3px;
}
.zf {
  width: 100%;
  height: 1.3rem;
  margin-top: 0.2rem;
  text-align: left;
  background-color: #fff;
}
.zf p {
  width: 90%;
  margin-left: 5%;
  padding: 0.17rem 0;
}
.zf .zf-fs {
  border-bottom: 1px solid gray;
  font-size: 0.27rem;
}
.zf .zf-fs > span {
  float: right;
  color: gray;
  font-size: 0.22rem;
}
.zf .zf-hb {
  font-size: 0.25rem;
  color: gray;
}
.zf .zf-hb > span {
  float: right;
}
.gmsp {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid gray;
  margin-top: 0.2rem;
  font-size: 0.3rem;
  text-align: left;
  text-indent: 30px;
  background-color: #fff;
  line-height: 0.8rem;
  font-weight: bold;
}
.by{
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-align: left;
  font-size: .25rem;
}
.by-left{
  width: 65%;
  overflow: hidden;
}
.by-left>p{
  margin-left: 5%;
}
.by-right{
  width: 35%;
  overflow: hidden;
}
.by p{
  height: .5rem;
  line-height: .5rem;
  margin-top: .1rem;
}
.by-right>p{
  color: #ff6600;
  margin-right: 10%;
}
.by-right>p>span{
  color: #666666;
}
.by-right>p>span{
  float: right;
}

.sum {
  width: 100%;
  height: 1rem;
  color: white;
  font-size: 0.32rem;
  line-height: 1rem;
}
.sum .sum-lf {
  width: 70%;
  height: 100%;
  background-color: #3c3c3c;
  letter-spacing: 2px;
  float: left;
}
.sum .sum-rh {
  float: left;
  width: 30%;
  height: 100%;
  background-color: #56d176;
}
.alght{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.alght .alght-mb{
  width: 100%;
  height: 75%;
  background-color: #b2b2b2;
  opacity: 0.4;
}
.alght .alght-box{
  width: 100%;
  height:25%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid yellow;
  font-size: .27rem;
}
.alght-box h3{
  background-color: #fafafa;
  padding: .2rem 0;
  margin: 0;
}
.alght-box .alght-jy{
  color: gray;
}
.alght-box p{
  text-align: left;
  text-indent: 20px;
  height: .7rem;
  line-height: .7rem;
  margin-top: .1rem;
  position: relative;
}
#alght .alght-box #alght-inp{
  position: absolute;
  right: 0.3rem;
  width: .3rem;
  height: .3rem;
  border-radius: 100%;
  top: .2rem;
  border: none;
  outline: none;
}
#alght #alght-inp:checked{
  background-color: #4cd964;
}

</style>