<template>
  <div class="cityHeader">
    <span class="cityTest">城市选择</span>
    <div>
      <router-link to="/">
        <van-icon name="arrow-left" class="cityHeaderIcon" size="20" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.cityHeader
  height $headerHeight
  line-height $headerHeight
  background-color $bgColor
  text-align center
  color #ffffff
  position relative
  .cityHeaderIcon
    display inline-block
    height $headerHeight
    line-height $headerHeight
    position absolute
    top 0
    left 0
    color #ffffff
  .cityTest
    display inline-block
</style>
