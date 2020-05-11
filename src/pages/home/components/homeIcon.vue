<template>
  <div class="home_icon">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <van-grid :column-num="4" square :border="false">
          <van-grid-item v-for="item in iconList" :key="item.id">
            <img class="home_icon_img" :src="item.imgUrl" alt="">
            <p class="home_icon_text">{{item.desc}}</p>
          </van-grid-item>
        </van-grid>
      </swiper-slide>
      <swiper-slide>
        <van-grid :column-num="4" square :border="false">
          <van-grid-item v-for="item in iconListLone" :key="item.id">
            <img class="home_icon_img" :src="item.imgUrl" alt="">
            <p class="home_icon_text">{{item.desc}}</p>
          </van-grid-item>
        </van-grid>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['iconList', 'iconListLone'],
  data () {
    return {
      // iconList: [{
      //   id: '0001',
      //   imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //   iconText: '酒店'
      // },
      // {
      //   id: '0002',
      //   imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
      //   iconText: '机票'
      // },
      // {
      //   id: '0003',
      //   imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
      //   iconText: '火车票'
      // }, {
      //   id: '0004',
      //   imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
      //   iconText: '度假'
      // }],
      swiperOptions: {
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.home_icon_img
  width 1rem
  height 1rem
.home_icon_text
  font-weight bold
  margin-top 0.16rem
  color $darkTextColor
  white-space nowrap
</style>
