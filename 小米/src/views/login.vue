<template>
  <div style="padding: 0 20px;background-color: #eee;height: 100%;">
    <div style="height: 1px;">
      <img src="/static/classity/cl-top.jpg" alt="" style="width: 100%;height: 1px;opacity: 0">
    </div>
    <div style="text-align: center;padding: 30px 0">
      <img src="/static/img/logo.png" alt="">
      <p style="padding: 10px 0;font-size: 20px">小米账号登录</p>
    </div>
    <div class="change" v-if="change">
      <div class="inputMes">
        <div class="phone">
          <div>+86</div>
          <input type="text" placeholder="手机号码">
        </div>
        <hr>
        <div class="phoneMes">
          <input type="text" placeholder="短信验证码">
          <div>获取验证码</div>
        </div>
      </div>
      <div class="buttonClick">
        <el-button type="primary" round>
          立即登录/注册</router-link>
        </el-button><br>
        <el-button round @click="change = false">用户密码登录</el-button>
      </div>
    </div>
    <div class="change" v-if="!change">
      <div class="inputMes">
        <div class="phone">
          <input type="text" placeholder="手机号码">
        </div>
        <hr>
        <div class="phoneMes">
          <input type="text" placeholder="密码">

        </div>
      </div>
      <div class="buttonClick">
        <el-button type="primary" round>
          登录
        </el-button><br>
        <el-button round @click="change = true">
          手机短信登录/注册</router-link></el-button>
      </div>
    </div>
    <br>
    <div style="position: relative;height: 40px">
      <hr align="center" style="width: 100%;border: #333333 dashed 1px;margin-top: 20px">
      <p style="width: 100%;position: absolute;top:-10px;color: #666;font-size: 14px;text-align: center;">
        <span style="background-color: #eee">其他登录方式</span></p>
    </div>
    <div class="imgRoute" style="display: flex;justify-content: space-around">
    <router-link to="me"><img src="/static/svg/qq.svg" alt=""></router-link>
      <img src="/static/svg/weibo.svg" alt="">
      <img src="/static/svg/支付宝认证.svg" alt="">
    </div>
    <ul class="typeface">
      <li>简体</li><p>|</p>
      <li>繁体</li><p>|</p>
      <li>English</li><p>|</p>
      <li>常见问题</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data(){
        return{
          change:true
        }
      }
    }
</script>

<style scoped>
  a{
    color: inherit;
    text-decoration: none;
  }
  .inputMes{
    background-color: #fff;
    border-radius: 15px;
  }
  .inputMes>div{
    display: flex;
    line-height: 40px;
    text-align: center;
  }
  .phone>div{
    width: 20%;
    border-right: 1px solid #DCDCDC;
  }
  .phoneMes>div{
    width: 40%;
    text-align: center;
    border-left: 1px solid #DCDCDC;
  }
  hr{
    background-color: #DCDCDC;
    opacity: 0.3;
  }
  input{
    outline:none;
  }
  .phone>input{
    outline:none;
    /*outline：none;*/
    line-height: 40px;
    text-indent:1em;
    border-radius: 15px 15px 0 0;
    width: 80%;
    border: none
  }
  .phoneMes>input{
    line-height: 40px;
    text-indent:1em;
    border-radius: 0 0 0 15px;
    width: 60%;
    border: none
  }
  .buttonClick>button{
    width: 100%;
    margin-top: 20px;
  }
  .imgRoute{
    padding: 0 40px;
  }
  .imgRoute img{
    width: 40px;
    height: 40px;
  }
  .typeface{
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    margin-top: 50px;
  }

</style>
