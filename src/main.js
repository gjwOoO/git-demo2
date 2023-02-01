import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

//全局组件--三级联动,轮播图,分页器  第一个参数是 组件名字，第二个参数是 那个组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
import  Pagination  from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

import'@/mock/mockServer'

//引入swiper样式
import 'swiper/swiper-bundle.css'

new Vue({
  render: h => h(App),
  //全局事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store,
}).$mount('#app')
