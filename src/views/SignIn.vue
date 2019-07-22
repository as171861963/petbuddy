<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">{{ title }}</span>
    </div>
    <div class="inputbox">
      <el-input
        class="formItem"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="userValue"
      />
      <el-input
        class="formItem"
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="pwdValue"
      />
      <el-input
        class="formItem"
        type="password"
        placeholder="请再次输入密码"
        prefix-icon="el-icon-lock"
        v-model="pwdValue2"
      />
      <el-input
        class="formItem"
        placeholder="请输入手机号码"
        prefix-icon="el-icon-mobile-phone"
        v-model="phoneValue"
      />
      <el-input
        class="formItem"
        placeholder="请输入邮箱"
        prefix-icon="el-icon-message"
        v-model="emailValue"
      />
      <el-input
        class="formItem"
        placeholder="请输入姓名"
        prefix-icon="el-icon-user-solid"
        v-model="nameValue"
      />
      <div class="formItem">
        <el-button type="primary" style="width:100%" @click="handleClick">立即注册</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("users");

export default {
  data() {
    return {
      userValue: "jack",
      pwdValue: "123456",
      pwdValue2: "123456",
      phoneValue: "18182339945",
      emailValue: "137421236@qq.com",
      nameValue: "邢浩",
      title: "门店管理员注册",
      identity: "门店管理员"
    };
  },
  methods: {
    handleClick() {
      this.signInAsync({
        username: this.userValue,
        password: this.pwdValue,
        phone: this.phoneValue,
        email: this.emailValue,
        name: this.nameValue,
        identity: this.identity,
        status: "审核中"
      }).then(data => {
        if (data._id) {
          this.$message({
            message: "恭喜你，注册成功",
            type: "success"
          });
          this.$router.push(`/login/${data.username}`);
        }
      });
    },
    ...mapActions(["signInAsync"])
  }
};
</script>

<style scoped>
.inputbox {
  padding: 0 50px 20px;
}
.formItem {
  margin-top: 20px;
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.clearfix {
  display: flex;
  align-items: baseline;
}
.box-card {
  width: 400px;
  margin: 100px auto 0;
}
</style>

