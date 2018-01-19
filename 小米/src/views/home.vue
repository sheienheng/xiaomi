<template>
  <div id="home">
    <div style="height: 1px;">
      <img src="/static/img/ph-top.png" alt="" style="width: 100%;height: 1px;opacity: 0.1">
    </div>
    <header fixed>
      <div class="headTop">
        <img src="/static/img/logo.png" alt="" style="width: 40px;height: 40px;">
        <router-link to="search"><p>  请输入商品名</p></router-link>
        <div style="width: 10%">
          <router-link to="me">
            <div class="nav"><div class="if ispr"></div></div>
          </router-link>
        </div>

      </div>
      <div style="position: relative" class="head-foot">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">推荐</el-menu-item>
          <el-menu-item index="2">手机</el-menu-item>
          <el-menu-item index="3">智能</el-menu-item>
          <el-menu-item index="4">电视</el-menu-item>
          <el-menu-item index="5">电脑</el-menu-item>
          <el-menu-item index="6">全面屏</el-menu-item>
          <el-menu-item index="7">电视</el-menu-item>
          <el-menu-item index="8">电脑</el-menu-item>
          <el-menu-item index="9">全面屏</el-menu-item>
        </el-menu>
      </div>
    </header>
    <!--<app-banner :listImg="listImg"></app-banner>-->
    <!--<div class="swiper-container" style="width: 100vw;">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide" v-for="str in listImg" >-->
          <!--<img :src="str.url" alt="" style="width: 100%;height: 135px;">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="swiper-pagination"></div>-->
    <!--</div>-->




    <main style="">
      <transition :name="'vux-pop-' + (sport == 'true' ? 'in' : 'out')">
        <keep-alive>
          <component :is="name"></component>
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
  import Vue from "vue"
  import homeOne from '../components/home1'
  import homeTwo from '../components/home2'
  import homeThree from '../components/home3'
  import homeFour from '../components/home4'
  import homeFive from '../components/home5'
  import homeSix from '../components/home6'
  import homeSeven from '../components/home2'
  import homeEight from '../components/home3'
  import homeNine from '../components/home4'
  export default {
    data() {
      return{
        activeIndex: '1',
        thisShow:0,
        sport:'true',
        lastindex:0,
        names:[
          homeOne,
          homeTwo,
          homeThree,
          homeFour,
          homeFive,
          homeSix,
          homeSeven,
          homeEight,
          homeNine
        ],
        name:'homeOne',
      }
    },
    components: {
      homeOne,
      homeTwo,
      homeThree,
      homeFour,
      homeSeven,
      homeEight,
      homeNine
    },
    watch: {},
    created() {

    },
    methods: {
      handleSelect(key, keyPath) {
        let a = keyPath;
        if(this.lastindex > a[0]-1){
          this.sport = 'false'
        }else if(this.lastindex = a[0]-1){
          this.sport = 'true';
        }else {
        }
        this.name = this.names[a[0]-1];
        this.lastindex = a[0]-1;
      }
    }
  }
</script>

<style scoped>
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  header{
    position:fixed;
    background: #F0F0F0;
    width: 100%;
    top:0;
    left:0;
    right:0;
    z-index:99;
    border-top:1px solid #e0e0e0
  }
  header .headTop{
    display: flex;
    height: 40px;
    justify-content: space-around;
    margin-top:4px;
  }
  header .headTop>a p{
    border: 1px solid #DCDCDC;
    width: 230px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    color: #999999;
    margin-top: 5px;
    background-color: #FFF;
  }
  .el-menu{
    display: flex;
    background: #F0F0F0;
    white-space: nowrap;
    /*border: 1px solid red;*/
    overflow-x: scroll;
    /*justify-content: space-around;*/
  }
  .el-menu::-webkit-scrollbar{
    display: none;
  }
  .el-menu-item{
    height: 45px;
    line-height: 45px;
    padding: 0 5px;
    margin: 0 8px;
  }
  .head-foot .el-menu-item.is-active{
    color: #ff5816;
    background: #F0F0F0;
    /*border: #ff5816;*/
  }
  .animated.fadeOutRight {
    animation-duration: 0.5s;
  }
  .animated.fadeOutLeft{
    animation-duration: 0.5s;
    animate-delay: 10s;
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
