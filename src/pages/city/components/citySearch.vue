<template>
  <div class="citySearch">
    <van-search v-model="value" shape="round" background="#00BCD4" placeholder="请输入搜索关键词" />
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
</style>
