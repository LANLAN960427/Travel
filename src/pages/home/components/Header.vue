<template>
  <!-- // 调用css文件时用到@这个符号，前面一定要加波浪线 -->
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe60a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  display flex
  line-height 0.86rem
  background $bgcolor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    line-height 0.64rem
    background #fff
    color #ccc
    border-radius 0.1rem
  .header-right
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
