<template>
  <div class="entire">
    <div>
      <el-button
        type="primary"
        icon="el-icon-edit"
        style="  background-color:#99cccc;border-color: #99cccc;"
      >修改订单</el-button>
      <el-button
        type="primary"
        icon="el-icon-delete"
        style="  background-color:#99cccc;border-color: #99cccc;"
      >删除订单</el-button>
    </div>
    <div class="state">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="expand" width="55">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="购买商店">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="购买客户">
                <span>{{ props.row.client }}</span>
              </el-form-item>
              <el-form-item label="付款状态">
                <span>{{ props.row.payment }}</span>
              </el-form-item>
              <el-form-item label="发货状态">
                <span>{{ props.row.state }}</span>
              </el-form-item>
              <el-form-item label="订单号">
                <span>{{ props.row.id }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单号" width="200">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="购买类型" width="200"></el-table-column>
        <el-table-column prop="payment" label="付款状态" width="200"></el-table-column>
        <el-table-column prop="state" label="发货状态" width="200"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          client: "多多",
          name: "中华田园犬",
          payment: "已付款",
          state: "已发货",
          shop: "王小虎夫妻店",
          id: "1033124984651653"
        },
        {
          client: "多多",
          name: "中华田园犬",
          payment: "已付款",
          state: "已发货",
          shop: "王小虎夫妻店",
          id: "10333"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
.checkbox {
  margin-left: 60px;
}
.state {
  margin-top: 20px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid gray; */
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>


