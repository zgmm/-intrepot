<template>
  <div>
    <div class="header">
      <p class="iconfont icon-AS" @click="$router.back(-1)"></p>
    </div>
    <van-password-input
      :value="value"
      :length="6"
      info="密码为 6 位数字"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      @input="onInput"
      @delete="onDelete"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      errorInfo: "",
      showKeyboard: true,
      showCancelButton: false,
      getCom:[],
      getIndent:{}
    };
  },
  computed: {
    ...mapState(["yeshu","ddxx","dingdan","sum","shuliang"]),
  },
  watch: {
    value(value) {
      let that = this;
      if (value.length === 6 && value !== "123456") {
        that.errorInfo = "密码错误";
      } else {
        if (value.length == 6 && value == "123456") {
          that.$dialog.alert({
            message: "支付成功！"
          }).then(() => {
            that.getIndent.com.push(this.ddxx)
            that.$store.state.dingdan=[];
            that.$store.state.sum=0;
            that.$store.state.shuliang=0;
            console.log(that.$store.state.dingdan);
            that.axios.put("/indent",this.getIndent).then((res)=>{  // 修改订单页面MOCK数据 
            })
              setTimeout(function(){
                // that.$router.push("/spxiangqing"+that.yeshu)
                that.$router.push("/indent")
            },500);
          });
        }
      }
    },
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  },
  mounted() {
    this.axios.get("/indent").then((res)=>{
      this.getIndent = res.data
    })
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.8rem;
  background-color: #3190e8;
  font-size: 0.35rem;
  text-align: center;
}
.header p {
  float: left;
  width: 0.4rem;
  height: 0.4rem;
  color: white;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  line-height: 0.4rem;
}
.van-password-input {
  margin-top: 1rem;
}
.van-dialog {
  width: 4rem;
  height: 3rem;
}
.van-dialog img {
  width: 1rem;
  height: 1rem;
}
</style>