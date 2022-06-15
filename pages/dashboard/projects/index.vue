<template>
  <div class="projects_wrapper">
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
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="title"
                  title="title"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-9">
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="description"
                  title="paragraph"
                  :withEditor="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="button"
                  title="call_to_action"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <FileUpload
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="image"
                  title="image"
                ></FileUpload>
              </div>
              <!-- end:: col -->
              <div class="col-lg-5">
                <FileUpload
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="portfolio"
                  title="portfolio"
                ></FileUpload>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="button_two"
                  title="call_to_action2"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="title_two"
                  title="title2"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-5">
                <TextEditor
                  :list="get_headers"
                  storex="projects/get_headers"
                  alerts="dashboard/projects/get_errors"
                  storeSubmit="projects/update_headers"
                  item="description_two"
                  title="paragraph2"
                  :withEditor="true"
                ></TextEditor>
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
            {{ $t('admin.projects') + ` (${projects.length})` }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="projects_section"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div class="buttons_wrapper">
              <button
                type="button"
                class="btn btn_delete"
                @click="deleteItem"
                v-if="projects.length >= 1"
                :disabled="loading"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#trash"></use>
                </svg>
                <span> {{ $t('admin.delete_service') }} </span>
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
                <span> {{ $t('admin.add_n_service') }} </span>
              </button>
            </div>
            <!-- end:: buttons_wrapper -->

            <ProjectsDemo
              v-if="projects.length >= 1"
              :projects="projects"
              @catch-id="catchID"
            ></ProjectsDemo>
            <div class="row" v-if="projects.length >= 1">
              <div class="col-lg-3">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="name"
                  title="project_name"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-5">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="location"
                  title="location"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-4">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="date"
                  title="date"
                  mode="date"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <FileUpload
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  :isPatch="true"
                  :withID="true"
                  :id="proj_id"
                  item="image"
                  title="image"
                ></FileUpload>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="browse_button"
                  title="browse_projects"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="other_button"
                  title="other_projects"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-3">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="button"
                  title="call_to_action"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="summary"
                  title="project_summary"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                  :withEditor="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <TextEditor
                  :list="project"
                  alerts="dashboard/projects/get_errors"
                  storex="projects/get_projects"
                  storeSubmit="projects/update_project"
                  item="description"
                  title="description"
                  :withID="true"
                  :id="proj_id"
                  :isPatch="true"
                  :withEditor="true"
                ></TextEditor>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->

            <div class="no_content" v-if="projects.length < 1">
              <h2 class="title">{{ $t('admin.no_crop') }}</h2>
              <p class="desc">{{ $t('admin.no_crop_text') }}</p>
              <img src="~/assets/images/dashboard/noprojects.svg" alt="thumb" />
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
  </div>
</template>

<script src="~/pages/dashboard/projects/-script.js"></script>