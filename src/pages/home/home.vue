<template>
  <div>
    <home-header></home-header>
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
import { mapState } from 'vuex'
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
      // city: '城市',
      // lastCity: '',
      swiperList: [],
      iconList: [],
      iconListLone: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getCityInfo()
    // 把当前城市保存
    // this.lastCity = this.city
  },
  // 页面每次重新显示的时候触发这个生命周期函数
  // activated () {
  //   // 如果上次保存的城市不等于当前城市
  //   if (this.lastCity !== this.city) {
  //     this.lastCity = this.city
  //     this.getCityInfo()
  //   }
  // },
  methods: {
    // 获取首页数据
    getCityInfo () {
      this.axios.get('/api/index.json', { params: { city: this.city } }).then((res) => {
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
    }
  }
}
</script>
<style lang="stylus" scoped></style>
