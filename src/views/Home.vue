<template>
  <div class="home" style="background:white;" >
    <router-link to="/food">
    <HeadSwiper></HeadSwiper>
    <img src="..\assets\ex.png" style="width:100%;margin-top:5%" />
    </router-link>
    <img src="..\assets\home-foot-pic.jpg" style="width:100%;margin-top:10%" />
    <div style="width:100%;height:120px"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import HeadSwiper from '../components/Head.vue'
export default {
  name: 'home',
  components: {HeadSwiper},

}
</script>
