<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <recommend></recommend>
    <weekend></weekend>
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
  }
}
</script>
<style lang="stylus" scoped></style>
