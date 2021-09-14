<template>
    
  <div>
    <!-- 头部 -->
    <Header title="修改用户名">
      <span
        class="iconfont icon-AS black"
        @click="$router.back(-1)"
        slot="black"
      ></span>
    </Header>
    <section class="sec">
      <input type="text" v-model="login.username" />
      <span>用户名长度在4-20位之间</span>
      <button @click="verify">确认修改</button>
      <!-- <input type="hidden" v-model="login.password" :value="kblogin.password"> -->
    </section>
      
  </div>
</template>

<script>
import Header from "../home/Header.vue";
export default {
  components: { Header },
  name: "",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      save: false,
      loginid: 1,
      kblogin: {},
    };
  },
  methods: {
    verify() {
      let reg = /^\w{4,20}$/;

      let span = document.querySelector(".sec span");
      let btn = document.querySelector("button");

      this.login.password = this.kblogin.password;
      
      // 验证正则表达式是否为真，用户名必须4-20位
      if (!reg.test(this.login.username)) {
        span.setAttribute("style", "color:red");
        btn.style.backgroundColor = "#1fa7ff";
        btn.style.color = "#a6d3f5";
        return;
      } else {
        span.setAttribute("style", "color:#000");
        btn.style.backgroundColor = "#3190e8";
        btn.style.color = "#fff";
        this.axios
          .put("http://localhost:3000/login/" + this.loginid, this.login)
          .then((res) => {
            this.$router.replace("/home/acountInfo");
          });
      }
    },
  },
  computed: {},
  mounted() {
    this.loginid = window.sessionStorage.getItem("token");
    this.axios
      .get("http://localhost:3000/login/" + this.loginid)
      .then((res) => {
        this.kblogin = res.data;
      });
  },
};
</script>

<style scoped>
.sec {
  padding: 0.2rem;
  margin-top: 0.75rem;
}
.sec input {
  width: 97%;
  height: 0.7rem;
  box-sizing: border-box;
  outline: #1fa7ff;
  border: 1px solid #ddd;
  margin: auto;
  background-color: #f5f5f5;
  padding-left: 0.2rem;
  border-radius: 0.05rem;
  margin-bottom: 0.1rem;
}
.sec button {
  width: 97%;
  margin: 0.2rem auto;
  background-color: #3190e8;
  height: 0.7rem;
  outline: none;
  border: none;
  font-size: 0.4rem;
  color: #fff;
  border-radius: 0.05rem;
}
</style>