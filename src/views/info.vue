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
      <el-menu-item index="/info/shopservice">
        <i class="el-icon-message"></i>
        <span slot="title">信息中心</span>
      </el-menu-item>
      <el-menu-item index="/info/addFood">
        <i class="el-icon-menu"></i>
        <span slot="title">门店管理</span>
      </el-menu-item>
      <el-menu-item index="/info/order">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/info/pets">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/info/applyShop">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index style="margin-top:400px">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
    <el-container class="container">
      <el-header class="mheader">
        <div class="headtitle">爱宠邦</div>
        <div>{{ time }}</div>
        <div>
          <i class="el-icon-user-solid"></i>{{ username }} 欢迎您
        </div>
        <div>
          <i class="gap"></i>门店管理员
        </div>
        <div>退出</div>
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
      this.username = localStorage.getItem("user_name")
  },
  data() {
    return {
      isCollapse: true,
      time:"",
      username:""
    };
  },
  methods: {
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
}
.left {
  border-right: 1px solid lightgray;
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
