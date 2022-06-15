<template>
  <section class="policies_wrapper">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.privacy_policy variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.privacy_policy') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="privacy_policy"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body class="editor_wrapper">
            <form @submit.prevent="handleForm" data-ref="policy_form">
              <client-only placeholder="loading...">
                <ckeditor-nuxt v-model="privacy.text" :config="editorPrivacy" />
              </client-only>
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
            </form>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->

      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.terms_section variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.terms_text') }}
          </b-button>
        </b-card-header>
        <b-collapse id="terms_section" accordion="my-accordion" role="tabpanel">
          <b-card-body class="editor_wrapper">
            <form @submit.prevent="handleForm" data-ref="terms_form">
              <client-only placeholder="loading...">
                <ckeditor-nuxt v-model="terms.text" :config="editorTerms" />
              </client-only>
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
            </form>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->

      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.quality_policy variant="light">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
            </svg>
            {{ $t('admin.quality_policy') }}
          </b-button>
        </b-card-header>
        <b-collapse
          id="quality_policy"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body class="editor_wrapper">
            <form @submit.prevent="handleForm" data-ref="quality_form">
              <client-only placeholder="loading...">
                <ckeditor-nuxt v-model="quality.text" :config="editorQuality" />
              </client-only>
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
            </form>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- end:: card -->
    </div>
    <!-- end:: accordion -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Policies',
  layout: 'dashboard',
  components: {
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.policies'))
    // get data from api
    await this.$store.dispatch('dashboard/policies/get_privacy')
    //await this.$store.dispatch('dashboard/policies/get_quality')
    await this.$store.dispatch('dashboard/policies/get_terms')

    // set data in v-modal
    this.privacy.text = this.privacy_items.test
    this.terms.text = this.terms_items.test
    this.quality.text = this.quality_items.test
  },
  data() {
    return {
      editorPrivacy: {
        simpleUpload: {
          uploadUrl: 'http://master.verodrip.uz/api/privacy-policy-upload',
        },
        removePlugins: ['Title'],
        toolbar: [
          'heading',
          '|',
          'fontfamily',
          'fontsize',
          '|',
          'alignment',
          '|',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          'strikethrough',
          'underline',
          '|',
          'outdent',
          'indent',
          '|',
          'bulletedList',
          'numberedList',
          'todoList',
          '|',
          'uploadImage',
          'blockQuote',
          '|',
          'undo',
          'redo',
        ],
      },
      editorTerms: {
        simpleUpload: {
          uploadUrl: 'http://master.verodrip.uz/api/terms-upload',
        },
        removePlugins: ['Title'],
        toolbar: [
          'heading',
          '|',
          'fontfamily',
          'fontsize',
          '|',
          'alignment',
          '|',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          'strikethrough',
          'underline',
          '|',
          'outdent',
          'indent',
          '|',
          'bulletedList',
          'numberedList',
          'todoList',
          '|',
          'uploadImage',
          'blockQuote',
          '|',
          'undo',
          'redo',
        ],
      },
      editorQuality: {
        simpleUpload: {
          uploadUrl: 'http://master.verodrip.uz/api/quality-policy-upload',
        },
        removePlugins: ['Title'],
        toolbar: [
          'heading',
          '|',
          'fontfamily',
          'fontsize',
          '|',
          'alignment',
          '|',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          'strikethrough',
          'underline',
          '|',
          'outdent',
          'indent',
          '|',
          'bulletedList',
          'numberedList',
          'todoList',
          '|',
          'uploadImage',
          'blockQuote',
          '|',
          'undo',
          'redo',
        ],
      },
      privacy: {
        text: null,
      },
      terms: {
        text: null,
      },
      quality: {
        text: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      privacy_items: ['dashboard/policies/get_privacy'],
      terms_items: ['dashboard/policies/get_terms'],
      quality_items: ['dashboard/policies/get_quality'],
      notify: ['dashboard/policies/get_errors'],
    }),
  },
  methods: {
    async handleForm(e) {
      const form_type = e.target.getAttribute('data-ref')
      if (form_type === 'policy_form') {
        await this.$store.dispatch(
          'dashboard/policies/update_privacy',
          this.privacy
        )
      } else if (form_type === 'terms_form') {
        await this.$store.dispatch(
          'dashboard/policies/update_terms',
          this.terms
        )
      } else if (form_type === 'quality_form') {
        await this.$store.dispatch(
          'dashboard/policies/update_quality',
          this.quality
        )
      }

      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_update'))
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
    },
  },
}
</script>

<style lang="scss">
.policies_wrapper {
  .editor_wrapper {
    position: relative;
  }
  .option_wrapper {
    position: absolute;
    bottom: 15px;
    right: 10px;
    width: 100%;
    padding: 12px 22px;
    display: flex;
    justify-content: flex-end;
    .btn_submit {
      width: 25px;
      height: 25px;
      border-radius: 5px;
      border: 2px solid $second-color;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-left: 20px;
      box-shadow: none;
      .icon {
        width: 13px;
        height: 13px;
        fill: $second-color;
      }
    }
  }
}

@media (max-width: 991px) {
  .policies_wrapper {
    padding: 25px 25px 0px 25px;
  }
}
</style>