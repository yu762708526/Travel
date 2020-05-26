<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="content">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper_img" :src="item" alt="">
        </swiper-slide>
        <!-- <swiper-slide>
          <img class="swiper_img"
            src="http://img1.qunarzz.com/sight/p0/1606/3f/3fa08ea40a69a76ee2.water.jpg_r_800x800_280ebabd.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiper_img"
            src="http://img1.qunarzz.com/sight/p0/1606/81/81f68702a3c2a27be2.water.jpg_r_800x800_6bf853e7.jpg" alt="">
        </swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gallary',
  // props: {
  //   imgs: {
  //     type: Array,
  //     default () {
  //       return ['http://img1.qunarzz.com/sight/p0/1606/52/5269f93eebcae9f5e2.water.jpg_r_800x800_25e30d50.jpg',
  //         'http://img1.qunarzz.com/sight/p0/1606/3f/3fa08ea40a69a76ee2.water.jpg_r_800x800_280ebabd.jpg',
  //         'http://img1.qunarzz.com/sight/p0/1606/81/81f68702a3c2a27be2.water.jpg_r_800x800_6bf853e7.jpg']
  //     }
  //   }
  // },
  props: ['imgs'],
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
/deep/ .swiper-container
  overflow inherit
.gallary
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color #000
  .content
    width 100%
    height 0
    padding-bottom 65%
    .swiper_img
      width 100%
    .swiper-pagination
      color #fff
      bottom -0.4rem
</style>
