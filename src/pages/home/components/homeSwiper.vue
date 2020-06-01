<template>
  <div class="home_swiper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
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
  props: ['swiperList'],
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
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
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
