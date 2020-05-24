<template>
  <div class="city">
    <city-header></city-header>
    <city-search :allCities="allCities"></city-search>
    <city-list :allCities="allCities" :allHotCities="allHotCities" :letter="letter"> </city-list>
    <index-list :allCities="allCities" @change="handleLetterChange"></index-list>
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
      allHotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.axios.get('/api/city.json').then((res) => {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.allCities = data.cities
        this.allHotCities = data.hotCities
      }
    })
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  }
}
</script>
<style lang="stylus" scoped></style>
