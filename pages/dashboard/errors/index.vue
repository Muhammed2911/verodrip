<template>
  <section class="errors_wrapper">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.error_404 variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.error_404') }}
          </b-button>
        </b-card-header>
        <b-collapse id="error_404" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error404_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="header"
                    title="header"
                    type="404"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error404_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="title"
                    title="title"
                    type="404"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error404_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="button"
                    title="call_to_action"
                    type="404"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->
            <div class="row">
              <div class="col-lg-8">
                <div class="content_card">
                  <TextEditor
                    :list="error404_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="paragraph"
                    title="paragraph"
                    type="404"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/errors/get_errors"
                    storex="errors/get_errors"
                    storeSubmit="products/update_categories"
                    item="image"
                    title="logo"
                    type="404"
                  ></FileUpload>
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
          <b-button block v-b-toggle.error_500 variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.error_500') }}
          </b-button>
        </b-card-header>
        <b-collapse id="error_500" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error500_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="header"
                    title="header"
                    type="500"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error500_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="title"
                    title="title"
                    type="500"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="error500_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="button"
                    title="call_to_action"
                    type="500"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->
            <div class="row">
              <div class="col-lg-8">
                <div class="content_card">
                  <TextEditor
                    :list="error500_items"
                    storex="errors/get_errors"
                    alerts="dashboard/errors/get_errors"
                    storeSubmit="errors/update_errors"
                    item="paragraph"
                    title="paragraph"
                    type="500"
                    :withEditor="true"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/errors/get_errors"
                    storex="errors/get_errors"
                    storeSubmit="products/update_categories"
                    item="image"
                    title="logo"
                    type="500"
                  ></FileUpload>
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

<script src="~/pages/dashboard/errors/-script.js"></script>

<style lang="scss">
@media (max-width: 991px) {
  .errors_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>