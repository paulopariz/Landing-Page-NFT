<template>

<div class="desktop">
  <div class="container">
    <button>Hope Ape</button>
    <button>Abstract</button>
    <button>Mongkey</button>
    <button>Cars</button>
    <button>Art</button>
  </div>
</div>

<div class="mobile">
  <swiper :slidesPerView="2.5"
          :freeMode="true"
          :pagination="{clickable: false,}"
          :modules="modules"
          class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide} from "swiper/vue";

import "swiper/css";

import "swiper/css/free-mode";

import {
    FreeMode
} from "swiper";

export default {
    setup() {
        return {
            modules: [FreeMode],
        };
    },

    components: {
        Swiper,
        SwiperSlide,

    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.swiper-slide{
  background-color: red;
  width: 100px !important;
}
.mobile{
  display: none;
}

.desktop{
  .container{
    margin-top: 35px;
    display: flex;
    gap: 22px;
  
    button{
      @include buttons;
      background: #39324D;
      &:focus{
        background: linear-gradient(112.62deg, #8D1CFE 29.4%, #0038ED 105.15%);
      }
    }
  }
}

  

</style>
