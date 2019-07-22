<template>
  <div>
    <h1 style="text-align:center">用户查看</h1>
    
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
