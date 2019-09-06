
<template>
  <div id="app">
    <router-view/>
    <hr class="foot-fixed" />
    <div id="foot" style="background:white;" >
      <router-link to="/">
      <div class="flex-div">
      <span class="iconfont icon-shouye footsize"></span>
      <span class="footfontsize">首页</span>
     </div>
      </router-link> 
      <router-link to="/food">
      <div class="flex-div">
      <span class="iconfont icon-diancan-copy footsize"></span>
      <span class="footfontsize">点餐</span>
      </div>
      </router-link>
      <router-link to="/3">
      <div class="flex-div">
      <span class="iconfont icon-qucan footsize"></span>
      <span class="footfontsize">取餐</span>
      </div>
      </router-link>
     <router-link to="/4">
      <div class="flex-div">
      <span class="iconfont icon-wode footsize"></span>
      <span class="footfontsize">我的</span>
      </div>
      </router-link>
    </div>
    
  </div>
</template>



<style lang="stylus" scoped>
@import './assets/font_icon/iconfont.css'
#app
  display flex
  flex-direction column
  justify-content space-between
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background #f5f5f5
  width 100%
  height 100%
  
.flex-div
  display flex
  flex-direction column
.footsize
  font-size 5em
.footfontsize
  font-size 2em
#foot
  position fixed
  bottom 0
  display flex
  justify-content space-around
  align-items center/*垂直居中*/
  width 100%
  height 130px
  a
    opacity 0.5
    font-weight 400
    text-decoration none
    color #2c3e50
    &.router-link-exact-active
      color red
      opacity 1
.foot-fixed{
 position fixed
 bottom 120px
 width 100%
 height 0.1%
 background: -webkit-linear-gradient(white, gray); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(white, gray); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(white, gray); /* Firefox 3.6 - 15 */
  background: linear-gradient(white, gray); /* 标准的语法 */
}
</style>
