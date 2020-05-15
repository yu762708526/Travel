<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList" :iconListLone="iconListLone"></home-icon>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>
<script>
import HomeHeader from '../home/components/homeHeader'
import HomeSwiper from '../home/components/homeSwiper'
import HomeIcon from '../home/components/homeIcon'
import Recommend from '../home/components/recommend'
import Weekend from '../home/components/weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '城市',
      swiperList: [],
      iconList: [],
      iconListLone: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.axios.get('/user/index').then((res) => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList.slice(0, 8)
        this.iconListLone = data.iconList.slice(8, 9)
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    })
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped></style>
