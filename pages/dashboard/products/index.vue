<template>
  <section class="products_wrapper">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.header_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.header') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="header_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="p_main_items"
                    storex="products/get_products_main"
                    storeSubmit="products/update_products_main"
                    item="title"
                    title="title"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="p_main_items"
                    storex="products/get_products_main"
                    storeSubmit="products/update_products_main"
                    item="description"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->

            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="p_main_items"
                    storex="products/get_products_main"
                    storeSubmit="products/update_products_main"
                    item="button"
                    title="call_to_action"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="p_main_items"
                    storex="products/get_products_main"
                    storeSubmit="products/update_products_main"
                    item="title_two"
                    title="second_title"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->

            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    storeSubmit="products/update_products_main"
                    item="brochure"
                    title="brochure"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="p_main_items"
                    storex="products/get_products_main"
                    storeSubmit="services/update_products_main"
                    item="description_two"
                    title="second_paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->

      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.products variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.categories') + ` (${categories.length})` }}
          </b-button>
        </b-card-header>
        <b-collapse id="products" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="buttons_wrapper">
              <button
                type="button"
                class="btn btn_delete"
                @click="deleteItem"
                v-if="!checkCateList"
                :disabled="loading"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#trash"></use>
                </svg>
                <span> {{ $t('admin.delete_category') }} </span>
              </button>
              <button
                type="button"
                class="btn btn_add"
                :disabled="loading"
                @click="addNewItem"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#circle_plus"></use>
                </svg>
                <span> {{ $t('admin.add_n_category') }} </span>
              </button>
            </div>
            <!-- end:: buttons_wrapper -->

            <div v-if="!checkCateList">
              <ProductsDemo
                :categories="categories"
                @catch-id="catchID"
              ></ProductsDemo>
              <div class="row">
                <div class="col-lg-3">
                  <div class="category_card">
                    <div class="imgs_wrapper">
                      <client-only v-if="!checkCateLength">
                        <VueSlickCarousel
                          v-bind="sub_settings"
                          class="sub_slider"
                          v-if="category.images >= 1"
                        >
                          <div
                            class="m_wrapper"
                            v-for="(image, index) in category.images"
                            :key="index"
                          >
                            <img :src="image.url" alt="product" />
                          </div>
                        </VueSlickCarousel>
                        <div class="m_wrapper" v-else>
                          <img :src="category.cover" alt="product" />
                        </div>
                      </client-only>
                    </div>
                    <div class="info_wrapper">
                      <h4>{{ category.name }}</h4>
                    </div>
                  </div>
                </div>
                <!-- end:: col -->

                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="content_card">
                        <FileUpload
                          alerts="dashboard/products/get_errors"
                          storeSubmit="products/update_categories"
                          :isPatch="true"
                          :withID="true"
                          :id="cate_id"
                          item="cover"
                          title="cover_image"
                        ></FileUpload>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-4">
                      <div class="content_card">
                        <FileUpload
                          alerts="dashboard/products/get_errors"
                          storeSubmit="products/update_categories"
                          :isPatch="true"
                          :withID="true"
                          :id="cate_id"
                          item="image"
                          title="category_image"
                        ></FileUpload>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-4">
                      <div class="content_card">
                        <TextEditor
                          :list="category"
                          storex="products/get_category"
                          storeSubmit="products/update_categories"
                          item="name"
                          title="category_name"
                          :withID="true"
                          :id="cate_id"
                          :isPatch="true"
                        ></TextEditor>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-12">
                      <div class="content_card">
                        <TextEditor
                          :list="category"
                          storex="products/get_category"
                          storeSubmit="products/update_categories"
                          item="description"
                          title="description"
                          :withID="true"
                          :id="cate_id"
                          :isPatch="true"
                          :withEditor="true"
                        ></TextEditor>
                      </div>
                    </div>
                    <!-- end:: col -->
                  </div>
                  <!-- end:: row -->
                </div>
                <!-- end:: col -->
              </div>
              <!-- end:: row -->
            </div>
            <!-- end:: demo_wrapper -->
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->

      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.products_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.products') + ` (${products.length})` }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="products_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div
              class="buttons_wrapper justify-content-between align-items-center"
            >
              <div class="d-flex">
                <client-only>
                  <BaseAppSelectBox
                    :isLabel="false"
                    :options="cateDropdown"
                    :placeholder="$t('admin.category')"
                    class="search_project mr-2"
                  ></BaseAppSelectBox>
                  <BaseAppSelectBox
                    :isLabel="false"
                    :options="prodDropdown"
                    :placeholder="$t('admin.products')"
                    class="search_project"
                  ></BaseAppSelectBox>
                </client-only>
              </div>
              <div>
                <button type="button" class="btn btn_delete">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#trash"></use>
                  </svg>
                  <span> {{ $t('admin.delete_product') }} </span>
                </button>
                <button type="button" class="btn btn_add">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#circle_plus"></use>
                  </svg>
                  <span> {{ $t('admin.add_n_product') }} </span>
                </button>
              </div>
            </div>
            <!-- end:: buttons_wrapper -->
            <div>
              <div class="row">
                <div class="col-lg-3">
                  <div class="product_card">
                    <div class="imgs_wrapper">
                      <client-only>
                        <VueSlickCarousel
                          v-bind="sub_settings"
                          class="sub_slider"
                        >
                          <div
                            class="m_wrapper"
                            v-for="(item, index) in 4"
                            :key="index"
                          >
                            <img
                              src="~/assets/images/home/009.png"
                              alt="product"
                            />
                          </div>
                        </VueSlickCarousel>
                      </client-only>
                    </div>
                    <div class="info_wrapper">
                      <h4>Pipe Lines</h4>
                    </div>
                  </div>
                  <!-- end:: product_card -->
                  <div class="content_card">
                    <div class="header_wrapper">
                      <h6>{{ $t('admin.product_category') }}</h6>
                    </div>
                    <div class="action_wrapper">
                      <BaseAppSelectBox
                        :isLabel="false"
                        :options="categories"
                        placeholder="Categories"
                        class="search_project"
                      ></BaseAppSelectBox>
                    </div>
                  </div>
                  <!-- end:: product_category -->
                </div>
                <!-- end:: col -->

                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="content_card">
                        <FileUpload
                          alerts="dashboard/products/get_errors"
                          storeSubmit="products/get_products"
                          :isPatch="true"
                          :withID="true"
                          :id="prod_id"
                          item="cover"
                          title="cover_image"
                        ></FileUpload>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-4">
                      <div class="content_card">
                        <FileUpload
                          alerts="dashboard/products/get_errors"
                          storeSubmit="products/get_products"
                          :isPatch="true"
                          :withID="true"
                          :id="prod_id"
                          item="image"
                          title="category_image"
                        ></FileUpload>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-4">
                      <div class="content_card">
                        <TextEditor
                          :list="product"
                          storex="products/get_product"
                          storeSubmit="products/edit_product"
                          item="name"
                          title="category_name"
                          :withID="true"
                          :id="prod_id"
                          :isPatch="true"
                        ></TextEditor>
                      </div>
                    </div>
                    <!-- end:: col -->
                    <div class="col-lg-12">
                      <div class="content_card">
                        <TextEditor
                          :list="product"
                          storex="products/get_product"
                          storeSubmit="products/edit_product"
                          item="description"
                          title="description"
                          :withID="true"
                          :id="prod_id"
                          :isPatch="true"
                          :withEditor="true"
                        ></TextEditor>
                      </div>
                    </div>
                    <!-- end:: col -->
                  </div>
                  <!-- end:: row -->
                </div>
                <!-- end:: col -->
              </div>
              <!-- end:: row -->
              <div class="row">
                <div class="col-lg-3" v-for="item in 6" :key="item">
                  <div class="product_card">
                    <div class="imgs_wrapper">
                      <client-only>
                        <VueSlickCarousel
                          v-bind="sub_settings"
                          class="sub_slider"
                        >
                          <div
                            class="m_wrapper"
                            v-for="(item, index) in 4"
                            :key="index"
                          >
                            <img
                              src="~/assets/images/home/009.png"
                              alt="product"
                            />
                          </div>
                        </VueSlickCarousel>
                      </client-only>
                    </div>
                    <div class="info_wrapper">
                      <h4>Pipe Lines</h4>
                    </div>
                  </div>
                </div>
                <!-- end::col -->
              </div>
              <!-- end:: row -->
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->
    </div>
    <!-- end:: accordion -->
    <ConfirmDelete
      :show="m_confirm"
      @confirm-delete="confirmDelete"
    ></ConfirmDelete>
  </section>
</template>

<script src="~/pages/dashboard/products/-script.js"></script>

<style lang="scss" scoped>
.category_card {
  padding: 8px;
  border-radius: 10px;
  background-color: #4e627d33;
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
.product_card {
  padding: 8px;
  border-radius: 10px;
  .m_wrapper {
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 300px;
      border-radius: 10px;
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
@media (max-width: 991px) {
  .products_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>

<style lang="scss">
.category_card,
.product_card {
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
      bottom: 4px;
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
.product_card {
  .slick-dots {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>