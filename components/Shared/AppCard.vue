<template>
  <div class="app_card_wrapper_slider text-uppercase">
    <div class="main_card_slider">
      <client-only>
        <VueSlickCarousel v-bind="settings">
          <div
            class="main_slider_wrapping"
            v-for="item in items.images"
            :key="item.id"
          >
            <img class="d-block img" :src="item.url" alt="card-img" />
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
    <div class="main_card_content">
      <h3 class="title text-center mt-4 mb-4" v-if="with_text">
        {{ items.name }}
      </h3>
      <p class="text" v-if="with_text">
        {{ items.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    with_text: {
      type: Boolean,
      required: false,
      default: true,
    },
    items: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      slides: [
        {
          img_src: require('@/assets/images/home/009.png'),
        },
        {
          img_src: require('@/assets/images/home/009.png'),
        },
        {
          img_src: require('@/assets/images/home/009.png'),
        },
        {
          img_src: require('@/assets/images/home/009.png'),
        },
        {
          img_src: require('@/assets/images/home/009.png'),
        },
      ],

      myOptions: {
        navButtons: false,
        slidesToShow: 1,
        dots: true,
        infinite: false,
      },

      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>

<style lang="scss">
.app_card_wrapper_slider {
  margin: auto;
  padding: 20px;
  border-radius: 30px;
  min-height: 500px;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
  .main_card_slider {
    height: 280px;
    .slick-list {
      overflow: hidden;
      height: 280px;
      .slick-slide {
        margin: auto;
        text-align: center;
        overflow: hidden;
        // height: 280px;
        .main_slider_wrapping {
          border-radius: 30px;
          overflow: hidden;
          width: 100% !important;
          margin: auto;
          height: 280px;
          .img {
            width: 100% !important;
            height: 100%;
            margin: auto;
            border-radius: 30px;
          }
        }
      }
    }
    .slick-dots {
      bottom: 0;
      padding-bottom: 10px;
      padding-top: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      li {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: $white;
        &.slick-active,
        &:hover {
          background-color: $second-color;
        }
        button:before {
          content: '';
        }
      }
    }
  }
  .main_card_content {
    padding: 20px 0;
    .title {
      color: $main-color;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      position: relative;
      z-index: 22;
    }
    .text {
      color: $slider-p-color;
      font-weight: 400;
      font-size: 17px;
      line-height: 150%;
      margin-bottom: 0;
      @media (min-width: 320px) and (max-width: 768px) {
        display: none;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    min-height: 350px;
    gap: 20px;
    background-color: transparent;
    box-shadow: none;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 80%;
      height: 100%;
      top: 0;
      right: 0;
      background-color: $white;
      border-radius: 30px;
      z-index: -1;
      box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
    }
    .main_card_slider {
      width: 300px;
      height: 280px;
    }
    .main_card_content {
      .title {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 576px) {
    display: block;
    text-align: center;
    min-height: auto;
    box-shadow: none;
    padding: 10px;
    &::before {
      display: none;
    }
    .main_card_content {
      .title {
        font-size: 16px;
      }
    }
  }
}
</style>
