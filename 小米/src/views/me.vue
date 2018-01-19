<template>
    <div class="Me">
      <div style="height: 1px;">
        <img src="/static/classity/cl-top.jpg" alt="" style="width: 100%;height: 1px;opacity: 0">
      </div>
      <header>
        <div>
          <div class="imgP">
            <div style="border: 1px solid #fff;height: 100%;border-radius: 50%;">
              <img src="/static/svg/footer_me1.svg" alt="" style="height: 50%;">
            </div>
          </div>
          <div style="line-height: 50px;color: #fdfdfd;font-size: 14px">
            <router-link to="login">
              登录 / 注册
            </router-link>
          </div>
        </div>

      </header>
      <div class="select">
        <div class="order">
          <p style="width: 30%;">我的订单</p>
          <router-link to="dingdan">全部订单></router-link>
        </div>
        <ul class="state">
          <li>
            <img src="/static/svg/待付款.svg" alt=""><br>
            <span>待付款</span>
          </li>
          <li>
            <img src="/static/svg/物流.svg" alt=""><br>
            <span>待收货</span>
          </li>
          <li>
            <img src="/static/svg/xiuli.svg" alt=""><br>
            <span>退换修</span>
          </li>
        </ul>
      </div>
      <div class="select">
        <div class="select-chioce">
          <div>
            <img src="/static/svg/VIP.svg" alt="">
          </div>
          <div class="sec-right">
            <span>会员福利</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
        <div class="select-chioce">
          <div>
            <img src="/static/svg/VIP.svg" alt="">
          </div>
          <div class="sec-right">
            <span>会员福利</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
      <div class="select">
        <div class="select-chioce">
          <div>
            <img src="/static/svg/VIP.svg" alt="">
          </div>
          <div class="sec-right">
            <span>服务中心</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
        <div class="select-chioce">
          <div>
            <img src="/static/svg/shop.svg" alt="">
          </div>
          <div class="sec-right">
            <span>小米之家</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
      <div class="select">
        <div class="select-chioce">
          <div>
            <img src="/static/svg/VIP.svg" alt="">
          </div>
          <div class="sec-right">
            <span>F码通道</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
      <div class="select">
        <div class="select-chioce">
          <div>
            <img src="/static/svg/setting.svg" alt="">
          </div>
          <div class="sec-right">
            <span>设置</span>
            <router-link to="#"><i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Me"
    }
</script>

<style scoped>
  .Me{
    background-color: #F0F0F0;
    height: 100%;
  }
header{
  height: 80px;
  background-color: #f37d0f;
  background-image: url('/static/cart/carbg.png');
  background-size: auto 100%;
  padding: 15px 0;
}
header>div{
  height: 100%;
  display: flex;
  padding: 0 10px;
}
.select{
  background-color: #FFF;
  margin-bottom: 10px;
  padding: 0 15px;
}
header .imgP{
  height: 100%;
  width: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #FFA500;
  text-align: center;
  line-height: 50px;
  padding: 2px;
  margin-right: 10px;
}
.order{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 14px;
  line-height: 40px;
  border-bottom: #DCDCDC 1px solid;
}
.state{
  /*line-height: 85px;*/
  display: flex;
  justify-content: space-around;
}
.state li{
  padding: 15px 0;
  text-align: center;
}
  .state li{
    font-size: 14px;
  }
.select img{
  width: 24px;
  height: 24px;
}
  a{
    text-decoration: none;
    color: inherit;
  }
  .select-chioce{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
  }
  .select-chioce>.sec-right{
    display: flex;
    justify-content: space-between;
    width: 85%;
  }
  .select>.select-chioce:nth-child(2n+1)>.sec-right{
    border-bottom: #DCDCDC 1px solid;
  }
</style>
