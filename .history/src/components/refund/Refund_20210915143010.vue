<template>
  <div class="refund">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>退款详情</span>
    </header>
    <div class="refundList">
      <p>退款信息</p>
      <!-- 第一个商品信息 -->
      <div class="box">
        <div class="pic">
          <img :src="getRefundcuisine(getId)" alt="" />
        </div>
        <div class="info">
          <p>{{getRefundcomtitle(getId)}}</p>
          <p>常规 温度/热 {{getRefundremark(getId)}}</p>
          <p>x1</p>
        </div>
        <div class="sum">¥{{getRefundunit(getId)}}</div>
      </div>
      <!-- 第二个商品信息 -->
      <div class="box">
        <div class="pic">
          <img :src="getRefundcuisines(getId)" alt="" />
        </div>
        <div class="info">
          <p>{{getRefundcomtitles(getId)}}</p>
          <p>常规 温度/热 {{getRefundremarks(getId)}}</p>
          <p>x1</p>
        </div>
        <div class="sum">¥{{getRefundunit(getId)}}</div>
      </div>
      <div class="row">
        <p>包装费</p>
        <span>0</span>
      </div>
      <div class="row">
        <p>配送费</p>
        <span>0</span>
      </div>
      <div class="row">
        <p>退款金额</p>
        <span>¥{{getRefundprice(getId)}}</span>
      </div>
      <div class="row">
        <p>退款原因</p>
        <span>{{getRefundcause(getId)}}</span>
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
    return {
      getId: 0, //获取订单传过来的id
      refundList: [], //获取fail的数据
    };
  },
  methods: {
    /* 获取result值为已取消的元素 */
    getRefund() {
      this.axios.get("http://localhost:3000/indent").then((res) => {
        this.getId = this.$route.query.id;
        var com = res.data[0].com;
        for (let i = 0; i < com.length; i++) {
          if (com[i].result == "已取消") {
            this.refundList.push(com[i]);
          }
        }
      });
    },
    /* 获取对应的第一张商品图片 */
    getRefundcuisine(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].cuisine;
        }
      }
    },
    /* 获取对应的第二张商品图片 */
    getRefundcuisines(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].cuisines;
        }
      }
    },
    /* 获取对应的第一个商品名 */
    getRefundcomtitle(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].comtitle;
        }
      }
    },
    /* 获取对应的第二个商品名 */
    getRefundcomtitles(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].comtitles;
        }
      }
    },
    /* 获取对应总金额 */
    getRefundprice(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].price;
        }
      }
    },
    /* 获取单价 */
    getRefundunit(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].price / 2;
        }
      }
    },
    /* 获取退款原因 */
    getRefundcause(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].cause;
        }
      }
    },
    /* 获取第一个商品的备注 */
    getRefundremark(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].remark;
        }
      }
    },
    /* 获取第二个商品的备注 */
    getRefundremarks(id) {
      for (let i = 0; i < this.refundList.length; i++) {
        if (id == this.refundList[i].id) {
          return this.refundList[i].remarks;
        }
      }
    },
  },
  mounted() {
    this.getRefund();
  },
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
  margin: .15rem 0;
}
.box .pic {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.25rem;
}
.box .pic img {
  width: 1.2rem;
  height: 1.2rem;
}
.info {
  width: 65%;
  margin-right: 0.1rem;
}
.info p:nth-child(1) {
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
}
.info p:nth-child(2) {
  font-weight: normal;
  font-size: 0.2rem;
  color: #aaa;
}
.info p:nth-child(3) {
  font-weight: normal;
  font-size: 0.2rem;
}
.sum {
  font-weight: bold;
  font-size: 0.25rem;
  color: #333;
}
.row {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
}
.row p {
  width: 50%;
  text-align: left;
}
.row span {
  display: inline-block;
  width: 50%;
  text-align: right;
  font-size: 0.25rem;
  font-weight: bold;
  color: #333;
}
</style>
