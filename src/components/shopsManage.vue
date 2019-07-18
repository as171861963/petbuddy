<template>
  <div>
    <el-table :data="message" stripe class="mtable">
      <el-table-column type="expand">
        <template slot-scope="">
          <el-form label-position="left" flex class="demo-table-expand">
            <el-form-item label="营业时间">
              <span>09:00-18:00</span>
            </el-form-item>
            <el-form-item label="状态:">
              <span>待审核</span>
            </el-form-item>
            <el-form-item label="面积:">
              <span>211</span>
            </el-form-item>
            <el-form-item label="WIFI:">
              <span>有</span>
            </el-form-item>
            <el-form-item label="停车:">
              <span>可停车</span>
            </el-form-item>
            <el-form-item label="门店简介:">
              <span> lovely home for every cute petsa lovely home for every cute petsa lovely home for every cute pets</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
      <el-table-column prop="type" label="门店类型" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagi">
      <el-pagination
        background
        :page-size="6"
        layout="pager"
        :total="message.length"
        @current-change="handleChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        },
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        },
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        },
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        },
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        },
        {
          name: "淘淘宠物店",
          type: "宠物店",
          contact: "陈涛",
          phone: "18182339945",
          addr: "成都市青羊区"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {},
    handleDelete() {
      this.$confirm("是否删除？此操作不可逆！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已删除!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "！！！"
          });
        });
    },
    handleChange(page) {}
  }
};
</script>

<style scoped>
.pagi {
  margin-top: 30px;
  text-align: center;
}
.mtable {
  width: 100%;
  height: 377px;
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
