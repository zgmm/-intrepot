<template>
  <div>
    <div class="box">
      <van-sidebar v-model="activeKey" class="nav">
        <van-sidebar-item @click="xianshi(1)" title="热销榜" />
        <van-sidebar-item @click="xianshi(2)" title="折扣榜" />
        <van-sidebar-item @click="xianshi(3)" title="好吃的" />
        <van-sidebar-item @click="xianshi(4)" title="招牌" />
        <van-sidebar-item @click="xianshi(5)" title="米饭" />
        <div class="erxiao" v-if="rx > 0 ? (rexiao = true) : (rexiao = false)">
          {{ rx }}
        </div>
        <div class="zhekou" v-if="zk > 0 ? (zhekou = true) : (rexiao = false)">
          {{ zk }}
        </div>
        <div class="haochi" v-if="hc > 0 ? (haochi = true) : (rexiao = false)">
          {{ hc }}
        </div>
        <div
          class="zhaopai"
          v-if="zp > 0 ? (zhaopai = true) : (rexiao = false)"
        >
          {{ zp }}
        </div>
        <div class="mifan" v-if="mf > 0 ? (mifan = true) : (rexiao = false)">
          {{ mf }}
        </div>
      </van-sidebar>
      <div class="nav-text">
        <!-- 热销榜 -->
        <div class="nav-text-div" id="one" v-if="one">
          <p>
            热销榜<span class="span1">热销来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多热销新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(val, index) in cdlist" :key="val.id">
              <div class="cd-img"><img :src="val.src" /></div>
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
        <!-- 折扣榜 -->
        <div class="nav-text-div" id="two" v-if="two">
          <p>
            折扣榜<span class="span1">折扣来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多折扣新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(vla, sumber) in cdlist_two" :key="vla.id">
              <div class="cd-img"><img :src="vla.src" /></div>
              <div class="cd-text">
                <h3>{{ vla.name }}<span>特色</span></h3>
                <p class="cd-caixi">{{ vla.caixi }}</p>
                <p class="cd-xiaoliang">
                  月售{{ vla.xiaoliang }}份 好评率{{ vla.pingjia }}%
                </p>
                <p class="cd-biaoqian"><span>小炒</span></p>
                <p class="cd-jiage">
                  <span>￥{{ vla.jiage }}</span
                  >起
                </p>
                <p class="cd-zengjia" v-if="vla.jia" @click="zjtwo(sumber)">
                  +
                </p>
                <p class="cd-guige" v-if="vla.guige">
                  <span class="guige-jian" @click="jstwo(sumber)">-</span
                  >{{ vla.sumber
                  }}<span class="guige-btn" @click="zjtwo(sumber)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 好吃的 -->
        <div class="nav-text-div" id="three" v-if="three">
          <p>
            好吃的<span class="span1">好吃的来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多好吃新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(val, index) in cdlist_three" :key="val.id">
              <div class="cd-img"><img :src="val.src" /></div>
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
                <p class="cd-zengjia" v-if="val.jia" @click="zjthree(index)">
                  +
                </p>
                <p class="cd-guige" v-if="val.guige">
                  <span class="guige-jian" @click="jsthree(index)">-</span
                  >{{ val.sumber
                  }}<span class="guige-btn" @click="zjthree(index)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 招牌 -->
        <div class="nav-text-div" v-if="four">
          <p>
            招牌<span class="span1">招牌来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多招牌新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(val, index) in cdlist_four" :key="val.id">
              <div class="cd-img"><img :src="val.src" /></div>
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
                <p class="cd-zengjia" v-if="val.jia" @click="zjfour(index)">
                  +
                </p>
                <p class="cd-guige" v-if="val.guige">
                  <span class="guige-jian" @click="jsfour(index)">-</span
                  >{{ val.sumber
                  }}<span class="guige-btn" @click="zjfour(index)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 米饭 -->
        <div class="nav-text-div" id="five" v-if="five">
          <p>
            米饭<span class="span1">米饭来袭~</span
            ><span class="span2" @click="genguo">···</span>
          </p>
          <p class="gengduo" v-if="show">更多米饭新品，敬请期待</p>
          <ul class="nav-text-cd">
            <li v-for="(val, index) in cdlist_five" :key="val.id">
              <div class="cd-img"><img :src="val.src" /></div>
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
                <p class="cd-zengjia" v-if="val.jia" @click="zjfive(index)">
                  +
                </p>
                <p class="cd-guige" v-if="val.guige">
                  <span class="guige-jian" @click="jsfive(index)">-</span
                  >{{ val.sumber
                  }}<span class="guige-btn" @click="zjfive(index)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="buycat">
      <div class="by-left">
        <p class="by-jg">￥{{ sum }}</p>
        <p class="by-ps">配送费￥5</p>
      </div>
      <div class="by-right" @click="gozf">去结算</div>
      <div class="by-cat">
        <img src="../../../public/images/gwc.png" />
        <div
          class="cat-sumber"
          v-if="getsum > 0 ? (zongshu = true) : (zongshu = false)"
        >
          {{ shuliang }}
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
      cdlist_two: [],
      cdlist_three: [],
      cdlist_four: [],
      cdlist_five: [],
      show: false,
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      rexiao: false,
      zhekou: false,
      haochi: false,
      zhaopai: false,
      mifan: false,
      zongshu: false,
      rx: 0,
      zk: 0,
      hc: 0,
      zp: 0,
      mf: 0,
      xxx: 0,
    };
  },
  computed: {
    getsum() {
      return this.shuliang;
    },
    ...mapState(["shuliang", "sum"]),
    getshuliang() {
      // 商品数量
      let shuliang = [];
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          shuliang.push({ sumber: +this.cdlist[i].sumber });
        }
      }
      for (let i = 0; i < this.cdlist_two.length; i++) {
        if (this.cdlist_two[i].sumber > 0) {
          shuliang.push({ sumber: +this.cdlist_two[i].sumber });
        }
      }
      for (let i = 0; i < this.cdlist_three.length; i++) {
        if (this.cdlist_three[i].sumber > 0) {
          shuliang.push({ sumber: +this.cdlist_three[i].sumber });
        }
      }
      for (let i = 0; i < this.cdlist_four.length; i++) {
        if (this.cdlist_four[i].sumber > 0) {
          shuliang.push({ sumber: +this.cdlist_four[i].sumber });
        }
      }
      for (let i = 0; i < this.cdlist_five.length; i++) {
        if (this.cdlist_five[i].sumber > 0) {
          shuliang.push({ sumber: +this.cdlist_five[i].sumber });
        }
      }
      return shuliang;
    },
    getdanjia() {
      // 商品单价
      let jiage = [];
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          jiage.push({ sumber: +this.cdlist[i].jiage });
        }
      }
      for (let i = 0; i < this.cdlist_two.length; i++) {
        if (this.cdlist_two[i].sumber > 0) {
          jiage.push({ sumber: +this.cdlist_two[i].jiage });
        }
      }
      for (let i = 0; i < this.cdlist_three.length; i++) {
        if (this.cdlist_three[i].sumber > 0) {
          jiage.push({ sumber: +this.cdlist_three[i].jiage });
        }
      }
      for (let i = 0; i < this.cdlist_four.length; i++) {
        if (this.cdlist_four[i].sumber > 0) {
          jiage.push({ sumber: +this.cdlist_four[i].jiage });
        }
      }
      for (let i = 0; i < this.cdlist_five.length; i++) {
        if (this.cdlist_five[i].sumber > 0) {
          jiage.push({ sumber: +this.cdlist_five[i].jiage });
        }
      }
      return jiage;
    },
    getzongjia() {
      // 商品总价
      let zongjia = 0;
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          zongjia += this.cdlist[i].jiage * this.cdlist[i].sumber;
        }
      }
      for (let i = 0; i < this.cdlist_two.length; i++) {
        if (this.cdlist_two[i].sumber > 0) {
          zongjia += this.cdlist_two[i].jiage * this.cdlist_two[i].sumber;
        }
      }
      for (let i = 0; i < this.cdlist_three.length; i++) {
        if (this.cdlist_three[i].sumber > 0) {
          zongjia += this.cdlist_three[i].jiage * this.cdlist_three[i].sumber;
        }
      }
      for (let i = 0; i < this.cdlist_four.length; i++) {
        if (this.cdlist_four[i].sumber > 0) {
          zongjia += this.cdlist_four[i].jiage * this.cdlist_four[i].sumber;
        }
      }
      for (let i = 0; i < this.cdlist_five.length; i++) {
        if (this.cdlist_five[i].sumber > 0) {
          zongjia += this.cdlist_five[i].jiage * this.cdlist_five[i].sumber;
        }
      }
      return zongjia;
    },
    getname() {
      // 商品名称
      let name = [];
      for (let i = 0; i < this.cdlist.length; i++) {
        if (this.cdlist[i].sumber > 0) {
          name.push({ name: this.cdlist[i].name });
        }
      }
      for (let i = 0; i < this.cdlist_two.length; i++) {
        if (this.cdlist_two[i].sumber > 0) {
          name.push({ name: this.cdlist_two[i].name });
        }
      }
      for (let i = 0; i < this.cdlist_three.length; i++) {
        if (this.cdlist_three[i].sumber > 0) {
          name.push({ name: this.cdlist_three[i].name });
        }
      }
      for (let i = 0; i < this.cdlist_four.length; i++) {
        if (this.cdlist_four[i].sumber > 0) {
          name.push({ name: this.cdlist_four[i].name });
        }
      }
      for (let i = 0; i < this.cdlist_five.length; i++) {
        if (this.cdlist_five[i].sumber > 0) {
          name.push({ name: this.cdlist_five[i].name });
        }
      }
      return name;
    },
  },
  methods: {
    gozf() {
      if (this.getsum > 0) {
        this.$router.push("/zfdingdan");
        this.$store.commit("getsum",this.sum)
      }
    },
    xianshi(sumber) {
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
      if (sumber == 1) {
        this.one = true;
      }
      if (sumber == 2) {
        this.two = true;
      }
      if (sumber == 3) {
        this.three = true;
      }
      if (sumber == 4) {
        this.four = true;
      }
      if (sumber == 5) {
        this.five = true;
      }
    },
    zjone(index) {
      //商品数量+1
      this.cdlist[index].guige = true;
      this.cdlist[index].sumber++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
      this.rx++;
    },
    jsone(index) {
      //商品数量-1
      this.cdlist[index].sumber--;
      this.rx--;
      this.$store.commit("jian");
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getcount",this.getshuliang);
      if (this.cdlist[index].sumber == 0) {
        this.cdlist[index].guige = false;
      }
    },
    zjtwo(index) {
      this.cdlist_two[index].guige = true;
      this.cdlist_two[index].sumber++;
      this.zk++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
    },
    jstwo(index) {
      this.zk--;
      this.cdlist_two[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
      if (this.cdlist_two[index].sumber == 0) {
        this.cdlist_two[index].guige = false;
      }
    },
    zjthree(index) {
      this.cdlist_three[index].sumber++;
      this.cdlist_three[index].guige = true;
      this.hc++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
    },
    jsthree(index) {
      this.hc--;
      this.cdlist_three[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
      if (this.cdlist_three[index].sumber == 0) {
        this.cdlist_three[index].guige = false;
      }
    },
    zjfour(index) {
      this.cdlist_four[index].sumber++;
      this.cdlist_four[index].guige = true;
      this.zp++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
    },
    jsfour(index) {
      this.zp--;
      this.cdlist_four[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
      if (this.cdlist_four[index].sumber == 0) {
        this.cdlist_four[index].guige = false;
      }
    },
    zjfive(index) {
      this.cdlist_five[index].sumber++;
      this.cdlist_five[index].guige = true;
      this.mf++;
      this.$store.commit("add");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
    },
    jsfive(index) {
      this.mf--;
      this.cdlist_five[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("getname", this.getname);
      this.$store.commit("getjiage", this.getdanjia);
      this.$store.commit("getcount",this.getshuliang);
      if (this.cdlist_five[index].sumber == 0) {
        this.cdlist_five[index].guige = false;
      }
    },
    genguo() {
      this.show = true;
      let that = this;
      setTimeout(function () {
        that.show = false;
      }, 2000);
    },
  },
  mounted() {
    this.axios.get("/deta").then((res) => {
      this.cdlist = res.data;
    });
    this.axios.get("/deta-two").then((res) => {
      this.cdlist_two = res.data;
    });
    this.axios.get("/deta-three").then((res) => {
      this.cdlist_three = res.data;
    });
    this.axios.get("/deta-four").then((res) => {
      this.cdlist_four = res.data;
    });
    this.axios.get("/deta-five").then((res) => {
      this.cdlist_five = res.data;
    });
    this.$store.commit("getshuliang",0)
    this.$store.commit("zongjia",0)
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
  width: 0.35rem;
  height: 0.35rem;
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
  width: 0.35rem;
  height: 0.35rem;
  font-size: 0.3rem;
  line-height: 0.35rem;
  float: right;
  background-color: #3190e8;
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
</style>