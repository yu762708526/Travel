<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from '../city/components/cityHeader'
import CitySearch from '../city/components/citySearch'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped></style>
