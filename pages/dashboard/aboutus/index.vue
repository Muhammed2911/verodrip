<template>
  <section class="about_wrapper">
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
            <div class="content_card">
              <TextEditor
                :list="about_us_items"
                alerts="dashboard/about/get_errors"
                storex="about/get_about"
                storeSubmit="about/update_about"
                item="header"
                title="header"
                :withEditor="true"
              ></TextEditor>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->

      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.about_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.about') }}
          </b-button>
        </b-card-header>
        <b-collapse id="about_section" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about"
                    storeSubmit="about/update_about"
                    item="image"
                    title="image"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="about_us_items"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about"
                    storeSubmit="about/update_about"
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
          <b-button block v-b-toggle.marketing_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.marketing') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="marketing_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="about_market_items"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_marketing"
                    storeSubmit="about/update_about_marketing"
                    item="title"
                    title="title"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="about_market_items"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_marketing"
                    storeSubmit="about/update_about_marketing"
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
          <b-button block v-b-toggle.mission_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.mission') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="mission_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_mission"
                    storeSubmit="about/update_about_mission"
                    item="image"
                    title="image"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="about_mission_items"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_mission"
                    storeSubmit="about/update_about_mission"
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
          <b-button block v-b-toggle.vision_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.vision') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="vision_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <FileUpload
                    storeSubmit="about/update_about_vision"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_vision"
                    item="image"
                    title="image"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="about_vision_items"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_about_vision"
                    storeSubmit="about/update_about_vision"
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
          <b-button block v-b-toggle.clients_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.clients_details') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="clients_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="row">
              <div class="col-lg-3">
                <div class="content_card">
                  <TextEditor
                    :list="about_clients_main"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_main_clients"
                    storeSubmit="about/update_main_clients"
                    item="title"
                    title="title"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->

              <div class="col-lg-9">
                <div class="content_card">
                  <TextEditor
                    :list="about_clients_main"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_main_clients"
                    storeSubmit="about/update_main_clients"
                    item="paragraph"
                    title="paragraph"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->

            <div
              class="row"
              v-for="(client, index) in about_clients"
              :key="index"
            >
              <div class="col-lg-3">
                <FileUpload
                  alerts="dashboard/about/get_errors"
                  storex="about/get_clients"
                  storeSubmit="about/update_client"
                  :withID="true"
                  :id="client.id"
                  :isPatch="true"
                  item="logo"
                  title="client_logo"
                ></FileUpload>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <TextEditor
                  :list="client"
                  alerts="dashboard/about/get_errors"
                  storex="about/get_clients"
                  storeSubmit="about/update_client"
                  :withID="true"
                  :id="client.id"
                  :isPatch="true"
                  item="name"
                  title="client_name"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-5">
                <div class="d-flex">
                  <TextEditor
                    style="width: 90%"
                    :list="client"
                    alerts="dashboard/about/get_errors"
                    storex="about/get_clients"
                    storeSubmit="about/update_client"
                    :withID="true"
                    :id="client.id"
                    :isPatch="true"
                    item="url"
                    title="client_url"
                  ></TextEditor>
                  <div
                    style="width: 10%"
                    class="d-flex justify-content-center flex-column"
                  >
                    <button
                      type="button"
                      class="btn btn_add_client mb-4"
                      v-if="index === 0"
                      :disabled="loading"
                      @click="addNewItem"
                    >
                      <svg class="icon">
                        <use xlink:href="~/static/svg/sprite.svg#sq_plus"></use>
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="btn btn_delete_client"
                      :disabled="loading"
                      @click="deleteItem(client.id)"
                    >
                      <svg class="icon">
                        <use
                          xlink:href="~/static/svg/sprite.svg#outline_delete"
                        ></use>
                      </svg>
                    </button>
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
    </div>
    <!-- end:: accordion -->
    <ConfirmDelete
      :show="m_confirm"
      @confirm-delete="confirmDelete"
    ></ConfirmDelete>
  </section>
</template>

<script src="~/pages/dashboard/aboutus/-script.js"></script>

<style lang="scss" scoped>
.btn_add_client {
  padding: 0;
  box-shadow: none;
  .icon {
    fill: #1f3857;
    width: 20px;
    height: 20px;
  }
}
.btn_delete_client {
  padding: 0;
  box-shadow: none;
  .icon {
    fill: #ed4c49;
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 991px) {
  .about_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>