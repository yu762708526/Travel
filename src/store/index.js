import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局公用数据  组件调用
  state,
  mutations,
  // 组件通过dispatch传递过来的方法
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  modules: {
  },
  // 类似计算属性
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
