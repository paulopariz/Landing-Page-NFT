<template>

  <div class="desktop" data-aos="fade-right">
    <div class="container">
      <button>Hope Ape</button>
      <button>Abstract</button>
      <button>Mongkey</button>
      <button>Cars</button>
      <button>Art</button>
    </div>
  </div>

  <div class="mobile" data-aos="fade-right">
    <div class="container">
      <swiper :slidesPerView="2.5" :freeMode="true" :pagination="{clickable: false,}" :modules="modules"
        class="mySwiper">
        <swiper-slide>Hope Ape</swiper-slide>
        <swiper-slide>Abstract</swiper-slide>
        <swiper-slide>Mongkey</swiper-slide>
        <swiper-slide>Cars</swiper-slide>
        <swiper-slide>Art</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from "swiper/vue";

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

  .mobile {
    display: none;

    .container {
      margin-top: 35px;

      .swiper-wrapper {
        gap: 22px !important;

        .swiper-slide {
          @include buttons;
          padding: 8px 32px;
          width: 141px !important;
          height: 35px;
          font-size: 16px;
          margin-left: 22px;
          text-align: center;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #39324D !important;

          &:nth-child(1) {
            margin-left: 0px;
          }

        }
      }
    }

    @media(max-width: 768px) {
      display: flex;

      .container {
        margin-top: 15px;

        .swiper-wrapper {
          .swiper-slide {
            font-size: 11px;
            padding: 0;
            width: 111px !important;
          }
        }

      }
    }

  }

  .desktop {
    .container {
      margin-top: 35px;
      display: flex;
      gap: 22px;

      button {
        @include buttons;
        background: #39324D;

        &:focus {
          background: linear-gradient(112.62deg, #8D1CFE 29.4%, #0038ED 105.15%);
        }
      }
    }

    @media (max-width: 992px) {
      .container {
        button {
          width: 126px;
          height: 43px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    @media(max-width: 768px) {
      display: none;
    }
  }
</style>