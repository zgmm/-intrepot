<template>
    <div class="box">
        <header>
            <div @click="$router.back(-1)" class="iconfont icon-AS"></div>
            <p>添加地址</p>
        </header>
        <form>
            <p>
                <span>联系人</span>
                <input type="text" class="inp" v-model="dizhi.name">
            </p>
            <p>
                <span></span>
                <input type="radio" name="sex" value="先生" v-model="dizhi.sex"> 先生
                <input type="radio" name="sex" value="女士" v-model="dizhi.sex"> 女士
            </p>
            <p><span>联系电话</span><input type="text" class="inp" v-model="dizhi.phone" placeholder="手机号码"></p>
            <p class="sc"><span >送餐地址</span><textarea class="txt" v-model="dizhi.address" placeholder="例：5楼303室"></textarea></p>
            <p><span>标签</span><input type="text" placeholder="公司/学校/家" class="inp" v-model="dizhi.bq"></p>
            <p><button class="btn" @click="yz" :type="type">确定</button></p>
        </form>
       <div class="ts" v-if="show">
            <div class="tishi">
            <img src="../../../public/images/zhuyi.png">
            <p>{{text}}</p>
            <p class="bnt"><button @click="yincang">确认</button></p>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dizhi:{
                name:'',
                sex:'',
                phone:'',
                address:'',
                bq:'', 
                show:true 
            },
            show:false,
            text:"",
            type:"button"
        }
    },
    methods: {
        yz(){
            this.type="button"
            if(this.dizhi.name==''){
                this.text="请输入联系人！"
                this.show=true;
                return 
            }
            if(this.dizhi.sex==''){
                this.text="请选择性别！"
                this.show=true;
                return
            }
            if(this.dizhi.phone==''){
                this.text="联系电话不能为空！"
                this.show=true;
                return
            }
            if(this.dizhi.phone.length<11){
                this.text="请输入正确的电话号码！"
                this.show=true;
                return
            }
            if(this.dizhi.address==''){
                this.text="地址不能为空！"
                this.show=true;
                return
            }
            if(this.dizhi.bq==''){
                this.text="请输入标签！"
                this.show=true;
                return
            }
            this.type="submit"
            this.axios.post("http://localhost:3000/dizhi",this.dizhi).then((res)=>{
            });
            this.$router.push('/xuandizhi');
        },
        yincang(){
            this.show=false
        }
    },
}
</script>
<style scoped>
    p{
        margin-top: .2rem;
    }
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
        top:.1rem;
        left: .2rem;
    }
    header p{
        line-height: .8rem;
        margin: 0;
    }
    form{
        margin-top: .3rem;
        font-size: .25rem;
        text-align: left;
    }
    form p.sc{
        position: relative;
    }
    form p.sc span{
        position: absolute;
        top: .2rem;
    }
    form p.sc textarea{
        margin-left: 1.6rem;
    }
    form p span{
        display: inline-block;
        width: 1.2rem;
        margin-left: .2rem;
        margin-right: .2rem;
    }
    form input.inp{
        width: 65%;
        background-color: #e8f0fe;
        border: none;
        height: .6rem;
        outline: none;
        text-indent: 10px;
    }
    form textarea.txt{
        width: 65%;
        height: 1rem;
        border: none;
        background-color: #e8f0fe;
        resize: none;
        text-indent: 10px;
    }
    form p .btn{
        width: 90%;
        height: .6rem;
        background-color: #4cd964;
        margin-left: 5%;
        border: none;
        color: white;
    }
    .ts{
        width: 100%;
        height:100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .tishi{
        width: 80%;
        height: 3rem;
        background-color: #fff;
        position: absolute;
        top: 2rem;
        left: 10%;
        z-index: 10;
        border-radius: 15px;
    }
    .tishi img{
        margin-top: .2rem;
    }
    .tishi p{
        font-size: .25rem;
        margin-top: .2rem;
    }
    .tishi p.bnt{
        width: 100%;
        position:absolute;
        bottom: 0;
    }
    .tishi p.bnt>button{
        width: 100%;
        height: 0.7rem;
        background-color: #4cd964;
        border-bottom-left-radius:15px ;
        border-bottom-right-radius:15px ;
        border: none;
        font-size: .25rem;
        color: white;
    }
</style>