<template>
  <div>
    <Header title="余额说明">
      <span
        class="iconfont icon-AS black"
        slot="black"
        @click="$router.back(-1)"
      ></span>
    </Header>
    <section class="sec">
      <h2>Q1:使用余额的条件</h2>
      <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      <h2>Q2:余额怎么用？</h2>
      <p>
        余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以支持在线支付的商家中进行消费。提现功能将于XXXX年XX月XX日00:00全面开放
      </p>
      <h2>Q3:我要如何提现</h2>
      <p>
        为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号，选择开户行，并验证已绑定饿了么账户的手机号。每日只能
        提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。
      </p>
      <h2>Q4:为什么会提现失败？</h2>
      <p>
        可能原因有：您的姓名，开户行，银行卡号等信息不匹配；您当日的提现次数和金额超过限额；您的账户存在异常，被风控拦截。
      </p>
    </section>
  </div>
</template>

<script>
import Header from "../home/Header.vue";

export default {
  components: { Header },
};
</script>

<style scoped>
.sec{
  font-family:'Courier New', Courier, monospace;
  margin:.75rem .2rem;
}
.sec h2{
  font-size: .35rem;
  margin: .1rem 0;
}
.sec p{
  font-size: .25rem;
  line-height: .4rem;
}
</style>