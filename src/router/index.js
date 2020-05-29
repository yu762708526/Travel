import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import City from '../pages/city/city.vue'
import Detail from '../pages/detail/detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  // 页面切换时  滚动始终保持再最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
