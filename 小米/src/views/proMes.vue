<template>
    <div>
      <div style="position: relative">
        <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="str in listImg" >
            <img :src="str.url" alt="" style="width: 100%;height: 100%;">
          </div>
        </div>
        <!--<div class="swiper-pagination"></div>-->
        </div>
        <div style="position: absolute;width: 60px;
        height: 60px;right: 1rem;bottom:2rem;z-index: 999">
          <img src="/static/pro/-30.png" alt="" style="width: 100%;">
        </div>
        <div class="icon-img" style="left: 1px">
          <router-link to="/classity" slot="left">
            <i class="el-icon-arrow-left"></i>
          </router-link>
        </div>
        <div class="icon-img" style="right: 1rem;">
          <router-link to="/classity" slot="left">
            <i class="el-icon-share"></i>
          </router-link>
        </div>
      </div>

      <div>
        <img src="/static/pro/red1.jpg" alt="" style="width: 100%;">
      </div>
      <div style="padding: 10px">
        <p style="font-size: 18px">红米5A 轻巧长续航</p>
        <p style="font-size: 12px;">
          <span style="font-size: 14px;color: #ff5816">[手机品牌日显示特惠：用券立减30元，可享有小米分期最高6期免息]</span>
          8天超长待机/137g轻巧机身/高通骁龙处理器
        </p>
        <h2 style="color:#ff5816">￥599</h2>
      </div>

    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import 'swiper/dist/js/swiper.min.js';
    export default {
        name: "pro-mes",
      components:{
      },
      data(){
          return{
            listImg: [
              {url: '/static/pro/pro1.png'},
              {url: '/static/pro/pro2.png'},
              {url: '/static/pro/pro3.png'},
              {url: '/static/pro/pro4.png'}
            ],
          }
      },
      mounted() {
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },

          paginationClickable: true,
          loop: true,
          speed: 600,
          autoplay: 4000,
          onTouchEnd: function() {
            swiper.startAutoplay()
          }
        });
      },
    }
</script>

<style scoped>
  .swiper-container {
    width: 100vw;
    height: 25rem;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 100%;
  }
  .swiper-container .swiper-pagination {
    width:100%;
    height: 0.833rem;
    display: inline-block;
  }
  }
  .icon-img{
    position: absolute;width: 30px;background-color: rgba(0,0,0,0.5);
    height: 30px;top:1rem;z-index: 999;border-radius: 50%;
    text-align: center;line-height: 30px;
  }
  .icon-img i{
    color: #fff
  }
</style>
