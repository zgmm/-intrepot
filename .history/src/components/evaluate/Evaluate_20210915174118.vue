<template>
  <div class="Evaluate">
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      <span>评价有礼</span>
    </header>
    <!-- 骑手部分 -->
    <div class="rider">
      <div class="top">
        <div class="pic">
          <img src="/images/waimai.png" alt="" />
        </div>
        <div class="man">
          <p>蜂鸟快送</p>
          <span>吴川 12:30~12:40准时送达</span>
        </div>
        <p class="anonymity">已对骑手匿名</p>
      </div>
      <div class="expression">
        <div class="bad" @click="change(0)" :class="{ active: 0 === number }">
          <p><img src="/images/bad.png" alt="" /></p>
          <p>非常差</p>
        </div>
        <div
          class="ordinary"
          @click="change(1)"
          :class="{ active: 1 === number }"
        >
          <p><img src="/images/ordinary.png" alt="" /></p>
          <p>一般</p>
        </div>
        <div
          class="praise"
          @click="change(2)"
          :class="{ active: 2 === number }"
        >
          <p><img src="/images/praise.png" alt="" /></p>
          <p>超赞</p>
        </div>
      </div>
      <!-- 评价选项部分 -->
      <div class="coutainer">
        <div class="bad-box box" v-show="0 === number">
          <p class="tips">抱歉影响您的体验，平台将对骑手进行管束</p>
          <ul>
            <li>
              <input type="checkbox" id="color1" name="color" />
              <label for="color1">提前点送达</label>
            </li>
            <li>
              <input type="checkbox" id="color2" name="color" />
              <label for="color2">服务态度差</label>
            </li>
            <li>
              <input type="checkbox" id="color3" name="color" />
              <label for="color3">额外索取费用</label>
            </li>
            <li>
              <input type="checkbox" id="color4" name="color" />
              <label for="color4">餐品翻洒</label>
            </li>
            <li>
              <input type="checkbox" id="color5" name="color" />
              <label for="color5">配送慢</label>
            </li>
            <li>
              <input type="checkbox" id="color6" name="color" />
              <label for="color6">未穿制服</label>
            </li>
            <li>
              <input type="checkbox" id="color7" name="color" />
              <label for="color7">食品凉了</label>
            </li>
            <li>
              <input type="checkbox" id="color8" name="color" />
              <label for="color8">未带保温箱</label>
            </li>
            <li>
              <input type="checkbox" id="color9" name="color" />
              <label for="color9">着装脏乱</label>
            </li>
            <li>
              <input type="checkbox" id="color10" name="color" />
              <label for="color10">不送上楼</label>
            </li>
            <li @click="showText"><van-icon name="edit" />文字评价</li>
          </ul>
          <textarea
            v-show="isShow"
            name=""
            id=""
            cols="34"
            rows="3"
            resize="none"
          ></textarea>
        </div>
        <div class="ordinary-box box" v-show="1 === number">
          <ul>
            <li>
              <input type="checkbox" id="color11" name="color" />
              <label for="color11">送餐快</label>
            </li>
            <li>
              <input type="checkbox" id="color12" name="color" />
              <label for="color12">餐品完好</label>
            </li>
            <li>
              <input type="checkbox" id="color13" name="color" />
              <label for="color13">服务态度好</label>
            </li>
            <li>
              <input type="checkbox" id="color14" name="color" />
              <label for="color14">准时到达</label>
            </li>
            <li>
              <input type="checkbox" id="color15" name="color" />
              <label for="color15">穿着专业</label>
            </li>
            <li>
              <input type="checkbox" id="color16" name="color" />
              <label for="color16">衣着整洁</label>
            </li>
            <li @click="showText"><van-icon name="edit" />文字评价</li>
          </ul>
          <textarea
            v-show="isShow"
            name=""
            id=""
            cols="34"
            rows="3"
            resize="none"
          ></textarea>
        </div>
        <div class="praise-box box" v-show="2 === number">
          <ul>
            <li>
              <input type="checkbox" id="color17" name="color" />
              <label for="color17">送餐快</label>
            </li>
            <li>
              <input type="checkbox" id="color18" name="color" />
              <label for="color18">餐品完好</label>
            </li>
            <li>
              <input type="checkbox" id="color19" name="color" />
              <label for="color19">服务态度好</label>
            </li>
            <li>
              <input type="checkbox" id="color20" name="color" />
              <label for="color20">准时到达</label>
            </li>
            <li>
              <input type="checkbox" id="color21" name="color" />
              <label for="color21">穿着专业</label>
            </li>
            <li>
              <input type="checkbox" id="color22" name="color" />
              <label for="color22">衣着整洁</label>
            </li>
            <li @click="showText"><van-icon name="edit" />文字评价</li>
          </ul>
          <textarea
            v-show="isShow"
            placeholder="说说原因嘛，其他顾客想知道"
            name=""
            id=""
            cols="34"
            rows="3"
            resize="none"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- 商家部分 -->
    <div class="merchant">
      <div class="hemlet">
        <div class="picbox"><img :src="setinfosrc(getinfoId)" alt="" /></div>
        <p>{{ setinfotitle(getinfoId) }}</p>
        <p><input type="radio" />匿名提交</p>
      </div>
      <div class="star">
        <van-rate
          v-model="value"
          :size="30"
          @change="onChange"
          color="#FF7618"
        />
        <p>{{ star }}</p>
        <div class="star-list">
          <div>
            <span class="bao">包装</span>
            <van-rate
              v-model="packaging"
              :size="25"
              @change="onChanges"
              color="#FF7618"
            />
            <span>{{ baozhuang }}</span>
          </div>
          <div>
            <span class="bao">味道</span>
            <van-rate
              v-model="flavour"
              :size="25"
              @change="onChanged"
              color="#FF7618"
            />
            <span>{{ weidao }}</span>
          </div>
          <textarea
            name=""
            id=""
            cols="34"
            rows="4"
            resize="none"
            placeholder="说说原因嘛，其他顾客想知道"
          ></textarea>
        </div>
      </div>
      <van-field name="uploader" label="上传照片">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
    </div>
    <div class="tijiao">
      <van-button type="primary" size="large" @click="issue()"
        >立即评价</van-button
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  computed: {},
  props: [],
  data() {
    return {
      number: 5,
      isactive: false,
      isShow: false, //显示文本域
      value: 0,
      packaging: 0,
      flavour: 0,
      star: "",
      baozhuang: "",
      weidao: "",
      starList: "",
      uploader: [], //上传照片
      getinfo: [], //获取com数据
      getinfoId: 0, //获取路由传过来的id
    };
  },
  methods: {
    /* 切换评价的内容 */
    change(index) {
      this.number = index;
    },
    showText() {
      this.isShow = !this.isShow;
    },
    onChange(value) {
      var starList = document.querySelector(".star-list");
      if (value <= 2) {
        this.star = "差评";
      } else if (this.value > 2 && this.value < 5) {
        this.star = "一般";
      } else {
        this.star = "超赞";
      }
      starList.setAttribute("style", "display:block");
    },
    onChanged(flavour) {
      if (flavour <= 2) {
        this.weidao = "差评";
      } else if (this.flavour > 2 && this.flavour < 5) {
        this.weidao = "一般";
      } else {
        this.weidao = "超赞";
      }
    },
    onChanges(packaging) {
      if (packaging <= 2) {
        this.baozhuang = "差评";
      } else if (this.packaging > 2 && this.packaging < 5) {
        this.baozhuang = "一般";
      } else {
        this.baozhuang = "超赞";
      }
    },
    issue() {
      if (this.value <= 0 || this.number >= 3) {
        this.$notify({
          message: "请完成评价后再提交！",
          color: "#fff",
          background: "#f00",
        });
      } else if (this.value >= 0 || this.number <= 2) {
        this.$dialog
          .alert({
            message: "评价成功，已获得40金豆",
            theme: "round-button",
          })
          .then(() => {
            var pingId = this.$route.query.id;
            this.axios
              .delete("http://localhost:3000/indent/" + pingId)
              .then((res) => {
                console.log(remove)
              });
            this.$router.replace("/takeaway");
          });
      }
    },
    //设置跟路由id相同的图片路径
    setinfosrc(id) {
      for (var i = 0; i < this.getinfo.length; i++) {
        // console.log(this.getinfo[i].id);
        if (id == this.getinfo[i].id) {
          return this.getinfo[i].src;
        }
      }
    },
    //设置跟路由id相同的标题
    setinfotitle(id) {
      for (var i = 0; i < this.getinfo.length; i++) {
        // console.log(this.getinfo[i].id);
        if (id == this.getinfo[i].id) {
          return this.getinfo[i].title;
        }
      }
    },
  },
  mounted() {
    //获取com数据，并把路由id值赋予getinfoid
    this.axios.get("http://localhost:3000/indent").then((res) => {
      this.getinfo = res.data[0].com;
      this.getinfoId = this.$route.query.id;
    });
    //调用跟路由id相同的图片路径
    this.setinfosrc(this.getinfoId);
    this.setinfotitle(this.getinfoId); //调用跟路由id相同的标题
  },
};
</script>

<style scoped>
.Evaluate {
  width: 100%;
  background: #f1f1f1;
}
header {
  text-align: center;
  width: 100%;
  z-index: 2;
  height: 0.9rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  color: #fff;
  position: fixed;
  background: #3190e8;
  font-weight: bold;
  top: 0;
  left: 0;
}
header span:nth-child(1) {
  position: absolute;
  left: 0.31rem;
  top: 0.03rem;
  font-size: 0.4rem;
}
.rider {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.9rem;
  padding: 0.2rem 0;
}
.top {
  width: 100%;
  height: 1.2rem;
  font-size: 0.25rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  box-sizing: border-box;
}
.pic {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
  margin-right: 0.15rem;
}
.pic img {
  width: 100%;
  background: #84baec;
  border-radius: 50%;
}
.man {
  width: 60%;
}
.man p {
  font-weight: bold;
  font-size: 0.25rem;
  color: #444;
}
.man span {
  font-size: 0.22rem;
  color: #aaa;
}
.anonymity {
  font-size: 0.21rem;
  margin-top: -0.4rem;
  color: #aaa;
}
.expression {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  border-radius: 0.1rem;
}
.expression div {
  width: 1.3rem;
  padding: 0.1rem 0;
  text-align: center;
  border-radius: 0.1rem;
  margin: 0 0.15rem;
}
.expression div img {
  width: 0.7rem;
}
.expression p {
  font-size: 0.22rem;
  line-height: 0.35rem;
}
.active {
  background: #84baec;
}
.coutainer {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.4rem;
  text-align: center;
}
.box .tips {
  color: #f00;
  line-height: 0.5rem;
}
.box ul {
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.box ul li {
  margin: 0.05rem 0.1rem;
  position: relative;
}
.box ul li:last-child {
  padding: 0.05rem 0.1rem;
  border: 1px solid #3190e8;
  color: #3190e8;
  border-radius: 5px;
}
/* 复选框样式 */
input[type="checkbox"] {
  display: none;
}

label {
  display: inline-block;
  padding: 0.05rem 0.1rem;
  text-align: center;
  border-radius: 5px;
  color: #aaa;
  border: 1px solid #aaa;
}

input[type="checkbox"]:checked {
  opacity: 0;
}

input[type="checkbox"]:checked + label {
  color: #fff;
  background-color: #84baec;
  border: 1px solid #84baec;
  border-radius: 5px;
}
textarea {
  padding: 0.1rem;
  margin-top: 0.1rem;
  border: #aaa solid 1px;
}
.merchant {
  margin: 0 auto;
  width: 95%;
  height: auto;
  margin-top: 0.25rem;
  background: #fff;
}
.hemlet {
  display: flex;
  width: 95%;
  margin: 0 auto;
  height: 1rem;
  padding: 0.1rem 0;
}
.hemlet .picbox {
  width: 0.8rem;
  height: 0.9rem;
  margin-right: 0.15rem;
}
.picbox img {
  width: 100%;
  height: 100%;
}
.hemlet p:nth-child(2) {
  width: 60%;
  font-size: 0.25rem;
  font-weight: bold;
  color: #444;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1rem;
}
.hemlet p:nth-child(3) {
  font-size: 0.21rem;
  color: #aaa;
}
.hemlet p:nth-child(3) input {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.1rem;
  vertical-align: middle;
}
.star {
  width: 100%;
  height: auto;
  margin-top: 0.25rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.1rem;
}
.star p {
  color: #ff7618;
  font-size: 0.25rem;
  line-height: 0.5rem;
  vertical-align: middle;
}
.star span {
  display: inline-block;
  margin-top: 0.1rem;
  color: #ff7618;
  vertical-align: middle;
}
.star .bao {
  color: #444;
}
.van-rate {
  margin: 0 0.15rem;
  vertical-align: middle;
}
.star-list {
  display: none;
}
.tijiao {
  position: relative;
  margin: 0 auto;
  width: 95%;
  height: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1rem;
  padding-bottom: 3rem;
}
.tijiao .van-button {
  background: #3190e8;
  border: #3190e8;
}
</style>
