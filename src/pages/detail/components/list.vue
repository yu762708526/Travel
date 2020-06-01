<template>
  <div class="detailList">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="list-item">
        <span class="item-icon">
          <img class="item-icon-img" src="../../../assets/styles/imgs/icon1.png" alt="">
        </span>
        {{item.title}}
      </div>
      <div class="list-item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailList',
  props: ['list'],
  data () {
    return {
    }
  }

}
</script>
<style lang="stylus" scoped>
.list-item
  line-height 40px
  height 40px
  border-bottom 1px solid rgba(0, 0, 0, 0.05)
  .item-icon
    font-size 20px
    padding-left 10px
    padding-right 5px
.list-item-children
  padding-left 15px
</style>
