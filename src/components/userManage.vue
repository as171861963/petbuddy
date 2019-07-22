<template>
  <div>
    <el-table ref="multipleTable" :data="rows" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="username" label="账户" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleAgree(scope.$index, scope.row)"
          >同意</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDecline(scope.$index, scope.row)"
          >拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");

export default {
  mounted() {
    this.getUserManageAsync("门店管理员");
  },
  computed: {
    ...mapState(["rows"])
  },
  methods: {
    handleAgree(index, row) {
      this.$confirm("是否同意？此操作不可逆！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.changeUserStatusAsync({
          _id: row._id,
          newAttr: { status: "可用" },
          index
        });
      });
    },
    handleDecline(index, row) {
      this.$confirm("是否拒绝？此操作不可逆！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.changeUserStatusAsync({
          _id: row._id,
          newAttr: { status: "不可用" },
          index
        });
      });
    },
    ...mapActions(["getUserManageAsync", "changeUserStatusAsync"])
  }
};
</script>

<style scoped>
.pagi {
  margin-top: 30px;
  text-align: center;
}
</style>
