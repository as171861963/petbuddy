<template>
  <div class="mtable">
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
      <el-input class="ipt" placeholder="请输入内容" v-model="foot" clearable></el-input>
      <el-button
        class="iconBtn"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-search"
        @click="searchPet"
      >搜索</el-button>
      <el-button class="iconBtn" type="primary" icon="el-icon-refresh">刷新</el-button>
      <input type="radio" id="salesVolume" name="inputBtn" @focus="sort('color')" />
      <label for="salesVolume">按销量排序</label>
      <input type="radio" id="price" name="inputBtn" @focus="sort('price')" />
      <label for="price">按价格排序</label>
    </div>

    <!-- 商品详情表格 -->
    <el-table
      ref="multipleTable"
      :data="rows"
      tooltip-effect="dark"
      class="mtable"
      @select="handleSelection"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="expand" width="55">
        <template slot-scope="props">
          <el-form label-position="left" class="demo-table-expand">
            <el-form-item label="图片">
              <img :src=" props.row.imgs" alt="pet" style="width:100px;" />
            </el-form-item>
            <el-form-item label="适用规格">
              <span>{{ props.row.for }}</span>
            </el-form-item>
            <el-form-item label="专属规格">
              <span>{{ props.row.sepcialFor }}</span>
            </el-form-item>
            <el-form-item label="包装规格">
              <span>{{ props.row.size }}</span>
            </el-form-item>
            <el-form-item label="口味">
              <span>{{ props.row.flavor }}</span>
            </el-form-item>
            <el-form-item label="特殊功用">
              <span>{{ props.row.feature }}</span>
            </el-form-item>
            <el-form-item label="产地">
              <span>{{ props.row.addr }}</span>
            </el-form-item>
            <el-form-item label="出厂日期">
              <span>{{ props.row.madeTime }}</span>
            </el-form-item>
            <el-form-item label="保质期">
              <span>{{ props.row.keepTime }}</span>
            </el-form-item>
            <el-form-item label="特色说明">
              <span>{{ props.row.brief }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 表头 -->
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column label="材质" prop="texture"></el-table-column>
      <el-table-column label="制作方法" prop="madeWay"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
    </el-table>

    <!-- 隐藏的表单 -->
    <el-dialog :title="btn" :visible.sync="addFoot" :close-on-click-modal="false" top="10px">
      <el-form :model="form">
        <div style="display:flex">
          <el-form-item label="商品名称:" label-width="120px">
            <el-input class="addInput" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型:" label-width="120px">
            <el-input class="addInput" v-model="form.type" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="材质:" label-width="120px">
            <el-input class="addInput" v-model="form.texture" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="制作方法:" label-width="120px">
            <el-input class="addInput" v-model="form.madeWay" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="价格:" label-width="120px">
            <el-input class="addInput" v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="适用规格:" label-width="120px">
            <el-input class="addInput" v-model="form.for" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="专属规格:" label-width="120px">
            <el-input class="addInput" v-model="form.sepcialFor" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="包装规格:" label-width="120px">
            <el-input class="addInput" v-model="form.size" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="口味:" label-width="120px">
            <el-input class="addInput" v-model="form.flavor" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="特殊功用:" label-width="120px">
            <el-input class="addInput" v-model="form.feature" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="产地:" label-width="120px">
            <el-input class="addInput" v-model="form.addr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="出厂日期:" label-width="120px">
            <el-input class="addInput" v-model="form.madeTime" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="保质期:" label-width="120px">
            <el-input class="addInput" v-model="form.keepTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="特色说明:" label-width="120px">
            <el-input class="addInput" v-model="form.brief" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="图片:" label-width="120px">
          <!-- 上传图片 -->
          <el-upload
            class="upload-demo"
            drag
            action="/foots/fileupload"
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
        <el-button @click="addFoot = false">取 消</el-button>
        <el-button class="defineBtn" type="primary" @click="addToFoot">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>您确定删除该商品吗！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="deleteFoot">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("footList");
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
          value: "type",
          label: "类型"
        }
      ],
      value: "",
      centerDialogVisible: false,
      addFoot: false,
      btn: "",
      foot: "",
      form: {
        name: "",
        type: "",
        texture: "",
        madeWay: "",
        for: "",
        sepcialFor: "",
        size: "",
        flavor: "",
        feature: "",
        addr: "",
        madeTime: "",
        keepTime: "",
        brief: "",
        price: "",
        imgs: ""
      },
      update: {}
    };
  },
  computed: {
    ...mapState(["rows"])
  },
  mounted() {
    this.getFootsAsync({_id:localStorage.getItem("_id")});
  },
  methods: {
    ...mapActions([
      "addToFootAsync",
      "getFootsAsync",
      "updateToFootAsync",
      "deleteToFootAsync",
      "searchToFootAsync"
    ]),
    imgUrl(response, file, fileList) {
      this.form.imgs = response.url;
    },
    addToFoot() {
      if (this.btn === "增加商品") {
        const id = localStorage.getItem("_id");
        this.form.managerId = id;
        this.addToFootAsync(this.form);
        this.getFootsAsync(localStorage.getItem("_id"));
        this.addFoot = false;
      } else if (this.btn === "修改商品") {
        this.updateToFootAsync(this.form);
        this.getFootsAsync(localStorage.getItem("_id"));
        this.addFoot = false;
      }
    },
    sort(key) {
      this.getFootsAsync({ _id: localStorage.getItem("_id"), key });
    },
    searchPet() {
      if (this.foot != "") {
        this.searchToFootAsync({
          managerId: localStorage.getItem("_id"),
          [this.value]: this.foot
        });
        return;
      }
      this.getFootsAsync(localStorage.getItem("_id"));
    },
    deleteFoot() {
      this.centerDialogVisible = false;
      this.deleteToFootAsync(this.update._id);
      this.getFootsAsync(localStorage.getItem("_id"));
    },
    dialog(value) {
      this.addFoot = true;
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
.ipt {
  width: 200px;
  margin-left: 10px;
}
.BtnBox > input {
  margin-left: 25px;
}
.mtable {
  height: 498px;
}
.mtable {
  width: 100%;
  overflow: scroll;
}
.mtable::-webkit-scrollbar {
  display: none;
}
.el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
</style>


