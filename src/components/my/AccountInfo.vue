<template>
  <div class="account">
    <!-- 头部 -->
    <Header title="账户信息">
      <span class="iconfont icon-AS black" @click="$router.push('/home')" slot="black"></span>
    </Header>
    <!-- 页面主题 -->
    <section class="box">
      <ul class="list">
        <a href="#">
          <li class="gao">
            <p>头像</p>
            <div class="right">
              <div>
                <input
                  id="upload"
                  type="file"
                  style="display: none"
                  accept="image/gif,image/jpeg,image/png,image/jpg"
                  @change="freshImg"
                />
                <div class="border" @click="uploadIMg">
                  {{ headTip }} <img :src="imgsrc" class="imgDiv" />
                </div>
              </div>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <a href="javascript:void(0)" @click="midify">
          <li>
            <p>用户名</p>
            <div class="right">
              <span class="font">{{ login.username }}</span>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <a href="javascript:viod(0)" @click="$router.push('/xuandizhi')">
          <li>
            <p>收货地址</p>
            <div class="right">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <li class="binding">账号绑定</li>
        <a href="javascript:void(0)">
          <li @click="phone" class="phon">
            <p>
              <span class="iconfont icon-shouji"></span>
              手机
            </p>
            <div class="right">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <li class="binding">安全设置</li>
        <a href="javascript:void(0)">
          <li style="border-botton" @click="resetPassword">
            <p>登录密码</p>
            <div class="right">
              <span class="font">修改</span>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
      </ul>
      <button class="exit" @click="outLogin">退出登录</button>
      <div class="alert-phone"></div>
      <div class="alert-exit"></div>
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
      imgsrc: require("../../../public/images/login.png"), //用户没有上传图片的默认头像
      headTip: "点击上传", //提示文字
      alertPhone: false,
      alertEexit: false,
      login: {},
    };
  },
  methods: {
    // 上传头像的点击事件
    uploadIMg() {
      document.getElementById("upload").click();
    },
    // 上传头像
    freshImg(e) {
      let _this = this;
      _this.imgObj = e.target.files["0"]; //得到上传的第一个文件
      let fr = new FileReader(); //异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
      fr.onload = function () {
        //在读取操作完成时触发
        _this.imgsrc = fr.result; // 图片文件赋值给图片标签路径
      };
      fr.readAsDataURL(_this.imgObj); //将读取到的文件编码成Data URL
      _this.headTip = ""; // 清空我的提示
    },
    midify() {
      this.$router.push("/home/midifyUser");
    },
    // 上传手机号弹框
    phone() {
      this.$dialog.alert({
        title: "系统提示",
        message: "请前往app绑定",
      });
    },
    // 重置密码
    resetPassword() {
      this.$dialog
        .confirm({
          title: "确定要重置密码？",
        })
        .then(() => {
          this.$router.replace("/forget");
        })
        .catch(() => {
          this.$dialog.close();
        });
    },
    // 退出登录
    outLogin() {
      this.$dialog
        .confirm({
          title: "系统提示",
          message: "确定要退出吗？",
        })
        .then(() => {
          this.$router.replace("/home/homei");
        })
        .catch(() => {
          this.$dialog.close();
        });
    },
    // 显示用户名
    showUsername() {
      this.loginId = window.sessionStorage.getItem("token");
      this.axios
        .get("http://localhost:3000/login/" + this.loginId)
        .then((res) => {
          this.login = res.data;
          // console.log(this.login);
        });
    },
  },
  mounted() {
    this.showUsername();
  },
};
</script>

<style scoped>
.account {
  text-align: center;
}
.box {
  margin-top: 0.85rem;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  box-sizing: border-box;
}

.list {
  width: 100%;
  box-sizing: border-box;
}

.list a {
  display: block;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}

.list a li {
  width: 100%;
  display: flex;
  height: 1rem;
  line-height: 0.8rem;
  position: relative;
  align-items: center;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}

.list a .gao {
  padding: 0.2rem 0;
}

.list a li p {
  font-size: 0.25rem;
  width: 2rem;
  text-align: left;
  color: #666;
  margin-left: 0.2rem;
}

.right {
  position: absolute;
  right: 0rem;
  display: flex;
  align-items: center;
}

.icon-mine-active {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.5rem;
  color: #3266a3;
  border-radius: 50%;
  background: #d2e2f1;
  margin-right: 0.1rem;
}

.icon-right {
  font-size: 0.4rem;
  color: #aaa;
}

.font {
  font-size: 0.27rem;
  color: #aaa;
}

.binding {
  background: #f7f7f7;
  width: 100%;
  line-height: 0.7rem;
  text-align: left;
  text-indent: 0.2rem;
  font-size: 0.23rem;
}

.icon-shouji {
  font-size: 0.35rem;
  color: #10aeff;
  vertical-align: middle;
}

.exit {
  margin: 0 auto;
  width: 95%;
  margin-top: 0.43rem;
  height: 0.7rem;
  line-height: 0.7rem;
  background: #d8584a;
  color: #eee;
  border: none;
  border-radius: 0.15rem;
  font-size: 0.25rem;
}
/* 上传图片样式 */
.head-img {
  text-align: center;
  margin-bottom: 0.2rem;
}
.border {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid #c3c3c3;
  overflow: hidden;
  /* line-height: 5rem; */
  text-overflow: ellipsis;
  text-align: center;
  position: relative;
  z-index: 10;
  margin-top: 0.3rem;
  color: #000;
  font-size: 0.1rem;
}
.imgDiv {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  z-index: -1;
}
/* 弹框提示 */
</style>
