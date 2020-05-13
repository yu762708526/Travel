<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list> </city-list>
    <index-list></index-list>
  </div>
</template>
<script>
import CityHeader from '../city/components/cityHeader'
import CitySearch from '../city/components/citySearch'
import CityList from '../city/components/cityList'
import IndexList from '../city/components/indexList'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    IndexList
  }
}
</script>
<style lang="stylus" scoped></style>
