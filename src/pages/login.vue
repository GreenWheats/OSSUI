<template>
  <div class="container">
    <div class="title">登录</div>
    <form>
      <div class="row">
        <span>用户名：</span>
        <input type="text" v-model="formMess.username">
      </div>
      <div class="row">
        <span>密码：</span>
        <input type="password" v-model="formMess.password">
      </div>
      <div class="row">
        <div class="group">
          <span>验证码：</span>
          <input type="text" v-model="formMess.code" style="width:30%;">
        </div>
        <img @click="clickImg" :src="imgUrl">
      </div>
      <div class="rember">
        <input type="checkbox" v-model="formMess.rememberMe" value="remember-me"> 记住我
      </div>
      <button type="button" @click="loginTap">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      imgUrl: '',
      formMess: {
        'username': '',
        'password': '',
        'code': '',
        'type': 'JSON',
        'rememberMe': false
      }
    }
  },
  created() {
    this.imgUrl = '/public/verification/getCode';
  },
  methods: {
    //    获取验证码
    getCode() {
      let num = Math.ceil(Math.random() * 10);//生成一个随机数（防止缓存）
      this.imgUrl = "/public/verification/getCode?" + num;
    },
    //   点击获取验证码
    clickImg() {
      this.getCode();
    },
    //  点击登录
    loginTap() {
      let formData = new FormData();
      for (let key in this.formMess) {
        if(key==='rememberMe' && this.formMess[key]===true){
          formData.append('remember-me', true);
        }else {
          formData.append(key, this.formMess[key]);
        }
      }
      let that=this;
      this.axios({
        url: '/users/webLogin',
        method: 'post',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }).then(function (e) {
        if (e.data.code === "00000") {
          localStorage.setItem("access_token", e.data.data.token);
          that.$router.push("/OSSList");
          // location.href = e.data.data.targetUrl;
        } else {
          alert(e.data.msg);
          that.getCode();
        }
      })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
}

form .row {
  position: relative;
  margin-bottom: 10px;
}

form .row span {
  width: 25%;
  display: inline-block;
  text-align: right;
}

form .row input {
  height: 24px;
  line-height: 24px;
}

form .row img {
  position: absolute;
  right: 19%;
  top: 0;
  width: 70px;
  height: 36px;
}

form button {
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
