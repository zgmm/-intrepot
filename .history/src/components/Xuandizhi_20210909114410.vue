<template>
  <div class="box">
    <header>
      <div @click="$router.back(-1)">&lt;</div>
      <p>选择地址</p>
    </header>
    <div class="text">
      <ul>
        <li v-for="val in dizhi" :key="val.id" class="text-li">
          <div v-if="val.show">
            <p class="name">
              {{ val.name }}<span>({{ val.sex }})</span
              ><span>{{ val.phone }}</span>
            </p>
            <p class="address">{{ val.address }}</p>
            <p class="bq">
              <span>{{ val.bq }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="daiti" v-if="show">
      <img src="../../public/images/zanwushuju.png" />暂无地址...
    </div>
    <footer>
      <p @click="add">
        <img src="../../public/images/tianjia.png" />新增收货地址
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dizhi: [],
      active: false,
      show: true,
    };
  },
  methods: {
    add() {
      this.$router.push("/tiandizhi");
    },
    methods: {
      add() {
        this.$router.replace("/tiandizhi");
      },
    },
    getID(id) {
      this.$router.push({ path: "/zfdingdan", query: { id: id } });
    },
  },
  mounted() {
    this.axios.get("http://localhost:3000/dizhi").then((res) => {
      this.dizhi = res.data;
      console.log(this.dizhi);
      if (this.dizhi.length > 1) {
        this.show = false;
        this.active = true;
      } else {
        this.show = true;
        this.active = false;
      }
    });
  },
};
</script>
<style scoped>
.box {
  text-align: center;
}
header {
  width: 100%;
  height: 0.8rem;
  background-color: #3190e8;
  color: white;
  font-size: 0.3rem;
  position: relative;
}
header div {
  position: absolute;
  font-size: 0.4rem;
  height: 0.5rem;
  width: 0.4rem;
  top: 0.2rem;
  left: 0.2rem;
}
header p {
  line-height: 0.8rem;
}
.text {
  width: 100%;
  margin-top: 0.5rem;
  text-align: left;
}
.text ul {
  width: 90%;
  overflow: hidden;
  padding: 0;
  margin-left: 5%;
  border: 1px solid #d3d2d2;
  box-shadow: 1px 1px 5px gray;
}
.text-li {
  border-bottom: 1px solid #e0dfdf;
}
.text-li > div {
  width: 90%;
  height: 100%;
  margin-left: 5%;
}
.text .name {
  font-weight: bold;
  font-size: 0.3rem;
  margin: 0.2rem 0 0 0;
}
.text .name > span {
  color: gray;
  margin-left: 0.2rem;
  font-size: 0.22rem;
  font-weight: 100;
}
.text .bq {
  margin: 0.1rem 0;
}
.text .bq > span {
  border: 1px solid green;
  background-color: greenyellow;
  padding: 0.02rem 0.04rem;
}
.text .address {
  font-size: 0.24rem;
  color: gray;
}
.daiti {
  width: 100%;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  font-size: 0.27rem;
}
.daiti img {
  vertical-align: middle;
  margin-right: 0.1rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  font-size: 0.3rem;
  height: 1rem;
  color: #1296db;
  border-top: 1px solid gray;
}
footer p {
  margin: 0;
  margin-top: 0.2rem;
}
footer p img {
  vertical-align: middle;
  margin-right: 0.2rem;
}
</style>