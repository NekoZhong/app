<template>
  <div id="app">
    <app-header :shopIn="shopInf"></app-header>
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      shopInf:{}
    }
  },
 components:{
   'app-header':Header,
   'app-nav':Nav
 },
  created(){
    axios.get('/data/goods')
    .then(res => {
      console.log(res.data.data)
      if(res.data.data.code===0){
      this.shopInf = res.data.data.data.poi_info;
      console.log(this.shopInf)
        
      }
     
    })
  }
  
}
</script>

<style>

</style>
