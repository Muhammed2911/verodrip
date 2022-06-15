<template>
  <section class="services_wrapper">
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
              <div class="col-lg-4">
                <div class="content_card">
                  <TextEditor
                    :list="services_header"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_services_header"
                    item="button"
                    title="call_to_action"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-8">
                <div class="content_card">
                  <TextEditor
                    :list="services_header"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_services_header"
                    item="header"
                    title="header"
                  ></TextEditor>
                </div>
              </div>
              <!-- end:: col -->
            </div>
            <!-- end:: row -->

            <div class="row">
              <div class="col-lg-4">
                <div class="content_card">
                  <FileUpload
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_services_header"
                    item="brochure"
                    title="brochure"
                  ></FileUpload>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-lg-8">
                <div class="content_card">
                  <TextEditor
                    :list="services_header"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_services_header"
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
          <b-button block v-b-toggle.services variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.services') }}
          </b-button>
        </b-card-header>
        <b-collapse id="services" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="buttons_wrapper">
              <button
                type="button"
                class="btn btn_delete"
                @click="deleteItem"
                v-if="!checkServicesList"
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

            <div v-if="!checkServicesList">
              <ServicesDemo
                :items="services"
                @catch-id="catchID"
              ></ServicesDemo>
              <div class="row justify-content-center mb-4" v-if="!checkItem">
                <div class="col-lg-3">
                  <div class="product_card text-center" @click="catchID">
                    <img
                      class="d-block m-auto"
                      :src="service.icon"
                      alt="products"
                    />
                    <h6 v-html="service.name"></h6>
                    <p class="desc" v-html="service.summary"></p>
                  </div>
                </div>
                <!-- end:: col -->
              </div>
              <!-- end:: row -->
              <div class="row">
                <div class="col-lg-3">
                  <FileUpload
                    alerts="dashboard/services/get_errors"
                    storex="services/update_services_header"
                    storeSubmit="services/update_service"
                    item="icon"
                    title="icon"
                  ></FileUpload>
                </div>
                <!-- end:: col -->
                <div class="col-lg-9">
                  <TextEditor
                    :list="service"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_service"
                    storeSubmit="services/update_service"
                    item="name"
                    title="service_name"
                    :withID="true"
                    :id="ser_id"
                    :withEditor="true"
                    :isPatch="true"
                  ></TextEditor>
                </div>
                <!-- end:: col -->
              </div>
              <!-- end:: row -->

              <div class="row">
                <div class="col-lg-3">
                  <TextEditor
                    :list="service"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_service"
                    item="button"
                    title="call_to_action"
                    :withID="true"
                    :id="ser_id"
                    :isPatch="true"
                    :withEditor="true"
                  ></TextEditor>
                </div>
                <!-- end:: col -->
                <div class="col-lg-9">
                  <TextEditor
                    :list="service"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_service"
                    storeSubmit="services/update_service"
                    item="summary"
                    title="summary"
                    :withID="true"
                    :id="ser_id"
                    :isPatch="true"
                    :withEditor="true"
                  ></TextEditor>
                </div>
                <!-- end:: col -->
                <div class="col-lg-12">
                  <TextEditor
                    :list="service"
                    alerts="dashboard/services/get_errors"
                    storex="services/get_services_header"
                    storeSubmit="services/update_service"
                    item="description"
                    title="description"
                    :withID="true"
                    :id="ser_id"
                    :isPatch="true"
                    :withEditor="true"
                  ></TextEditor>
                </div>
                <!-- end:: col -->
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

<script>
// importing components
import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import ServicesDemo from '~/components/Modules/dashboard/ServicesDemo.vue'
import ConfirmDelete from '~/components/Shared/ConfirmDelete'
import { mapGetters } from 'vuex'

export default {
  name: 'Services',
  layout: 'dashboard',
  components: {
    TextEditor,
    FileUpload,
    ServicesDemo,
    ConfirmDelete,
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.services'))
    // get services header
    await this.$store.dispatch('dashboard/services/get_services_header')
    // get all services data
    await this.$store.dispatch('dashboard/services/get_services')
  },
  data() {
    return {
      is_empty: false,
      ser_id: null,
      loading: false,
      m_confirm: false,
    }
  },
  computed: {
    ...mapGetters({
      services_header: ['dashboard/services/get_services_header'],
      services: ['dashboard/services/get_services'],
      service: ['dashboard/services/get_service'],
      notify: ['dashboard/services/get_errors'],
    }),
    checkItem() {
      return Object.keys(this.service).length === 0
    },
    checkServicesList() {
      return Object.keys(this.services).length === 0
    },
  },
  methods: {
    async catchID(id) {
      this.$store.commit('dashboard/services/SET_SERVICE_ID', id)
      this.ser_id = id
      await this.$store.dispatch('dashboard/services/get_service', id)
    },
    async addNewItem() {
      this.loading = true
      await this.$store.dispatch('dashboard/services/add_service')
      const generated_id =
        this.$store.getters['dashboard/services/get_service_id']
      this.ser_id = generated_id
      await this.$store.dispatch('dashboard/services/get_service', generated_id)
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_add'))
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
      this.loading = false
    },
    async deleteItem() {
      if (this.ser_id) {
        this.m_confirm = true
      } else {
        this.TriggerNotify('error', this.$t('admin.delete_btn_warn'))
      }
    },
    async confirmDelete(value) {
      if (value === true) {
        await this.$store.dispatch(
          'dashboard/services/delete_service',
          this.ser_id
        )
        this.m_confirm = false
        if (this.notify.state === 200) {
          this.TriggerNotify('success', this.$t('admin.successful_delete'))
          this.$store.commit('dashboard/services/SET_SERVICE', '')
        } else {
          this.TriggerNotify('error', this.$t('admin.req_error'))
        }
      } else {
        this.m_confirm = false
      }
    },
  },
}
</script>

<style lang="scss">
.services_wrapper {
  .product_card {
    padding: 20px 22px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #008b780d;
    h6 {
      font-weight: 500;
      font-size: 24px;
      color: $third-color;
      margin: 15px 0;
    }
    p.desc {
      color: $p-text-color;
      font-weight: 400;
      font-size: 14px;
      padding: 0 25px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media (min-width: 320px) and (max-width: 991px) {
        padding: 0 10px;
      }
    }
  }
}
@media (max-width: 991px) {
  .services_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>