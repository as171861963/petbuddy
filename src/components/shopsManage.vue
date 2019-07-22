<template>
  <div>
    <el-table :data="info.rows" stripe class="mtable">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" flex class="demo-table-expand">
            <el-form-item label="营业时间">
              <span>{{formatTime(props.row.startTime)}}-{{formatTime(props.row.endTime)}}</span>
            </el-form-item>
            <el-form-item label="面积:">
              <span>{{props.row.area}}</span>
            </el-form-item>
            <el-form-item label="WIFI:">
              <span>{{props.row.wifi}}</span>
            </el-form-item>
            <el-form-item label="停车:">
              <span>{{props.row.parking}}</span>
            </el-form-item>
            <el-form-item label="门店简介:">
              <span>{{props.row.brief}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
      <el-table-column prop="type" label="门店类型" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" 
          @click="handleDelete(scope.$index, scope.row)" 
          :disabled="scope.row.status === '不可用'">关闭该店</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");

export default {
  mounted(){
    const managerId = localStorage.getItem("_id");
    this.getShopsAsync(managerId);
  },
  computed:{
    ...mapState({ info:"data" })
  },
  methods: {
    formatTime(DateString){
      const date = new Date(DateString);
      const h = date.getHours();
      const m = date.getMinutes();
      return `${h}:${m}`;
    },
    handleDelete(index,row) {
      this.$confirm("是否删除？此操作不可逆！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.changeShopStatusAsync(row)

        })
    },
    ...mapActions(["getShopsAsync","changeShopStatusAsync"])
  }
};
</script>

<style scoped>
.mtable {
  width: 100%;
  height: 498px;
  overflow-y: scroll;
}
.mtable::-webkit-scrollbar {
  display: none;
}
.demo-table-expand {
  display: flex;
  flex-wrap: wrap;
  border-bottom: none;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.el-table::before{
    height: 0;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
