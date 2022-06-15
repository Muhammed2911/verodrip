<template>
  <div class="main_products_wrapper">
    <div class="container-fluid">
      <div class="main_sections_header">
        <h3 class="title mt-3">
          <svg class="icons">
            <use xlink:href="~/static/svg/sprite.svg#dots"></use>
          </svg>
          <span class="d-block">{{ items.header }}</span>
        </h3>
        <p>
          {{ items.paragraph }}
        </p>
      </div>

      <!-- //! start slick carousel  -->
      <div class="main_slider_wrapper mt-5">
        <client-only>
          <VueSlickCarousel v-bind="settings" v-if="products_images >= 1">
            <div class="slide" v-for="item in products_images" :key="item.id">
              <div class="photo_container">
                <img class="img" :src="item.cover" alt="product" />
              </div>
              <div class="slide_content">
                <h4>{{ item.name }}</h4>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
      <!-- //! end slick carousel  -->
    </div>
    <div
      class="
        text-center
        mt-4
        mb-2
        crop_solution
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <nuxt-link class="home_sections_route_link" :to="localePath('/products')">
        <span>{{ items.button }}</span>
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsSection',
  props: ['items', 'products_images'],
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main_products_wrapper {
  background-image: url('~/assets/images/home/001.png');
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
}
</style>
<style lang="scss">
.main_products_wrapper {
  .main_slider_wrapper {
    .slide {
      display: flex !important;
      align-items: center;
      position: relative;
      min-height: 500px;
      @media (min-width: 480px) and (max-width: 767px) {
        min-height: 400px;
        gap: 20px;
      }
      @media (min-width: 320px) and (max-width: 480px) {
        display: block !important;
        justify-content: center;
        text-align: center;
        min-height: auto;
        padding: 20px 0;
      }
      &::before {
        position: absolute;
        content: '';
        right: 0;
        top: 0;
        width: 80%;
        height: 100%;
        background-image: url('~/assets/images/home/product-bg.png');
        background-repeat: no-repeat;
        z-index: -1;
        border-radius: 33px;
        border-radius: 20px;
        @media (min-width: 320px) and (max-width: 480px) {
          display: none;
        }
      }
      .slide_content {
        width: calc(100% - 400px);
        padding-left: 40px;
        @media (min-width: 320px) and (max-width: 480px) {
          margin-top: 20px;
        }
        h4 {
          font-weight: 700;
          font-size: 32px;
          color: $main-color;
          margin-bottom: 20px;
          padding-right: 10px;
          @media (min-width: 320px) and (max-width: 767px) {
            font-size: 22px;
          }
        }
        p {
          color: $slider-p-color;
          text-transform: uppercase;
          letter-spacing: 3px;
          width: 80%;
          @media (min-width: 320px) and (max-width: 991px) {
            display: none;
          }
        }
      }
      .photo_container {
        width: 450px;
        height: 400px;
        text-align: center;
        border-radius: 30px;
        margin-left: 30px;
        @media (min-width: 480px) and (max-width: 767px) {
          height: 300px;
          width: 300px;
          margin-left: 10px;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          // margin-left: 0;
          height: 300px;
          width: 250px;
          margin: 0 auto;
        }
        .img {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.main_products_wrapper {
  .slick-dots {
    bottom: 0;
    padding-bottom: 10px;
    padding-top: 10px;
    @media (min-width: 320px) and (max-width: 480px) {
      bottom: -20px;
    }
    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(196, 196, 196, 0.44);
      transition: $main-transition;
      &.slick-active {
        background-color: $second-color;
        width: 25px;
        height: 10px;
        border-radius: 10px;
      }
      button:before {
        content: '';
      }
    }
  }
}
</style>
