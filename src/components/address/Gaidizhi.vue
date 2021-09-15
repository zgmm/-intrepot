<template>
  <div class="box">
    <header>
      <div @click="$router.replace('/xuandizhi')" class="iconfont icon-AS black"></div>
      <p>修改地址</p>
    </header>
    <form>
      <p>
        <span>联系人</span>
        <input type="text" class="inp" v-model="dizhi.name" />
      </p>
      <p>
        <span></span>
        <input type="radio" name="sex" value="先生" v-model="dizhi.sex" /> 先生
        <input type="radio" name="sex" value="女士" v-model="dizhi.sex" /> 女士
      </p>
      <p>
        <span>联系电话</span
        ><input type="text" class="inp" v-model="dizhi.phone" />
      </p>
      <p class="sc">
        <span>送餐地址</span
        ><textarea class="txt" v-model="dizhi.address"></textarea>
      </p>
      <p>
        <span>标签</span
        ><input
          type="text"
          placeholder="公司/学校/家"
          class="inp"
          v-model="dizhi.bq"
        />
      </p>
      <p class="btn">
        <button class="btn-left" @click="xiugai" type="button">保存</button
        ><button class="btn-right" @click="remove" type="button">删除</button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dizhi: {
        name: "",
        sex: "",
        phone: "",
        address: "",
        bq: "",
        show: true,
      },
    };
  },
  methods: {
    xiugai() {
      this.axios
        .put("/dizhi/" + this.$route.query.id, this.dizhi)
        .then((res) => {
          this.$router.replace("/xuandizhi");
        });
    },
    remove() {
      this.$dialog
        .confirm({
          message: "确定要删除该地址吗？",
        })
        .then(() => {
          this.axios
            .delete("/dizhi/" + this.$route.query.id)
            .then((res) => {
              this.$router.replace("/xuandizhi");
            });
        })
        .catch(() => {
          this.$dialog.close();
        });
    },
  },
  mounted() {
    this.axios
      .get("/dizhi/" + this.$route.query.id)
      .then((res) => {
        this.dizhi = res.data;
      });
  },
};
</script>
<style scoped>
p {
  margin-top: 0.2rem;
}
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
  top: 0.1rem;
  left: 0.2rem;
}
header p {
  line-height: 0.8rem;
  margin: 0;
}
form {
  margin-top: 0.3rem;
  font-size: 0.25rem;
  text-align: left;
}
form p.sc {
  position: relative;
}
form p.sc span {
  position: absolute;
  top: 0.2rem;
}
form p.sc textarea {
  margin-left: 1.6rem;
}
form p span {
  display: inline-block;
  width: 1.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
form input.inp {
  width: 65%;
  background-color: #e8f0fe;
  border: none;
  height: 0.6rem;
  outline: none;
  text-indent: 10px;
}
form textarea.txt {
  width: 65%;
  height: 1rem;
  border: none;
  background-color: #e8f0fe;
  resize: none;
}
form p .btn-left {
  width: 20%;
  height: 0.6rem;
  background-color: #4cd964;
  margin-left: 20%;
  border: none;
  color: white;
  border-radius: 5px;
}
form p .btn-right {
  width: 20%;
  height: 0.6rem;
  background-color: gray;
  margin-left: 20%;
  border: none;
  color: white;
  border-radius: 5px;
}
form .btn {
  margin-top: 0.3rem;
}
</style>