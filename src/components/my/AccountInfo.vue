<template>
  <div class="account">
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <p>账户信息</p>
    </header>
    <!-- 页面主题 -->
    <section class="box">
      <ul class="list">
        <a href="#">
          <li class="gao">
            <p>头像</p>
            <div class="right">
              <span class="iconfont icon-mine-active"></span>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <a href="#">
          <li>
            <p>用户名</p>
            <div class="right">
              <span class="font">{{login.userName}}</span>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <a href="#">
          <li>
            <p>收货地址</p>
            <div class="right">
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
        <li class="binding">账号绑定</li>
        <a href="#">
          <li>
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
        <a href="#">
          <li style="border-botton">
            <p>
              登录密码
            </p>
            <div class="right">
                <span class="font">修改</span>
              <span class="iconfont icon-right"></span>
            </div>
          </li>
        </a>
      </ul>
      <button class="exit">退出登录</button>
    </section>
  </div>
</template>


<script>
export default {
  name: "",
  computed: {},
  props: [],
  data() {
    return {
        login:{
            userName:"122233",
            password:""
        }
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped >
.account{
    text-align: center;
}
header {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 0.3rem;
    font-weight: bold;
    background: #3190e8;
    color: #fff;
    z-index: 100;
}

.icon-AS {
    width: 1.3rem;
    font-size: 0.5rem;
    position: absolute;
    right: 0.3rem;
    left: 0rem;
    font-weight: normal;
}

.box {
    margin-top: 1.2rem;
    width: 100%;
    height: 100%;
    background: #f7f7f7;
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
    height: 0.8rem;
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
    color: #3266A3;
    border-radius: 50%;
    background: #D2E2F1;
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
    color: #10AEFF;
    vertical-align: middle;
}

.exit {
    margin: 0 auto;
    width: 95%;
    margin-top: 0.43rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background: #D8584A;
    color: #eee;
    border: none;
    border-radius: 0.15rem;
    font-size: 0.25rem;
}
</style>
