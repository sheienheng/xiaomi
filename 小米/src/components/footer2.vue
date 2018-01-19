<template>
  <div class="footer">
    <ul>
      <li style="width: 20%;">
        <router-link to="home">
          <div class="nav"><div class="ih ispr"></div><p>首页</p></div>
        </router-link>
      </li>
      <li style="width: 20%;">
        <router-link to="cart">
          <div class="nav"><div class="is ispr">
          </div><p>购物车</p></div>
        </router-link>
      </li>
      <li style="width: 60%;background-color: #ff5816;color:#fff">加入购物车</li>
    </ul>
  </div>

</template>


<style>
  .footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background:#FFF;
    z-index:99;
    border-top:1px solid #e0e0e0
  }
  .footer ul a{
    text-decoration: none;
  }
  .footer ul{

  }
  .footer li{
    line-height: 60px;
  }

</style>
