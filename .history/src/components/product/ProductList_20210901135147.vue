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
              <img :src="list.src" alt="" />
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
              <a href="javascript:void(0)"
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
                <a href="javascript:void(0)"
                  >简餐<span class="shu">2857</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >盖浇饭<span class="shu">95</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >米饭面馆<span class="shu">75</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >包子粥店<span class="shu">30</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >香锅砂锅<span class="shu">15</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >麻辣烫<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >饺子混沌<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">汉堡<span class="shu">4</span></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  >生煎锅贴<span class="shu">5</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 1">
            <ul>
              <li>
                <a href="javascript:void(0)"
                  >小龙虾<span class="shu">39</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >地方小吃<span class="shu">69</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >烧烤<span class="shu">114</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >炸鸡炸串<span class="shu">15</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >鸭脖卤味<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">零食<span class="shu">3</span></a>
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 2">
            <ul>
              <li>
                <a href="javascript:void(0)">水果<span class="shu">31</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">生鲜<span class="shu">19</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">蔬菜<span class="shu">24</span></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  >海鲜水产<span class="shu">34</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 3">
            <ul>
              <li>
                <a href="javascript:void(0)"
                  >川湘菜<span class="shu">8</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >其他菜系<span class="shu">23</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >江浙菜<span class="shu">13</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">粤菜<span class="shu">17</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">海鲜<span class="shu">13</span></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  >火锅烤鱼<span class="shu">2</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >东北菜<span class="shu">1</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >西北菜<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >云南菜<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >新疆菜<span class="shu">0</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">鲁菜<span class="shu">3</span></a>
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 4">
            <ul>
              <li>
                <a href="javascript:void(0)">超市<span class="shu">25</span></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  >便利店<span class="shu">13</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >名酒坊<span class="shu">7</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)"
                  >零食饮料<span class="shu">3</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">水站<span class="shu">4</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">茶<span class="shu">1</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">奶站<span class="shu">0</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">粮油<span class="shu">1</span></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  >美妆母婴<span class="shu">3</span></a
                >
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 5">
            <ul>
              <li>
                <a href="javascript:void(0)">鲜花<span class="shu">20</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">蛋糕<span class="shu">11</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">面包<span class="shu">8</span></a>
              </li>
            </ul>
          </div>
          <div id="food" v-show="num == 7">
            <ul>
              <li>
                <a href="javascript:void(0)"
                  >奶茶果汁<span class="shu">30</span></a
                >
              </li>
              <li>
                <a href="javascript:void(0)">甜品<span class="shu">15</span></a>
              </li>
              <li>
                <a href="javascript:void(0)">咖啡<span class="shu">10</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box-o" v-show="index === 2 && isShow">
      <ul class="box-os">
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-paixu"></span>智能排序</a
          >
        </li>
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-location"></span>距离最近</a
          >
        </li>
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-huangguan"></span>销量最高</a
          >
        </li>
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-jiage"></span>起送价最低</a
          >
        </li>
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-zhongs"></span>配送速度最快</a
          >
        </li>
        <li>
          <a href="javascript:void(0)"
            ><span class="iconfont icon-xing"></span>评分最高</a
          >
        </li>
      </ul>
    </div>
    <div class="box-t" v-show="index === 3 && isShow">
      <div class="box-ts">
        <p>配送方式</p>
        <ul>
          <li class="list fengniao">
            <span class="iconfont icon-fengniao"></span>蜂鸟专送
          </li>
          <p>商家属性（可以多选）</p>
          <p>
            <input
              type="checkbox"
              class="weui-check"
              v-on:click="CheckItem(item)"
              v-model="item.state"
              name="checkbox"
            />
          </p>
          <p>
            <input
              type="checkbox"
              class="weui-check"
              v-on:click="CheckItem(item)"
              v-model="item.state"
              name="checkbox"
            />
          </p>
          <p>
            <input
              type="checkbox"
              class="weui-check"
              v-on:click="CheckItem(item)"
              v-model="item.state"
              name="checkbox"
            />
          </p>
          <p>
            <input
              type="checkbox"
              class="weui-check"
              v-on:click="CheckItem(item)"
              v-model="item.state"
              name="checkbox"
            />
          </p>
          <!-- <li class="list"><span class="kuang">品</span>品牌商家</li>
          <li class="list"><span class="kuang">保</span>外卖保</li>
          <li class="list"><span class="kuang">准</span>准时达</li>
          <li class="list"><span class="kuang">新</span>新店</li>
          <li class="list"><span class="kuang">付</span>在线支付</li>
          <li class="list"><span class="kuang">票</span>开发票</li> -->
        </ul>
        <div class="btn-box">
          <button>清空</button>
          <button>
            确定 <span class="sum">{{ counts }}</span>
          </button>
        </div>
      </div>
    </div>
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
      checked: false,
      counts: [],
      items: [
        {
          state: false,
        },
      ],
    };
  },
  methods: {
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
    CheckItem: function (item) {
      item.state = !item.state;
      console.log(this.items);
    },
  },
  mounted() {
    this.getList();
  },
  /* 创建前显示的样式 */
  beforeCreate() {
    //document.querySelector("body").setAttribute("style","")
  },
};
</script>

<style scoped src="@/assets/css/ProductList.css">
</style>
