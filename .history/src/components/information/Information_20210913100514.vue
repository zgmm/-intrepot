<template>
  <div>
    <header>
      <span
        class="iconfont icon-AS"
        @click="$router.back(-1)"
      ></span>
      <p>消息</p>
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
    background: #3190e8;
    color: #fff;
    z-index: 100;
    text-align: center;
}

.icon-AS {
    width: 1.3rem;
    font-size: 0.4rem;
    position: absolute;
    right: 0.3rem;
    left: 0rem;
    font-weight: normal;
}
</style>
