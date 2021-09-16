<template>
  <div>
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <p>消息</p>
    </header>
    <section class="infoList">
      <ul class="list-ul">
        <li>
          <div class="box">
            <div class="pic" @click="dianji()">
              <span>
                <van-icon name="volume-o" />
              </span>
            </div>
            <div class="content" @click="dianji()">
              <p class="title">系统通知</p>
              <p class="desc">暂无新消息</p>
            </div>
            <div class="delete">删除</div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="pic" @click="dianji()">
              <span><van-icon name="smile-comment-o" /></span>
            </div>
            <div class="content" @click="dianji()">
              <div class="min-box">
                <p class="title">营销活动</p>
                <span class="date">2021/08/22</span>
              </div>
              <p class="desc">
                "辣椒炒肉（福田店）"送您一张满50减2的代金券，快来看看吧!
              </p>
            </div>
            <div class="delete">删除</div>
          </div>
        </li>
        <li class="tts" v-for="item in infoList" :key="item.id">
          <div class="box">
            <div class="pic" @click="dianji()">
              <span><img :src="item.img" alt="" /></span>
            </div>
            <div class="content" @click="dianji()">
              <div class="min-box">
                <p class="title">{{ item.merchant }}</p>
                <span class="date">2021/{{ item.date }}</span>
              </div>
              <p class="desc">
                {{ item.desc }}
              </p>
            </div>
            <div class="delete">删除</div>
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
      star: 0, //记录开始位置
      move: 0, //记录移动位置
    };
  },
  methods: {
    /* 获取信息列表数据 */
    getInfo() {
      this.axios
        .get("http://localhost:3000/information?_order=desc&_sort=date")
        .then((res) => {
          this.infoList = res.data;
        });
    },
    /* 删除某条信息 */
    delete() {
      /* 获取所有的li */
      var list = document.querySelectorAll(".list-ul>li");
      var box = document.querySelectorAll(".box");
      /* 获取所有的删除按钮 */
      var del = document.querySelectorAll(".delete");
      /* 声明接收移动的位置 */
      var star, move;
      /* 遍历所有的li */
      for (let i = 0; i < list.length; i++) {
        /* 获取li开始的位置 */
        list[i].addEventListener("touchstart", function (e) {
          star = e.changedTouches[0].clientX;
        });
        list[i].addEventListener("touchmove", function (e) {
          var move1 = e.changedTouches[0].clientX;
          move = move1 - star;
          if (move < 10) {
            box[i].style.transform = "translateX(-0.9rem)";
            box[i].style.transition = "all .5s";
          } else {
            box[i].style.transform = "translateX(0)";
            box[i].style.transition = "all .5s";
          }
        });
        list[i].addEventListener("touchend", function () {
          del[i].addEventListener("click", function () {
            list[i].remove();
          });
        });
      }
    },
    dianji() {
      this.$dialog
        .alert({
          message: "请前往app查看完整内容！",
        })
        .then(() => {
          // on close
        });
    },
    remove(id) {
      this.axios
        .delete("http://localhost:3000/information/remove/" + id ,this.infoList)
        .then((res) => {
          this.getInfo();
        }); 
    },
  },
  /* 载入后 */
  mounted() {
    this.getInfo();
    // this.delete();
  },
  /* 页面更新后 */
  updated() {
    this.delete();
    this.remove()
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
  position: relative;
  overflow: hidden;
}
.infoList .box {
  width: 100%;
  height: 1.2rem;
  padding-left: 0.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.delete {
  position: absolute;
  top: 0;
  right: -0.8rem;
  width: 0.8rem;
  height: 1rem;
  background: #f00;
  color: #fff;
  text-align: center;
  font-size: 0.25rem;
  line-height: 1rem;
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
.van-button--normal {
  height: 1rem;
}
</style>
