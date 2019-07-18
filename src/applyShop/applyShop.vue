import {requireComponent} from "./_globals.js"

<template>
  <div class="container">
    <h1>创建店铺</h1>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm applyShop">
      <el-form-item label="店铺名称" prop="name" class="input">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="name" class="input">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="name" class="input">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址" prop="name" class="input">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="店铺类型" prop="region" class="type">
        <el-select v-model="ruleForm.region" placeholder="请选店铺类型">
          <el-option label="食物" value="shanghai"></el-option>
          <el-option label="医疗" value="beijing"></el-option>
          <el-option label="娱乐" value="beijing"></el-option>
          <el-option label="美容" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="营业执照" prop="name" class="type">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
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
      <el-form-item label="店铺门头照片" prop="name" class="type">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
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
      <el-form-item label="营业时间" required class="type">
        <el-col :span="11">
          <el-form-item prop="date1" class="time">
            <el-time-picker placeholder="起始时间" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2" class="time">
            <el-time-picker placeholder="结束时间" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="店铺面积" prop="name" class="input">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="有无停车位" prop="resource" class="type">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="有"></el-radio>
          <el-radio label="无"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="店铺简介" prop="desc" class="type">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item class="type">
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.container {
  width: 600px;
  margin: 50px auto;
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
</style>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        desc: ""
      }
    };
  }
};
</script>