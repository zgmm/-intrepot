<template>
  <div class="refund">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>退款详情</span>
    </header>
    <div class="refundList">
      <p>退款信息</p>
      <div class="box">
        <div class="pic">
          <img src="/images/川湘菜.jpeg" alt="" />
        </div>
        <div class="info">
          <p>杨枝甘露（双倍芒果底）</p>
          <p>温度/少冰 甜度 【推荐全糖】/全糖 西米/有西米 西柚/有西柚</p>
          <p>x1</p>
        </div>
        <div class="sum">¥16</div>
      </div>
      <div>
        <p>包装费</p>
        <span>0</span>
      </div>
      <div>
        <p>配送费</p>
        <span>0</span>
      </div>
      <div>
        <p>退款金额</p>
        <span>¥16</span>
      </div>
      <div>
        <p>退款原因</p>
        <span>地址/电话填写错误</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  computed: {},
  props: [],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
header {
  text-align: center;
  width: 100%;
  z-index: 2;
  height: 0.9rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  color: #fff;
  position: fixed;
  background: #3190e8;
  font-weight: bold;
  top: 0;
  left: 0;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
}
.refundList {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
  padding: 0.25rem;
  box-sizing: border-box;
  margin-top: 1rem;
  border-radius: 0.1rem;
}
.refundList p {
  font-size: 0.24rem;
  font-weight: bold;
  color: #333;
  font-family: "微软雅黑";
}
.box {
  display: flex;
}
.box .pic {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: .25rem;
}
.box .pic img {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
