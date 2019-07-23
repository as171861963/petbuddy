<template>
  <div>
    <!-- 顶部按钮 -->
    <div style="margin-top: 20px">
      <el-button class="iconBtn" type="primary" @click="dialogFormVisible = true;title='新增服务'">增加项目</el-button>
    </div>
    <!-- 表格 -->
    <div class="scrollcontain">
      <template v-for="(item) in shopServices">
        <el-card class="cbody" :key="item._id">
          <img :src="item.imgs" class="image" />
          <div>
            <div class="des">
              <div class="shortinfo">
                <span>{{item.name}}</span>
                <span>{{item.brief}}</span>
                <span>{{item.costTime}}分钟</span>
              </div>
              <span>{{item.type}}</span>
              <span>{{formatTime(item.startTime)}}-{{formatTime(item.endTime)}}</span>
              <div class="bottom_info">
                <span>{{item.shopId.name}}</span>
                <span>￥{{item.price}}</span>
              </div>
            </div>
            <div class="btns">
              <el-button type="text" @click="handleEdit(item)">编辑</el-button>
              <el-button type="text" @click="handleDelete(item._id)">删除</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <div class="container">
        <h1>{{title}}</h1>
        <el-form :model="form" ref="formref" label-width="100px" class="demo-ruleForm applyShop">
          <el-form-item label="服务名称" prop="name" class="input">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="服务简介" prop="brief" class="input">
            <el-input v-model="form.brief"></el-input>
          </el-form-item>
          <el-form-item label="适用范围" prop="type" class="input">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
          <el-form-item label="花费时间" prop="costTime" class="input">
            <el-input v-model="form.costTime"></el-input>
          </el-form-item>
          <el-form-item label="服务价格" prop="price" class="input">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="服务门店" prop="shopId" class="type">
            <el-select v-model="form.shopId" placeholder="服务生效的门店">
              <el-option
                :label="item.name"
                :value="item._id"
                v-for="item in shops"
                :key="item._id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="服务图片" prop="imgs" class="type">
            <el-upload
              class="upload-demo"
              drag
              action="/shops/fileupload"
              multiple
              :on-success="imgsSuccess"
              ref="mupload"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="使用时间" required class="type">
            <el-col :span="11">
              <el-form-item prop="startTime" class="time">
                <el-time-picker v-model="form.startTime" placeholder="起始时间" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item prop="endTime" class="time">
                <el-time-picker v-model="form.endTime" placeholder="结束时间" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item class="type">
            <el-button type="primary" class="subBtn" @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("services");

export default {
  async mounted() {
    const managerId = localStorage.getItem("_id");
    this.form.managerId = managerId;
    this.shops = await this.getShopsByManagerIdAsync(managerId);
    this.getServicesByManagerIdAsync(managerId);
  },
  data() {
    return {
      form: {
        name: "",
        startTime: "",
        endTime: "",
        type: "",
        brief: "",
        costTime: "",
        price: "",
        imgs: "",
        managerId: "",
        shopId: ""
      },
      shops: [],
      dialogFormVisible: false,
      title:""
    };
  },
  computed: {
    ...mapState(["shopServices"])
  },
  methods: {
    formatTime(DateString) {
      const date = new Date(DateString);
      const h = date.getHours();
      const m = date.getMinutes();
      return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
    },
    handleEdit(item) {
      Object.assign(this.form,item,{
        managerId:item.managerId._id,
        shopId:item.shopId._id,
      });
      this.dialogFormVisible = true;
      this.title='修改服务';
    },
    async handleDelete(_id) {
      const result = await this.deleteServiceByIdAsync(_id);
      if (result) {
        this.getServicesByManagerIdAsync(localStorage.getItem("_id"));
        this.$message({
          message: "删除成功",
          type: "success"
        });
      }
    },
    async handleSubmit() {
      let data = false;
      if(this.title === "新增服务"){
        data = await this.addServiceAsync(this.form);
      }
      else{
        data = await this.updateServiceAsync(this.form);
      }
      this.dialogFormVisible = false;
      this.$refs.formref.resetFields();
      this.$refs.mupload.clearFiles();
      if (data) {
        this.getServicesByManagerIdAsync(localStorage.getItem("_id"));
        this.$message({
          message: "操作成功",
          type: "success"
        });
      }
    },
    imgsSuccess({ url }) {
      this.form.imgs = url;
    },
    ...mapActions([
      "getShopsByManagerIdAsync",
      "addServiceAsync",
      "getServicesByManagerIdAsync",
      "deleteServiceByIdAsync",
      "updateServiceAsync"
    ])
  }
};
</script>

<style scoped>
.iconBtn {
  background-color: #99cccc;
  border-color: #99cccc;
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
.cbody {
  width: 240px;
  height: 350px;
  position:relative;
}
.image {
  width: 200px;
  height: 200px;
}
.des {
  display: flex;
  flex-direction: column;
}
.des > * {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shortinfo > span {
  margin-right: 10px;
}
.btns {
  position: absolute;
  right:20px;
  bottom:0;
}
.scrollcontain {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  height: 450px;
  overflow: scroll;
}
.scrollcontain > * {
  margin: 20px;
}
.scrollcontain::-webkit-scrollbar {
  display: none;
}
.container {
  width: 100%;
  height: 500px;
  margin: 20px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}
.applyShop {
  width: 600px;
}
.container::-webkit-scrollbar {
  display: none;
}
h1 {
  text-align: center;
}
.input {
  width: 500px;
  margin-left: 20px;
}
.type {
  margin-left: 20px;
}
.time {
  width: 180px;
}
.subBtn {
  width: 398px;
}
.bottom_info {
  display: flex;
  justify-content: space-between;
}
</style>