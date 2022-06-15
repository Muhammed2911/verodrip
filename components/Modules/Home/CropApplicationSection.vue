<template>
  <div class="main_crop_wrapper">
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
      <!-- end:: section_header -->

      <!-- //! start slick carousel  -->
      <div class="main_slider_wrapper mt-5">
        <client-only>
          <VueSlickCarousel
            v-bind="settings"
            v-if="crop_applications_images.length >= 1"
          >
            <div
              class="slide"
              v-for="item in crop_applications_images"
              :key="item.id"
            >
              <div class="slide_content">
                <h5>{{ item.name }}</h5>
              </div>
              <img class="img" :src="item.image" :alt="item.name" />
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
      <!-- //! end slick carousel  -->

      <div
        class="
          text-center
          crop_solution
          mt-3
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <nuxt-link
          class="home_sections_route_link"
          :to="localePath('/cropapplication')"
        >
          <span>{{ items.button }}</span>
          <svg class="icon">
            <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CropApplicationSection',
  props: ['items', 'crop_applications_images'],
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main_crop_wrapper {
  padding: 120px 0 70px;
  background-image: url('~/assets/images/home/crop-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
</style>

<style lang="scss">
.main_crop_wrapper {
  .main_slider_wrapper {
    font-weight: 700;
    font-size: 32px;
    color: $main-color;
    .slide {
      text-align: center;
      padding: 10px;
      position: relative;
      transition: $main-transition;
      .slide_content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 80%;
        left: 10%;
        height: 80%;
        top: 10%;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.35);
        transition: $main-transition;
        opacity: 0;
        padding: 15px;
        h5 {
          font-weight: 700;
          font-size: 24px;
          color: $white;
        }
      }
      .img {
        width: 95%;
        height: 100%;
      }
      &:hover {
        .slide_content {
          opacity: 1;
        }
      }
    }
  }
}
</style>
