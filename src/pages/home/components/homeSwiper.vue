<template>
  <div class="home_swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper_img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next" slot="button-next"></div>
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      },
      {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      },
      {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home_swiper
  width 100%
  overflow hidden
  padding-bottom 30.4%
  height 0
  --swiper-pagination-color #ffffff
  --swiper-navigation-color #00ff33 /* 单独设置按钮颜色 */
  --swiper-navigation-size 30px /* 设置按钮大小 */
  .swiper_img
    width 100%
</style>
