<template>
  <div class="products_demo">
    <client-only v-if="categories.length >= 1">
      <VueSlickCarousel v-bind="settings">
        <div
          class="product_card"
          v-for="(item, index) in categories"
          :key="index"
        >
          <div class="imgs_wrapper" @click="catchID(item.id)">
            <VueSlickCarousel
              v-bind="sub_settings"
              class="sub_slider"
              v-if="item.images.length >= 1"
            >
              <div
                class="m_wrapper"
                v-for="(image, index) in item.images"
                :key="index"
              >
                <img :src="image.url" alt="product" />
              </div>
            </VueSlickCarousel>
            <div class="m_wrapper" v-else>
              <img :src="item.cover" alt="product" />
            </div>
          </div>
          <div class="info_wrapper">
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'ProductsDeom',
  components: {
    VueSlickCarousel,
  },
  props: ['categories'],
  emits: ['catch-id'],
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
      },
      sub_settings: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  computed: {
    checkCateLength() {
      return Object.keys(this.categories).length === 0
    },
  },
  methods: {
    catchID(id) {
      this.$emit('catch-id', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.products_demo {
  margin-bottom: 20px;
}
.slick-slide {
  .imgs_wrapper {
    cursor: pointer;
  }
  .product_card {
    padding: 8px;
    border-radius: 10px;
    background-color: #4e627d33;
    width: 95% !important;
    margin: 0 auto;
    .m_wrapper {
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        max-height: 300px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
      }
    }
    .info_wrapper {
      padding: 22px 10px;
      text-align: center;
      h4 {
        margin-bottom: 0;
        font-weight: 400;
      }
    }
  }
}
</style>

<style lang="scss">
.products_demo {
  .slick-slide {
    overflow: hidden;
  }
  .slick-arrow {
    width: 40px;
    height: 40px;
    background-color: #ff8f15;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    z-index: 100;
    &.slick-prev {
      left: -15px;
    }
    &.slick-next {
      right: -8px;
    }
  }
  .sub_slider {
    position: relative;
    .slick-slide {
      width: 100%;
    }
    .slick-dots {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0606064f;
      li {
        width: 13px;
        height: 13px;
        background: #fff;
        border-radius: 100%;
        &.slick-active {
          background-color: $second-color;
        }
        button {
          width: 16px;
          height: 16px;
          &::before {
            display: none;
          }
        }
      }
    }
  }
}
</style>