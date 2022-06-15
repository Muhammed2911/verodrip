<template>
  <section class="home_wrapper">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.top_navbar variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.top_nav_text') }}
          </b-button>
        </b-card-header>
        <b-collapse id="top_navbar" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <NavbarDemo :busy="loading" :item="navbar_list"></NavbarDemo>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <div class="header_wrapper">
                    <h6>{{ $t('admin.logo') }}</h6>
                  </div>
                  <div class="action_wrapper">
                    <div class="uploader">
                      <input
                        type="file"
                        class="nav_logo"
                        @change="handleUpload"
                      />
                      <div>
                        <div
                          class="
                            d-flex
                            justify-content-center
                            align-items-center
                          "
                        >
                          <span class="icon">
                            <svg>
                              <use
                                xlink:href="~/static/svg/sprite.svg#upload"
                              ></use>
                            </svg>
                          </span>
                        </div>
                        <p class="hint">{{ $t('admin.upload_hint') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <div class="header_wrapper">
                    <h6>{{ $t('admin.navbar_elem') }}</h6>
                  </div>
                  <div class="action_wrapper">
                    <div class="switch_elem_wrapper">
                      <div>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="services"
                          @click="copyText"
                        >
                          {{ navbar_list.services }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="products"
                          @click="copyText"
                        >
                          {{ navbar_list.products }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="projects"
                          @click="copyText"
                        >
                          {{ navbar_list.projects }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="crop_applications"
                          @click="copyText"
                        >
                          {{ navbar_list.crop_applications }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="about_us"
                          @click="copyText"
                        >
                          {{ navbar_list.about_us }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-default"
                          data-ref="navbar_links"
                          data-item="contact_us"
                          @click="copyText"
                        >
                          {{ navbar_list.contact_us }}
                        </button>
                      </div>
                      <LocaleDropdown
                        attr="navbar"
                        @locale-change="changeLocale"
                      ></LocaleDropdown>
                    </div>
                    <div class="editor_wrapper">
                      <form @submit.prevent="handleForm" data-ref="navbar_form">
                        <div class="flex_wrapper">
                          <div class="input_wrapper">
                            <span class="locale_text">
                              {{ navbar.locale }} :
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              :placeholder="$t('admin.input_placeholder')"
                              v-model="navbar.text_value"
                              data-id="input"
                            />
                          </div>
                          <div class="option_wrapper">
                            <button type="submit" class="btn btn_submit">
                              <svg class="icon">
                                <use
                                  xlink:href="~/static/svg/sprite.svg#d_long_arrow"
                                ></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
          <b-button block v-b-toggle.hero_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.hero_section') }}
          </b-button>
        </b-card-header>
        <b-collapse id="hero_section" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <HeroSectionDemo
              :busy="loading"
              :items="hero_section"
            ></HeroSectionDemo>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/home/get_errors"
                    storex="home/get_herosection"
                    storeSubmit="products/update_herosection"
                    item="image"
                    title="image"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="hero_section"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_herosection"
                    storeSubmit="products/update_herosection"
                    item="header"
                    title="header"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="hero_section"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_herosection"
                    storeSubmit="products/update_herosection"
                    item="button"
                    title="call_to_action"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="hero_section"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_herosection"
                    storeSubmit="products/update_herosection"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-12">
                <div class="content_card">
                  <div class="header_wrapper">
                    <h6>{{ $t('admin.paragraph') }}</h6>
                  </div>
                  <div class="action_wrapper">
                    <div class="switch_elem_wrapper">
                      <div>
                        <div>
                          <button
                            type="button"
                            class="btn btn-default"
                            data-ref="hero_items"
                            :data-num="hero_section.finished_projects_number"
                            data-item="finished_projects"
                            @click="copyText"
                          >
                            {{ hero_section.finished_projects }}
                          </button>
                          <button
                            type="button"
                            class="btn btn-default"
                            data-ref="hero_items"
                            :data-num="hero_section.customers_number"
                            data-item="customers"
                            @click="copyText"
                          >
                            {{ hero_section.customers }}
                          </button>
                          <button
                            type="button"
                            class="btn btn-default"
                            data-ref="hero_items"
                            :data-num="hero_section.locations_number"
                            data-item="locations"
                            @click="copyText"
                          >
                            {{ hero_section.locations }}
                          </button>
                        </div>
                      </div>
                      <LocaleDropdown
                        attr="navbar"
                        @locale-change="changeLocale"
                      ></LocaleDropdown>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <form @submit.prevent="handleForm" data-ref="hero_form">
                          <div class="editor_wrapper">
                            <div class="flex_wrapper">
                              <div class="input_wrapper">
                                <span class="locale_text">
                                  {{ herosection.locale }} :
                                </span>
                                <input
                                  type="text"
                                  class="form-control"
                                  :placeholder="$t('admin.input_placeholder')"
                                  v-model="herosection.counter_name"
                                  data-item="paragraph"
                                  data-ref="hero_items"
                                  ref="input"
                                />
                              </div>
                              <div class="option_wrapper">
                                <button type="submit" class="btn btn_submit">
                                  <svg class="icon">
                                    <use
                                      xlink:href="~/static/svg/sprite.svg#d_long_arrow"
                                    ></use>
                                  </svg>
                                </button>
                              </div>
                              <!-- end:: option_wrapper -->
                            </div>
                          </div>
                        </form>
                      </div>
                      <!-- end:: col -->
                      <div class="col-lg-6">
                        <form @submit.prevent="handleForm" data-ref="hero_form">
                          <div class="editor_wrapper">
                            <div class="flex_wrapper">
                              <div class="input_wrapper">
                                <span class="locale_text">
                                  {{ herosection.locale }} :
                                </span>
                                <input
                                  type="text"
                                  class="form-control"
                                  :placeholder="$t('admin.counter_placeholder')"
                                  v-model="herosection.counter_num"
                                  data-item="paragraph"
                                  data-ref="hero_items"
                                  ref="input"
                                />
                              </div>
                              <div class="option_wrapper">
                                <button type="submit" class="btn btn_submit">
                                  <svg class="icon">
                                    <use
                                      xlink:href="~/static/svg/sprite.svg#d_long_arrow"
                                    ></use>
                                  </svg>
                                </button>
                              </div>
                              <!-- end:: option_wrapper -->
                            </div>
                          </div>
                        </form>
                      </div>
                      <!-- end:: col -->
                    </div>
                    <!-- end:: row -->
                  </div>
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
          <b-button block v-b-toggle.services_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.services') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="services_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="services"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_services_header"
                    storeSubmit="home/update_services_header"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="services"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_services_header"
                    storeSubmit="home/update_services_header"
                    item="paragraph"
                    title="paragraph"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="services"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_services_header"
                    storeSubmit="home/update_services_header"
                    item="button"
                    title="call_to_action"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="services"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_services_header"
                    storeSubmit="home/update_services_header"
                    item="question"
                    title="question"
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
          <b-button block v-b-toggle.products_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.products') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="products_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="products"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_products"
                    storeSubmit="home/update_products"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="products"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_products"
                    storeSubmit="home/update_products"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="products"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_products"
                    storeSubmit="home/update_products"
                    item="button"
                    title="call_to_action"
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
          <b-button block v-b-toggle.crop_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.crop') }}
          </b-button>
        </b-card-header>
        <b-collapse id="crop_section" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="crop"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_crop"
                    storeSubmit="home/update_crop"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="crop"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_crop"
                    storeSubmit="home/update_crop"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="crop"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_crop"
                    storeSubmit="home/update_crop"
                    item="button"
                    title="call_to_action"
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
          <b-button block v-b-toggle.projects_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.projects') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="projects_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="projects"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_projects"
                    storeSubmit="home/update_projects"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="projects"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_projects"
                    storeSubmit="home/update_projects"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="projects"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_projects"
                    storeSubmit="home/update_projects"
                    item="button"
                    title="call_to_action"
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
          <b-button block v-b-toggle.area_action variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.area_action') }}
          </b-button>
        </b-card-header>
        <b-collapse id="area_action" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_area_action"
                    storeSubmit="home/update_area_action"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_area_action"
                    storeSubmit="home/update_area_action"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_area_action"
                    storeSubmit="home/update_area_action"
                    item="button"
                    title="call_to_action"
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
          <b-button block v-b-toggle.l_area_action variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.l_area_action') }}
          </b-button>
        </b-card-header>
        <b-collapse id="l_area_action" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="l_area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_larea_action"
                    storeSubmit="home/update_larea_action"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="l_area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_larea_action"
                    storeSubmit="home/update_larea_action"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="l_area_action"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_larea_action"
                    storeSubmit="home/update_larea_action"
                    item="button"
                    title="call_to_action"
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
          <b-button block v-b-toggle.footer variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.footer') }}
          </b-button>
        </b-card-header>
        <b-collapse id="footer" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="footer"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_footer"
                    storeSubmit="home/update_footer"
                    item="follow_us_on"
                    title="follow_us"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-6">
                <div class="content_card">
                  <TextEditor
                    :list="footer"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_footer"
                    storeSubmit="home/update_footer"
                    item="logo_text"
                    title="footer_logo_text"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="footer"
                    alerts="dashboard/home/get_errors"
                    storex="home/get_footer"
                    storeSubmit="home/update_footer"
                    item="all_rights_reserved"
                    title="right_reserved"
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
    </div>
    <!-- end:: accordion -->
  </section>
</template>

<script src="~/pages/dashboard/-script.js"></script>

<style lang="scss">
#editor_modal {
  .modal-content {
    background-color: transparent;
    border: none;
  }
  .header_wrapper {
    background-color: #fdf0e1;
    color: $second-color;
    border-left: 2px solid $second-color;
    padding: 10px 12px;
    border-radius: 4px;
    margin-bottom: 15px;
    h5 {
      font-size: 18px;
      margin-bottom: 0;
    }
  }
  .body_wrapper {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }
}
.ck.ck-editor__main,
.ck.ck-editor__main > .ck-editor__editable {
  min-height: 400px;
}

.faq_accordion.accordion {
  margin: auto;
  max-height: 512px;
  overflow-y: auto;
  padding-right: 3rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 10px;
  }
  .block_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12px;
    position: relative;
    background-color: #ff8f151f;
    border-radius: 4px;
    margin-bottom: 15px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background-color: $second-color;
    }
    h6 {
      margin-bottom: 0;
      color: $second-color;
    }
    .icon {
      width: 15px;
      height: 15px;
      fill: #ff8f15;
    }
  }
  .card {
    border: 1px solid rgba(0, 139, 120, 0.39);
    background-color: #fff;
    position: relative;
    z-index: 10;
  }
  .card-header {
    padding: 0;
    border: none;
    .tabs_button {
      width: 100%;
      background: none;
      border: none;
      background: $white;
      border-radius: 8px;
      color: $third-color;
      padding: 0.8rem;
      &:focus {
        box-shadow: none;
      }
      span {
        font-weight: 500;
        font-size: 16px;
      }
      .icon {
        width: 20px;
        height: 20px;
        fill: $third-color;
        &.icon_minus {
          fill: $second-color;
        }
      }
    }
    .collapsed {
      .icon {
        &.icon_plus {
          display: block;
        }
        &.icon_minus {
          display: none;
        }
      }
    }
    .not-collapsed {
      .icon {
        &.icon_plus {
          display: none;
        }
        &.icon_minus {
          display: block;
        }
      }
    }
  }
  .card-body {
    background: rgba(196, 196, 196, 0.03);
    color: $p-text-color;
    span {
      font-weight: 600;
      font-size: 16px;
      color: $third-color;
    }
  }
}

@media (max-width: 991px) {
  .home_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>