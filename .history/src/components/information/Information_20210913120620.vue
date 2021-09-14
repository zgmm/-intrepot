<template>
  <div>
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <p>消息</p>
    </header>
    <section class="infoList">
      <ul>
        <van-swipe-cell :before-close="beforeClose">
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
          <template #right>
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
        <li>
          <div class="pic">
            <span><van-icon name="smile-comment-o" /></span>
          </div>
          <div class="content">
            <div class="min-box">
              <p class="title">营销活动</p>
              <span class="date">2021/08/22</span>
            </div>
            <p class="desc">
              "辣椒炒肉（福田店）"送您一张满50减2的代金券，快来看看吧!
            </p>
          </div>
        </li>
        <li v-for="item in infoList" :key="item.id">
          <div class="pic">
            <span><img :src="item.img" alt="" /></span>
          </div>
          <div class="content">
            <div class="min-box">
              <p class="title">{{ item.merchant }}</p>
              <span class="date">2021/{{ item.date }}</span>
            </div>
            <p class="desc">
              {{ item.desc }}
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
    return {
      infoList: [],
    };
  },
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case "right":
          Dialog.confirm({
            message: "确定删除吗？",
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
  },
  mounted() {
    this.axios.get("http://localhost:3000/information").then((res) => {
      this.infoList = res.data;
    });
  },
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
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.1rem;
  margin-right: 0.25rem;
}
.infoList li:nth-child(1) .pic {
  background: #f6a330;
}
.infoList li:nth-child(2) .pic {
  background: #ee6b38;
}
.pic span {
  font-size: 0.5rem;
  color: #fff;
}
.pic span img {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
}
.content {
  width: 80%;
  padding: 0.1rem 0;
  border-bottom: 1px solid #eee;
}
.content .title {
  font-size: 0.24rem;
  font-weight: 600;
  width: 80%;
  font-family: "微软雅黑";
  line-height: 0.5rem;
  color: #000;
}
.min-box {
  width: 100%;
  display: flex;
}
.min-box .date {
  line-height: 0.5rem;
}
.desc {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.22rem;
}
.van-button--normal{
    height: 1rem;
}
</style>
