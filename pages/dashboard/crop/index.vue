<template>
  <section class="crop_wrapper">
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
                    :list="crop_header"
                    alerts="dashboard/crop/get_errors"
                    storex="crop/get_crop_header"
                    storeSubmit="crop/update_crop_header"
                    item="button"
                    title="call_to_action"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="crop_header"
                    alerts="dashboard/crop/get_errors"
                    storex="crop/get_crop_header"
                    storeSubmit="crop/update_crop_header"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/crop/get_errors"
                    storeSubmit="crop/update_crop_header"
                    item="brochure"
                    title="brochure"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="crop_header"
                    alerts="dashboard/crop/get_errors"
                    storex="crop/get_crop_header"
                    storeSubmit="crop/update_crop_header"
                    item="paragraph"
                    title="paragraph"
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
          <b-button block v-b-toggle.crop variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.crop') + ` (${crops.length})` }}
          </b-button>
        </b-card-header>
        <b-collapse id="crop" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="buttons_wrapper">
              <button
                type="button"
                class="btn btn_delete"
                @click="deleteItem"
                :disabled="loading"
                v-if="crops.length >= 1"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#trash"></use>
                </svg>
                <span> {{ $t('admin.delete_crop') }} </span>
              </button>
              <button
                type="button"
                class="btn btn_add"
                @click="addNewItem"
                :disabled="loading"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#circle_plus"></use>
                </svg>
                <span> {{ $t('admin.add_n_crop') }} </span>
              </button>
            </div>
            <div v-if="crops.length >= 1">
              <CropDemo :items="crops" @catch-id="catchID"></CropDemo>
              <div class="row">
                <div class="col-lg-3">
                  <div class="crop_preview_img" v-if="cropLength">
                    <svg class="icon">
                      <use xlink:href="~/static/svg/sprite.svg#img_thumb"></use>
                    </svg>
                  </div>
                  <div class="img_wrapper" v-else>
                    <img :src="crop.image" alt="img" />
                    <h5>{{ crop.name }}</h5>
                  </div>
                </div>
                <!-- end:: col -->

                <div class="col-lg-3">
                  <div class="content_card">
                    <FileUpload
                      alerts="dashboard/crop/get_errors"
                      storeSubmit="crop/edit_crop"
                      item="image"
                      title="image"
                      :withID="true"
                      :id="crop_id"
                      :isPatch="true"
                    ></FileUpload>
                  </div>
                </div>
                <!-- end:: col -->

                <div class="col-lg-3">
                  <div class="content_card">
                    <TextEditor
                      :list="crop"
                      alerts="dashboard/crop/get_errors"
                      storex="crop/get_crops"
                      storeSubmit="crop/edit_crop"
                      item="name"
                      title="crop_name"
                      :withID="true"
                      :id="crop_id"
                      :isPatch="true"
                    ></TextEditor>
                  </div>
                </div>
                <!-- end:: col -->

                <div class="col-lg-3">
                  <div class="content_card">
                    <TextEditor
                      :list="crop"
                      alerts="dashboard/crop/get_errors"
                      storex="crop/get_crops"
                      storeSubmit="crop/edit_crop"
                      item="button"
                      title="call_to_action"
                      :withID="true"
                      :id="crop_id"
                      :isPatch="true"
                    ></TextEditor>
                  </div>
                </div>
                <!-- end:: col -->

                <div class="col-lg-12 mt-3">
                  <div class="content_card">
                    <TextEditor
                      :list="crop"
                      alerts="dashboard/crop/get_errors"
                      storex="crop/get_crops"
                      storeSubmit="crop/edit_crop"
                      item="description"
                      title="single_crop_page"
                      :withID="true"
                      :id="crop_id"
                      :isPatch="true"
                      :withEditor="true"
                    ></TextEditor>
                  </div>
                </div>
                <!-- end:: col -->
              </div>
              <!-- end:: row -->
            </div>
            <!-- end:: not empty wrapper -->

            <div class="no_content" v-if="crops.length < 1">
              <h2 class="title">{{ $t('admin.no_crop') }}</h2>
              <p class="desc">{{ $t('admin.no_crop_text') }}</p>
              <img
                src="~/assets/images/dashboard/crop_nocontent.png"
                alt="thumb"
              />
            </div>
            <!-- end:: empty wrapper -->
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

<script src="~/pages/dashboard/crop/-script.js"></script>

<style lang="scss" scoped>
.crop_wrapper {
  .crop_preview_img {
    width: 100%;
    height: 200px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    .icon {
      width: 50px;
      height: 50px;
      fill: #1f3857;
    }
  }
  .img_wrapper {
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
@media (max-width: 991px) {
  .crop_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>