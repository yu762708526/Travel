export default {
  // 这里的changeCity可以任意写
  changeCity (state, city) {
    // state中的city等于传入的city
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {

    }
  }
}
