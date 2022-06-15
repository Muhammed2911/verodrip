<template>
  <div class="content_card">
    <div class="header_wrapper">
      <h6>{{ $t(`admin.${title}`) }}</h6>
    </div>
    <div class="action_wrapper">
      <div class="uploader">
        <input type="file" @change="handleUpload" />
        <span class="icon">
          <svg>
            <use xlink:href="~/static/svg/sprite.svg#upload"></use>
          </svg>
        </span>
        <p class="hint">{{ $t('admin.upload_hint') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FileUpload',
  props: [
    'item',
    'title',
    'storeSubmit',
    'alerts',
    'isPatch',
    'withID',
    'id',
    'type',
  ],
  data() {
    return {
      locale: null,
      request: {
        items: null,
        value_file: null,
      },
    }
  },
  computed: {
    notify() {
      return this.$store.getters[this.alerts]
    },
  },
  methods: {
    async handleUpload(event) {
      this.request.items = this.item
      this.request.value_file = event.target.files[0]

      const allowed = this.request
      const form_data = new FormData()

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
        const formData = {
          id: this.id,
          data: form_data,
        }
        await this.$store.dispatch(`dashboard/${this.storeSubmit}`, formData)
      } else {
        await this.$store.dispatch(`dashboard/${this.storeSubmit}`, form_data)
      }

      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_upload'))
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }

      event.target.value = null
    },
  },
}
</script>