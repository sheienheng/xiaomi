<template>
  <div>
    <div style="height: 1px;">
      <img src="/static/classity/cl-top.jpg" alt="" style="width: 100%;height: 1px;opacity: 0">
    </div>
    <div style="margin-top: 50px;">
      <p style="line-height: 50px;display: flex;justify-content: space-between;padding: 0 10px">
        <span>登录后享受更多优惠</span>
        <router-link to="login"><span style="font-size:14px;color: gray;">去登录></span></router-link>
      </p>
      <div style="background-color: #eee;line-height: 60px;color: gray;
      text-align: center">购物车还是空的 <button>去逛逛</button></div>
    </div>
    <main style="width: 100%;">
      <img src="/static/cart/cart-top.jpg" alt="">
      <ul class="cartPro" style="width: 100%;display: flex;flex-wrap: wrap">
        <li v-for="index in 11">
          <img src="/static/cart/ca-1.png" alt="">
          <p>红米5 Plus 32GB</p>
          <span>￥ 699</span>
        </li>
      </ul>
    </main>


  </div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped>
  main img{
    width: 100%;
  }
.cartPro>li{
  width: 50%;
  padding: 2px;
}
  .cartPro>li>span{
    color: red;
  }
  a{
    text-decoration: none;
  }
</style>
