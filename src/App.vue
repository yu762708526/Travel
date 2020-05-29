<template>
  <div id="app">
    <keep-alive exclude="Home">
      <router-view class="home"></router-view>
    </keep-alive>
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
<style lang="stylus"></style>
