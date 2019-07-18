


<template>
  <div    style="margin-left:250px;margin-top:100px">
    <h2 > 增加商品    <button v-on:click="closePage"  style="margin-left:350px"> ×</button></h2>

    <section>
    <span style="text-indent:200px">商品名称：<input/></span><span>价：<input/></span> <br/>
    <span>规格：<input/></span><span> <input/></span><br/>
    <span>功效：<input/></span><span> <input/></span><br/>
    <span>邮费：<input/></span><span> <input/></span><br/>
    <span>库存：<input/></span><span> <input/></span><br/>
    </section>
    
    <aside style="margin-top:20px;margin-bottom:20px">
             <el-upload
                 class="upload-demo"
                 drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                 <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                 <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
    </aside>

    <button style="margin-right:30px;margin-left:60px">取消</button><button>确定</button>
  </div>
</template>


<script>
  export default {
     data:{
         num:10
     },
      
     methods:{
        
        closePage(){
	                // 有关闭确认
	                 if(confirm("您确定要关闭本页吗？")){
		            // window.opener=null;
		            // window.open('','_self');
		             window.close();
	               }
             }
    }
    
  }

</script>

