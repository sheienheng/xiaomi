<template>
  <div>
    <div style="height: 1px;">
      <img src="/static/classity/cl-top.jpg" alt="" style="width: 100%;height: 1px;opacity: 0">
    </div>
    <el-container>
      <el-container class='classityContent'>
        <!--<el-aside  style="width: 80px;">-->
          <!--<el-menu :default-active="active" @select="handleSelect2">-->
            <!--<el-menu-item index="1" >推荐</el-menu-item>-->
            <!--<el-menu-item index="2">手机</el-menu-item>-->
            <!--<el-menu-item index="3">智能</el-menu-item>-->
            <!--<el-menu-item index="4">电视</el-menu-item>-->
            <!--<el-menu-item index="5">电脑</el-menu-item>-->
            <!--<el-menu-item index="6">全面屏</el-menu-item>-->
            <!--<el-menu-item index="7">电脑</el-menu-item>-->
            <!--<el-menu-item index="8">全面屏</el-menu-item>-->
            <!--<el-menu-item index="9">电脑</el-menu-item>-->
            <!--<el-menu-item index="10">全面屏</el-menu-item>-->
          <!--</el-menu>-->
        <!--</el-aside>-->
        <el-main id="scrollDiv">
          <div style="position: relative;border: #ff5816 solid 1px;width: 100%;float: left" v-for="index in 10">
            <div  style="float: left">
              <!--<div style="color: #ff5816">{{index}}</div>-->
              <ul style="float: left;width: 100%;height: 100%;display: block">
                <li  v-for="inde in 10" style="width: 40%;float: left;">1</li>

              </ul>
              <div class="clear"></div>
            </div>
          </div>

        </el-main>
      </el-container>
    </el-container>


  </div>


</template>

<script>
  export default {
    name: "Classity",
    // el:'#classContent',
    components:{
    },
    data(){
      return{
        scroll: '',
        scrollTop:0,
        divOffsetTop:[],
        lastTop:0,
        active:'1',
        length:0
      }
    },
    mounted(){
      this.checkDivScroolTop();
    },
    methods:{
      divTip(){
        var a = document.getElementById('scrollDiv').children;
        for(let i=0;i<a.length;i++){
          this.divOffsetTop.push(a[i].offsetTop)
        }
        this.divOffsetTop.push((2*a[a.length-1].offsetTop - a[a.length-2].offsetTop))
        this.length = this.divOffsetTop.length
        console.log(this.divOffsetTop  )
      },
      checkDivScroolTop(){
        this.divTip();

        // var scrollDiv = document.getElementById('scrollDiv');
        // //绑定事件
        // // scrollDiv.addEventListener('scroll', function() {
        // //   this.scrollTop = scrollDiv.scrollTop;
        // //   console.log(this.length);
        // // });
        // scrollDiv.addEventListener('scroll',this.bijiao);
      },
      bijiao(){
        this.scrollTop = document.getElementById('scrollDiv').scrollTop;
        // console.log(this.scrollTop)
        for(let i=0;i<this.divOffsetTop.length;i++){
          if(this.scrollTop > this.divOffsetTop[i] && this.scrollTop < this.divOffsetTop[i+1]){
            // console.log(i+1)
            let index = i+1
            this.active =  index.toString();
          }
        }
      },
      handleSelect2(key, keyPath) {
        let a = keyPath;
        let b = a[0]-1;
        document.getElementById('scrollDiv').scrollTop=this.divOffsetTop[b];
        // console.log(b)
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  .clear{ clear:both}
  .classityContent{
    background-color: #fdfdfd;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 50px 0
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #FFF;
    color: #333;
    padding-top: 0;
    position: relative;
    text-align: center;
    /*line-height: 160px;*/
  }
  .el-main::-webkit-scrollbar {
    /*display: none;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
  /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
  /*line-height: 320px;*/
  /*}*/
  .el-menu{
    height: 100%;
    background-color: #fdfdfd;
  }
  .el-menu-item.is-active{
    color: #ff5816;
    font-size: 18px;
  }
  .el-menu-item{
    height: 45px;
  }
</style>
