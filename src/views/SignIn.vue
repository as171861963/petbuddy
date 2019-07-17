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
  mounted() {
    const str =
    this.$route.params.status === "platform" ? "平台管理员" : "门店管理员";
    this.title = str + this.title;
    this.identity = str;
  },
  data() {
    return {
      userValue: "jack",
      pwdValue: "123456",
      pwdValue2: "123456",
      phoneValue: "18182339945",
      emailValue: "137421236@qq.com",
      nameValue: "邢浩",
      title: "注册",
      identity: ""
    };
  },
  methods: {
    handleClick() {
      if (this.verifyForm()) {
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
            this.$router.push(`/login/${data.username}`)
            this.$message({
              message: "恭喜你，注册成功",
              type: "success"
            });
          }
        });
      }
    },
    verifyForm() {
      if (!/^(?![$_`])\w{2,}$/.test(this.userValue)) {
        return false;
      }
      if (!/^(?!0)\w{6,}$/.test(this.pwdValue)) {
        return false;
      }
      if (this.pwdValue !== this.pwdValue2) {
        return false;
      }
      if (!/^1[345678]\d{9,}$/.test(this.phoneValue)) {
        return false;
      }
      if (!/^\w+@\w+(.\w+)+$/.test(this.emailValue)) {
        return false;
      }
      if (!/^[\u4e00-\u9fa5]{2,6}$/.test(this.nameValue)) {
        return false;
      }
      return true;
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

