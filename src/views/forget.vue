<template>
  <div class="forget">
    <Load v-if="loadShow"></Load>
    <header>
        <span class="iconfont icon-AS" @click="backLogin()"></span>  
        <span>重置密码</span>
    </header>
    <form>
      <p>
        <input type="text" placeholder="账号" v-model="user.username">
      </p>
      <p>
        <input type="password" placeholder="旧密码" v-model="password1">
      </p>
      <p>
        <input type="password" placeholder="请输入新密码" v-model="password2">
      </p>
      <p>
        <input type="password" placeholder="请确认密码" v-model="password3">
      </p>
      <div class="ver">
        <input type="text" maxlength="4" placeholder="验证码" v-model="code">
        <div class="get-code" @click="refreshCode()">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
        <span @click="refreshCode()">看不清</span>
        <span @click="refreshCode()">换一张</span>
      </div>
    </form>
    <p>
      <button class="btn" @click="confirm()">确认修改</button>
    </p>
    <Spring  @close="Change()" v-show="change" :paragraph="paragraph"></Spring>
    <footer></footer>
  </div>
</template>

<script>
import SIdentify from "@/components/sIdentify.vue";
import Spring from "../components/login/Spring.vue";
import Load from '@/components/Load.vue';

export default {
    components: { 
      SIdentify,
      Spring,
      Load,
    },
    data() {
      return {
          login: [],
          user: {
              username: '',
              password: '',
          },
          loadShow: true,
          a:Boolean,
          id: '',
          password1: '',
          password2: '',
          password3: '',
          loginUser: {},
          code: '',
          id: '',
          change: false,  // 弹框是否显示
          paragraph: '',   //需要向子组件传的值
          identifyCode: "",    // 需要验证的验证码
          identifyCodes: "QDWD361658JQaqdajdiqw5122569894dncj",  
          have: false,
      }
    },
    methods: {
      // 返回登录页面
      backLogin() {
        this.$router.push('/login')
      },
      // 生成随机验证码
      refreshCode() {
        this.identifyCode = "";
        for (let i = 0; i < 4; i++) {
            this.identifyCode += this.identifyCodes[Math.floor(Math.random() * this.identifyCodes.length)]
        }
      },
      // 单击确定按钮关闭弹框
      Change() {
        this.change = false;
      },
      // 表单验证
      confirm() {
        if(this.user.username == ""){
            this.paragraph = "请输入账号"
            this.change = true
            return;
        }else{
          this.login.forEach(item => {
              if(item.username == this.user.username){
                this.id = item.id;
                this.loginUser = item;
                this.have = true;
              }
          });
          if(!this.have){
              this.paragraph = "账号不存在"
              this.change = true
              return;
          }
          this.have = false;
        }
        if(this.password1 == ""){
            this.paragraph = "请输入旧密码"
            this.change = true
            return;
        }else{
            if(this.password1 != this.loginUser.password){
                this.paragraph = "账号密码输入错误"
                this.change = true
                return;
            }
        }
        if(this.password2 == ""){
            this.paragraph = "请输入新密码"
            this.change = true
            return;
        }
        if(this.password2 == this.password1){
            this.paragraph = "新密码不能和旧密码相同"
            this.change = true
            return;
        }
        if(this.password3 == ""){
            this.paragraph = "请输入确认密码"
            this.change = true
            return;
        }
        if(this.password3 != this.password2){
            this.paragraph = "两次输入的密码不一致"
            this.change = true
            return;
        }
        if(this.code == ''){
            this.paragraph = "请输验证码"
            this.change = true
            return;
        }
        if(this.code.toLowerCase() != this.identifyCode.toLowerCase()){
            this.paragraph = "验证码输入错误"
            this.refreshCode();    
            this.code = ''     
            this.change = true
            return;
        }
        this.user.password = this.password3;
        this.axios.put("http://localhost:3000/login/"+this.id,this.user).then(res => {
            this.$router.push("/login")
        })
      }
    },
    mounted() {
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
    .forget header{
        background: #3190e8;
        height: .86rem;
        text-align: left;
    }
    .forget header span:first-child{
        color: #fff;
        font-size: .51rem;
        position: relative;
        top: .12rem;
        left: .06rem;
    }
    .forget header span:nth-child(2){
        position: relative;
        color: #fff;
        font-size: .37rem;
        top: 0.06rem;
        font-weight: bold;
        margin-left: 2rem;
    }
    .forget form{
        width: 100%;
        margin-top: .34rem;
        background: #fff;
    }
    .forget form p:nth-child(1){
        text-align: left;
        border-bottom: 1px solid #dcdcdc;
        font-size: .31rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(1) input{
        color: #666;
    }
    .forget form p:nth-child(2){
        text-align: left;
        border-bottom: 1px solid #dcdcdc;
        font-size: .31rem;
        margin-top: -0.26rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(2) input{
        color: #666;
    }
    .forget form p:nth-child(3){
        text-align: left;
        border-bottom: 1px solid #dcdcdc;
        font-size: .31rem;
        margin-top: -0.26rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(3) input{
        color: #666;
    }
    .forget form p:nth-child(4){
        text-align: left;
        border-bottom: 1px solid #dcdcdc;
        font-size: .31rem;
        margin-top: -0.26rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(4) input{
        color: #666;
    }
    .forget form .ver{
        position: relative;
        text-align: left;
        border-bottom: 1px solid #dcdcdc;
        font-size: .31rem;
        margin-top: -0.26rem;
        padding: .17rem .29rem;
    }
    .forget form .ver .get-code{
        position: absolute;
        right: 71px;
        top: 0;
    }
    .forget form .ver span:nth-of-type(1){
        position: absolute;
        right: 21px;
        top: 1px;
        font-size: 14px;
    }
    .forget form .ver span:nth-of-type(2){
        position: absolute;
        right: 21px;
        top: 20px;
        color: #3b95e9;
        font-size: 14px;
    }
    .forget form .ver input{
      width: 3.1rem;
      color: #666;
    }
    .forget form input{
        outline: none;
        border: none;
    }
    .forget p .btn{
        margin-top: .17rem;
        background: #4cd964;
        color: #fff;
        border: none;
        border-radius: .09rem;
        outline: none;
        padding: .22rem 2.33rem;
        font-size: .31rem;
    }
    .forget footer{
        width: 100%;
        height: .94rem;
        background: #f5f5f5;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
</style>