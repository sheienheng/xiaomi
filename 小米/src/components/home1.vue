<template>
    <div style="margin-top: 90px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="str in listImg" >
            <img :src="str.url" alt="" style="width: 100%;height: 100%;">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--<el-carousel :interval="5000" arrow="always">-->
        <!--<el-carousel-item v-for="item in imgUrl" :key="item">-->
          <!--<img v-bind:src="item" alt="">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <ul class="logoFour">
        <li><img src="/static/img/lg1.png" alt=""></li>
        <li><img src="/static/img/lg2.png" alt=""></li>
        <li><img src="/static/img/lg3.png" alt=""></li>
        <li><img src="/static/img/lg4.png" alt=""></li>
      </ul>
      <div class="proShow" style="display: flex;flex-wrap: wrap">
        <div class="proShow-one">
          <div class="pSo-left">
            <img src="/static/img/left1.jpg" alt="">
          </div>
          <div class="pSo-right">
            <img src="/static/img/right1.png" alt="">
            <img src="/static/img/right2.png" alt="">
          </div>
        </div>
        <div class="proShow-one">
          <img src="/static/img/main-4.png" alt="">
        </div>
        <div class="proShow-one">
          <img src="/static/img/main-5.png" alt="">
        </div>
        <div class="proShow-two">
          <img src="/static/img/main-6.png" alt="">
        </div>
        <ul class="proShow-three">
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/body-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
          </li>

        </ul>
        <div class="proShow-one">
          <img src="/static/img/home-1.png" alt="">
        </div>
        <div class="proShow-two">
          <img src="/static/img/home-2.png" alt="">
        </div>
        <ul class="proShow-con" style="width: 100%">
          <li class="proShow-one">
            <div class="pSo-left">
              <img src="/static/img/home-3.png" alt="">
            </div>
            <div class="pSo-right">
              <p>米家恒温水壶</p>
              <p>水温智能控制，快速沸腾，三重安全保护</p>
              <span>￥ 199</span>
            </div>
          </li>
          <li class="proShow-one">
            <div class="pSo-right">
              <p>米家恒温水壶</p>
              <p>水温智能控制，快速沸腾，三重安全保护</p>
              <span>￥ 199</span>
            </div>
            <div class="pSo-left">
              <img src="/static/img/home-3.png" alt="">
            </div>

          </li>
          <li class="proShow-one">
            <div class="pSo-left">
              <img src="/static/img/home-3.png" alt="">
            </div>
            <div class="pSo-right">
              <p>米家恒温水壶</p>
              <p>水温智能控制，快速沸腾，三重安全保护</p>
              <span>￥ 199</span>
            </div>
          </li>
        </ul>
        <div class="proShow-one">
          <p style="width: 100%;text-align: center;margin: 15px 0">
            <a href="#">更多米家智能产品></a>
          </p>
        </div>
        <div class="proShow-one">
          <img src="/static/img/home-6.png" alt="">
        </div>
        <div class="proShow-two">
          <img src="/static/img/home-7.png" alt="">
        </div>
        <ul class="proShow-three">
          <li>
            <img src="/static/img/tv-1.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/tv-2.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/tv-3.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/tv-4.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/tv-5.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>
          <li>
            <img src="/static/img/tv-6.png" alt="">
            <p>红米Note 5A 16</p>
            <p>5.5英寸大屏</p>
            <span>￥ 699</span>
            <span class="topImg"><img src="/static/img/-300.png" alt=""></span>
          </li>

        </ul>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import 'swiper/dist/js/swiper.min.js';
    export default {
        name: "Home1",
      data() {
        return{
          activeIndex: '1',
          listImg: [
            {url: '/static/img/lunbo1.jpg'},
            {url: '/static/img/lunbo2.jpg'},
            {url: '/static/img/lunbo3.jpg'},
            {url: '/static/img/lunbo4.jpg'}
          ],
          thisShow:0
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
    height: 12rem;
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
  .el-menu-item{
    height: 45px;
    line-height: 45px;
    padding: 0 5px;
    margin: 0 8px;
  }
  .nav .ispr.if{
    width:2rem;
    height:2rem;
    margin:2px auto;
    background-image:url(/static/svg/footer_me1.svg);
    background-size:2rem 2rem;
    overflow:hidden;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .logoFour{
    width: 100%;
    height: 5rem;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-around;
  }
  .logoFour li{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .logoFour img{
    width: 100%;
    height: 100%;
    /*height: 1.52rem;*/
  }
  .proShow{
    width: 100%;

  }
  .proShow-one,.proShow-two{
    width: 100%;
    display: flex;
  }
  .proShow-one img{
    width: 100%;
    height: 10rem;
  }
  .proShow-two img{
    width: 100%;
    height: 14rem
  }
  .proShow-one .pSo-left{
    width: 50%;
    height: 15rem;
    /*border: 1px solid red;*/
  }
  .proShow-one .pSo-left img{
    width: 99%;
    height: 100%;
  }
  .proShow-one .pSo-right{
    width: 50%;
    height: 15rem;
    /*border: 1px solid red;*/
    position: relative;
  }
  .proShow-one .pSo-right img{
    position: relative;
    width: 100%;
    height: 7.4rem;
  }
  .proShow-con .proShow-one .pSo-left{
    height: 10rem;
  }
  .proShow-con .proShow-one .pSo-right{
    height: 10rem;
  }
  .proShow-con .pSo-right{
    padding: 25px;
  }
  .proShow-con .pSo-right p:nth-child(2){
    color: #666666;
    font-size: 14px;
  }
  .proShow-con .pSo-right span{
    color: red;
  }
  .proShow-three{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .proShow-three li{
    width: 50%;
    /*border: 1px solid red;*/
    height: 15rem;
    padding: 2px;
    position: relative;
  }
  .proShow-three li>p:nth-child(3){
    font-size: 12px;
    color: #666666;
  }
  .proShow-three li>span{
    color: red;
  }
  .proShow-three li>.topImg{
    position: absolute;
    top:0;
    left: 0;
  }
  .proShow-three li .topImg img{
    width: 6rem;
    height: 1.5rem;
  }

  .proShow-three li>img{
    width: 100%;
    height: 10rem;
  }
  .proShow-four {
    width: 100%;
    padding: 5px;
    background-color: rgb(252, 158, 46);
  }
  .proShow-four>li{
    background-color: #fff;
    margin-top: 5px;
  }
  .proShow-four>li>div{
    display: flex;
    height: 5rem;
    width: 100%;
  }
  .proShow-four .pSf-left{
    width: 85%;
  }
  .proShow-four .pSf-right span{
    color: red;
  }
  .proShow-four .pSf-left>p{
    line-height: 2rem;
  }
  .proShow-four .pSf-left>p:nth-child(2){
    color: #666666;
    font-size: 14px;
  }
</style>
