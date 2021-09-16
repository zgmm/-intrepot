<template>
  <div>
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <p>消息</p>
    </header>
    <section class="infoList">
      <ul>
        <li>
          <div class="pic">
            <span>
              <van-icon name="volume-o" />
            </span>
          </div>
          <div class="content">
            <p class="title">系统通知</p>
            <p class="desc">暂无新消息</p>
          </div>
        </li>
        <li>
          <div class="pic">
            <span><van-icon name="smile-comment-o" /></span>
          </div>
          <div class="content">
            <p class="title">营销活动<span class="date">2021/08/22</span></p>
            <p class="desc">
              "辣椒炒肉（福田店）"送您一张满50减2的代金券，快来看看吧!
            </p>
          </div>
        </li>
      </ul>
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

<style scoped>
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
  text-align: center;
}

.icon-AS {
  width: 1.3rem;
  font-size: 0.4rem;
  position: absolute;
  right: 0.3rem;
  left: 0rem;
  font-weight: normal;
}
.infoList {
  margin-top: 1rem;
  width: 100%;
  height: auto;
  background: #fff;
}
.infoList li {
  width: 100%;
  height: 1.2rem;
  padding-left: 0.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.pic {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: chocolate;
  text-align: center;
  line-height: 1.2rem;
}
.pic span {
  font-size: .5rem;
  color: #fff;
}
</style>
