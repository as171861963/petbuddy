<template>
  <div>
    <el-table :data="message" stripe style="width: 100%;height:377px;">
      <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
      <el-table-column prop="type" label="门店类型" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="addr" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleAgree(scope.$index, scope.row)">同意</el-button>
          <el-button size="mini" type="danger" @click="handleDecline(scope.$index, scope.row)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagi">
        <el-pagination background 
    :page-size="6"
    layout="pager" 
    :total="message.length"
    @current-change="handleChange"></el-pagination>
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
        }
      ]
    };
  },
  methods: {
    handleAgree(index, row) {
      this.$confirm('是否同意？此操作不可逆！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已通过!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '！！！'
          });
        });
    },
    handleDecline() {
        this.$confirm('是否拒绝？此操作不可逆！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已拒绝!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '！！！'
          });
        });
    },
    handleChange(page){
        
    }
  }
};
</script>

<style scoped>
.pagi{
    margin-top: 30px;
    text-align: center;
}
</style>
