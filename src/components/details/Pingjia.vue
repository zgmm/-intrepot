<template>
  <div class="box">
    <div class="pingfen">
      <div class="pf-left">
        <h3>4.7</h3>
        <h5>综合评价</h5>
        <p>高于周边商家76.9%</p>
      </div>
      <div class="pf-right">
        <p>
          服务态度<img src="../../../public/images/xingxing.jpg" /><span>4.7</span>
        </p>
        <p>
          菜品评价<img src="../../../public/images/xingxing.jpg" /><span>4.8</span>
        </p>
        <p>送达时间<span class="min">分钟</span></p>
      </div>
    </div>
    <div class="biaoqian">
      <ul>
        <li :class="val.active?'bq-sum':'bq-snm'" v-for="(val,index) in list" :key="val.id" @click="active(index)">{{val.name}}</li>
      </ul>
    </div>
    <div class="pingjia-box">
      <div class="youtu" v-if="one">
        <div class="youtu-div">
          <div class="pl-box">
            <div class="pl-tx">
              <img src="../../../public/images/touxiang2.jpeg" />
            </div>
            <div class="pl-text">
              <p>面如霜下雪<span>2021-8-23</span></p>
              <p class="pl-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <div class="pl-img">
                <img src="../../../public/images/doufuc.jpg" /><img
                  src="../../../public/images/fuzhu.jpg"
                />
              </div>
              <p><span>豆腐串...</span><span>炸腐竹...</span></p>
            </div>
          </div>
        </div>
        <div class="youtu-div">
          <div class="pl-box">
            <div class="pl-tx">
              <img src="../../../public/images/touxiang1.jpg" />
            </div>
            <div class="pl-text">
              <p>最后的土狗<span>2021-8-22</span></p>
              <p class="pl-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <div class="pl-img">
                <img src="../../../public/images/lsf.jpg" /><img
                  src="../../../public/images/yufeiyan.png"
                />
              </div>
              <p><span>螺丝粉...</span><span>水煮鱼...</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="haoping" v-if="two">
        <ul>
          <li>
            <div class="hp-img">
              <img src="../../../public/images/touxiang1.jpg" />
            </div>
            <div class="hp-text">
              <p>最后的土狗<span>2021-8-23</span></p>
              <p class="hp-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <p class="hp-neirong">老八秘制小汉堡，即实惠又管饱,汉堡就要老八牌秘制小汉堡</p>
            </div>
          </li>
          <li>
            <div class="hp-img">
              <img src="../../../public/images/touxiang2.jpeg" />
            </div>
            <div class="hp-text">
              <p>面如霜下雪<span>2021-8-23</span></p>
              <p class="hp-xx">
                <img src="../../../public/images/wuxing.jpg" /> 按时送达
              </p>
              <p class="hp-neirong">你看这碗螺蛳粉，它宽又大又圆，这味道才正宗</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            one:false,
            two:true,
            list:[
                {name:"全部(473)",active:true},
                {name:"满意(321)",active:false},
                {name:"不满意(20)",active:false},
                {name:"有图(2)",active:false},
                {name:"味道好(47)",active:false},
                {name:"送货快(18)",active:false},
                {name:"份量足(15)",active:false},
                {name:"包装精美(15)",active:false},
                {name:"干净卫生(15)",active:false},
                {name:"食材新鲜(9)",active:false},
                {name:"服务不错(11)",active:false}
            ]
      
        }
    },
    methods: {
        active(sumber){
            for(let i=0;i<this.list.length;i++){
                this.list[i].active=false;
                this.list[sumber].active=true;
            }
            this.one=false;
            this.two=false;
            if(sumber%2==0){
                this.two=true;
            }
            if(sumber%2!=0){
                this.one=true
            }
            
        }
    },
}
</script>
<style scoped>
.box {
  background-color: #f5f5f5;
}
.pingfen {
  width: 100%;
  height: 1.7rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.pf-left {
  width: 40%;
  height: 100%;
}
.pf-left h3 {
  color: #ff6600;
  font-size: 0.45rem;
  margin: 0.2rem 0 0 0;
}
.pf-left h5 {
  font-size: 0.27rem;
  margin: 0.1rem 0 0 0;
}
.pf-left p {
  color: gray;
}
.pf-right {
  width: 60%;
  height: 100%;
  text-align: left;
}
.pf-right p {
  font-size: 0.23rem;
  margin-top: 0.15rem;
}
.pf-right p > img {
  margin: 0 0.3rem;
  vertical-align: middle;
}
.pf-right p > span {
  color: #ffa339;
  margin-left: 0.1rem;
}
.pf-right .min {
  color: gray;
  font-size: 0.2rem;
  margin-left: 0.3rem;
}
.biaoqian {
  margin-top: 0.2rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  font-size: 0.23rem;
}
.biaoqian ul {
  width: 90%;
  overflow: hidden;
  margin: 0 5%;
  padding: 0;
  padding-bottom: 0.3rem;
  padding-top: 0.1rem;
  border-bottom: 1px solid #f1f1f1;
}
.biaoqian > ul > li {
  float: left;
  padding: 0.1rem;
  margin-left: 3%;
  margin-top: 0.15rem;
  background-color: #ebf5ff;
  border-radius: 5px;
  letter-spacing: 1px;
  color: gray;
}
.biaoqian ul .bq-sum {
  background-color: #3190e8;
  color: white;
}
.bq-snm{
  background-color: #ebf5ff;
  color: gray;
}
.biaoqian .bq-no {
  background-color: #f5f5f5;
  color: #b1aaaa;
}
.pingjia-box {
  width: 100%;
  position: relative;
}
.youtu {
  width: 100%;
  overflow: hidden;
  position: absolute;
}
.youtu-div {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  padding-top: 0.2rem;
}
.pl-box {
  width: 90%;
  height: 3.7rem;
  margin-left: 5%;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.2rem;
}
.pl-box .pl-tx {
  float: left;
  width: 15%;
}
.pl-box .pl-tx > img {
  width: 100%;
  border-radius: 50%;
}
.pl-box .pl-text {
  float: right;
  width: 80%;
  height: 100%;
  text-align: left;
}
.pl-box .pl-text > p {
  margin: 0.1rem 0;
  font-size: 0.23rem;
}
.pl-box .pl-text > p:first-child {
  font-weight: bold;
}
.pl-box .pl-text > p:first-child > span {
  font-weight: 200;
  float: right;
  color: gray;
}
.pl-xx {
  color: gray;
}
.pl-xx img {
  vertical-align: middle;
}
.pl-img {
  width: 100%;
  overflow: hidden;
  margin-top: 0.15rem;
}
.pl-img img {
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.2rem;
}
.pl-box .pl-text > p:last-child {
  margin-top: 0.15rem;
}
.pl-box .pl-text > p:last-child > span {
  padding: 0.05rem;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 0.15rem;
  display: inline-block;
}
.haoping {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.haoping ul {
  width: 90%;
  margin:.2rem 5%;
  overflow: hidden;
}
.haoping ul li{
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
    margin-top: .2rem;
}
.haoping .hp-img {
  width: 15%;
  float: left;
}
.haoping .hp-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.hp-text {
  float: right;
  width: 80%;
  height: 100%;
  text-align: left;
}
.hp-text > p {
  margin: 0.1rem 0;
  font-size: 0.23rem;
}
.hp-text > p:first-child {
  font-weight: bold;
}
.hp-text > p:first-child > span {
  font-weight: 200;
  float: right;
  color: gray;
}
.hp-xx {
  color: gray;
}
.hp-xx img {
  vertical-align: middle;
}
.hp-neirong{
    background-color: #ebf5ff;
    padding:5%;
}

</style>