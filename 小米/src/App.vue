<template>
  <div id="app">
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
      <header-Bar v-if="url2"></header-Bar>
    </transition>
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
      <header-Bar2 v-if="url3"></header-Bar2>
    </transition>
    <transition :name="'vux-pop-' + (sport == 'true' ? 'in' : 'out')">
      <keep-alive>
      <router-view class="router-view" ></router-view>
      </keep-alive>
    </transition>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown" mode="out-in">
      <footer-bar v-if="url4"></footer-bar>
    </transition>
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown" mode="out-in">
      <footer-bar2 v-if="url1"></footer-bar2>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapActions} from 'vuex'
  import Vue from "vue"
  import headerBar from './components/header'
  import headerBar2 from './components/header2'
  import footerBar from './components/footer';
  import footerBar2 from './components/footer2';
  export default {
    name: 'app',
    created(){
      if (this.$route.path == '/' || this.$route.path == '/home') {
        this.url1 = false
        this.url2 = false
        this.url3 = false
        this.url4 = true
      } else if (this.$route.path == '/classity') {
        this.url1 = false
        this.url2 = true
        this.url3 = false
        this.url4 = true
      } else if (this.$route.path == '/cart') {
        this.url1 = false
        this.url2 = false
        this.url3 = true
        this.url4 = true
      } else if (this.$route.path == '/login' || this.$route.path == '/reg'
        || this.$route.path == '/search' ) {
        this.url1 = false
        this.url2 = false
        this.url4 = false
        this.url3 = false
      } else if(this.$route.path == '/proMes'){
        this.url1 = true
        this.url2 = false
        this.url4 = false
        this.url3 = false
      }else{
        this.url1 = false
        this.url2 = false
        this.url3 = false
        this.url4 = true
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path;
        const fromDepth = from.path
        for(let i=0;i<this.routerCon.length;i++){
          if(toDepth == this.routerCon[i]){
            this.torouter = i;
          }
          if(fromDepth == this.routerCon[i]){
            this.fromrouter = i;
          }
        }
        if(this.torouter > this.fromrouter){
          this.sport = 'true'
        }else if(this.torouter < this.fromrouter){
          this.sport = 'false'
        }
        let one = this.$route.path;
        if (one == '/home' || one == '/') {
          this.url1 = false
          this.url2 = false
          this.url3 = false
          this.url4 = true
        } else if (one == '/classity') {
          this.url1 = false
          this.url2 = true
          this.url3 = false
          this.url4 = true
        } else if (one == '/cart') {
          this.url1 = false
          this.url2 = false
          this.url3 = true
          this.url4 = true
        } else if (one == '/login' || one == '/reg' || one == '/search') {
          this.url1 = false
          this.url2 = false
          this.url4 = false
          this.url3 = false
        } else if(one == '/proMes'){
          this.url1 = true
          this.url2 = false
          this.url4 = false
          this.url3 = false
        }else{
          this.url1 = false
          this.url2 = false
          this.url3 = false
          this.url4 = true
        }
      }
    },
    data () {
      return {
        activeIndex2:1,
        url1:false,
        url2:false,
        url3:false,
        url4:true,
        torouter:0,
        from:0,
        routerCon:[
          '/home',
          '/search',
          '/classity',
          '/proMes',
          '/cart',
          '/me',
          '/login',
          '/reg'
        ],
        sport:'true'
      }
    },
    components : {
      headerBar,
      headerBar2,
      footerBar,
      footerBar2
    },
    methods:{

    }
  }
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
  }
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
</style>

<style>
  body,html{
    width:100%;
    height:100%;
  }
  *{
    box-sizing: border-box;
    margin:0;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    margin: 0;
    padding: 0;
  }
</style>
