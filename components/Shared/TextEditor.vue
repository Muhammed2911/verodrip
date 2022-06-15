<template>
  <div class="content_card">
    <div class="header_wrapper">
      <h6>{{ $t(`admin.${title}`) }}</h6>
      <svg class="icon" v-if="!withEditor">
        <use xlink:href="~/static/svg/sprite.svg#edit_label"></use>
      </svg>
    </div>
    <div class="action_wrapper">
      <div class="switch_elem_wrapper">
        <div>
          <p
            class="sample"
            v-html="target_item"
            :data-item="item"
            @click="copyText"
          ></p>
        </div>
        <LocaleDropdown @locale-change="changeLocale"></LocaleDropdown>
      </div>
      <form @submit.prevent="handleForm">
        <div class="editor_wrapper">
          <div class="flex_wrapper">
            <div class="input_wrapper">
              <span class="locale_text"> {{ locale }} : </span>
              <input
                type="text"
                class="form-control"
                :placeholder="$t('admin.input_placeholder')"
                v-model="input_value"
                :data-item="item"
                data-id="input"
                v-if="mode != 'date'"
              />
              <DatePicker
                v-model="request.value_date"
                :placeholder="$t('admin.date_placeholder')"
                format="YYYY-MM-DD"
                v-else
              ></DatePicker>
            </div>
            <div class="option_wrapper">
              <button
                type="button"
                class="btn btn_editor"
                v-if="withEditor"
                @click="openModal"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#editor"></use>
                </svg>
              </button>
              <button type="submit" class="btn btn_submit">
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#d_long_arrow"></use>
                </svg>
              </button>
            </div>
            <!-- end:: option_wrapper -->
          </div>
        </div>
      </form>
    </div>
    <!-- start:: editor_modal -->
    <b-modal
      ref="editor_modal"
      id="editor_modal"
      hide-footer
      hide-header
      size="xl"
    >
      <div class="header_wrapper">
        <h5>{{ $t(`admin.${title}`) }}</h5>
      </div>

      <div class="body_wrapper">
        <client-only placeholder="loading...">
          <ckeditor-nuxt v-model="contentHolder" :config="editorConfig" />
        </client-only>
      </div>
    </b-modal>
    <!-- end:: editor_modal -->
  </div>
</template>

<script>
import LocaleDropdown from '~/components/Shared/LocaleDropdown.vue'
import SkeletonEditor from '~/components/Base/SkeletonEditor'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'EditorWrapper',
  components: {
    LocaleDropdown,
    SkeletonEditor,
    DatePicker,
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  props: {
    list: { required: true },
    title: { type: String, required: true },
    item: { type: String, required: true },
    storex: { type: String },
    storeSubmit: { type: String, required: true },
    withID: { type: Boolean },
    id: { type: Number },
    isPatch: { type: Boolean },
    withEditor: { type: Boolean, default: false },
    uploader: { type: String },
    alerts: { type: String },
    type: { type: String },
    mode: { type: String },
  },
  data() {
    return {
      input_value: null,
      locale: null,
      request: {
        items: null,
        value: null,
        value_date: null,
      },
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
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
      contentHolder: '',
    }
  },
  async mounted() {
    this.locale = this.$cookies.get('i18n_redirected')
    if (this.uploader) {
      this.editorConfig.simpleUpload.uploadUrl = this.uploader
    }
  },
  computed: {
    target_item() {
      const list = this.list
      let target_elem
      for (const key in list) {
        if (key === this.item) {
          target_elem = list[key]
        }
      }
      this.input_value = target_elem
      this.contentHolder = target_elem
      return target_elem
    },
    notify() {
      return this.$store.getters[this.alerts]
    },
  },
  watch: {
    contentHolder(current) {
      this.input_value = current
    },
  },
  methods: {
    openModal() {
      this.$refs['editor_modal'].show()
    },
    copyText(event) {
      this.contentHolder = event.target.textContent.trim()
      this.input_value = event.target.textContent.trim()
    },
    async changeLocale(params) {
      this.locale = params
      this.$store.commit('localStorage/SET_REQ_LANG', this.locale)
      if (this.withID) {
        await this.$store.dispatch(`dashboard/${this.storex}`, this.id)
      } else {
        await this.$store.dispatch(`dashboard/${this.storex}`)
      }
      this.$store.commit('localStorage/SET_REQ_LANG', '')
    },
    async handleForm() {
      this.request.items = this.item
      if (this.mode != 'date') {
        this.request.value = this.input_value
      } else {
        this.request.value_date = this.$moment(this.request.value_date).format(
          'YYYY-MM-DD'
        )
      }
      const form_data = new FormData()
      const allowed = this.request

      for (const key in allowed) {
        if (allowed[key] != null) {
          form_data.append(key, allowed[key])
        }
      }

      if (this.isPatch) {
        form_data.append('_method', 'patch')
      }

      if (this.type) {
        form_data.append('type', this.type)
      }

      if (this.withID) {
        const formdata = {
          id: this.id,
          data: form_data,
        }
        await this.$store.dispatch(`dashboard/${this.storeSubmit}`, formdata)
      } else {
        await this.$store.dispatch(`dashboard/${this.storeSubmit}`, form_data)
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
.editor_wrapper {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 14px;
  .flex_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .input_wrapper {
      width: 75%;
      display: flex;
      align-items: center;
      .locale_text {
        text-transform: uppercase;
        font-size: 15px;
        font-style: italic;
        font-weight: 500;
        white-space: nowrap;
        margin-right: 6px;
      }
      .form-control,
      .mx-input {
        background-color: transparent;
        border: none;
        box-shadow: none;
        font-size: 14px;
      }
    }
    .option_wrapper {
      width: 25%;
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
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -15px;
          transform: translateY(-50%);
          width: 1px;
          height: 18px;
          background-color: #ddd;
        }
        .icon {
          width: 13px;
          height: 13px;
          fill: $second-color;
        }
      }
      .btn_editor {
        width: 25px;
        height: 25px;
        padding: 0;
        display: flex;
        box-shadow: none;
        justify-content: center;
        align-items: center;
        .icon {
          width: 16px;
          height: 16px;
          fill: #1f3857;
        }
      }
    }
  }
}
</style>
