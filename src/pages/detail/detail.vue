<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>

    </div>
  </div>
</template>
<script>
import detailBanner from '../detail/components/banner'
import detailHeader from '../detail/components/header'
import detailList from '../detail/components/list'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [],
      // 获取到的ajax数据
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      lastId: ''
    }
  },
  // 当页面刷新时或者页面被替换时触发这个钩子函数
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.axios.get('/api/detail.json', { params: { id: this.$route.params.id } }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.list = data.categoryList
          this.gallaryImgs = data.gallaryImgs
          // console.log(this.list)
          // console.log(this.gallaryImgs)s
        }
      })
    }
  },
  mounted () {
    // 获取lisi部分数据
    this.axios.get('/api/detail.json', { params: { id: this.$route.params.id } }).then((res) => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.list = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        // console.log(this.list)
        // console.log(this.gallaryImgs)s
      }
    })
    this.lastId = this.$route.params.id
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 1000px
</style>
