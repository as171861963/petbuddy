<template>
  <div class="container">
    <h1>创建店铺</h1>
    <el-form :model="newShop" ref="newShop" label-width="100px" class="demo-ruleForm applyShop">
      <el-form-item label="店铺名称" prop="name" class="input">
        <el-input v-model="newShop.name"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contact" class="input">
        <el-input v-model="newShop.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone" class="input">
        <el-input v-model="newShop.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址" prop="addr" class="input">
        <el-input v-model="newShop.addr"></el-input>
      </el-form-item>
      <el-form-item label="店铺类型" prop="type" class="type">
        <el-select v-model="newShop.type" placeholder="请选店铺类型">
          <el-option label="食物" value="食物"></el-option>
          <el-option label="医疗" value="医疗"></el-option>
          <el-option label="娱乐" value="娱乐"></el-option>
          <el-option label="美容" value="美容"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="营业执照" prop="license" class="type">
        <el-upload
          class="upload-demo"
          drag
          action="/shops/fileupload"
          :on-success="licenseSuccess"
          ref="licenseRef"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="店铺照片" prop="imgs" class="type">
        <el-upload
          class="upload-demo"
          drag
          action="/shops/fileupload"
          ref="imgRef"
          multiple
          :on-success="imgsSuccess"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="营业时间" required class="type">
        <el-col :span="11">
          <el-form-item prop="startTime" class="time">
            <el-time-picker v-model="newShop.startTime" placeholder="起始时间" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="endTime" class="time">
            <el-time-picker v-model="newShop.endTime" placeholder="结束时间" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="店铺面积" prop="area" class="input">
        <el-input v-model="newShop.area"></el-input>
      </el-form-item>
      <el-form-item label="有无停车位" prop="parking" class="type">
        <el-radio-group v-model="newShop.parking">
          <el-radio label="有"></el-radio>
          <el-radio label="无"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="有无WIFI" prop="wifi" class="type">
        <el-radio-group v-model="newShop.wifi">
          <el-radio label="有"></el-radio>
          <el-radio label="无"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="店铺简介" prop="brief" class="type">
        <el-input type="textarea" v-model="newShop.brief"></el-input>
      </el-form-item>
      <el-form-item class="type">
        <el-button type="primary" class="subBtn" @click="handleSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("shops");

export default {
  mounted() {
    this.newShop.managerId = localStorage.getItem("_id");
  },
  data() {
    return {
      newShop: {
        name: "",
        contact: "",
        phone: "",
        addr: "",
        type: "",
        license: "",
        imgs: "",
        startTime: "",
        endTime: "",
        area: "",
        parking: "",
        wifi: "",
        brief: "",
        managerId: "",
        status: "审核中"
      }
    };
  },
  methods: {
    handleSubmit() {
      this.applayShopAsync(this.newShop).then(data => {
        if(data.status === 200){
          this.$message({
          message: '恭喜你，申请成功，请耐心等待审核',
          type: 'success'
        });
        this.$refs.newShop.resetField();
        this.$refs.licenseRef.clearFiles();
        this.$refs.imgRef.clearFiles();
        }
      });
    },
    licenseSuccess({ url }) {
      this.newShop.license = url;
    },
    imgsSuccess({ url }) {
      this.newShop.imgs = url;
    },
    ...mapActions(["applayShopAsync"])
  }
};
</script>

<style scoped>
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
  width: 480px;
}
</style>

