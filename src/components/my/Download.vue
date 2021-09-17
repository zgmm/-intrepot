<template>
  <div>
    <!-- 头部 -->
    <Header title="下载">
      <span
        class="iconfont icon-AS black"
        @click="$router.back(-1)"
        slot="black"
      ></span>
    </Header>
  </div>
</template>

<script>
import Header from '../home/Header.vue'
export default {
components:{Header},
data() {
  return {

}
},
methods:{

},
computed:{

},
mounted() {

},
}
</script>

<style lang="" scoped>
</style>