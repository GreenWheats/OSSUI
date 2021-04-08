<template>
    <div class="container">
        <div class="title">登录</div>
      <form bindSubmit="submitLogin">
        用户名：<input type="text" name="username" v-model="userName" id="username"/>
        <br/>
        密 码：<input type="password" name="password" v-model="passWord" id="password"/>
        <br/>
        验证码：<input type="text" name="code" v-model="code" id="code"/>
        <br/>
<!--        <input type="text" name="remenberMe" id="remenberMe" value="1"/>-->
        <!--        <input type="submit" value="login" />-->
        <img @click="getCode" src="/public/verification/getCode" width="130px" height="48px"/>
        <button type="button" form-type="submit">登录</button>
        <input name="remember-me" type="checkbox" id="remember-me" value="true"/>记住我<br/>
      </form>
      <a href="/register.html">去注册</a>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function() {
          return {
            userName:'',
            passWord:'',
            code:''
          }
        },
        methods:{
          // 点击获取验证码
          getCode:function (){
            // const src = $(this).attr("src");
            // $(this).attr("src", src + "?t=" + new Date().getTime())
          },
          // 点击登录按钮
          submitLogin:function (e) {
            // eslint-disable-next-line no-debugger
            debugger
            console.log(e)
          }
        }
      // var data = {}
      // data.username = $("#username").val();
      // data.password = $("#password").val();
      // data.code = $("#code").val();
      // data.remenberMe = $("#remenberMe").val();
      // data["remember-me"] = $("#remember-me").val();
      // data.type = "JSON";
      // $.ajax({
      //   type: "POST",
      //   url: "/users/weblogin",
      //   data: data,
      //   success: function (e) {
      //     console.log(e)
      //     if (e.code === "00000") {
      //       localStorage.setItem("access_token", e.data.token);
      //       // $("searchResult").html(data.msg);
      //       location.href = e.data.targetUrl;
      //       // location.href="index.html";
      //     } else {
      //       alert(e.msg);
      //       ODO 下面的代码不正确，需要在这个地方刷新验证码
      //       $("#verImg").click(function updateImgCode() {
      //         const src = $(this).attr("src");
      //         $(this).attr("src", src + "?t=" + new Date().getTime());
      //       })
      //     }
      //   },
      // });
    // });
        // }
    }
</script>

<style scoped>

</style>
