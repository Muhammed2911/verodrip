<template>
  <div class="services_wrapper">
    <div class="container-fluid">
      <div class="section_header">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#dots"></use>
        </svg>
        <h3 class="title">{{ info.header }}</h3>
        <p class="normal">
          {{ info.paragraph }}
        </p>
        <p class="green">{{ info.question }}</p>
        <BaseAppButton class="action_btn solid mt-4">
          <span>{{ info.button }}</span>
        </BaseAppButton>
      </div>
      <!-- end:: section_header -->

      <div class="slider_wrapper">
        <client-only>
          <swiper
            :loop="true"
            :autoplay="true"
            :speed="400"
            :spaceBetween="-250"
            :centeredSlides="true"
            :slidesPerView="4"
          >
            <swiper-slide v-for="item in services_slider" :key="item.id">
              <div class="header">
                <img :src="item.icon" alt="icon" />
                <h4>{{ item.name }}</h4>
              </div>
              <p class="content">
                {{ item.description }}
              </p>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <!-- end:: slider_wrapper -->
    </div>
    <!-- end:: container-fluid -->
  </div>
</template>

<script>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper-vue2'
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { mapGetters } from 'vuex'
export default {
  name: 'ServicesSlider',
  props: ['items', 'info'],
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.$store.dispatch('front/services/get_services')
  },
  computed: {
    ...mapGetters({
      services_slider: ['front/services/get_services'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.services_wrapper {
  padding: 80px 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url('~/assets/images/home/service-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 585px;
    height: 670px;
  }
  // header wrapper
  .section_header {
    position: relative;
    padding-left: 80px;
    margin-bottom: 50px;
    @media (min-width: 320px) and (max-width: 991px) {
      padding-left: 0;
    }
    .icon {
      width: 30px;
      height: 30px;
      position: absolute;
      left: 30px;
      top: 5px;
      transform: rotate(-90deg);
      @media (min-width: 320px) and (max-width: 991px) {
        left: 0;
      }
    }
    .title {
      font-weight: 700;
      font-size: 32px;
      color: $main-color;
      margin-bottom: 20px;
      @media (min-width: 320px) and (max-width: 991px) {
        padding-left: 45px;
      }
    }
    p {
      &.normal {
        color: $p-text-color;
        margin-bottom: 5px;
        font-weight: 400;
        width: 30%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @media (min-width: 320px) and (max-width: 991px) {
          width: 100%;
        }
      }
      &.green {
        font-size: 18px;
        color: $third-color;
        font-weight: 400;
        margin-top: 15px;
        margin-bottom: 5px;
      }
    }
    .action_btn {
      background-color: #ffeedb;
      color: $second-color;
      font-size: 16px;
      padding: 12px 25px;
      font-weight: 300;
      letter-spacing: 1px;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid $second-color;
      }
    }
  }
  // slider wrapper
  .slider_wrapper {
    padding: 50px 0 30px;
    .swiper-slide {
      padding: 28px 45px;
      background-color: #fff;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
      z-index: 10;
      opacity: 0;
      transform: scale(0.9);
      border-radius: 96px 0px 81px;
      transition: all 0.25s;
      cursor: pointer;
      .header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 100%;
        }
        h4 {
          font-weight: 600;
          color: $third-color;
          margin-left: 8px;
          margin-bottom: 0;
        }
      }
    }
    .swiper-slide-prev,
    .swiper-slide-next {
      z-index: 20;
      opacity: 0.7;
    }
    .swiper-slide-active {
      z-index: 999;
      transform: scale(1);
      opacity: 1;
    }

    .swiper-container-3d .swiper-slide-shadow-left,
    .swiper-container-3d .swiper-slide-shadow-right {
      background-image: none;
    }
  }
}
</style>
