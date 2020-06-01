<template>
  <div class="detailHeader">
    <router-link to="/" tag="div" class="header-back" v-show="!showNav">
      <van-icon name="arrow-left" class="header-icon" />
    </router-link>
    <div class="header-nav" v-show="showNav" :style="opacityNav">
      <router-link to="/">
        <van-icon name="arrow-left" class="header-nav-icon" />
      </router-link>
      <i class="header-nav-text">景点详情</i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      // 导航栏是否隐藏
      showNav: false,
      // 导航栏渐隐渐显的效果
      opacityNav: {
        opacity: 0
      }

    }
  },
  methods: {

    // 监听的滚动事件
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityNav = {
          opacity: opacity
        }
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  // 页面刷新时执行
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏或者页面即将被替换成新的界面
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.detailHeader
  .header-back
    position absolute
    left 0.2rem
    top 0.2rem
    background-color rgba(0, 0, 0, 0.6)
    width 0.8rem
    height 0.8rem
    border-radius 50%
    line-height 0.8rem
    text-align center
    .header-icon
      color #fff
      font-size 0.4rem
      vertical-align middle
  .header-nav
    height $headerHeight
    background-color $bgColor
    line-height $headerHeight
    text-align center
    position relative
    position fixed
    top 0
    left 0
    right 0
    .header-nav-icon
      font-size 20px
      color #fff
      vertical-align middle
      position absolute
      left 5px
      height $headerHeight
      line-height $headerHeight
    .header-nav-text
      height $headerHeight
      line-height $headerHeight
      font-size 16px
      color #fff
</style>
