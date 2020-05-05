<template>
  <div class="recommend">
    <div class="recommend_title">
      热门推荐
    </div>
    <van-card price="85.00" desc="神秘的古越族文明，体验绝美的自然风光" title="龙虎山"
      thumb="//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg">
      <template #bottom class="card_button">
        <van-button size="mini" class="card_button">查看详情</van-button>
      </template>
    </van-card>
    <van-card price="95.00" desc="人间四月芳菲尽 三清杜鹃始盛开" title="三清山"
      thumb="//img1.qunarzz.com/sight/p0/1604/17/1752b1666c36d89990.water.jpg_256x160_af3308f8.jpg">
      <template #bottom>
        <van-button size="mini" class="card_button">查看详情</van-button>
      </template>
    </van-card>
    <van-card price="45.00" desc="走进萍乡的“马尔代夫" title="仙凤三宝"
      thumb="//img1.qunarzz.com/sight/p0/1812/a4/a40159d844958689a3.water.jpg_256x160_9f3acc66.jpg">
      <template #bottom>
        <van-button size="mini" class="card_button">查看详情</van-button>
      </template>
    </van-card>
    <van-card price="29.00" desc="自游行的绝佳选择" title="婺源篁岭"
      thumb="//img1.qunarzz.com/sight/p0/1904/ad/ad852cd6480654d3a3.img.jpg_256x160_9857ec23.jpg">
      <template #bottom>
        <van-button size="mini" class="card_button">查看详情</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
/deep/ .van-card__title
  font-size 0.32rem
  font-weight bold
  height 0.8rem
  line-height 0.8rem
/deep/ .van-card__price
  color #FF7400
/deep/ .van-card
  background-color none
.recommend_title
  height 0.8rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.card_button
  background-color #FE8338
  margin-left 0.2rem
</style>
