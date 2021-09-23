<template>
  <div>
    <div class="box">
      <van-sidebar v-model="activeKey" class="nav">
        <van-sidebar-item @click="xianshi(1)" title="热销榜" />
        <van-sidebar-item @click="xianshi(2)" title="折扣榜" />
        <van-sidebar-item @click="xianshi(3)" title="好吃的" />
        <van-sidebar-item @click="xianshi(4)" title="招牌" />
        <van-sidebar-item @click="xianshi(5)" title="米饭" />
        <div class="erxiao" v-if="rex > 0 ? (rexiao = true) : (rexiao = false)">
          {{ rex }}
        </div>
        <div class="zhekou" v-if="zhek > 0 ? (zhekou = true) : (rexiao = false)">
          {{ zhek }}
        </div>
        <div class="haochi" v-if="haoc > 0 ? (haochi = true) : (rexiao = false)">
          {{ haoc }}
        </div>
        <div
          class="zhaopai"
          v-if="zhaop > 0 ? (zhaopai = true) : (rexiao = false)"
        >
          {{ zhaop }}
        </div>
        <div class="mifan" v-if="mif > 0 ? (mifan = true) : (rexiao = false)">
          {{ mif }}
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
            <li v-for="(val, index) in cdlist1" :key="val.id" @click="goimg(activeKey,val.id)">
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
            <li v-for="(val, sumber) in cdlist2" :key="val.id" @click="goimg(activeKey,val.id)">
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
                <p class="cd-zengjia" v-if="val.jia" @click="zjtwo(sumber)">
                  +
                </p>
                <p class="cd-guige" v-if="val.guige">
                  <span class="guige-jian" @click="jstwo(sumber)">-</span
                  >{{ val.sumber
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
            <li v-for="(val, index) in cdlist3" :key="val.id" @click="goimg(activeKey,val.id)">
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
            <li v-for="(val, index) in cdlist4" :key="val.id" @click="goimg(activeKey,val.id)">
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
            <li v-for="(val, index) in cdlist5" :key="val.id" @click="goimg(activeKey,val.id)">
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
            <li v-for="(i,index) in dingdan" :key="i.id">
              <div class="bycat-name">{{ i.name }}</div>
              <div class="bycat-jiage">￥{{ i.jiage }}</div>
              <div class="bycat-sumber"><button @click="bycatjian(index)">-</button>{{ i.sumber }}<button class="buycat-jia" @click="bycatjia(index)">+</button></div>
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
      cdlist1: [],
      cdlist2: [],
      cdlist3: [],
      cdlist4: [],
      cdlist5: [],
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
      activediv: false,
    };
  },
  computed: {
    getsum() {
      return this.shuliang; // 购物车数量
    },
    ...mapState(["shuliang", "sum", "dingdan","rex","zhek","haoc","zhaop","mif"]),
    rx(){ // 热销榜下单数量
    let rx=0;
      for(let i=0;i<this.cdlist1.length;i++){
        if (this.cdlist1[i].sumber > 0){
          rx+=this.cdlist1[i].sumber
        }
      }
      return rx
    },
    zk(){ // 折扣下单数量
    let zk=0;
      for(let i=0;i<this.cdlist2.length;i++){
        if (this.cdlist2[i].sumber > 0){
          zk+=this.cdlist2[i].sumber
        }
      }
      return zk
    },
    hc(){ // 好吃下单数量
    let hc=0;
      for(let i=0;i<this.cdlist3.length;i++){
        if (this.cdlist3[i].sumber > 0){
          hc+=this.cdlist3[i].sumber
        }
      }
      return hc
    },
    zp(){ // 招牌下单数量
    let zp=0;
      for(let i=0;i<this.cdlist4.length;i++){
        if (this.cdlist4[i].sumber > 0){
          zp+=this.cdlist4[i].sumber
        }
      }
      return zp
    },
    mf(){ // 米饭下单数量
    let mf=0;
      for(let i=0;i<this.cdlist5.length;i++){
        if (this.cdlist5[i].sumber > 0){
          mf+=this.cdlist5[i].sumber
        }
      }
      return mf
    },
    vuex() {
      // 保存菜名，数量，单价
      let dingdan = [];
      let obj;
      for (let i = 0; i < this.cdlist1.length; i++) {
        obj = {};
        if (this.cdlist1[i].sumber > 0) {
          obj.sumber = this.cdlist1[i].sumber;
          obj.name = this.cdlist1[i].name;
          obj.jiage = this.cdlist1[i].jiage;
          obj.index=1;
          dingdan.push(obj);
        }  
      }
      for (let i = 0; i < this.cdlist2.length; i++) {
        obj = {};
        if (this.cdlist2[i].sumber > 0) {
          obj.sumber = this.cdlist2[i].sumber;
          obj.name = this.cdlist2[i].name;
          obj.jiage = this.cdlist2[i].jiage;
          obj.index=2;
          dingdan.push(obj);
        }
      }
      for (let i = 0; i < this.cdlist3.length; i++) {
        obj = {};
        if (this.cdlist3[i].sumber > 0) {
          obj.sumber = this.cdlist3[i].sumber;
          obj.name = this.cdlist3[i].name;
          obj.jiage = this.cdlist3[i].jiage;
          obj.index=3;
          dingdan.push(obj);
        }
      }
      for (let i = 0; i < this.cdlist4.length; i++) {
        obj = {};
        if (this.cdlist4[i].sumber > 0) {
          obj.sumber = this.cdlist4[i].sumber;
          obj.name = this.cdlist4[i].name;
          obj.jiage = this.cdlist4[i].jiage;
          obj.index=4;
          dingdan.push(obj);
        }
      }
      for (let i = 0; i < this.cdlist5.length; i++) {
        obj = {};
        if (this.cdlist5[i].sumber > 0) {
          obj.sumber = this.cdlist5[i].sumber;
          obj.name = this.cdlist5[i].name;
          obj.jiage = this.cdlist5[i].jiage;
          obj.index=5;
          dingdan.push(obj);
        }
      }
      return dingdan;
    },
    getzongjia() {
      // 商品总价
      let zongjia = 0;
      for (let i = 0; i < this.vuex.length; i++) {
        zongjia += this.vuex[i].jiage * this.vuex[i].sumber;
      }
      return zongjia;
    },
  },
  methods: {
    goimg(index,id){ //菜品详情传值
      let that=this
      that.$store.commit("index",index);
      that.$store.commit("ID",id);
    },
    bycatjian(index){ // 购物车商品数量-减少
      this.vuex[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("zongjia",this.getzongjia);
      if(this.dingdan[index].sumber==0){
        this.dingdan.splice(index,1) // 商品数量为0时，删除商品
      }
    },
    bycatjia(index){  // 购物车商品数量-增加
      this.vuex[index].sumber++;
      this.$store.commit("add");
      this.$store.commit("zongjia",this.getzongjia);
    },
    active() { 
      if(this.dingdan.length<1){
        return
      }
      this.activediv = !this.activediv; // 购物车展示商品
    },
    gozf() {
      if (this.getsum > 0) {  // 结算跳转支付
        this.$router.push("/zfdingdan");
      }
    },
    xianshi(sumber) { // 左侧tab栏切换
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
      this.cdlist1[index].guige = true;
      this.cdlist1[index].sumber++;
      this.$store.commit("add");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      this.$store.commit("rx",this.rx);
    },
    jsone(index) {
      //商品数量-1
      this.cdlist1[index].sumber--;
      this.$store.commit("rx",this.rx);
      this.$store.commit("jian");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist1[index].sumber == 0) {
        this.cdlist1[index].guige = false;
      }
    },
    zjtwo(index) {
      this.cdlist2[index].guige = true;
      this.cdlist2[index].sumber++;
      this.$store.commit("zk",this.zk);
      this.$store.commit("add");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
    },
    jstwo(index) {
      this.$store.commit("zk",this.zk);
      this.cdlist2[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist2[index].sumber == 0) {
        this.cdlist2[index].guige = false;
      }
    },
    zjthree(index) {
      this.cdlist3[index].sumber++;
      this.cdlist3[index].guige = true;
      this.$store.commit("hc",this.hc);
      this.$store.commit("add");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
    },
    jsthree(index) {
      this.$store.commit("hc",this.hc);
      this.cdlist3[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist3[index].sumber == 0) {
        this.cdlist3[index].guige = false;
      }
    },
    zjfour(index) {
      this.cdlist4[index].sumber++;
      this.cdlist4[index].guige = true;
      this.$store.commit("zp",this.zp);
      this.$store.commit("add");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
    },
    jsfour(index) {
      this.$store.commit("zp",this.zp);
      this.cdlist4[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist4[index].sumber == 0) {
        this.cdlist4[index].guige = false;
      }
    },
    zjfive(index) {
      this.cdlist5[index].sumber++;
      this.cdlist5[index].guige = true;
      this.$store.commit("mf",this.mf);
      this.$store.commit("add");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
    },
    jsfive(index) {
      this.$store.commit("mf",this.mf);
      this.cdlist5[index].sumber--;
      this.$store.commit("jian");
      this.$store.commit("getdingdan", this.vuex);
      this.$store.commit("zongjia", this.getzongjia);
      if (this.cdlist5[index].sumber == 0) {
        this.cdlist5[index].guige = false;
      }
    },
    genguo() { // 更多显示提示
      this.show = true;
      let that = this;
      setTimeout(function () {
        that.show = false;
      }, 2000);
    },
  },
  mounted() {
    this.axios.get("/deta1").then((res) => {
      this.cdlist1 = res.data;
    });
    this.axios.get("/deta2").then((res) => {
      this.cdlist2 = res.data;
    });
    this.axios.get("/deta3").then((res) => {
      this.cdlist3 = res.data;
    });
    this.axios.get("/deta4").then((res) => {
      this.cdlist4 = res.data;
    });
    this.axios.get("/deta5").then((res) => {
      this.cdlist5 = res.data;
    });
  },
  watch:{
    dingdan:{
      handler(newName,oldName){
        if(this.dingdan.length<1){ // 商品为0时，隐藏购物车商品展示
          this.activediv=false
        }
      }
    }
  }
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
  font-size: .23rem;
}
.buycat-name-xinxi>ul{
  width: 90%;
  overflow: hidden;
  margin-left: 5%;
  margin-top: .2rem;
}
.buycat-name-xinxi>ul>li{
  display: flex;
  height: .6rem;
  line-height: .6rem;
  color: black;
}
.bycat-name{
  width: 35%;
  height: 100%;
}
.bycat-jiage{
  width: 35%;
  height: 100%;
  color: #ff6600;
}
.bycat-sumber{
  width: 40%;
  height: 100%;
}
.bycat-sumber button {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 100%;
  line-height: 0.25rem;
  margin: 0 .2rem;
  border: 1px solid gray;
}
.bycat-sumber .buycat-jia {
  background-color: #3190e8;
  color: white;
  border: none;
}
</style>