<template>
  <div class="loginBox">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">爱宠帮</span>
        <el-button type="text" class="signbtn" @click="handleClick">注册门店管理员</el-button>
      </div>
      <div class="inputbox">
        <el-input
          class="formItem"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="user.username"
        />
        <el-input
          class="formItem"
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-lock"
          v-model="user.password"
        />
        <div class="formItem">
          <el-button type="primary" style="width:100%" @click="login">立即登录</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("users");

export default {
  mounted() {
    const str = this.$route.params.username;
    if (str) {
      this.user.username = str;
    }
  },
  data() {
    return {
      user:{
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleClick() {
      this.$router.push(`/signIn`);
    },
    login() {
      this.loginAsync(this.user).then(data => {
        if (data.success) {
          this.$message({
            message: "登陆成功",
            type: "success"
          });
          localStorage.setItem("user_name", data.username);
          localStorage.setItem("_id", data._id);
          if (data.identity === "平台管理员") {
            this.$router.push(`/platform`);
          } else {
            this.$router.push(`/info`);
          }
        }
      });
    },
    ...mapActions(["loginAsync"])
  }
};
</script>

<style scoped>
.loginBox{
  width:100%;
  height:650px;
  background-image: url("../assets/login_img.jpg");
  background-size: auto 650px;
  margin-top: 100px;
  position: relative;
}
.inputbox {
  padding: 0 50px 20px;
}
.formItem {
  margin-top: 20px;
}
.title {
  font-size: 24px;
  font-weight: 600;
  flex-grow: 1;
}
.clearfix {
  display: flex;
  align-items: baseline;
}
.box-card {
  position: absolute;
  right:140px;
  top:140px;
  width: 400px;
  height:320px;
}
.signbtn {
  margin-left: 10px;
}
</style>
