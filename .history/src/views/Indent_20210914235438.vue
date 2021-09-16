<template>
  <div class="indent">
    <header>
      <span>我的订单</span>
      <p class="icon">
        <span
          class="iconfont icon-sousou"
          @click="$router.push('ordersearch')"
        ></span>
        <span
          class="iconfont icon-kefuzhongxin"
          @click="$router.push('information')"
        ></span>
        <span class="red">22</span>
      </p>
    </header>
    <section class="recently">
      <div class="often">
        <p class="title">
          <span>最近常买</span>
          <span @click="more()">查看更多商家></span>
        </p>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.j" />
                <div class="gray">
                  <p>俏九州小炒黄牛肉</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.a" alt="" />
                <div class="gray">
                  <p>品正品港式</p>
                  <p><span>2</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.b" alt="" />
                <div class="gray">
                  <p>大浪淘沙哈哈哈</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.c" alt="" />
                <div class="gray">
                  <p>御蝶坊老婆饼</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.d" alt="" />
                <div class="gray">
                  <p>思密达榴莲千层</p>
                  <p><span>2</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.e" alt="" />
                <div class="gray">
                  <p>愿者上钩烤鱼</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.f" alt="" />
                <div class="gray">
                  <p>首脑花式发型</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.j" alt="" />
                <div class="gray">
                  <p>俏九州小炒黄牛肉</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.g" alt="" />
                <div class="gray">
                  <p>汤鲜生牛杂五味汤</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.h" alt="" />
                <div class="gray">
                  <p>汉阳廷烤鱼</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <img v-lazy="img.i" alt="" />
                <div class="gray">
                  <p>桂小厨螺蛳粉</p>
                  <p><span>1</span>个月前买过</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="order">
      <p class="all">
        <button
          class="anniu"
          @click="change(0)"
          :class="{ active: 0 === number }"
        >
          全部订单
        </button>
        <button
          class="anniu"
          @click="change(1)"
          :class="{ active: 1 === number }"
        >
          待评价
        </button>
        <button
          class="anniu"
          @click="change(2)"
          :class="{ active: 2 === number }"
        >
          退款
        </button>
      </p>
      <div class="orderList">
        <div class="orderListBox" v-show="0 === number">
          <a href="javascript:void(0)" v-for="com in getCom" :key="com.lenght">
            <div class="orderAll">
              <div class="tou">
                <img v-lazy="com.src" />
                <div class="orderInfo">
                  <p @click="again()">{{ com.title }}></p>
                  <div class="discounts">
                    <div>
                      <span>{{ com.ssows }}</span>
                    </div>
                    <div>{{ com.houbao }}</div>
                    <div>{{ com.discount }}</div>
                  </div>
                </div>
                <span class="fulfill">{{ com.result }}</span>
              </div>
              <div class="center">
                <div class="one">
                  <div class="pic">
                    <img v-lazy="com.cuisine" />
                  </div>
                  <p>{{ com.comtitle }}</p>
                </div>
                <div class="two">
                  <div class="pic">
                    <img v-lazy="com.cuisines" />
                  </div>
                  <p>{{ com.comtitles }}</p>
                </div>
                <div class="amount">
                  <p>¥{{ com.price }}</p>
                  <p>共2件</p>
                </div>
              </div>
              <div class="right">
                <button @click="again()">再来一单</button>
                <button
                  @click="
                    $router.push({ path: 'evaluate', query: { id: com.id } })
                  "
                >
                  评价得40金豆
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="orderEvaluate" v-show="1 === number">
          <a href="javascript:void(0)">
            <div class="orderAll">
              <div class="tou">
                <img src="/images/俏九州.jpeg" alt="" />
                <div class="orderInfo">
                  <p @click="again()">俏九州香辣湖南菜（龙华店）></p>
                  <div class="discounts">
                    <div>
                      <span>19减17</span>|
                      <span>68减25</span>
                    </div>
                    <div>6元无门槛红包</div>
                    <div>5折起</div>
                  </div>
                </div>
                <span class="fulfill">已完成</span>
              </div>
              <div class="center">
                <div class="one">
                  <div class="pic">
                    <img src="/images/lijiang.jpg" alt="" />
                  </div>
                  <p>新鲜生鱼片...</p>
                </div>
                <div class="two">
                  <div class="pic">
                    <img src="/images/yufeiyan.png" alt="" />
                  </div>
                  <p>红烧大草鱼</p>
                </div>
                <div class="amount">
                  <p>¥100.69</p>
                  <p>共2件</p>
                </div>
              </div>
              <div class="right">
                <button @click="again()">再来一单</button>
              </div>
            </div>
          </a>
        </div>
        <div class="orderFefund" v-show="2 === number">
          <a href="javascript:void(0)">
            <div class="orderAll">
              <div class="tou">
                <img src="/images/俏九州.jpeg" alt="" />
                <div class="orderInfo">
                  <p @click="again()">俏九州香辣湖南菜（龙华店）></p>
                  <div class="discounts">
                    <div>
                      <span>19减17</span>|
                      <span>68减25</span>
                    </div>
                    <div>6元无门槛红包</div>
                    <div>5折起</div>
                  </div>
                </div>
                <span class="fulfill">已取消</span>
              </div>
              <div class="center">
                <div class="one">
                  <div class="pic">
                    <img src="/images/lijiang.jpg" alt="" />
                  </div>
                  <p>新鲜生鱼片...</p>
                </div>
                <div class="two">
                  <div class="pic">
                    <img src="/images/yufeiyan.png" alt="" />
                  </div>
                  <p>红烧大草鱼</p>
                </div>
                <div class="amount">
                  <p>¥100.69</p>
                  <p>共2件</p>
                </div>
              </div>
              <div class="right">
                <button @click="$router.push('refund')">退款详情</button>
                <button @click="again()">再来一单</button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p class="reveal">仅显示最近一年的外卖订单</p>
      <div class="recommend">
        <div class="line"></div>
        <p>为你推荐附近精选</p>
        <div class="line"></div>
      </div>
    </section>
    <section class="recommendList">
      <ul class="nominate">
        <a
          href="javascript:void(0)"
          v-for="recom in recom"
          :key="recom.lenght"
          @click="again()"
        >
          <li>
            <img v-lazy="recom.cuisine" />
            <div class="minBox">
              <p id="titles">{{ recom.title }}</p>
              <p>
                <span class="yueshou">月售{{ recom.scPrice }}</span
                ><span class="yueshou">48分钟</span>
              </p>
              <p>
                <span>¥</span><b> {{ recom.price }} </b
                ><span>¥{{ recom.scPrice }}</span>
              </p>
              <div class="storeName">
                <p>{{ recom.comtitle }}</p>
                <span>{{ recom.grade }}分</span>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </section>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  name: "",
  props: [],
  data() {
    return {
      number: 0,
      shopList: [],
      getCom: [],
      recom: [],
      succeedList: [], //成功的数组
      failList: [], //已取消的数组
      suclength: [], //成功的长度
      failength: [], //失败的长度
      img: {
        j: "/images/俏九州.jpeg",
        a: "/images/品正品.png",
        b: "/images/大浪淘沙.jpg",
        c: "/images/御蝶坊.jpg",
        d: "/images/思密达.jpg",
        e: "/images/愿者上钩.jpg",
        f: "/images/首脑.jpg",
        g: "/images/汤鲜生.jpg",
        h: "/images/汉阳廷.jpeg",
        i: "/images/桂小厨.jpg",
      },
    };
  },
  methods: {
    change(index) {
      this.number = index;
    },
    getIndent() {
      this.axios.get("http://localhost:3000/indent").then((res) => {
        this.shopList = res.data[0].merchant;
        this.getCom = res.data[0].com;
        this.recom = res.data[0].recom;
      });
    },
    again() {
      this.$router.replace("/spxiangqing");
    },
    more() {
      this.$router.replace("/product");
    },
    getsesucceedList() {
      this.axios.get("http://localhost:3000/indent").then((res) => {
        var chang = res.data[0].com
        for(var i = 0; i< chang.length; i++){
          if(chang[i].result == '已完成'){
            this.succeedList = chang
          }
        }
        console.log(this.succeedList)
      });
    },
  },
  computed: {},
  mounted() {
    this.getIndent();
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 15,
      freeMode: true,
    });
    this.getsesucceedList();
  },
};
</script>

<style scoped src="@/assets/css/Indent.css">
</style>
