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
            this.$router.back(-1)
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
                this.paragraph = "请输入手机号/邮箱/用户名"
                this.change = true
                return;
            }else{
                this.login.forEach(item => {
                    if(item.username == this.user.username){
                        this.loginUser = item;
                        this.have = true;
                    }
                });
            }
            if(this.user.password == ''){
                this.paragraph = "请输入密码"
                this.change = true
                return;
            }else{
                if(this.have && this.user.password != this.loginUser.password ){
                    this.paragraph = "账号密码输入错误"
                    this.change = true
                    return;
                }
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
                this.$router.push({
                    path: '/home',
                    query: {
                        id:this.loginUser.id
                    }
                    // 从路由获取id
                    // this.$route.query.id
            });
                this.have = false;
                return;
            }
            this.axios.post("http://localhost:3000/login",this.user).then(res => {
                window.sessionStorage.setItem("token", res.data.id);
                this.$router.push({
                    path: '/home',
                    query: {
                        id: res.data.id  
                    }
                    // 从路由获取id
                    // this.$route.query.id
                });
            })
        },
        Change() {
            this.change = false
        }
    },
    mounted(){
        this.refreshCode();
        this.axios.get("http://localhost:3000/login").then(res => {
            this.login = res.data;
        })
        setTimeout(()=>{
            this.loadShow = false;
        },1000)
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
        height: .86rem;
        text-align: left;
        }
    header span:first-child{
        color: #fff;
        font-size: .51rem;
        position: relative;
        top: .12rem;
        left: .06rem;
    }
    header span:nth-child(2){
        position: relative;
        color: #fff;
        font-size: .37rem;
        top: 0.06rem;
        font-weight: bold;
        margin-left: 2rem;
    }
    form{
        margin-top: .34rem;
    }
    .num{
        border-bottom: 1px solid #ccc;
        line-height: .65rem;
    }
    .num input{
        width: 100%;
        height: .83rem;
        box-sizing: border-box;
        padding-left: .38rem;
        border: none;
        color: #888;
        font-size: .31rem;
        outline: none;
    }
    .pwd{
        border-bottom: 1px solid #ccc;
        line-height: .66rem;
        text-align: left;    
        margin-top: -0.15rem;
        background: #fff;
    }
    .pwd input{
        width: 75%;
        height: .83rem;
        box-sizing: border-box;
        padding-left: .38rem;
        border: none;
        color: #888;
        font-size: .31rem;
        outline: none;
    }
    .pwd .el-switch{
        position: relative;
        top: -0.05rem;
        left: .38rem;
    }
    .ver{
        background: #fff;
        text-align: left;
        position: relative;
        margin-top: -0.15rem;
    }
    .ver span:first-of-type{
        position: absolute;
        top: .14rem;
        right: .47rem;
    }
    .ver span:nth-of-type(2){
        position: absolute;
        top: .48rem;
        color: #3b95e9;
        right: .45rem;
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
        font-size: .31rem;
        outline: none;
    }
    .ver .get-code{
        display: inline-block;
        position: absolute;
        top: .09rem;
        right: 1.21rem;
    }
    .Tips{
        text-align: left;
        padding-left: .3rem;
        line-height: .34rem;
        color: #f00;
    }
    .btn button{
        width: 5.9rem;
        height: .83rem;
        line-height: .83rem;
        border-radius: .09rem;
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