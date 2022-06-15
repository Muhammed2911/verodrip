<template>
  <div class="servies_demo_wrapper">
    <client-only v-if="items.length >= 1">
      <VueSlickCarousel v-bind="settings">
        <div
          class="product_card text-center"
          @click="catchID(item.id)"
          v-for="(item, index) in items"
          :key="index"
        >
          <img class="d-block m-auto" :src="item.icon" alt="products" />
          <h6 v-html="item.name"></h6>
          <p class="desc" v-html="item.summary"></p>
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
  name: 'ServicesDemo',
  props: ['items'],
  components: {
    VueSlickCarousel,
  },
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
    }
  },
  methods: {
    catchID(id) {
      this.$emit('catch-id', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.servies_demo_wrapper {
  margin-bottom: 20px;
}
.slick-slide {
  .product_card {
    padding: 20px 22px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #008b780d;
    h6 {
      font-weight: 500;
      font-size: 24px;
      color: $third-color;
      margin: 15px 0;
    }
    p.desc {
      color: $p-text-color;
      font-weight: 400;
      font-size: 14px;
      padding: 0 25px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media (min-width: 320px) and (max-width: 991px) {
        padding: 0 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.servies_demo_wrapper {
  .slick-slide {
    overflow: hidden;
    padding-right: 15px;
    width: 95%;
    margin: 0 auto;
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
}
</style>