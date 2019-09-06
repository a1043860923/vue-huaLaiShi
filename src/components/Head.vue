
<template>
  <div class="head-swiper">
  <swiper :options="swiperOption" class="swiper">
        <swiper-slide><img class="pic" src="..\assets\whitemomo.jpg" /></swiper-slide>
        <swiper-slide><img class="pic" src="..\assets\pic2.jpg" /></swiper-slide>
        <swiper-slide><img class="pic" src="..\assets\pic3.jpg" /></swiper-slide>

        <div class="swiper-pagination en-size" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import '../swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'head-swiper',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
           
          },
          autoplay:{
            autoplay:true,
            disableOnInteraction:false
          },
          loop:{
            loop:true
          }
        }
      }
    },
  components: {
    swiper,
    swiperSlide
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pic
  height 100%
  width 100%
.swiper
  height 980px

</style>
