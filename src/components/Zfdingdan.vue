<template>
  <div class="box">
    <header>
      <div class="fh iconfont icon-AS" @click="fanhui"></div>
      <p>支付订单</p>
      <div id="wode">
        <img src="../../public/images/wode.png" @click="my" />
      </div>
    </header>
    <div class="dizhi">
      <div class="dizhi-one" v-if="dizhi_one" @click="xuanze(7)">
        <p>
          <img src="../../public/images/dingwei.png" />请添加一个收货地址<span
            >></span
          >
        </p>
        <div class="dizhi-bottom"><img src="../../public/images/bg.jpg" /></div>
      </div>
      <div class="dizhi-two" v-if="dizhi_two">
        <p class="two-dz">{{ dizhi.address }}</p>
        <p class="two-name">
          {{ dizhi.name }} ({{ dizhi.sex }})<span>{{ dizhi.phone }}</span>
        </p>
        <span class="xuanze" @click="xuanze(7)">></span>
        <div class="dizhi-bottom"><img src="../../public/images/bg.jpg" /></div>
      </div>
    </div>
    <div class="time">
      <div class="time-lf">送达时间</div>
      <div class="time-rh">
        <p class="rh1">尽快送达 | 预计 {{getCurrentTime()}}</p>
        <p class="rh2"><span>蜂鸟专送</span></p>
      </div>
    </div>
    <div class="zf">
      <p class="zf-fs">支付方式 <span>在线支付</span></p>
      <p class="zf-hb">红包<span>暂时只支持在APP使用</span></p>
    </div>
    <div class="gmsp">下单的商品</div>
    <div class="by">
      <div class="by-left">
        <ul>
          <li v-for="i in dingdan" :key="i.id">
            <div class="by-left-name">{{i.name}}</div>
            <div class="by-left-sumber">x {{i.sumber}}</div>
            <div class="by-left-jiage">￥{{i.jiage}}</div>
          </li>
        </ul>
        <p v-if="active">餐盒<span>￥3</span></p>
        <p v-if="active">配送费<span>￥5</span></p>
      </div>
    </div>
    <div class="sum">
      <div class="sum-lf">待支付 ￥{{ sum }}</div>
      <div class="sum-rh" @click="xianshi">确认</div>
    </div>
    <div class="alght" id="alght" v-if="show">
      <div class="alght-mb" @click="yincang"></div>
      <div class="alght-box">
        <h3>支付方式</h3>
        <p class="alght-jy">
          货到付款 (商家不支持货到付款)<input
            type="checkbox"
            :disabled="true"
            value="货到付款"
            id="alght-inp"
          />
        </p>
        <p>
          在线支付<input
            @click="zxzf"
            type="checkbox"
            v-model="nan"
            value="在线支付"
            id="alght-inp"
          />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Indent from "../views/Indent.vue";
import { mapState } from "vuex";
export default {
  components: { Indent },
  data() {
    return {
      nan: "",
      dizhi: {},
      show: false,
      active: false,
      dizhi_one: true,
      dizhi_two: false,
    };
  },
  computed: {
    getshow() {
      this.active = false;
      if (this.dingdan.length > 0) {
        this.active = true;
      }
    },
    ...mapState(["sum", "dingdan"]),
  },
  methods: {
     getCurrentTime() {
        //获取当前时间并打印
        var _this = this;
    　　let hh = new Date().getHours();
    　　let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    　　let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    　　return _this.gettime =hh+':'+(10+mf)+':'+ss;
    },
    xianshi() {
      let that = this;
      if (Object.keys(that.dizhi).length == 0) {
        that.$dialog
          .alert({
            message: "请选择地址",
          })
          .then(() => {
            return;
          });
      } else {
        that.show = true;
      }
    },
    yincang() {
      this.show = false;
    },
    fanhui() {
      this.$router.replace("/spxiangqing1");
    },
    xuanze(sumber) {
      this.$router.push({ path: "/xuandizhi", query: { id: sumber } });
      console.log({ query: { id: sumber } });
    },
    my() {
      this.$router.push("/homed");
    },
    zxzf() {
      this.$router.push("/zfmima");
    },
  },
  mounted() {
    this.getCurrentTime()
    this.getshow;
    if (this.$route.query.id > 0) {
      this.axios
        .get("http://localhost:3000/dizhi/" + this.$route.query.id)
        .then((res) => {
          this.dizhi = res.data;
        });
      this.dizhi_two = true;
      this.dizhi_one = false;
    } else {
      this.dizhi_two = false;
      this.dizhi_one = true;
    }
  },
};
</script>
<style scoped>
.box {
  text-align: center;
}
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
  top: 0.1rem;
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
  height: 1.5rem;
  font-size: 0.27rem;
  text-align: left;
  background-color: #fff;
  position: relative;
}
.dizhi .dizhi-one {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.dizhi-one p {
  margin: 0.4rem 0;
  position: relative;
  width: 100%;
  float: left;
}
.dizhi-one p > img {
  vertical-align: middle;
  margin: 0 0.1rem;
}
.dizhi-one p > span {
  position: absolute;
  display: inline-block;
  font-size: 0.35rem;
  right: 0.3rem;
  padding: 0.01rem 0.02rem;
}
.dizhi-bottom {
  position: absolute;
  bottom: 0;
}
.dizhi-bottom img {
  float: left;
}
.dizhi .dizhi-two {
  width: 100%;
  height: 100%;
  position: 0;
  top: 0;
  left: 0;
}
.dizhi-two p {
  text-indent: 20px;
}
.dizhi-two .two-dz {
  font-size: 0.3rem;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  float: left;
  margin-top: 0.2rem;
}
.dizhi-two .two-name {
  font-size: 0.23rem;
  color: gray;
  width: 100%;
  float: left;
  margin-top: 0.1rem;
}
.two-name span {
  margin-left: 0.15rem;
}
.dizhi-two .xuanze {
  display: block;
  font-size: 0.35rem;
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
  padding: 0.01rem 0.02rem;
}
.time {
  width: 100%;
  height: 1.3rem;
  margin: 0.2rem 0;
  background-color: #fff;
  border-left: 3px solid #2265a2;
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
.by {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-align: left;
  font-size: 0.25rem;
}
.by p {
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.1rem;
}
.by-left {
  width: 100%;
  overflow: hidden;
}
.by-left>ul{
  overflow: hidden;
  width: 90%;
  margin-left: 5%;
}
.by-left>ul>li{
  display: flex;
  height: .6rem;
  line-height: .6rem;
}
.by-left-name{
  width: 35%;
  height: 100%;
}
.by-left-sumber{
  width: 30%;
  height: 100%;
  text-align: center;
  color: #ff6600;
}
.by-left-jiage{
  width: 35%;
  height: 100%;
  text-align: center;
}
.by-left>p{
  line-height: .6rem;
  height: .6rem;
  text-indent: 5%;
}
.by-left>p>span{
  float: right;
  margin-right: 19%;
}
.sum {
  position: fixed;
  bottom: 0;
  left: 0;
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
.alght {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.alght .alght-mb {
  width: 100%;
  height: 75%;
  background-color: #b2b2b2;
  opacity: 0.4;
  position: fixed;
}
.alght .alght-box {
  width: 100%;
  height: 25%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.27rem;
}
.alght-box h3 {
  background-color: #fafafa;
  padding: 0.2rem 0;
  margin: 0;
}
.alght-box .alght-jy {
  color: gray;
}
.alght-box p {
  text-align: left;
  text-indent: 20px;
  height: 0.7rem;
  line-height: 0.7rem;
  margin-top: 0.1rem;
  position: relative;
}
#alght .alght-box #alght-inp {
  position: absolute;
  right: 0.3rem;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 100%;
  top: 0.2rem;
  border: none;
  outline: none;
}
#alght #alght-inp:checked {
  background-color: #4cd964;
}
</style>