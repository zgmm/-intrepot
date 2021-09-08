<template>
    <div class="box">
        <header>
            <div @click="fanhui">&lt;</div>
            <p>选择地址</p>
        </header>
        <div class="text">
            <ul>
                <li v-for="val in dizhi" :key="val.id" class="text-li">
                    <div v-if="val.show" @click="getID(val.id)">
                        <p class="name">{{val.name}}<span>({{val.sex}})</span><span>{{val.phone}}</span></p>
                        <p class="address">{{val.address}}</p>
                        <p class="bq"><span>{{val.bq}}</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <footer>
            <p @click="add"><img src="../../public/images/tianjia.png">新增收货地址</p>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dizhi:[]
        }
    },
    methods: {
        add(){
            this.$router.push('/tiandizhi')
        },
        fanhui(){
            this.$router.push('/zfdingdan')
        },
        getID(id){
            this.$router.push({path:'/zfdingdan',query:{id:id}});
        }
    },
    mounted() {
        this.axios.get("http://localhost:3000/dizhi").then((res)=>{
            this.dizhi=res.data;
        })
    },
}
</script>
<style scoped>
.box{
    text-align: center;
}
    header{
        width: 100%;
        height: .8rem;
        background-color: #3190e8;
        color: white;
        font-size: .3rem;
        position: relative;
    }
    header div{
        position: absolute;
        font-size: .4rem;
        height: .5rem;
        width: .4rem;
        top:.2rem;
        left: .2rem;
    }
    header p{
        line-height: .8rem;
    }
    .text{
        width: 100%;
        margin-top: .5rem;
        text-align: left;
    }
    .text ul{
        width: 90%;
        overflow: hidden;
        padding: 0;
        margin-left: 5%;
        border: 1px solid #d3d2d2;
        box-shadow: 1px 1px 5px gray;
    }
    .text-li{
        border-bottom: 1px solid #e0dfdf;
    }
    .text-li>div{
        width: 90%;
        height: 100%;
        margin-left: 5%;
    }
    .text .name{
        font-weight: bold;
        font-size: .3rem;
        margin: .2rem 0 0 0;
    }
    .text .name>span{
        color: gray;
        margin-left: .2rem;
        font-size: .22rem;
        font-weight: 100;
    }
    .text .bq{
        margin: .1rem 0;
    }
    .text .bq>span{
        border: 1px solid green;
        background-color: greenyellow;
        padding:.02rem .04rem;
    }
    .text .address{
        font-size: .24rem;
        color: gray;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        font-size: .3rem;
        height: 1rem;
        color: #1296db;
        border-top:1px solid gray ;
    }
    footer p{
        margin: 0;
        margin-top: .2rem;
    }
    footer p img{
        vertical-align: middle;
        margin-right: .2rem;
    }
</style>