<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <input
        type="text"
        placeholder="请输入订单中的商家或商品名称"
        class="search"
        v-model="content"
      />
      <button class="ssou" @click="searchOrder()">搜索</button>
    </header>
    <!-- 展示订单部分 -->
    <section class="indentBox">
      <div class="without" v-show="without">
        <p>很抱歉！无搜索结果</p>
      </div>
      <div class="orderList" v-show="orderList">
        <ul>
          <li v-for="item in searchList" :key="item.length">
            <div class="shopinf">
              <img :src="item.src" />
              <div class="title">
                <p>{{ item.title }}（龙华人民路店）></p>
                <div class="youhui">
                  <span>25减3</span>
                  <span>35减5</span>
                  <span>49减8</span>
                  <span>8.8折起</span>
                  <span>...</span>
                </div>
              </div>
              <p class="finish">{{ item.status }}</p>
            </div>
            <div class="details">
              <p>
                {{ item.goods }} 等 {{ item.num }} 件商品
                <span>¥{{ item.sum }}</span>
              </p>
              <button class="again">再来一单</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 历史搜索 -->
      <div class="searchHistory" v-show="searchHistory">
        <div class="toutou">
          <p>历史搜索</p>
          <span @click="empty()"><van-icon name="delete-o" /></span>
        </div>
        <ul>
          <li v-for="li in historyList" :key="li.length">{{ li }}</li>
        </ul>
      </div>
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
      content: "", //搜索框内容
      without: false, //无结果
      orderList: false, //搜索到的订单
      searchHistory: false, //历史记录
      searchList: [], // 搜索列表
      historyList: [], // 历史记录列表
      newSearchList: [],
    };
  },
  watch: {
    content() {
      if (this.content == "") {
        this.without = false;
        this.orderList = false;
        this.axios.get("http://localhost:3000/searchIndent").then((res) => {
          this.searchList = res.data;
          if (this.historyList == "") {
            this.searchHistory = false;
          } else {
            this.searchHistory = true;
          }
        });
      }
    },
  },
  methods: {
    searchOrder() {
      this.searchHistory = false;
      this.historyList.push(this.content);
      this.newSearchList = [];
      this.searchList.forEach((item) => {
        if (
          item.title.indexOf(this.content) == -1 ||
          item.goods.indexOf(this.content) == -1
        ) {
          this.without = true;
        } else if (this.content == "") {
          return;
        } else {
          this.newSearchList.push(item);
          this.searchList = this.newSearchList;
        }
      });
      if (this.newSearchList.length > 0 || this.content == "") {
        this.without = false;
        this.orderList = true;
      } else {
        this.without = true;
        this.orderList = false;
      }
    },
    empty() {
      Dialog.confirm({
        message: "确认要删除查询记录吗？",
      })
        .then(() => {
          this.historyList = [];
          this.searchHistory = false;
        })
        .catch(() => {
          return;
        });
    },
  },
  mounted() {
    this.axios.get("http://localhost:3000/searchIndent").then((res) => {
      this.searchList = res.data;
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
  color: #fff;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3190e8;
}
.icon-AS {
  display: inline-block;
  width: 15%;
  font-size: 0.4rem;
  font-weight: normal;
  text-align: center;
}
.search {
  width: 70%;
  height: 0.6rem;
  font-size: 0.23rem;
  font-weight: normal;
  text-indent: 0.2rem;
  border: none;
  color: #666;
  border-radius: 0.15rem;
}
.ssou {
  display: inline-block;
  width: 15%;
  font-size: 0.25rem;
  font-weight: normal;
  text-align: center;
  background: none;
  border: none;
}
.indentBox {
  margin-top: 1rem;
  width: 100%;
  height: 10.35rem;
  background: #f1f1f1;
}
.orderList {
  width: 100%;
  box-sizing: border-box;
}
.orderList ul {
  margin: 0 auto;
  width: 95%;
  height: auto;
  padding: 0.05rem 0;
}
.orderList li {
  width: 100%;
  height: 2.5rem;
  background: #f9fcff;
  margin: 0.1rem 0;
  border-radius: 0.1rem;
}
.shopinf {
  display: flex;
  align-items: center;
  height: 1rem;
  background: #fafafa;
  margin: 0.15rem 0;
  border-bottom: 1px solid #ccc;
}
.shopinf img {
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.2rem;
  margin-left: 0.1rem;
}
.title {
  width: 70%;
  height: 0.8rem;
}
.title p {
  font-size: 0.23rem;
  color: #555;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}
.youhui {
  display: flex;
}
.youhui span {
  display: inline-block;
  border: 1px solid #d76026;
  color: #d76026;
  margin-top: 0.15rem;
  margin-right: 0.1rem;
  padding: 0 0.05rem;
}
.youhui span:last-child {
  border: none;
  font-weight: bold;
}
.finish {
  font-size: 0.23rem;
}
.details {
  width: 100%;
  background: #fff;
}
.details p {
  line-height: 0.7rem;
  font-size: 0.23rem;
  margin-left: 1.5rem;
}
.details p span {
  margin-left: 1.7rem;
  font-weight: bold;
  color: #d76026;
}
.again {
  text-align: center;
  padding: 0.1rem 0.2rem;
  margin-left: 4.6rem;
  border: none;
  background: #3190e8;
  border-radius: 0.05rem;
  font-size: 0.22rem;
  color: #fff;
}
.searchHistory {
  width: 100%;
  height: 10.35rem;
  background: #f1f1f1;
}
.toutou {
  width: 95%;
  margin: 0 auto;
  height: 0.5rem;
  line-height: 0.5rem;
}
.toutou p {
  float: left;
  font-size: 0.22rem;
}
.toutou span {
  float: right;
  font-size: 0.3rem;
  color: #666;
}
.searchHistory ul {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
}
.searchHistory ul li {
  padding: 0.1rem 0.2rem;
  background: #fff;
  margin: 0.1rem;
}
</style>
