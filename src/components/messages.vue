<template>
  <div>
    <h1 style="text-align:center">门店审核</h1>
    <el-table :data="rows" stripe style="width: 100%;">
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
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions,mapState } = createNamespacedHelpers("messages")

export default {
  mounted(){
    this.getMessagesAsync();
  },
  computed:{
    ...mapState(["rows"])
  },
  methods: {
    handleAgree(index, row) {
      this.$confirm('是否同意？此操作不可逆！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
           this.changeShopStatusAsync({ _id:row._id,newAttr:{ status:"可用" },index })
        })
    },
    handleDecline(index, row) {
        this.$confirm('是否拒绝？此操作不可逆！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.changeShopStatusAsync({ _id:row._id,newAttr:{ status:"不可用" },index })
        })
    },
    ...mapActions(["getMessagesAsync","changeShopStatusAsync"])
  }
};
</script>

<style scoped>
.pagi{
    margin-top: 30px;
    text-align: center;
}
</style>
