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
        <input :type="type1" placeholder="旧密码" v-model="password1">
        <el-switch
          @click.native="toggle1()"
          v-model="value1"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </p>
      <p>
        <input :type="type2" placeholder="请输入新密码" v-model="password2">
        <el-switch
          @click.native="toggle2()"
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </p>
      <p>
        <input :type="type3" placeholder="请确认密码" v-model="password3">
        <el-switch
          @click.native="toggle3()"
          v-model="value3"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
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
    <p class="btn">
      <button @click="confirm()">确认修改</button>
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
              profile: "",
              integral: 1
          },
          value1: false,
          type1: "password",
          value2: false,
          type2: "password",
          value3: false,
          type3: "password",
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
      // 切换密码是否显示
      toggle1() {
        if(this.value1){
            this.type1 = "text"
        }else{
            this.type1 = "password"
        }
      },
      toggle2() {
        if(this.value2){
            this.type2 = "text"
        }else{
            this.type2 = "password"
        }
      },
      toggle3() {
        if(this.value3){
            this.type3 = "text"
        }else{
            this.type3 = "password"
        }
      },
      // 返回登录页面
      backLogin() {
        this.$router.back(-1);
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
        }else if(/^[a-zA-Z0-9]{5,8}$/.test(this.user.username)){
          this.login.forEach(item => {
              if(item.username == this.user.username){
                this.id = item.id;
                this.loginUser = item;
                this.have = true;
                this.user.profile = item.profile;
                this.user.integral = item.integral;
              }
          });
          if(!this.have){
              this.paragraph = "账号或密码输入错误"
              this.change = true
              return;
          }
          this.have = false;
        }else{
            this.paragraph = "账号应为5-8位且包含字母或者数字"
            this.change = true;
            return;
        }
        if(this.password1 == ""){
            this.paragraph = "请输入旧密码"
            this.change = true
            return;
        }else if(/^[a-zA-Z0-9]{8,12}$/.test(this.password1)){
            if(this.password1 != this.loginUser.password){
                this.paragraph = "账号或密码输入错误"
                this.change = true
                return;
            }
        }else{
            this.paragraph = "密码应为8-12位且包含字母或者数字"
            this.change = true;
            return;
        }
        if(this.password2 == ""){
            this.paragraph = "请输入新密码"
            this.change = true
            return;
        }else if(/^[a-zA-Z0-9]{8,12}$/.test(this.password2)){
          if(this.password2 == this.password1){
              this.paragraph = "新密码不能和旧密码相同"
              this.change = true
              return;
          }
        }else{
            this.paragraph = "密码应为8-12位且包含字母或者数字"
            this.change = true;
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
            this.change = true;
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
        this.axios.put("/login/"+this.id,this.user).then(res => {
            this.$router.push("/home")
        })
      }
    },
    mounted() {
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
    .forget header{
      background: #3190e8;
      height: .9rem;
      }
    .forget header span:first-child{
      color: #fff;
      font-size: .4rem;
      position: relative;
      top: .16rem;
      left: .1rem;
    }
    .forget header span:nth-child(2){
        position: relative;
        color: #fff;
        font-size: .3rem;
        top: .09rem;
        font-weight: bold;
        margin-left: 2.16rem;
    }
    .forget form{
        width: 100%;
        margin-top: .26rem;
        background: #fff;
    }
    .forget form p .el-switch{
        margin-left: 1.68rem;
    }
    .forget form p:nth-child(1){
        text-align: left;
        border-bottom: 1px solid #f1f1f1;
        font-size: .29rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(1) input{
        color: #666;
    }
    .forget form p:nth-child(2){
        text-align: left;
        border-bottom: 1px solid #f1f1f1;
        font-size: .29rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(2) input{
        color: #666;
    }
    .forget form p:nth-child(3){
        text-align: left;
        border-bottom: 1px solid #f1f1f1;
        font-size: .29rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(3) input{
        color: #666;
    }
    .forget form p:nth-child(4){
        text-align: left;
        border-bottom: 1px solid #f1f1f1;
        font-size: .29rem;
        padding: .17rem .29rem;
    }
    .forget form p:nth-child(4) input{
        color: #666;
    }
    .forget form .ver{
        position: relative;
        text-align: left;
        border-bottom: 1px solid #f1f1f1;
        font-size: .29rem;
        padding: .17rem .29rem;
    }
    .forget form .ver .get-code{
        position: absolute;
        right: 1.22rem;
        top: .05rem;
    }
    .forget form .ver span:nth-of-type(1){
        position: absolute;
        right: .36rem;
        top: .05rem;
        font-size: .24rem;
    }
    .forget form .ver span:nth-of-type(2){
        position: absolute;
        right: .36rem;
        top: .36rem;
        color: #3b95e9;
        font-size: .24rem;
    }
    .forget form .ver input{
        width: 3.1rem;
        color: #666;
    }
    .forget form input{
        outline: none;
        border: none;
    }
    .forget p.btn{
        text-align: center;
        margin-top: .4rem;
    }
    .forget p.btn button{
        background: #4cd964;
        color: #fff;
        border: none;
        border-radius: .07rem;
        outline: none;
        padding: .17rem 2.33rem;
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