<template>
  <div>
    <div class="box">
      <van-sidebar v-model="activeKey" class="nav">
        <van-sidebar-item @click="xianshi(1)" title="热销榜" />
        <van-sidebar-item @click="xianshi(2)" title="折扣榜" />
        <van-sidebar-item @click="xianshi(3)" title="好吃的" />
        <van-sidebar-item @click="xianshi(4)" title="招牌" />
        <van-sidebar-item @click="xianshi(5)" title="米饭" />
      </van-sidebar>
      <div class="nav-text">
        <div class="nav-text-div">
          <p>
            热销榜<span class="span1">热销来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多热销新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(val, index) in cdlist" :key="val.id">
              <div class="cd-img" @click="goimg(val.id)">
                <img :src="val.src" />
              </div>
              <div class="cd-text">
                <h3>{{ val.name }}<span>特色</span></h3>
                <p class="cd-caixi">{{ val.caixi }}</p>
                <p class="cd-xiaoliang">
                  月售{{ val.xiaoliang }}份 好评率{{ val.pingjia }}%
                </p>
                <p class="cd-biaoqian"><span>小炒</span></p>
                <p class="cd-jiage">
                  <span>￥{{ val.jiage }}</span
                  >起
                </p>
                <p class="cd-zengjia" v-if="val.jia" @click="zjone(index)">+</p>
                <p class="cd-guige" v-if="val.guige">
                  <span class="guige-jian" @click="jsone(index)">-</span
                  >{{ val.sumber
                  }}<span class="guige-btn" @click="zjone(index)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 购物车 -->
    <div class="buycat">
      <div class="by-left">
        <p class="by-jg">￥{{ sum }}</p>
        <p class="by-ps">配送费￥5</p>
      </div>
      <div class="by-right" @click="gozf">去结算</div>
      <div class="by-cat" @click="active">
        <img src="../../../public/images/gwc.png" />
        <div
          class="cat-sumber"
          v-if="getsum > 0 ? (zongshu = true) : (zongshu = false)"
        >
          {{ shuliang }}
        </div>
      </div>
      <div class="buycat-name" v-if="activediv">
        <p>已选商品</p>
        <div class="buycat-name-xinxi">
          <ul>
            <li v-for="(i, index) in dingdan" :key="i.id">
              <div class="bycat-name">{{ i.name }}</div>
              <div class="bycat-jiage">￥{{ i.jiage }}</div>
              <div class="bycat-sumber">
                <button @click="bycatjian(index)">-</button>{{ i.sumber
                }}<button class="buycat-jia" @click="bycatjia(index)">+</button>
              </div>
            </li>
            <li>
              <div class="bycat-name">餐盒</div>
              <div class="bycat-jiage">￥3</div>
              <div class="bycat-sumber"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      cdlist: [],
      show: false,
      rexiao: false,
      zhekou: false,
      haochi: false,
      zhaopai: false,
      mifan: false,
      zongshu: false,
      activediv: false,
      ddxx: {
        title: "", //店名
        src: "", // 店铺头像
        cuisine: "/images/lsf.jpg",
        cuisines: "/images/麻辣烫.jpeg",
        ssows: "20满减5|50满减20",
        huobao: "4元无门槛红包",
        discount: "3.5折起",
        comtitle: "广西螺蛳粉",
        comtitles: "麻辣烫",
        result: "待评价", //状态
        price: 0, //总价
        remark: "原味 温度/热 正常辣",
        remarks: "大份 微辣 含餐具",
        cause: "点多了",
        time: this.setTime(new Date())
      },
    };
  },
  computed: {
    getsum() {
      return this.shuliang; // 购物车数量
    },
    ...mapState([
      "shuliang",
      "sum",
      "dingdan",
      "rex",
      "zhek",
      "haoc",
      "zhaop",
      "mif",
      "yeshu",
    ]),
    vuex() {
      // 保存菜名，数量，单价
      let dingdan = [];
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          dingdan.push(this.cdlist[i]);
        }
      }
      return dingdan;
    },
    getzongjia() {
      // 商品总价
      let zongjia = 0;
      for (let i = 0; i < this.$store.state.dingdan.length; i++) {
        zongjia +=
          this.$store.state.dingdan[i].jiage *
          this.$store.state.dingdan[i].sumber;
      }
      return zongjia;
    },
  },
  methods: {
    setTime(time){
      let str = '';
      str += time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate() + ' ';
      str += time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
      return str;
    },
    goimg(id) {
      //菜品详情传值
      this.$store.commit("ID", id);
      this.$router.push("/varietydetails");
    },
    bycatjian(index) {
      // 购物车商品数量-减少
      this.$store.state.dingdan[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia", this.getzongjia);
      this.getfromvuex();
      if (this.dingdan[index].sumber == 0) {
        this.dingdan.splice(index, 1); // 商品数量为0时，删除商品
      }
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber == 0) {
          this.cdlist[i].guige = false;
        }
      }
    },
    bycatjia(index) {
      // 购物车商品数量-增加
      this.$store.state.dingdan[index].sumber++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.getfromvuex();
    },
    active() {
      if (this.dingdan.length < 1) {
        return;
      }
      this.activediv = !this.activediv; // 购物车展示商品
    },
    gozf() {
      if (this.getsum > 0) {
        // 结算跳转支付
        this.$router.push("/zfdingdan");
        switch (this.$store.state.yeshu) {
          case 1:
            this.ddxx.title = "美味小吃店";
            this.ddxx.src = "/images/dianpu.jpg";
            break;
          case 2:
            this.ddxx.title = "叫了只鸡";
            this.ddxx.src = "/images/dianpu2.jpeg";
            break;
          case 3:
            this.ddxx.title = "有亿点点好吃";
            this.ddxx.src = "/images/dianpu3.jpeg";
            break;
          case 4:
            this.ddxx.title = "美味咸鱼店";
            this.ddxx.src = "/images/dianpu4.jpeg";
            break;
        }
        this.ddxx.sum=this.$store.state.sum
        this.$store.commit("dingdanxinxi",this.ddxx)
      }
    },
    xianshi(sumber) {
      // 左侧tab栏切换
      let query = "rexiao";
      switch (sumber) {
        case 1:
          query = "rexiao";
          break;
        case 2:
          query = "zekou";
          break;
        case 3:
          query = "haochi";
          break;
        case 4:
          query = "zhaopai";
          break;
        case 5:
          query = "mifan";
          break;
      }
      this.axios.get("/deta?" + query + "=true").then((res) => {
        this.cdlist = res.data;
        this.getfromvuex();
        for (let i = 0; i < this.cdlist.length; i++) {
          if (this.cdlist[i].sumber > 0) {
            this.cdlist[i].guige = true;
          }
        }
      });
    },
    zjone(index) {
      //商品数量+1
      this.cdlist[index].guige = true;
      this.cdlist[index].sumber++;
      this.$store.commit("add");
      let vxdingdan = this.$store.state.dingdan;
      let exists = false;
      for (let i = 0; i < vxdingdan.length; i++) {
        // 判断vuex是否存在
        if (vxdingdan[i].id == this.cdlist[index].id) {
          vxdingdan[i].sumber = this.cdlist[index].sumber;
          exists = true;
          break;
        }
      }
      if (!exists) {
        vxdingdan.push(this.cdlist[index]);
      }
      this.$store.commit("getdingdan", vxdingdan);
      this.$store.commit("zongjia", this.getzongjia);
    },
    jsone(index) {
      //商品数量-1
      this.cdlist[index].sumber--;
      this.$store.commit("jian");
      let vxdingdan = this.$store.state.dingdan;
      let exists = false;
      for (let i = 0; i < vxdingdan.length; i++) {
        // 判断vuex是否存在
        if (vxdingdan[i].id == this.cdlist[index].id) {
          vxdingdan[i].sumber = this.cdlist[index].sumber;
          exists = true;
          break;
        }
      }
      this.$store.commit("getdingdan", vxdingdan);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist[index].sumber == 0) {
        this.cdlist[index].guige = false;
      }
    },
    getfromvuex() {
      // 把vuex中商品的数量赋予cdlist
      let dingdan = this.$store.state.dingdan;
      for (let i = 0; i < this.cdlist.length; i++) {
        for (let j = 0; j < dingdan.length; j++) {
          if (this.cdlist[i].id == dingdan[j].id) {
            this.cdlist[i].sumber = dingdan[j].sumber;
            break;
          }
        }
      }
    },
    genguo() {
      // 更多显示提示
      this.show = true;
      let that = this;
      setTimeout(function () {
        that.show = false;
      }, 2000);
    },
  },
  mounted() {
    this.axios.get("/deta?rexiao=true").then((res) => {
      this.cdlist = res.data;
      this.getfromvuex();
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          this.cdlist[i].guige = true;
        }
      }
    });
    console.log(this.dingdan);
  },
  watch: {
    dingdan: {
      handler(newName, oldName) {
        if (this.dingdan.length <= 0) {
          // 商品为0时，隐藏购物车商品展示
          this.activediv = false;
          this.$store.state.sum = 0;
        } else {
          this.$store.state.sum += 8;
        }
      },
    },
  },
};
</script>
<style scoped>
.box {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
.nav {
  width: 25%;
  position: relative;
  margin-bottom: 1rem;
}
.erxiao,
.zhekou,
.haochi,
.zhaopai,
.mifan {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.35rem;
  text-align: center;
  position: absolute;
  color: white;
  background-color: #ff461d;
  border-radius: 100%;
}
.nav .erxiao {
  top: 0.1rem;
  right: 0.1rem;
}
.nav .zhekou {
  top: 2.1rem;
  right: 0.1rem;
}
.nav .haochi {
  top: 4.1rem;
  right: 0.1rem;
}
.nav .zhaopai {
  top: 6.1rem;
  right: 0.1rem;
}
.nav .mifan {
  top: 8.1rem;
  right: 0.1rem;
}
.nav a {
  height: 2rem;
  line-height: 2rem;
  padding: 0;
  border-bottom: 1px solid #ededed;
}
.van-sidebar-item--select::before {
  height: 1.4rem;
  background-color: #3190e8;
  width: 0.1rem;
}

.nav-text {
  width: 75%;
  overflow-y: auto;
  text-align: left;
  position: relative;
}
.nav-text .nav-text-div {
  width: 100%;
  overflow: hidden;
  position: absolute;
}
.nav-text-div > p {
  height: 1rem;
  width: 100%;
  background-color: #f5f5f5;
  margin: 0;
  font-size: 0.27rem;
  line-height: 1rem;
  padding-left: 0.2rem;
  font-weight: bold;
}
.nav-text-div .gengduo {
  position: absolute;
  top: 0.6rem;
  right: 0.25rem;
  background-color: #434144;
  color: white;
  width: 2.9rem;
  height: 0.5rem;
  border-radius: 10px;
  font-size: 0.23rem;
  font-weight: 200;
  line-height: 0.5rem;
  text-align: center;
  padding: 0;
}
.span1 {
  font-weight: 200;
  margin-left: 0.2rem;
  font-size: 0.23rem;
}
.span2 {
  float: right;
  margin-right: 0.5rem;
  letter-spacing: 1px;
}
.nav-text-cd {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.nav-text-cd > li {
  width: 100%;
  height: 2.3rem;
  border-bottom: 1px solid #f8f8f8;
  padding: 0.15rem 0;
}
.cd-img {
  width: 0.9rem;
  height: 0.9rem;
  float: left;
  margin: 0 0.15rem;
}
.cd-img > img {
  width: 100%;
  height: 100%;
}
.cd-text {
  float: left;
  width: 65%;
  height: 100%;
  position: relative;
  margin-left: 3%;
}
.cd-text > h3 {
  font-size: 0.28rem;
  letter-spacing: 1px;
}
.cd-text > h3 > span {
  font-size: 0.12rem;
  color: #f38e8e;
  border: 1px solid #f38e8e;
  float: right;
  border-radius: 8px;
  padding: 0.02rem;
}

.cd-text p {
  margin: 0.05rem 0 0 0;
}
.cd-text .cd-caixi {
  color: #b5b5b5;
  font-size: 0.22rem;
}
.cd-text .cd-biaoqian {
  color: #f38e8e;
}
.cd-biaoqian > span {
  border: 1px solid #f38e8e;
  border-radius: 8px;
  padding: 0.02rem;
}
.cd-text .cd-jiage {
  margin-top: 0.15rem;
}
.cd-jiage > span {
  font-size: 0.3rem;
  margin-right: 0.1rem;
  color: #ff6600;
  font-weight: bold;
}
.cd-text .cd-zengjia {
  position: absolute;
  width: 0.34rem;
  height: 0.34rem;
  background-color: #3190e8;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.35rem;
  color: white;
  right: 0;
  border-radius: 100%;
  bottom: 0.25rem;
}
.cd-text .cd-guige {
  width: 50%;
  position: absolute;
  bottom: 0.23rem;
  right: 0;
  font-size: 0.25rem;
}
.cd-guige .guige-jian {
  width: 0.35rem;
  height: 0.35rem;
  border: 1px solid #d6d6d6;
  color: #d6d6d6;
  border-radius: 100%;
  display: inline-block;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin-right: 0.35rem;
}
.cd-guige .guige-btn {
  width: 0.36rem;
  height: 0.36rem;
  font-size: 0.3rem;
  line-height: 0.35rem;
  float: right;
  background-color: red;
  color: white;
  border-radius: 100%;
  text-align: center;
}

.buycat {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: row;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
}
.buycat .by-left {
  width: 60%;
  height: 100%;
  background-color: #3d3d3f;
}
.by-left .by-jg {
  font-weight: bold;
  font-size: 0.32rem;
  margin: 0.15rem 0 0 0;
}
.buycat .by-right {
  width: 40%;
  height: 100%;
  background-color: #4cd964;
  font-size: 0.35rem;
  font-weight: bold;
  line-height: 1rem;
}
.by-cat {
  position: absolute;
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 50%;
  left: 0.25rem;
  top: -0.3rem;
  border: 4px solid #444444;
  background-color: #3190e8;
  z-index: 12;
}
.by-cat img {
  width: 70%;
  height: 70%;
  margin-top: 15%;
}
.cat-sumber {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #ff461d;
  color: white;
  border-radius: 50%;
  position: absolute;
  right: -0.1rem;
  top: -0.1rem;
  line-height: 0.4rem;
  text-align: center;
}
.buycat-name {
  width: 100%;
  overflow: hidden;
  background-color: white;
  position: fixed;
  bottom: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.buycat-name > p {
  color: black;
  height: 0.5rem;
  background-color: #adb0c2;
  line-height: 0.5rem;
}
.buycat-name-xinxi {
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-bottom: 0.3rem;
  font-size: 0.23rem;
}
.buycat-name-xinxi > ul {
  width: 90%;
  overflow: hidden;
  margin-left: 5%;
  margin-top: 0.2rem;
}
.buycat-name-xinxi > ul > li {
  display: flex;
  height: 0.6rem;
  line-height: 0.6rem;
  color: black;
}
.bycat-name {
  width: 35%;
  height: 100%;
}
.bycat-jiage {
  width: 35%;
  height: 100%;
  color: #ff6600;
}
.bycat-sumber {
  width: 40%;
  height: 100%;
}
.bycat-sumber button {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 100%;
  line-height: 0.25rem;
  margin: 0 0.2rem;
  border: 1px solid gray;
}
.bycat-sumber .buycat-jia {
  background-color: #3190e8;
  color: white;
  border: none;
}
</style>