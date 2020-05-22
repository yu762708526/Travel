<template>
  <div class="homeHeader">
    <van-row type="flex" justify="space-between" class="homeHeader_list">
      <van-col span="3">
        <van-icon name="arrow-left" color="#B9FDFF" size="0.5rem" class="list_icon" />
      </van-col>
      <van-col span="15" class="col_input">
        <div class="list_input">
          <van-icon name="search" size="0.4rem" class="list_input_icon" />
          <span class="list_input_text">输入城市景点主题</span>
        </div>
      </van-col>
      <van-col span="6">
        <router-link to="/city">
          <span class="list_icon_right_list">{{this.city}}</span>
        </router-link>
        <span class="iconfont list_icon_right">&#xe64a;</span>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'homeHeader',
  // props: ['city'],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.homeHeader
  background-color $bgColor
  height 0.86rem
  .homeHeader_list
    height 0.86rem
    line-height 0.86rem
    text-align center
    .list_icon
      height 0.86rem
      line-height 0.86rem
    .col_input
      height 0.86rem
      line-height 0.86rem
      .list_input
        margin-top 0.12rem
        height 0.62rem
        line-height 0.62rem
        background-color #ffffff
        border-radius 0.1rem
        color #CBCBCB
        display flex
        .list_input_icon
          display inline-block
          margin-top 0.1rem
          margin-left 0.2rem
        .list_input_text
          display inline-block
    .list_icon_right
      color #ffffff
      margin-left 0.1rem
    .list_icon_right_list
      color #ffffff
</style>
