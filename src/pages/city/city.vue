<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :allCities="allCities" :allHotCities="allHotCities"> </city-list>
    <index-list :allCities="allCities"></index-list>
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
  },
  data () {
    return {
      allCities: {},
      allHotCities: []
    }
  },
  mounted () {
    this.axios.get('/user/city').then((res) => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.allCities = data.cities
        this.allHotCities = data.hotCities
        console.log(this.allCities)
        console.log(this.allHotCities)
      }
    })
  }
}
</script>
<style lang="stylus" scoped></style>
