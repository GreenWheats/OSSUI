<template>
  <div class="container">
    <div class="title">登录成功</div>
    <button type="button" @click="logoutTap">登出</button>

  </div>
</template>

<script>
export default {
  name: "logout",
  created() {
  },
  methods: {
    //  点击登出
    logoutTap() {
      let that=this;
      localStorage.clear();
      window.document.cookie = null;
      that.axios.post("/users/webLogout");
      that.$router.push("/");
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  width: 30%;
  height: 30px;
  line-height: 30px;
  margin: 50px auto 0;
  background-color: cornflowerblue;
  border: none;
  color: #ffffff;
  border-radius: 6px;

}
</style>
