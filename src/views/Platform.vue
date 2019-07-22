<template>
  <div class="outside">
    <el-menu
      class="el-menu-vertical-demo left"
      :collapse="isCollapse"
      background-color="#99CCCC"
      text-color="#fff"
      active-text-color="#FFCC99"
      router
    >
      <div style="flex-grow:1">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
          </template>
          <el-menu-item-group>
            <span slot="title" style="color:white;font-size:16px;">信息管理</span>
            <el-menu-item index="/platform/message" style="font-size:12px;">信息中心</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
          </template>
          <el-menu-item-group>
            <span slot="title" style="color:white;font-size:16px;">用户管理</span>
            <el-menu-item index="/platform/userManage" style="font-size:12px;">用户信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
        </template>
        <el-menu-item-group>
          <span slot="title" style="color:white;font-size:16px;">设置</span>
          <el-menu-item index style="font-size:12px;" @click="cancellation">注销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <el-container class="container">
      <el-header class="mheader">
        <div class="headtitle">爱宠邦</div>
        <div>{{ time }}</div>
        <div>
          <i class="el-icon-user-solid"></i>
          {{ username }} 欢迎您
        </div>
        <div>
          <i class="gap"></i>平台管理员
        </div>
      </el-header>
      <el-container class="right_side">
        <el-main class="centerbody">
          <router-view />
        </el-main>
      </el-container>
      <el-footer class="footer">基于Vue的宠物平台后台管理系统</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  mounted() {
    this.time = this.formattime(new Date());
    this.username = localStorage.getItem("user_name");
  },
  data() {
    return {
      isCollapse: true,
      time: "",
      username: ""
    };
  },
  methods: {
    cancellation() {
      localStorage.clear();
      location.hash = "/";
    },
    formattime(date) {
      const y = date.getFullYear();
      const mm = date.getMonth() + 1;
      const d = date.getDate();
      const dd = date.getDay();
      return `${y}-${mm}-${d}  星期${dd}`;
    }
  }
};
</script>

<style scoped>
i {
  color: inherit;
}
.outside {
  display: flex;
  height: 700px;
}
.left {
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
}
.mheader {
  border: 1px solid #eee;
  border-bottom: none;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.mheader > div {
  margin-left: 20px;
}
.right_side {
  border: 1px solid #eee;
  border-left: none;
}
.headtitle {
  font-size: 24px;
  flex-grow: 1;
  color: #99cccc;
}
.gap {
  padding-left: 20px;
  border-left: 1px solid lightgrey;
  display: inline-block;
  height: 12px;
}
.footer {
  border: 1px solid #eee;
  border-top: none;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgb(60, 60, 60);
}
.centerbody {
  padding: 20px;
}
</style>
