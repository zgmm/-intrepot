<template>
  <div>
    <header>
      <span class="iconfont icon-AS" @click="$router.back(-1)"></span>
      消息
    </header>
  </div>
</template>


<script>
export default {
  name: "",
  computed: {},
  props: [],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.3rem;
  font-weight: bold;
  color: #fff;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #3190e8;
}
.icon-AS {
  display: inline-block;
  width: 15%;
  font-size: 0.4rem;
  font-weight: normal;
  text-align: center;
}
</style>
