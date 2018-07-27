<template>
  <div class="nav">
    <router-link to="/goods" class="nav-item">点餐<i class="line"></i></router-link>
    <router-link to="/ratings" class="nav-item">评价({{commentNum}})<i class="line"></i></router-link>
    <router-link to="/seller" class="nav-item">商家<i class="line"></i></router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
     
    }
  },
  props:{
      commentNum:{
          type:Number,
          default:0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e4e4e4;
    }
    .nav-item{
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #666;
        text-decoration: none;
        position: relative;
    }

    .nav .active{
        color: #FFBB22;
    }
    .nav .active .line{
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -10px;
        width: 20px;
        height: 2px;
        display: inline-block;
        background: #FFBB22;

    }
</style>
