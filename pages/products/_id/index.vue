<template>
  <div class="related_products_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <!-- //? start search wrapper  -->
      <div class="search_wrapper">
        <div class="main_search_inputs">
          <input @input="show_search" type="text" placeholder="Search..." />
          <svg class="icon">
            <use xlink:href="~/static/svg/sprite.svg#search"></use>
          </svg>
          <div class="search_results" v-if="show_search_result">
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
          </div>
        </div>
      </div>
      <!-- //?  end search wrapper  -->
    </div>

    <div class="main_categories">
      <div class="container-fluid">
        <div class="category_slider_wrapper related_slider_wrapper">
          <div class="for_sliders_img">
            <client-only>
              <VueSlickCarousel v-bind="settings">
                <div
                  class="main_slider_wrapping"
                  v-for="item in single_category.images"
                  :key="item.id"
                >
                  <img class="d-block img" :src="item.url" alt="card-img" />
                </div>
              </VueSlickCarousel>
            </client-only>
          </div>
          <div class="for_text_wrapping">
            <h3>{{ single_category.name }}</h3>
            <div>
              <p>
                {{ single_category.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--//? main categories  -->
      <h3 class="mb-5 text-center">Related Products</h3>
      <div class="categories_list">
        <div class="container-fluid">
          <div class="row">
            <div
              class="wrapping col-lg-4 col-md-6 mb-5"
              v-for="i in single_category.products"
              :key="i.id"
            >
              <SharedCategoryCard :items="i"></SharedCategoryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SingleCategory',
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

        {
          name: 'Single Products',
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

      show_search_result: false,
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
  async asyncData({ store, route }) {
    const get_single_category = await store.dispatch(
      'front/products/get_single_category',
      route.params.id
    )
    return {
      get_single_category,
    }
  },
  methods: {
    show_search() {
      this.show_search_result = !this.show_search_result
    },
  },
  computed: {
    ...mapGetters({
      single_category: ['front/products/get_single_category'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.related_products_wrapper {
  padding-top: 90px;
  .search_wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    @media (min-width: 320px) and (max-width: 767px) {
      justify-content: unset;
    }
    .main_search_inputs {
      width: fit-content;
      position: relative;
      .search_results {
        position: absolute;
        width: 100%;
        left: 0;
        max-height: 200px;
        z-index: 99999;
        overflow-y: auto;
        text-align: center;
        padding: 8px;
        background-color: $white;
        box-shadow: 0px 15px 38px -21px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 10px 10px;
        span {
          color: #6a6d70;
          margin-bottom: 5px;
          font-size: 12px;
          font-weight: 300;
        }
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #c2c2c2;
          border-radius: 10px;
        }
      }
      .icon {
        fill: $third-color;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
      input {
        border: none;
        outline: none;
        border-bottom: 1px solid $third-color;
        color: $p-text-color;
        &::placeholder {
          color: rgba(0, 139, 120, 0.46);
          font-size: 14px;
        }
      }
    }
  }
  .main_categories {
    padding-top: 50px;
    background-image: url('@/assets/images/home/background-2.png');
    background-size: 100% 100%;
    background-position: center center;
    //? category list
    .categories_list {
      .wrapping {
        @media (min-width: 580px) and (max-width: 767px) {
          width: 50%;
        }
        @media (min-width: 320px) and (max-width: 580px) {
          width: 100%;
        }
      }
    }
  }
  //? category_slider_wrapper
  .category_slider_wrapper {
    display: flex;
    gap: 50px;
    // margin-top: 50px;
    margin-bottom: 50px;
    @media (min-width: 320px) and (max-width: 991px) {
      display: block;
    }
    .for_text_wrapping {
      margin-top: 20px;
      flex-grow: 1;
      @media (min-width: 320px) and (max-width: 991px) {
        margin-top: 50px;
      }

      h3 {
        color: $main-color;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        margin-bottom: 20px;
      }
      h6 {
        color: $second-color;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
      }
      p {
        font-weight: 400;
        line-height: 120%;
        color: $p-text-color;
      }
    }
  }
}
</style>

<style lang="scss">
$width: 400px;
$width-sm: 270px;
$height: 300px;
.related_products_wrapper {
  .related_slider_wrapper {
    .for_sliders_img {
      height: 300px;
      width: 400px;
      margin: auto;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
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
        overflow: hidden;
        .slick-slide {
          margin: auto;
          text-align: center;
          overflow: hidden;
          .main_slider_wrapping {
            border-radius: 30px;
            overflow: hidden;
            width: 100% !important;
            height: 300px;
            margin: auto;
            @media (min-width: 1300px) and (max-width: 1500px) {
              height: 400px;
              width: 420px;
            }
            @media (min-width: 1500px) {
              width: 500px;
              height: 400px;
            }
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
