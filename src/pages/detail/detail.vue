<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script>
import detailBanner from '../detail/components/banner'
import detailHeader from '../detail/components/header'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 1000px
</style>
