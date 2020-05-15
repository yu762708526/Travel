<template>
  <div class="cityList" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wraper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wraper" v-for="item in allHotCities" :key="item.id">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in allCities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="items in item" :key="items.id">
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
export default {
  name: 'CityList',
  props: ['allCities', 'allHotCities'],
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
