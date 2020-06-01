<template>
  <div class="cityList" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wraper">
            <div class="btn">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wraper" @click="handleCityClick(item.name)" v-for="item in allHotCities" :key="item.id">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in allCities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="items in item" :key="items.id" @click="handleCityClick(items.name)">
          <div class="item">
            {{items.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: ['allCities', 'allHotCities', 'letter'],
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])

  },
  mounted () {
    const options = {
      click: true
    }
    this.scroll = new Bscroll(this.$refs.wrapper, options)
  },
  watch: {
    letter () {
      // 如果letter存在的话  获取ref
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.cityList
  overflow hidden
  position absolute
  top 1.94rem
  left 0
  right 0
  bottom 0
.border-topbottom
  border-bottom 0.02rem solid #ccc
  border-top 0.02rem solid #ccc
.title
  line-height 0.4rem
  height 0.4rem
  background-color #eee
  padding-left 0.2rem
  color #666
.btn-list
  padding 0.1rem 0.4rem 0.1rem 0.1rem
  overflow hidden
  .btn-wraper
    width 33.33%
    float left
    .btn
      border 0.02rem solid $bgColor
      text-align center
      margin 0.1rem
      padding 0.1rem 0
      border-radius 0.06rem
.item-list
  .item
    height 0.7rem
    line-height 0.7rem
    padding-left 0.2rem
    border-bottom 0.02rem solid #ddd
</style>
