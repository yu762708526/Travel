<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    test
  </div>
</template>
<script>
import HomeHeader from '../home/components/homeHeader'
import HomeSwiper from '../home/components/homeSwiper'
import HomeIcon from '../home/components/homeIcon'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>
<style lang="stylus" scoped></style>
