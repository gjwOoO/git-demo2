<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {Header,Footer},
  mounted(){
    //通过Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>
