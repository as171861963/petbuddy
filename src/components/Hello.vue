<template>
    <div class="conta">
        <el-carousel :interval="2000" type="card" height="500px" width="800px" autoplay>
            <el-carousel-item>
                <img src="../assets/dogs.jpg" class="img">            
            </el-carousel-item>
             <el-carousel-item>
                <img src="../assets/cat.jpg" class="img">            
            </el-carousel-item>
             <el-carousel-item>
                <img src="../assets/doge.jpg" class="img">            
            </el-carousel-item>
        </el-carousel>
        <div class="txt">
            HELLO MY DEAR FRIEND
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.conta{
   text-align: center;
}
.img{
    box-shadow: 0 0 10px 1px black;
}
.txt{
    margin-top:20px;
    color:#99cccc;
    font-weight: 600;
    font-size:24px;
}
</style>
