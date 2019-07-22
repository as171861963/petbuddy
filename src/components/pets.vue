<template>
  <div style="height:498px;">
    <!-- 搜索栏 -->
    <div class="BtnBox">
      <el-button
        class="iconBtn"
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="dialog('增加商品')"
      >增加</el-button>
      <el-button class="iconBtn" type="primary" icon="el-icon-edit" @click="dialog('修改商品')">修改</el-button>
      <el-button
        class="iconBtn"
        type="primary"
        icon="el-icon-delete"
        @click="centerDialogVisible=true"
      >删除</el-button>
      <el-select v-model="value" filterable placeholder="请选择" style="width:110px;margin-left:10px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input class="ipt" placeholder="请输入内容" v-model="pet" clearable></el-input>
      <el-button
        class="iconBtn"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-search"
        @click="searchPet()"
      >搜索</el-button>
      <el-button class="iconBtn" type="primary" icon="el-icon-refresh">刷新</el-button>
      <input type="radio" id="salesVolume" name="inputBtn" @focus="sort('color')" />
      <label for="salesVolume">按销量排序</label>
      <input type="radio" id="price" name="inputBtn" @focus="sort('price')" />
      <label for="price">按价格排序</label>
    </div>
    <!-- 隐藏的添加表单 -->
    <el-dialog :title="btn" :visible.sync="addPet" :close-on-click-modal="false" top="10px">
      <el-form :model="form">
        <div style="display:flex">
          <el-form-item label="商品名称:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.type" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="地域:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.addr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="价格:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="花色:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.color" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="性别:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.gender" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="库存:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.stock" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="体型:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.somatotype" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="疫苗:" :label-width="formLabelWidth">
            <el-input class="addInput" v-model="form.vaccine" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="商品描述:" :label-width="formLabelWidth">
          <el-input class="addInput" v-model="form.describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片:" :label-width="formLabelWidth">
          <!-- 上传图片 -->
          <el-upload
            class="upload-demo"
            drag
            action="/shops/fileupload"
            :on-success="imgUrl"
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addPet = false">取 消</el-button>
        <el-button class="defineBtn" type="primary" @click="addToPet">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 商品详情表格 -->
    <el-table
      ref="multipleTable"
      :data="rows"
      tooltip-effect="dark"
      class="myTable"
      @select="handleSelection"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="expand" width="55">
        <template slot-scope="props">
          <el-form label-position="left" class="demo-table-expand">
            <el-form-item label="图片：">
              <img :src=" props.row.imgs" alt="pet" style="width:150px;" />
            </el-form-item>
            <el-form-item label="产地：">
              <span>{{ props.row.addr }}</span>
            </el-form-item>
            <el-form-item label="类型：">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="体型：">
              <span>{{ props.row.somatotype }}</span>
            </el-form-item>
            <el-form-item label="疫苗：">
              <span>{{ props.row.vaccine }}</span>
            </el-form-item>
            <el-form-item label="库存：">
              <span>{{ props.row.stock }}</span>
            </el-form-item>
            <el-form-item label="描述：">
              <span>{{ props.row.describe }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 表头 -->
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="性别" prop="gender"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="花色" prop="color"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
    </el-table>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>您确定删除该商品吗！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="deletePet">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("petsList");
export default {
  data() {
    return {
      options: [
        {
          value: "name",
          label: "商品名称"
        },
        {
          value: "price",
          label: "价格"
        },
        {
          value: "addr",
          label: "产地"
        },
        {
          value: "color",
          label: "花色"
        },
        {
          value: "gender",
          label: "性别"
        }
      ],
      value: "",
      btn: "",
      pet: "",
      addPet: false,
      centerDialogVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        type: "",
        addr: "",
        age: "",
        price: "",
        color: "",
        gender: "",
        stock: "",
        somatotype: "",
        vaccine: "",
        describe: "",
        managerId: "",
        imgs: ""
      },
      update: {}
    };
  },
  computed: {
    ...mapState(["rows"])
  },
  mounted() {
    this.getPetsAsync({_id:localStorage.getItem("_id")});
  },
  methods: {
    searchPet() {
      if (this.pet != "") {
        this.searchToPetAsync({
          managerId: localStorage.getItem("_id"),
          [this.value]: this.pet
        });
        return;
      }
      this.getPetsAsync(localStorage.getItem("_id"));
    },
    sort(key) {
        this.getPetsAsync({_id:localStorage.getItem("_id"), key});
    },
    ...mapActions([
      "addToPetAsync",
      "getPetsAsync",
      "updateToPetAsync",
      "deleteToPetAsync",
      "searchToPetAsync"
    ]),
    addToPet() {
      if (this.btn === "增加商品") {
        const id = localStorage.getItem("_id");
        this.form.managerId = id;
        this.addToPetAsync(this.form);
        this.getPetsAsync(localStorage.getItem("_id"));
        this.addPet = false;
      } else if (this.btn === "修改商品") {
        this.updateToPetAsync(this.form);
        this.getPetsAsync(localStorage.getItem("_id"));
        this.addPet = false;
      }
    },
    imgUrl(response, file, fileList) {
      this.form.imgs = response.url;
    },
    deletePet() {
      this.centerDialogVisible = false;
      this.deleteToPetAsync(this.update._id);
      this.getPetsAsync(localStorage.getItem("_id"));
    },
    dialog(value) {
      this.addPet = true;
      this.btn = value;
      if (value === "修改商品") {
        Object.assign(this.form, this.update);
      } else {
        for (const key in this.form) {
          if (key != "") {
            this.form[key] = "";
          }
        }
      }
    },
    handleSelection(val, row) {
      if (val.length > 1) {
        this.$message({
          duration: 1500,
          message: "每次只能修改一条数据",
          type: "warning"
        });
        return;
      }
      Object.assign(this.update, ...val);
    }
  }
};
</script>

<style scoped>
.iconBtn,
.defineBtn {
  background-color: #99cccc;
  border-color: #99cccc;
}
.BtnBox {
  display: flex;
  align-items: center;
}
.BtnBox > input {
  margin-left: 25px;
}
.ipt {
  width: 200px;
  margin-left: 10px;
}
.addInput {
  width: 200px;
}
.myTable {
  width: 100%;
  overflow: scroll;
}
.myTable::-webkit-scrollbar {
  display: none;
}
.el-form-item {
  margin-bottom: 10px;
}
</style>
