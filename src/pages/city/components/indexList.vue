<template>
  <div class="indexList">
    <ul class="list">
      <li class="item" v-for="item in letters" :key="item" @click="handClickIndex" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexList',
  props: ['allCities'],
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  computed: {
    // 获取为A,B,C,D,E的数组
    letters () {
      const letters = []
      for (const i in this.allCities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handClickIndex (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    // 鼠标移动右边的字母，左边区域跟着一起移动
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取A元素距离顶部的高度
          const startY = this.$refs.A[0].offsetTop
          // 获取手指距离顶部的高度减去顶部的高度
          const touchY = e.touches[0].clientY - 97
          // 手指距离搜索框下沿的高度减去A元素距离除于20向下取整获取对应字母的下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}</script>
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
