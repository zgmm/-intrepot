<template>
    
  <div class="header">
    <slot name="black"></slot>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["title"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.header {
  text-align: center;
  width: 100%;
  color: #fff;
  padding: 0.15rem;
  position: fixed;
  font-size: 0.3rem;
  box-sizing: border-box;
  background-color: #3190e8;
  box-sizing: border-box;
  top:0;
  left:0;
}
.black{
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.4rem;
}
</style>