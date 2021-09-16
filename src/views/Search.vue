<template>
    <div class="Search">
        <Load v-if="loadShow"></Load>
        <header>
            <span class="iconfont icon-AS" @click="Prev()"></span>  
            <span>搜索</span>
        </header>
        <p class="sub">
            <input type="text" placeholder="请输入商家或美食名称" v-model="designation">
            <span class="iconfont icon-chahao" v-show="chahao" @click="emptyText()"></span>
            <input type="button" @click="search()" value="提交">
        </p>
        <p class="empty" v-show="emptyShow">很抱歉！无搜索结果</p>
        <div class="business" v-show="businessShow">
            <h4>商家</h4>
            <ul>
                 <li v-for="s,index in searchList" :key="s.id" @click="shop(index+1)">
                    <img v-lazy="s.src" alt="">
                    <div class="content">
                        <p>{{s.title}}<span>支付</span></p>
                        <p>月售 {{s.sales}} 单</p>
                        <p>{{s.start}} 元起送 / 距离{{s.distance}}公里</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="history" v-show="historyShow">
            <h4>搜索历史</h4>
            <ul>
                <li @click="hunt(h)" v-for="(h,index) in historyList" :key="index">{{h}}<span class="iconfont icon-chahao" @click="Delete(index)"></span></li>
            </ul>
            <p @click="clear()">清空搜索历史</p>
        </div>
    </div>
</template>

<script>
import Load from '@/components/Load.vue';


export default {
    components:{
        Load
    },
    data() {
        return {
            chahao: false,
            emptyShow: false,
            loadShow: true,
            businessShow: false, 
            historyShow: false,
            searchList: [],  // 搜索列表
            historyList: [], // 历史记录列表
            designation:'',  // 输入框内容
            newSearchList: [],
            stop: false,
        }
    },
    watch:{
        designation() {
            if(this.designation==""){
                this.chahao = false;
                this.emptyShow = false;
                this.businessShow = false;
                this.axios.get("searchList").then(res => {
                this.searchList = res.data;
                    if(this.historyList==""){
                        this.historyShow = false
                    }else{
                        this.historyShow = true
                    }
                })        
            }else{
                this.chahao = true;
            }
        }   
    },
    methods: {
        shop(id) {
            this.$router.push('/spxiangqing'+ id)
        },
        // 清空搜索框
        emptyText() {
            this.designation = '';
        },
        // 返回上一个路由
        Prev() {
            this.$router.go(-1);
        },
        // 单击提交搜索文本框中的内容
        search() {        
            if(!this.designation){
                return;
            }
            if(this.historyList.indexOf(this.designation) != -1){
                return;
            }
            this.historyShow = false
            this.historyList.unshift(this.designation);  
            this.newSearchList = [];
            this.searchList.forEach(item => {
                if(item.title.indexOf(this.designation) == -1){
                    this.emptyShow = true;
                }else{
                    this.newSearchList.push(item);
                    // console.log(this.newSearchList);
                }
            });
            this.searchList = this.newSearchList;
            if(this.newSearchList.length > 0 || this.designation == ''){
                this.emptyShow = false;
                this.businessShow = true;
            }else{
                this.emptyShow = true;
                this.businessShow = false;
            }
        },
        // 清空搜索历史
        clear() {
            this.historyList = [];
            this.historyShow = false;
        },
        // 单击 X 号 删除对应的历史记录
        Delete(i) {
            this.stop = true;
            this.historyList.splice(i,1);
            if(this.historyList == ""){
                this.historyShow = false;
            }
        },
        // 单击历史记录实现搜索
        hunt(str) {
            if(this.stop){
                return this.stop = false;
            }
            this.designation = str;
            this.historyShow = false;
            this.newSearchList = [];
            this.searchList.forEach(item => {
                if(item.title.indexOf(this.designation) == -1){
                    this.emptyShow = true;
                }else if(this.designation == ''){
                    return;
                }else{
                    this.newSearchList.push(item);
                    this.searchList = this.newSearchList;
                }
            });
            if(this.newSearchList.length > 0 || this.designation == ''){
                this.emptyShow = false;
                this.businessShow = true;
            }else{
                this.emptyShow = true;
                this.businessShow = false;
            }
        }
    },
    mounted() {
        this.axios.get("/searchList").then(res => {
            this.searchList = res.data;
        })    
        setTimeout(()=>{
            this.loadShow = false;
        },500)    
    },
}
</script>

<style scoped>
    .Search {
        text-align: center;
    }
    .Search header{
        background: #3190e8;
        z-index: 1;
        position: fixed;
        width: 100%;
        height: .9rem;
        text-align: left;
    }
    .Search header span:first-child{
        color: #fff;
        font-size: .51rem;
        position: relative;
        top: .09rem;
        left: .06rem;
    }
    .Search header span:nth-child(2){
        position: relative;
        font-weight: bold;
        color: #fff;
        font-size: .3rem;
        font-weight: bold;
        margin-left: 2.38rem;
    }
    .Search p.sub{
       background: #fff;
        position: relative;
        top: .88rem;
        margin-bottom: .88rem;
        padding: .17rem;
        text-align: left;
        position: relative;
    }
    .Search p.sub span{
        padding: .14rem;
        position: absolute;
        right: 1.53rem;
        font-size: .21rem;
        color: #3190e8;
        top: .26rem;
    }
    .Search p.sub input:nth-of-type(1){
        width: 4.71rem;
        height: .62rem;
        border-radius: .05rem;
        background: #f2f2f2;
        font-size: .28rem;
        border: none;
        outline: none;
        padding-right: .55rem;
        padding-left: .17rem;
    }
    .Search .sub input:nth-of-type(2){
        font-size: .28rem;
        background: #3190e8;
        color: #fff;
        outline: none;
        border: none;
        margin-left: .11rem;
        border-radius: .09rem;
        padding: .16rem .34rem;
    }
    .Search p.empty{
        height: .69rem;
        line-height: .71rem;
        margin-top: .99rem;
        color: #333;
        font-size: .28rem;
        background: #fff;
    }
    .Search .history h4{
        text-align: left;
        line-height: .69rem;
        font-size: .24rem;
        color: #666;
        padding-left: .21rem;
    }
    .Search .history ul{
        background: #fff;
        text-align: left;
    }
    .Search .history ul li{
        padding-left: .26rem;
        line-height: .69rem;
        color: #000;
        font-size: .26rem;
        border-bottom: 1px solid #e4e4e4;
    }
    .Search .history ul li span{
        float: right;
        margin-right: .29rem;
        font-size: .21rem;
        color: #8c8c8c;
    }
    .Search .history p{
        line-height: .83rem;
        color: #3190e8;
        font-size: .28rem;
        font-weight: bold;
        background: #fff;
    }
    .Search .business h4{
        line-height: .78rem;
        font-size: .26rem;
        text-align: left;
        padding-left: .31rem;
    }
    .Search .business ul{
        background: #fff;
        text-align: left;
        margin-bottom: .72rem;
    }
    .Search .business ul li{
        border-bottom: 1px solid #e4e4e4;
        position: relative;
        height: 1.6rem;
    }
    .Search .business ul li img{
        width: .95rem;
        height: .95rem;
        left: .43rem;
        top: .31rem;
        position: absolute;
    }
    .Search .business ul li .content{
        position: absolute;
        left: 1.6rem;
        top: .14rem;
        color: #000;
    }
    .Search .business ul li .content p:nth-child(1){
        font-size: .28rem;
    }
    .Search .business ul li .content p:nth-child(1) span{
        font-size: .21rem;
        margin-left: .1rem;
        border: 1px solid #ff6000;
        color: #ff6000;
    }
    .Search .business ul li .content p:nth-child(2){
        margin-top: .09rem;
        font-size: .24rem;
    }
    .Search .business ul li .content p:nth-child(3){
        margin-top: .09rem;
        font-size: .24rem;
    }
</style>