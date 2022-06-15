<template>
  <div class="main_partner_wrapper">
    <div class="container-fluid">
      <div class="mt-5 our_clients_slider_wrapper">
        <client-only>
          <VueSlickCarousel v-bind="settings" v-if="items >= 1">
            <div class="every_client" v-for="item in items" :key="item.id">
              <img class="client_img" :src="item.logo" :alt="item.name" />
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderPartners',
  props: ['items'],
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.main_partner_wrapper {
  margin: $main-margin 0;
}
</style>
<style lang="scss">
.main_partner_wrapper {
  .our_clients_slider_wrapper {
    .every_client {
      .client_img {
        width: 70px;
        height: 70px;
        display: block;
        margin: auto;
        cursor: grab;
      }
    }
  }
}
</style>
