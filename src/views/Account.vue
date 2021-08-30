<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS"></span>
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
              <span class="font">eddenj</span>
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
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped src="@/assets/css/Account.css">
</style>
