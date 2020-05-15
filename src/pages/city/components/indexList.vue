<template>
  <div class="indexList">
    <ul class="list">
      <li class="item" v-for="(item, key) in allCities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexList',
  props: ['allCities']
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.94rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>
