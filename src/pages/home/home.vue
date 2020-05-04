<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>
<script>
import HomeHeader from '../home/components/homeHeader'
import HomeSwiper from '../home/components/homeSwiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="stylus" scoped></style>
