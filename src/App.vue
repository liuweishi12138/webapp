<template>
  <div id="app">
    <Header></Header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header/header";
export default {
  name: 'App',
  components:{
    "Header":header
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    width 100%
    height 100%
    overflow hidden
    .navs
      one-px(rgba(7,17,27,.1))
      display flex
      height 40px
      line-height 40px
      .item
        flex 1
        & > a
          display block
          width 100%
          height 100%
          text-align center
          &.active
            color rgba(240,20,20,1)
</style>
