<template>
  <div id="app">
    <Footer></Footer>
    <router-view />
  </div>
</template>

<script>
import { obj } from "../public/js/utils";
import Footer from "./components/Footer.vue";
export default {
  components: { Footer },
  mounted() {
    obj.setRem();
  },
};
</script>
<style>
div#app {
  width: 100% !important ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666666;
  font-size: 0.15rem;
}
body,html{
  width: 100%;
  height: 100%;
}
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #666666;
  font-size: .15rem;
  width: 100%;
  height: 100%;
}
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
#footer{
  text-align: center;
}
#footer a.router-link-exact-active {
  color: #1fa7ff;
}
ul,
li,
dl,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
html,
body {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
