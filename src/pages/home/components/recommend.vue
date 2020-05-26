<template>
  <div class="recommend">
    <div class="recommend_title">
      热门推荐
    </div>
    <div v-for="item in recommendList" :key="item.id">
      <router-link :to="'/detail/'+item.id">
        <van-card price="85.00" :desc="item.desc" :title="item.title" :thumb="item.imgUrl">
          <template #bottom class="card_button">
            <van-button size="mini" class="card_button">查看详情</van-button>
          </template>
        </van-card>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['recommendList'],
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
/deep/ .van-card
  background-color #fff
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
