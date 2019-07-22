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
      <div class="top">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
          </template>
          <el-menu-item-group>
            <span slot="title" style="color:white;font-size:16px;">管理</span>
            <el-menu-item index="/info/shopManage" style="font-size:12px;">门店</el-menu-item>
            <el-menu-item index="/info/pets" style="font-size:12px;">宠物</el-menu-item>
            <el-menu-item index="/info/addFood" style="font-size:12px;">食品</el-menu-item>
            <!-- <el-menu-item index="1-2">用品</el-menu-item> -->
            <el-menu-item index="/info/shopservice" style="font-size:12px;">服务</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-order"></i>
          </template>
          <el-menu-item-group>
            <span slot="title" style="color:white;font-size:16px;">订单</span>
            <el-menu-item index="/info/order" style="font-size:12px;">列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-orange"></i>
          </template>
          <el-menu-item-group>
            <span slot="title" style="color:white;font-size:16px;">活动</span>
            <el-menu-item index style="font-size:12px;">列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>

      <el-submenu index="4" style>
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
          <i class="gap"></i>门店管理员
        </div>
        <el-button
          @click="addApplyShop"
          type="primary"
          style="margin-left:10px;font-size:12px;background-color:#99cccc;border-color: #99cccc;"
          icon="el-icon-plus"
        >门店申请</el-button>
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
    addApplyShop() {
      location.hash = "/info/applyShop";
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
  height: 744px;
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
.top {
  flex-grow: 1;
}
.el-icon-arrow-right:before {
  content: none;
}
</style>
