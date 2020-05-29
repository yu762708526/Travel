<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" alt="">
      <div class="banner-info">
        <div class="info-test">{{this.sightName}}</div>
        <div class="info-icon">
          <van-icon name="photo" class="icon-photo" />
          <i>12</i>
        </div>
      </div>
    </div>
    <Fade>
      <Gallary :imgs="this.gallaryImgs" v-show="gallaryShow" @close="closeGallary"></Gallary>
    </Fade>
  </div>

</template>
<script>
import Gallary from 'common/gallary/gallary.vue'
import Fade from 'common/fade/fade.vue'
export default {
  name: 'banner',
  components: {
    Gallary,
    Fade
  },
  // props: ['sightName', 'bannerImg', 'gallaryImgs'],
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      gallaryShow: false
      // imgs: ['http://img1.qunarzz.com/sight/p0/1606/52/5269f93eebcae9f5e2.water.jpg_r_800x800_25e30d50.jpg',
      //   'http://img1.qunarzz.com/sight/p0/1606/3f/3fa08ea40a69a76ee2.water.jpg_r_800x800_280ebabd.jpg',
      //   'http://img1.qunarzz.com/sight/p0/1606/81/81f68702a3c2a27be2.water.jpg_r_800x800_6bf853e7.jpg']
    }
  },
  methods: {
    // 点击banner图片显示图片详情轮播
    handleBannerClick () {
      this.gallaryShow = true
    },
    // 子组件gallary点击轮播图父组件中的gallary组件就隐藏
    closeGallary () {
      this.gallaryShow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    justify-content space-between
    height 0.5rem
    line-height 0.5rem
    font-size 0.36rem
    background-image linear-gradient(rgba(0, 0, 0, 0), #020309)
    padding-bottom 0.1rem
    .info-test
      color #ffffff
      padding-left 0.2rem
    .info-icon
      padding-left 0.2rem
      background-color #0203094a
      color #ffffff
      width 0.8rem
      text-align center
      font-size 0.24rem
      border-radius 0.1rem
      .icon-photo
        vertical-align middle
        padding-right 0.1rem
</style>
