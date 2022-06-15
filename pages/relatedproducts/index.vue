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
            <agile v-bind="myOptionsCategory">
              <div class="slide" v-for="(item, index) in slides" :key="index">
                <img :src="item.img_src" alt="card-img" />
              </div>
            </agile>
          </div>
          <div class="for_text_wrapping">
            <h3>Product descriptıon</h3>
            <div>
              <h6>Description</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus
              </p>
            </div>
            <div>
              <h6>Product Category</h6>
              <p>Pipe Lines down more specific info</p>
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
              v-for="i in 9"
              :key="i"
            >
              <SharedCategoryCard></SharedCategoryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedProducts',
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
          name: 'Categories',
          to: '/products',
        },
        {
          name: 'Related Products',
          to: '/relatedproducts',
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
      myOptionsCategory: {
        navButtons: false,
        slidesToShow: 1,
        dots: true,
        infinite: false,
      },
      show_search_result: false,
    }
  },
  methods: {
    show_search() {
      this.show_search_result = !this.show_search_result
    },
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
  // .container-fluid {
  //   padding: 0 60px;
  // }
}
</style>

<style lang="scss">
$width: 400px;
$width-sm: 270px;
$height: 300px;
.related_products_wrapper {
  .related_slider_wrapper {
    .for_sliders_img {
      height: $height;
      width: $width !important;
      margin: auto;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
      position: relative;
      z-index: 5;
      border-radius: 30px;
      @media (min-width: 320px) and (max-width: 480px) {
        width: $width-sm !important;
      }
      .agile {
        width: $width !important;
        @media (min-width: 320px) and (max-width: 480px) {
          width: $width-sm !important;
        }
        overflow: unset;
        .agile__list {
          overflow: hidden;
        }
        .agile__slide {
          height: $height;
          width: $width !important;
          @media (min-width: 320px) and (max-width: 480px) {
            width: $width-sm !important;
          }
          border-radius: 10px;
          margin: auto;
        }
        .agile__actions {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          padding-bottom: 15px;
          padding-top: 15px;
          background-color: rgba(0, 0, 0, 0.2);
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
          .agile__dots {
            .agile__dot {
              button {
                border: none;
                background-color: $white;
                width: 10px;
                height: 10px;
                margin: 0 5px;
                border-radius: 50%;
                box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
                transition: $main-transition;
                &:hover {
                  background-color: $second-color;
                }
              }
              &.agile__dot--current {
                button {
                  background-color: $second-color;
                }
              }
            }
          }
        }
        .agile__track {
          gap: 10px;
        }
      }
      .slide {
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 30px;
        }
      }
    }
  }
}
</style>
