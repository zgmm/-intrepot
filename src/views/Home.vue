<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate(){
    document.querySelector("body").setAttribute("style","background:#f5f5f5")
  },
}
</script>

<style scoped>
</style>