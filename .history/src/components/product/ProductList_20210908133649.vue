<template>
  <div id="#app">
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-AS"></span>
      <p>甜品饮品</p>
    </header>
    <!-- 下拉菜单 -->
    <div class="menuList">
      <div
        class="classify"
        @click="show(1)"
        :class="index === 1 ? 'active' : ''"
      >
        菜单<Icon class="down" :type="dropdown" />
      </div>
      <div
        class="classify"
        @click="show(2)"
        :class="index === 2 ? 'active' : ''"
      >
        排序<Icon class="down" :type="dropdown" />
      </div>
      <div
        class="classify"
        @click="show(3)"
        :class="index === 3 ? 'active' : ''"
      >
        筛选<Icon class="down" :type="dropdown" />
      </div>
    </div>
    <div class="menus">
      <ul>
        <li>
          <a
            v-for="list in list"
            :key="list.length"
            class="individual"
            href="javascript:void(0)"
          >
            <div class="pic">
              <img v-lazy="list.src" />
            </div>
            <div class="middle">
              <p class="title">
                <span class="brand">品牌</span>{{ list.title }}
              </p>
              <p class="stra">
                <Icon class="xing" type="ios-star" /><Icon
                  class="xing"
                  type="ios-star"
                /><Icon class="xing" type="ios-star" /><Icon
                  class="xing"
                  type="ios-star"
                /><Icon class="xing" type="ios-star" /><span class="score">{{
                  list.grade
                }}</span
                ><span class="yue">月售{{ list.num }}单</span>
              </p>
              <p class="delivery">¥20起送 / 配送费约¥5</p>
            </div>
            <div class="surely">
              <p>保准票</p>
              <p><span>蜂鸟专送</span><span>准时达</span></p>
              <p>
                {{ list.distance }}公里 /
                <span> {{ list.house }}小时{{ list.minites }}分钟</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="box" v-show="index === 1 && isShow">
      <div class="vessel">
        <div class="box-left">
          <ul>
            <li>
              <a href="javascript:void(0)" @click="loading()"
                >异国料理<span class="num">3910</span></a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 0"
                :class="{ active: num == 0 }"
                ><span class="iconfont icon-hanbao"></span>快餐便当<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 1"
                :class="{ active: num == 1 }"
                ><span class="iconfont icon-miao"></span>小吃宵夜<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 2"
                :class="{ active: num == 2 }"
                ><span class="iconfont icon-shuguogou"></span>果蔬生鲜<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 3"
                :class="{ active: num == 3 }"
                ><span class="iconfont icon-caixi"></span>特色菜系<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 4"
                :class="{ active: num == 4 }"
                ><span class="iconfont icon-chaoshi"></span>商店超市<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 5"
                :class="{ active: num == 5 }"
                ><span class="iconfont icon-dangao"></span>鲜花蛋糕<span
                  class="num"
                  >123</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 6"
                :class="{ active: num == 6 }"
                ><span class="iconfont icon-mine-active"></span>全部商家<span
                  class="num"
                  >0</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="num = 7"
                :class="{ active: num == 7 }"
                ><span class="iconfont icon-dangao active"></span>甜品饮品<span
                  class="num"
                  >58</span
                ><Icon class="jiantou" type="ios-arrow-forward"
              /></a>
            </li>
          </ul>
        </div>
        <div class="box-right">
          <div class="food" v-show="num == 0">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >简餐<span class="shu">2857</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >盖浇饭<span class="shu">95</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >米饭面馆<span class="shu">75</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >包子粥店<span class="shu">30</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >香锅砂锅<span class="shu">15</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >麻辣烫<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >饺子混沌<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >汉堡<span class="shu">4</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >生煎锅贴<span class="shu">5</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 1">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >小龙虾<span class="shu">39</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >地方小吃<span class="shu">69</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >烧烤<span class="shu">114</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >炸鸡炸串<span class="shu">15</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >鸭脖卤味<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >零食<span class="shu">3</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 2">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >水果<span class="shu">31</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >生鲜<span class="shu">19</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >蔬菜<span class="shu">24</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >海鲜水产<span class="shu" @click="loading()">34</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 3">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >川湘菜<span class="shu">8</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >其他菜系<span class="shu">23</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >江浙菜<span class="shu">13</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >粤菜<span class="shu">17</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >海鲜<span class="shu">13</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >火锅烤鱼<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >东北菜<span class="shu">1</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >西北菜<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >云南菜<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >新疆菜<span class="shu">0</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >鲁菜<span class="shu">3</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 4">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >超市<span class="shu">25</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >便利店<span class="shu">13</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >名酒坊<span class="shu">7</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >零食饮料<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >水站<span class="shu">4</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >茶<span class="shu">1</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >奶站<span class="shu">0</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >粮油<span class="shu">1</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >美妆母婴<span class="shu">3</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 5">
            <ul>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >鲜花<span class="shu">20</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >蛋糕<span class="shu">11</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >面包<span class="shu">8</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 7">
            <ul>
              <li>
                <a href="javascript:void(0)"
                  >奶茶果汁<span class="shu" @click="loading()">30</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >甜品<span class="shu">15</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)" @click="loading()"
                  >咖啡<span class="shu">10</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box box-o" v-show="index === 2 && isShow">
      <ul class="box-os">
        <li>
          <a href="javascript:void(0)" @click="sorting()"
            ><span class="iconfont icon-paixu"></span>智能排序</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="recently()"
            ><span class="iconfont icon-location"></span>距离最近</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="sales()"
            ><span class="iconfont icon-huangguan"></span>销量最高</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="loading()"
            ><span class="iconfont icon-jiage"></span>起送价最低</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="speed()"
            ><span class="iconfont icon-zhongs"></span>配送速度最快</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="grade()"
            ><span class="iconfont icon-xing"></span>评分最高</a
          >
        </li>
      </ul>
    </div>
    <div class="box box-t" v-show="index === 3 && isShow">
      <div class="box-ts">
        <div class="xuanze">
          <p>配送方式</p>
          <div class="radio-label">
            <span class="iconfont icon-fengniao"></span>
            <input
              type="checkbox"
              id="color1"
              name="color"
              @click="jiancha()"
            />
            <label for="color1">蜂鸟专送</label>
          </div>
          <p>商家属性（可以多选）</p>
          <div class="radio-label">
            <span>品</span>
            <input
              type="checkbox"
              id="color2"
              name="color"
              @click="jiancha()"
            />
            <label for="color2">品牌商家</label>
          </div>
          <div class="radio-label">
            <span>保</span>
            <input
              type="checkbox"
              id="color3"
              name="color"
              @click="jiancha()"
            />
            <label for="color3">外卖保</label>
          </div>
          <div class="radio-label">
            <span>准</span>
            <input
              type="checkbox"
              id="color4"
              name="color"
              @click="jiancha()"
            />
            <label for="color4">准时达</label>
          </div>
          <div class="radio-label">
            <span>新</span>
            <input
              type="checkbox"
              id="color5"
              name="color"
              @click="jiancha()"
            />
            <label for="color5">新店</label>
          </div>
          <div class="radio-label">
            <span>付</span>
            <input
              type="checkbox"
              id="color6"
              name="color"
              @click="jiancha()"
            />
            <label for="color6">在线付</label>
          </div>
          <div class="radio-label">
            <span>票</span>
            <input
              type="checkbox"
              id="color7"
              name="color"
              @click="jiancha()"
            />
            <label for="color7">开发票</label>
          </div>
        </div>
        <div class="btn-box">
          <button @click="eliminate()">清空</button>
          <button @click="loading()">
            确定 <span class="sum">（{{ counts }}）</span>
          </button>
        </div>
      </div>
    </div>
    <!-- 加载动画 -->
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 7,
      index: 1,
      isShow: false,
      dropdown: "md-arrow-dropdown",
      list: [],
      counts: 0,
      categoryIndex:0,
    };
  },
  computed:{

  },
  methods: {
    clickli(index){
      this.categoryIndex = index
    },
    show(value) {
      this.index === value
        ? (this.isShow = !this.isShow)
        : (this.isShow = true);
      this.index = value;
    },
    getList() {
      this.axios.get("http://localhost:3000/protuctList").then((res) => {
        this.list = res.data;
      });
    },
    jiancha() {
      var xxx = document.getElementsByName("color");
      var chenck = xxx.length;
      var chestr = 0;
      for (var i = 0; i < chenck; i++) {
        if (xxx[i].checked == true) {
          chestr++;
          this.counts = chestr;
        }
      }
      let sum = document.querySelector(".sum");
      if (this.counts <= 0) {
        sum.setAttribute("style", "display:none");
      } else {
        sum.setAttribute("style", "display:contents");
      }
    },
    eliminate() {
      let sum = document.querySelector(".sum");
      var xxx = document.getElementsByName("color");
      for (var i = 0; i < xxx.length; i++) {
        xxx[i].checked = false;
      }
      sum.setAttribute("style", "display:none");
    },
    loading() {
      this.jiancha()
      let loading = document.querySelector(".loading");
      let box = document.querySelectorAll(".box");
      loading.setAttribute("style", "display:block");
      setTimeout(function () {
        loading.setAttribute("style", "display:none");
      }, 2000);
      for (let i = 0; i < box.length; i++) {
        box[i].setAttribute("style", "display:none");
      }
      this.eliminate();
      this.show();
    },
    //销量最高
    sales(){
      this.loading()
      this.axios.get("http://localhost:3000/protuctList?_order=desc&_sort=num").then((res) => {
        this.list = res.data;
      });
    },
    //评分最高
    grade(){
      this.loading()
      this.axios.get("http://localhost:3000/protuctList?_order=desc&_sort=grade").then((res) => {
        this.list = res.data;
      });
    },
    //智能排序
    sorting(){
      this.loading();
      this.speed();
      this.recently();
      this.grade();
    },
    //速度最快
    speed(){
      this.loading()
      this.axios.get("http://localhost:3000/protuctList?_order=asc&_sort=house").then((res) => {
        this.list = res.data;
      });
    },
    //距离最近
    recently(){
      this.loading()
      this.axios.get("http://localhost:3000/protuctList?_order=asc&_sort=distance").then((res) => {
        this.list = res.data;
      });
    },
  },
  mounted() {
    this.getList();
    this.jiancha();
  },
  /* 创建前显示的样式 */
  beforeCreate() {
    //document.querySelector("body").setAttribute("style","")
  },
};
</script>

<style scoped src="@/assets/css/ProductList.css">
</style>
