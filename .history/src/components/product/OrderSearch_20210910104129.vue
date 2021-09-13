<template>
  <div>
    <!-- 头部 -->
    <header>
      <span
        class="iconfont icon-AS"
        @click="$router.replace('/takeaway')"
      ></span>
      <p>{{ page }}</p>
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
</style>
