<template>
    <div class="Takeaway">
        <Load v-if="loadShow"></Load>
        <header>
            <span class="iconfont icon-sousou" @click="goSearch()"></span>
            <span>深圳市</span>
            <span class="iconfont icon-mine-active" @click="goHome()"></span>
        </header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul> 
                        <li v-for="item in taHead1" :key="item.id" @click="Tahead1(item.id)">
                            <img :src="item.cuisine" alt="">
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul> 
                        <li v-for="item in taHead2" :key="item.id" @click="Tahead2(item.id)">
                            <img :src="item.cuisine" alt="">
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="business">
            <p class="nearby">
                <span class="iconfont icon-shangjia"></span>
                <span>附近商家</span>
            </p>
            <ul>
                <li v-for="t in tasection" :key="t.id" @click="Business(t.id)">
                    <img :src="t.src" alt="">
                    <div class="brand">
                        <p>
                            <span>品牌</span>
                            <span>{{t.title}}</span> 
                            <span>保 准 票</span>    
                        </p>
                        <p>
                            <Star :score="t.score" ></Star>
                            <span>{{t.score}}</span>
                        </p>
                        <p>
                            <span>月售{{t.sales}}单</span>
                            <span>蜂鸟专送</span>
                            <span>准时达</span>
                        </p>
                        <p>
                            <span>¥{{t.Start}}起送 / 配送费约¥{{t.Distribution}}</span>
                            <span>
                                <span>{{t.distance}}公里 / </span>
                                <span>{{t.minites | Time}}</span>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.min.js'
import Star from '../components/Takeaway/Star.vue'
import Swiper from 'swiper'
import Load from '@/components/Load.vue';

export default {
    components:{
        Star,
        Load,
    },
    filters:{
        Time(value) {
            if(value<60){
                return value + '分钟'
            }
            if(value >= 60){
                let hour = Math.floor(value / 60);
                value -= hour * 60;
                if(value == 0){
                    return hour + "小时"
                }else{
                    return hour + "小时" + value + "分钟";
                }
            }
        }
    },
    data() {
        return {
            taHead1: [],
            taHead2: [],
            loadShow: true,
            // a: Number,
            tasection: [],
        }
    },
    methods: {
        goSearch() {
            this.$router.push("/search")
        },
        goHome() {
            this.$router.push("/home")
        },
        Tahead1(id) {
            this.$router.push({
                path: '/food',
                query: {
                    id:id
                }
            })
        },
        // 从路由获取id
        // this.$route.query.id
        Tahead2(id) {
             this.$router.push({
                path: '/food',
                query: {
                    id:id
                }
            })
        },
        Business(id) {
             this.$router.push({
                path: '/shop',
                query: {
                    id:id
                }
            })
        }
    },
    mounted() {
        this.axios.get("http://localhost:3000/takeaway").then(res => {
            this.taHead1 = res.data[0].taHead1;
            this.taHead2 = res.data[0].taHead2;
            this.tasection = res.data[0].tasection
        })
        new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            // loop: true,
        })
        setTimeout(()=>{
            this.loadShow = false;
        },1000)    
    }
}
</script>

<style scoped>
    .Takeaway header{
        width: 100%;
        z-index: 2;
        height: .86rem;
        font-size: .34rem;
        line-height: .86rem;
        color: #fff;
        position: fixed;
        background: #3190e8;
    }
    .Takeaway header span:nth-child(1){
        position: absolute;
        left: .31rem;
        top: .03rem;
        font-size: .43rem;
    }
    .Takeaway header span:nth-child(3){
        position: absolute;
        right: .31rem;
        top: .03rem;
        font-size: .43rem;
    }
    .Takeaway .swiper-container{
        position: relative;
        top: .86rem;
        background: #fff;
        border-bottom: 1px solid #d8d8d8;
        height: 3.19rem;       
    }
    .Takeaway .swiper-container .swiper-wrapper .swiper-slide ul{
        overflow: hidden;
        width: 6.26rem;
        margin-left: -0.55rem;
    }
    .Takeaway .swiper-container .swiper-wrapper .swiper-slide ul li{
        width: .86rem;
        float: left;
        margin: 0 .34rem;
    }
    .Takeaway .swiper-container .swiper-wrapper .swiper-slide ul li img{
        width: .78rem;
    }
    .Takeaway .business{
        margin-top: 1.03rem;
        border-top: 1px solid #d8d8d8;
        background: #fff;
    }
    .Takeaway .business ul {
        margin-bottom: .72rem;
    }
    .Takeaway .business p.nearby{
        text-align: left;
        margin-top: .17rem;
        padding-left: .24rem;
        color: #999;
    }
    .Takeaway .business p.nearby span:nth-child(1){
        font-size: .34rem;
        margin-right: .17rem;
    }
    .Takeaway .business p.nearby span:nth-child(2){
        font-size: .26rem;
        position: relative;
        top: -1px;
    }
    .Takeaway .business ul li {
        position: relative;
        width: 6.41rem;
        margin-left: -0.69rem;
        height: 1.81rem;
        padding-top: .34rem;
        border-bottom: 1px solid #ebebeb;
    }
    .Takeaway .business ul li img{
        width: 1.12rem;
        height: 1.12rem;
        left: .1rem;
        top: .48rem;
        position: absolute;
    }
    .Takeaway .business ul li .brand{
        position: absolute;
        right: .48rem;
        top: .16rem;
        text-align: left;
    }
    .Takeaway .business ul li .brand p:nth-child(1){
        width: 4.83rem;
        position: relative;
        left: .26rem;
    }
    .Takeaway .business ul li .brand p:nth-child(1) span:nth-child(1){
        background: #ffd930;
        font-weight: bold;
        color: #000;
        padding: .03rem .09rem;
        border-radius: .03rem;
    }
    .Takeaway .business ul li .brand p:nth-child(1) span:nth-child(2){
        margin-left: .09rem;
        font-size: .26rem;
        font-weight: bold;
        color: #000;
    }
    .Takeaway .business ul li .brand p:nth-child(1) span:nth-child(3){
        float: right;
        margin-top: .05rem;
    } 
    .Takeaway .business ul li .brand p:nth-child(2){
        position: relative;
        left: .28rem;
        margin-top: .21rem;   
        padding-left: 1.93rem;
    }
    .Takeaway .business ul li .brand p:nth-child(2) #star{
        display: inline-block;
        position: absolute;
        left: -0.05rem;
        top: -0.07rem;
    }
    .Takeaway .business ul li .brand p:nth-child(2)>span{
        color: #f00;
        font-size: .28rem;
        position: relative;
        top: -1px;
        left: 0;
    }
    .Takeaway .business ul li .brand p:nth-child(3){
        padding-left: .26rem;
    }
    .Takeaway .business ul li .brand p:nth-child(3) span:nth-child(2){
        position: relative;
        left: 2.1rem;
        color: #fff;
        padding: .03rem;
        background: #3190e8;
    }
    .Takeaway .business ul li .brand p:nth-child(3) span:nth-child(3){
        position: relative;
        left: 2.24rem;
        color: #3190e8;
        background: #fff;
        padding: .03rem;
        border: 1px solid #3190e8;
    }
    .Takeaway .business ul li .brand p:nth-child(4){
        padding-left: .26rem;
        position: relative;
    }
    .Takeaway .business ul li .brand p:nth-child(4)>span:nth-child(2){
        position: absolute;
        right: -0.21rem;
    }
    .Takeaway .business ul li .brand p:nth-child(4)>span:nth-child(2) span:nth-child(1){
        color: #999;
    }
    .Takeaway .business ul li .brand p:nth-child(4)>span:nth-child(2) span:nth-child(2){
        color: #3190e8;
    }
</style>