<template>
  <div class="login">
    <Load v-if="loadShow"></Load>
    <header>
        <span class="iconfont icon-AS" @click="backHome()"></span>  
        <span>密码登录</span>
    </header>
    <form>
        <p class="num">
            <input type="text" placeholder="账号" v-model="user.username">
        </p>
        <p class="pwd">
            <input :type="type" placeholder="密码" v-model="user.password">
            <el-switch
            @click.native="toggle()"
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
        </p>
        <div class="ver">
            <input type="text" placeholder="验证码" maxlength="4" v-model="code">
            <div class="get-code" @click="refreshCode()">
                <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
            <span @click="refreshCode()">看不清</span>
            <span @click="refreshCode()">换一张</span>
        </div>
    </form>
    <p class="Tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="Tips">注册过的用户可凭账号密码登录</p>
    <p class="btn">
        <button @click="Sign()">登录</button>
    </p>
    <p class="reset"><router-link to="/forget">重置密码？</router-link></p>
    <Spring @close = "Change()" v-show="change" :paragraph="paragraph"></Spring>
    <footer></footer>
  </div>
</template>

<script>
import SIdentify from "@/components/sIdentify.vue";
import Spring from '../components/login/Spring.vue';
import Load from '@/components/Load.vue';
export default {
    components: { 
        SIdentify,
        Spring,
        Load,
    },
    data() {
        return {
            user: {
                username: '',
                password: '',
                profile:'/images/login.png',
                integral:1
            },
            loadShow: true,
            value: false,
            paragraph: '',
            type: "password",
            code: '',
            loginUser: {},
            identifyCode: "",    // 需要验证的验证码
            identifyCodes: "dqDAWad252363swQFDd2322aqdwdas963dUUBfdqw",
            change: false,
            login: [],
            have: false,
        }
    },
    methods:{
        // 返回我的页面
        backHome() {
            this.$router.back(-1);
        },
        // 切换密码是否显示
        toggle() {
          if(this.type == "password"){
              this.type="text"
          }else{
              this.type="password"
          }
        },
        // 生成随机验证码
        refreshCode() {
            this.identifyCode = "";
            for (let i = 0; i < 4; i++) {
                this.identifyCode += this.identifyCodes[Math.floor(Math.random() * this.identifyCodes.length)]
            }
        },
        // 对登录表单进行验证
        Sign() { 
            if(this.user.username == ''){
                this.paragraph = "请输入账号"
                this.change = true
                return;
            }else if(/^[a-zA-Z0-9]{5,11}$/.test(this.user.username)){
                this.login.forEach(item => {
                    if(item.username == this.user.username){
                        this.loginUser = item;
                        this.have = true;
                        this.integral = item.integral;
                    }
                });
            }else{
                this.paragraph = "账号应为5-11位且包含字母或者数字"
                this.change = true;
                return;
            }
            if(this.user.password == ''){
                this.paragraph = "请输入密码"
                this.change = true
                return;
            }else if(/^[a-zA-Z0-9]{8,12}$/.test(this.user.password)) {
                if(this.have && this.user.password != this.loginUser.password ){
                    this.paragraph = "账号密码输入错误或者账号已存在"
                    this.change = true
                    this.have = false;
                    return;
                }
            }else{
                this.paragraph = "密码应为8-12位且包含字母或者数字"
                this.change = true;
                return;
            }
            if(this.code == ''){
                this.paragraph = "请输入验证码"
                this.change = true
                this.refreshCode()
                return;
            }
            if(this.code.toLowerCase() != this.identifyCode.toLowerCase()){
                this.paragraph = "验证码输入错误"
                this.refreshCode()
                this.code = ''
                this.change = true
                return;
            }
            if(this.have){
                window.sessionStorage.setItem("token", this.loginUser.id);
                this.$router.push('/takeaway');
                return;
            }
            this.axios.post("/login",this.user).then(res => {
                window.sessionStorage.setItem("token", res.data.id);
                this.$router.push('/takeaway');
            })
        },
        Change() {
            this.change = false
        }
    },
    mounted(){
        this.refreshCode();
        this.axios.get("/login").then(res => {
            this.login = res.data;
        })
        setTimeout(()=>{
            this.loadShow = false;
        },500)
    }
}

</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .login{
        position: relative;
    }
    header{
        background: #3190e8;
        height: .9rem;
        }
    header span:first-child{
        color: #fff;
        font-size: .4rem;
        position: relative;
        top: .16rem;
        left: .1rem;
    }
    header span:nth-child(2){
        position: relative;
        color: #fff;
        font-size: .3rem;
        top: .09rem;
        font-weight: bold;
        margin-left: 2.16rem;
    }
    form{
        margin-top: .26rem;
    }
    .num{
        border-bottom: 1px solid #f1f1f1;
    }
    .num input{
        width: 100%;
        height: .83rem;
        line-height: .83rem;
        box-sizing: border-box;
        padding-left: .38rem;
        border: none;
        color: #888;
        font-size: .29rem;
        outline: none;
    }
    .pwd{
        border-bottom: 1px solid #f1f1f1;
        line-height: .66rem;
        background: #fff;
    }
    .pwd input{
        width: 75%;
        height: .83rem;
        box-sizing: border-box;
        padding-left: .38rem;
        border: none;
        color: #888;
        font-size: .29rem;
        outline: none;
    }
    .pwd .el-switch{
        position: relative;
        top: -0.05rem;
        left: .52rem;
    }
    .ver{
        background: #fff;
        border-bottom: 1px solid #f1f1f1;
        position: relative;
    }
    .ver span:first-of-type{
        position: absolute;
        top: .1rem;
        right: .41rem;
    }
    .ver span:nth-of-type(2){
        position: absolute;
        color: #3b95e9;
        top: .43rem;
        right: .41rem;
    }
    .ver img{
        position: relative;
        top: .14rem;
        left: .34rem;
    }
    .ver input{
        width: 55%;
        height: .83rem;
        box-sizing: border-box;
        padding-left: .38rem;
        border: none;
        color: #888;
        font-size: .29rem;
        outline: none;
    }
    .ver .get-code{
        display: inline-block;
        position: absolute;
        top: .09rem;
        right: 1.21rem;
    }
    .Tips{
        margin: .17rem 0;
        padding-left: .3rem;
        line-height: .34rem;
        color: #f00;
    }
    .btn{
        text-align: center;
    }
    .btn button{
        width: 5.9rem;
        height: .83rem;
        line-height: .83rem;
        border-radius: .07rem;
        font-size: .36rem;
        outline: none;
        border: none;
        color: #fff;
        background: #4cd964;
    }
    .reset{
        text-align: right;
        padding-right: .14rem;
        margin-top: .34rem;
    }
    .reset a{
        font-size: .24rem;
        color: #3b95e9; 
    }
    footer{
        width: 100%;
        height: .94rem;
        background: #f5f5f5;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
</style>