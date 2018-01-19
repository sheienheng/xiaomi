<template>
  <div>
    <div class="search-head">
      <router-link to="/" slot="left">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <input type="text" placeholder="搜索商品名称">
      <router-link to="#" slot="right">
        <i class="el-icon-search"></i>
      </router-link>
    </div>
    <div class="contant">
      <div class="title">热门搜索</div>
      <div>
        <img src="/static/img/search1.jpg" alt="" style="width: 100%;height: 6rem">
      </div>
      <ul class="tuijian">
        <li>红米5新品</li>
        <li>电视56英寸</li>
        <li>净水器厨下</li>
        <li>小米MIX2</li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style>
  .search-head{
    background: #eee;
    height: 60px;
    display: flex;
    justify-content: space-around;
  }
  .search-head .el-icon-arrow-left,.el-icon-search{
    font-size: 25px;
    line-height: 60px;
    color: #333333;
  }
  .search-head input{
    height: 30px;
    margin-top: 15px;
    border: 1px solid #dddddd;
    width: 75%;
  }
  .title{
    width: 100%;
    height: 3rem;
    color: #333333;
    line-height: 3rem;
    text-indent: 1em;
    font-weight: bold;
  }
  .tuijian{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .tuijian li {
    width: 30%;
    height: 40px;
    background-color:#FFF5EE ;
    text-align: center;
    line-height: 40px;
    margin: 5px;
    color: #333333;
    font-size: 14px;
    border-radius: 5px;
  }
</style>
