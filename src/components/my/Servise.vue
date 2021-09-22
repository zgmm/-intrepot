<template>
    
  <div>
    <Header title="我的客服">
      <span
        class="iconfont icon-AS black"
        @click="$router.push('/home')"
        slot="black"
      ></span>
    </Header>
    <section class="sec">
      <div class="sec-con1">
        <div class="sec-con1-txt1"><img src="/images/客服.png" alt="" /></div>
        <div>您好！我是客服小z，很高兴为你服务</div>
      </div>
      <div class="sec-con2">
        <dl>
          <dt>热门问题</dt>
          <dd @click="zwkt">
            我的订单超时了怎么办？<span class="iconfont icon-right"></span>
          </dd>
          <dd @click="zwkt">
            订单一直没有骑士接单怎么办？<span
              class="iconfont icon-right"
            ></span>
          </dd>
          <dd @click="zwkt">
            联系不上商家/骑士怎么办？<span class="iconfont icon-right"></span>
          </dd>
          <dd @click="zwkt">
            我的红包为什么用不了？<span class="iconfont icon-right"></span>
          </dd>
          <dd @click="zwkt">忘记备注了怎么办？<span class="iconfont icon-right"></span></dd>
          <dd @click="zwkt">
            下单后怎么更改联系电话？<span class="iconfont icon-right"></span>
          </dd>
          <dd @click="zwkt">
            阿里医药口罩发货延迟怎么办？<span
              class="iconfont icon-right"
            ></span>
          </dd>
          <dd @click="zwkt">
            骑士提前点击送达了怎么办？<span class="iconfont icon-right"></span>
          </dd>
          <dd @click="zwkt">
            怎么关闭超级吃货卡的自动续费？<span
              class="iconfont icon-right"
            ></span>
          </dd>
          <dd @click="zwkt">
            为什么吃货卡的额度被关闭了？<span
              class="iconfont icon-right"
            ></span>
          </dd>
        </dl>
      </div>
      <ul class="sec-con3">
        <li></li>
        <li>客服电话：111234230000</li>
        <li></li>
      </ul>
      <div class="sec-con4" @click="zwkt">在线客服</div>
    </section>
      
  </div>
</template>

<script>
import Header from "../home/Header.vue";
export default {
  components: { Header },
  data() {
    return {};
  },
  methods: {
    zwkt() {
      this.$dialog.alert({
        title: "系统提示",
        message: "暂时未开通此功能",
      });
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.sec {
  margin-top: 0.75rem;
}
.sec-con1 {
  background: linear-gradient(to top, #10aeff, #3190e8);
  padding: 0.2rem 0.3rem;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.13rem;
}
.sec-con1 .sec-con1-txt1 {
  width: 0.5rem;
  margin-right: 0.3rem;
}
.sec-con1 .sec-con1-txt1 img {
  width: 100%;
}
.sec-con2 {
  box-sizing: border-box;
  width: 97%;
  margin: 0.1rem;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.15rem;
}
.sec-con2 dl dt {
  font-weight: bold;
}
.sec-con2 dl dd {
  padding: 0.2rem;
  border-bottom: 1px solid #f1f1f1;
}
.sec-con2 dl dd span {
  float: right;
  color: #aaa;
}
.sec-con3 {
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-top: 0.2rem;
}
.sec-con3 li {
  margin-right: 0.3rem;
}
.sec-con3 li:nth-child(odd) {
  width: 0.7rem;
  height: 0.02rem;
  background-color: #aaaa;
}
.sec-con4 {
  width: 6rem;
  height: 0.7rem;
  background-color: #3190e8;
  color: #fff;
  text-align: center;
  line-height: 0.7rem;
  margin: 0.1rem auto;
  border-radius: 0.15rem;
  font-size: 0.3rem;
}
</style>