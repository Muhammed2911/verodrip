<template>
  <div class="crop_demo_wrapper">
    <client-only v-if="items.length >= 1">
      <VueSlickCarousel v-bind="settings">
        <div
          class="img_wrapper"
          v-for="(item, index) in items"
          :key="index"
          @click="catchID(item.id)"
        >
          <img :src="item.image" alt="img" />
          <h5>{{ item.name }}</h5>
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
  name: 'CropDemo',
  props: ['items'],
  emits: ['catch-id'],
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
.crop_demo_wrapper {
  margin-bottom: 20px;
}
.slick-slide {
  .img_wrapper {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 200px;
      border-radius: 8px;
    }
    h5 {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 0;
      width: 100%;
      padding: 10px;
      text-align: center;
      background-color: #00000059;
      color: #fff;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>

<style lang="scss">
.crop_wrapper {
  .slick-slide {
    overflow: hidden;
    padding-right: 15px;
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