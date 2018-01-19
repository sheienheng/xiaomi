<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="home">
          <div class="nav"><div class="ih ispr"></div><p>首页</p></div>
        </router-link>
      </li>

      <li>
        <router-link to="classity">
          <div class="nav"><div class="ic ispr"></div><p>分类</p></div>
        </router-link>
      </li>
      <li>
        <router-link to="cart">
          <div class="nav"><div class="is ispr">
          </div><p>购物车</p></div>
        </router-link>
      </li>
      <li>
        <router-link to="me">
          <div class="nav"><div class="if ispr"></div><p>我的</p></div>
        </router-link>
      </li>
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
        display:box;
        padding: 0;
        /*height: 4rem;*/
        list-style: none;
        display:-webkit-box;
        box-align:center;
        -webkit-box-align:center;
        box-pack:center;
        -webkit-box-pack:center
      }
      .footer .nav .ispr.ih{
        width:2rem;
        height:2rem;
        margin:0 auto;
        background-image:url(/static/svg/footer_home1.svg);
        background-size:2rem 2.5rem;
        overflow:hidden;
      }
      .footer .nav .ispr.ic{
        width:2rem;
        height:2rem;
        margin:0 auto;
        background-image:url(/static/svg/footer_lei1.svg);
        background-size:2rem 2.8rem;
        overflow:hidden;
      }
      .footer .nav .ispr.is{
        width:2rem;
        height:2rem;
        margin:0 auto;
        background-image:url(/static/svg/footer_cart1.svg);
        background-size:2rem 4.3rem;
        overflow:hidden;
      }
      .footer .nav .ispr.if{
        width:2rem;
        height:2rem;
        margin:2px auto;
        background-image:url(/static/svg/footer_me1.svg);
        background-size:2rem 2rem;
        overflow:hidden;
      }


      .footer .nav .ispr.ih{
        background-position-y:-2.8rem
      }
      .footer .nav .ispr.ic{
        background-position-y:-.4rem
      }
      .footer .nav .ispr.is{
        background-position-y:-1.2rem
      }
      .footer .nav .ispr.if{
        background-position-y:-2rem
      }
      .footer .nav p{
        font-size:.22rem;
        line-height:.8;
        color:#999;
        margin:5px 0;
      }
      .footer li{
        -webkit-box-flex:1;
        box-flex:1;
        width:100%;
        text-align:center
      }
      .footer li>a{
        display:block;
        padding:.12rem 0
      }
      .footer li>a.on .nav p{
        color:#FF5722
      }
      .footer li>a.on .nav .ispr.ih{
        background-position-y:-2.4rem
      }
      .footer li>a.on .nav .ispr.ic{
        background-position-y:0
      }
      .footer li>a.on .nav .ispr.is{
        background-position-y:-.8rem
      }
      .footer li>a.on .nav .ispr.if{
        background-position-y:-1.6rem
      }
      .router-link-exact-active.router-link-active>.nav>p{
        color: #ff5816;
      }
</style>
