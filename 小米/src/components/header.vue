<template>
  <header class="classity-head" style="position: fixed;width: 100%;top:0;">
    <!--<div style="width: 100%;background-color: #ff5816;-->
    <!--height: 80px;">我是22222</div>-->
    <div class="classityHead-top">
      <router-link to="/" slot="left">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <p >分类</p>
      <router-link to="/search" slot="left">
        <i class="el-icon-search"></i>
      </router-link>
    </div>
  </header>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .classity-head{
    position: fixed;
    width: 100%;
    height: 50px;
    top:0;
    z-index: 999;
    background-color: #dddddd;
  }
  header .classityHead-top{
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    font-size: 20px;
  }
  header .classityHead-top p{
    width: 75%;
    text-align: center;
    color: #333333;
  }
</style>
