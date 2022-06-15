<template>
  <div class="main_products_wrapper">
    <div class="all_products_categories">
      <div class="container-fluid">
        <div class="mb-5 category_names show_all">
          <h3 class="text-center">Product Categories</h3>
          <nuxt-link :to="localePath('/products/allproducts')"
            >Show all</nuxt-link
          >
        </div>
      </div>

      <!-- //? start slider  -->
      <div class="container-fluid">
        <div class="slider_products_wrapper">
          <client-only>
            <VueSlickCarousel v-bind="main_settings">
              <div
                class="sliding_one"
                v-for="item in categories_data"
                :key="item.id"
                @click="get_category_id(item.id)"
              >
                <!-- //?todo: start slider img  -->
                <div class="wrap_of_every_item" v-if="item.images.length >= 1">
                  <div class="sliding_images">
                    <client-only>
                      <VueSlickCarousel v-bind="settings">
                        <div
                          class="main_slider_wrappings"
                          v-for="img in item.images"
                          :key="img.id"
                        >
                          <img
                            class="d-block img"
                            :src="img.url"
                            alt="card-img"
                          />
                        </div>
                      </VueSlickCarousel>
                    </client-only>
                  </div>
                  <div class="main_slider_content text-uppercase">
                    <h3 class="title">{{ item.name }}</h3>
                    <p class="text">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
                <!-- //?todo: end slider img  -->
              </div>
            </VueSlickCarousel>
          </client-only>
        </div>
      </div>
      <!-- //? end slider  -->

      <!-- //?  start products category  -->
      <div class="main_categories">
        <div class="container-fluid">
          <!--//?todo: start category slider -->
          <div class="category_wrapping">
            <h3>{{ get_main_product.title_two }}</h3>
            <p>
              {{ get_main_product.description_two }}
            </p>

            <!-- //? start category slider  -- single category -->
            <div class="category_slider_wrapper">
              <div class="for_sliders_img" v-if="single_category.images">
                <!-- //? start slider two  -->
                <client-only>
                  <VueSlickCarousel v-bind="settings">
                    <div
                      class="main_slider_wrappings"
                      v-for="item in single_category.images"
                      :key="item.id"
                    >
                      <img class="d-block img" :src="item.url" alt="card-img" />
                    </div>
                  </VueSlickCarousel>
                </client-only>
                <!-- //? end slider two  -->
              </div>
              <div class="for_text_wrapping text-uppercase">
                <h3>{{ single_category.name }}</h3>
                <p>
                  {{ single_category.description }}
                </p>
              </div>
            </div>
            <!-- //? end category slider  -->
          </div>
          <!--//?todo:  end category slider -->

          <div class="category_names">
            <h3>Products</h3>
            <!-- <nuxt-link :to="localePath('/relatedproducts')">Show all</nuxt-link> -->
          </div>

          <!-- //?  list category -->
          <div class="categories_list">
            <div class="row">
              <div
                class="wrapping col-lg-4 col-md-6 mb-5"
                v-for="i in single_category.products"
                :key="i.id"
              >
                <nuxt-link
                  class="category_router_link"
                  :to="
                    localePath({
                      name: 'products/id',
                      params: { id: i.id },
                    })
                  "
                >
                  <SharedCategoryCard :items="i"></SharedCategoryCard>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //? end products category  -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AllProducts',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Products',
          to: '/products',
        },
      ],
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
      slides_img: [
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
      // categories_data: [],
      category_id: 1,
      settings: {
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      main_settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
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

  async asyncData({ store }) {
    const get_categories_data = await store.dispatch(
      'front/products/get_categories'
    )
    return {
      get_categories_data,
    }
  },

  methods: {
    async get_category_id(id) {
      await this.$store.dispatch('front/products/get_single_category', id)
    },
  },
  mounted() {
    this.$store.dispatch('front/products/get_single_category', this.category_id)
  },
  computed: {
    ...mapGetters({
      categories_data: ['front/products/get_all_categories'],
      single_category: ['front/products/get_single_category'],
      get_main_product: ['front/products/get_main_product'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_products_wrapper {
  .category_router_link {
    text-decoration: none;
  }
  .main_content {
    background-image: url('@/assets/images/products/background shape.png');
    background-size: cover;
    background-position: center center;
  }
  .all_products_categories {
    .title {
      color: $main-color;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      margin: 25px 0;
    }
    .main_categories {
      padding-top: 20px;
      background-image: url('@/assets/images/home/background-2.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .categories_list {
        .wrapping {
          @media (min-width: 320px) and (max-width: 580px) {
            width: 100%;
          }
        }
      }
    }
    .category_names {
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // padding: 0 45px;
      h3 {
        color: $second-color;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
      }
      a {
        color: $third-color;
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
        text-decoration: none;
      }
      &.show_all {
        position: relative;
        justify-content: flex-end;
        @media (min-width: 320px) and (max-width: 991px) {
          justify-content: space-between;
          flex-wrap: wrap;
        }
        h3 {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 0;
          @media (min-width: 320px) and (max-width: 991px) {
            position: relative;
            left: auto;
            transform: unset;
          }
        }
      }
    }

    // ? category slider wrapper
    .category_wrapping {
      margin-bottom: 50px;
      .category_slider_wrapper {
        display: flex;
        position: relative;
        min-height: 400px;
        gap: 50px;
        margin-top: 50px;
        padding: 30px 0;
        @media (min-width: 320px) and (max-width: 991px) {
          display: none;
        }
        @media (min-width: 1300px) {
          height: 500px;
        }
        &::before {
          position: absolute;
          content: '';
          background-color: #333;
          width: 92%;
          right: 0;
          top: 0;
          height: 100%;
          background: $white;
          box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1); // ! test shadow
          border-radius: 33px;
        }
        .for_text_wrapping {
          position: relative;
          z-index: 2;
          margin-top: 70px;
          flex-grow: 1;
          h3 {
            color: $main-color;
            font-weight: 700;
            font-size: 24px;
            line-height: 120%;
            margin-bottom: 20px;
          }
          p {
            font-weight: 400;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: $p-text-color;
            width: 70%;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.main_products_wrapper {
  .all_products_categories {
    .slider_products_wrapper {
      .sliding_one {
        padding: 50px 0;
        .wrap_of_every_item {
          width: 93%;
          box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
          margin: auto;
          padding: 20px;
          border-radius: 30px;
          min-height: 500px;

          .sliding_images {
            .slick-list {
              .slick-slide {
                text-align: center;
                overflow: hidden;
                width: 90%;
                .main_slider_wrappings {
                  border-radius: 30px;
                  overflow: hidden;
                  width: 100% !important;
                  // background: red;
                  margin: auto;
                  @media (min-width: 1300px) and (max-width: 1500px) {
                    // height: 400px;
                    // width: 420px;
                  }
                  .img {
                    width: 100% !important;
                    height: 100% !important;
                    margin: auto;
                    border-radius: 30px;
                  }
                }
              }
            }
            .slick-dots {
              bottom: 5px;
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
          // ? slider in samll screen
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
            .sliding_images {
              width: 300px;
              height: 280px;
              .slick-slider {
                height: 280px;
                .slick-list {
                  height: 100%;
                  .slick-slide {
                    height: 100%;
                    .main_slider_wrappings {
                      height: 100%;
                      height: 280px;
                    }
                  }
                }
              }
              .slick-dots {
                bottom: 0;
              }
            }
            .main_slider_content {
              position: relative;
              z-index: 5;
              .text {
                display: none;
              }
              .title {
                font-size: 16px;
              }
            }
          }
          // ? end slider in samll screen

          //  ! start slider in mobile screen
          @media (min-width: 320px) and (max-width: 576px) {
            display: block;
            text-align: center;
            min-height: auto;
            box-shadow: none;
            padding: 10px;
            &::before {
              display: none;
            }
            .main_slider_content {
              position: relative;
              z-index: 5;
              .text {
                display: none;
              }
              .title {
                font-size: 20px;
              }
            }
          }
          //  ! end slider in mobile screen
        }
      }
    }

    .for_sliders_img {
      min-height: 300px;
      width: 420px;
      margin: auto;
      box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
      position: relative;
      z-index: 5;
      border-radius: 30px;

      @media (min-width: 1300px) and (max-width: 1500px) {
        height: 400px;
        width: 420px;
      }
      @media (min-width: 1500px) {
        width: 500px;
        height: 400px;
      }
      // ? start slick style
      .slick-list {
        .slick-slide {
          margin: auto;
          text-align: center;
          overflow: hidden;
          .main_slider_wrappings {
            border-radius: 30px;
            overflow: hidden;
            width: 100% !important;
            margin: auto;
            height: 400px;
            @media (min-width: 1300px) and (max-width: 1500px) {
              height: 400px;
              width: 420px;
            }
            .img {
              width: 100% !important;
              height: 100% !important;
              margin: auto;
              border-radius: 30px;
            }
          }
        }
      }
      .slick-dots {
        bottom: 5px;
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
      // ? end slick style
    }
  }
}
</style>
