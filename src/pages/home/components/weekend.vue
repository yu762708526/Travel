<template>
  <div class="weekend">
    <div class="weekend_title">
      周末去哪儿
    </div>
    <div class="weekend_list" v-for="item in weekendList" :key="item.id">
      <div class="list_img_wraper">
        <img class="list_img" :src="item.imgUrl" alt="">
      </div>
      <p class="list_title">{{item.title}}</p>
      <p class="list_dec">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['weekendList'],
  data () {
    return {
      // weekendList: [{
      //   id: '0001',
      //   imgUrl: '//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg',
      //   title: '龙虎山',
      //   dec: '神秘的古越族文明，体验绝美的自然风光'
      // },
      // {
      //   id: '0002',
      //   imgUrl: '//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg',
      //   title: '龙虎山',
      //   dec: '神秘的古越族文明，体验绝美的自然风光'
      // },
      // {
      //   id: '0003',
      //   imgUrl: '//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg',
      //   title: '龙虎山',
      //   dec: '神秘的古越族文明，体验绝美的自然风光'
      // }]

    }
  }
}
</script>
<style lang="stylus" scoped>
.weekend_title
  height 0.8rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.weekend_list
  .list_img_wraper
    overflow hidden
    padding-bottom 40%
    height 0
    .list_img
      width 100%
  .list_title
    height 0.5rem
    line-height 0.5rem
    font-weight 600
    text-indent 0.1rem
  .list_dec
    height 0.4rem
    line-height 0.4rem
    color #CCCCCC
    text-indent 0.1rem
</style>
