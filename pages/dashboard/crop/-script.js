import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload'
import CropDemo from '~/components/Modules/dashboard/CropDemo.vue'
import ConfirmDelete from '~/components/Shared/ConfirmDelete'
import { mapGetters } from 'vuex'

export default {
  name: 'CropApplications',
  layout: 'dashboard',
  components: {
    TextEditor,
    CropDemo,
    FileUpload,
    ConfirmDelete,
  },
  data() {
    return {
      crop_id: null,
      is_empty: false,
      loading: false,
      m_confirm: false,
    }
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.crop'))
    // get crop headers items
    await this.$store.dispatch('dashboard/crop/get_crop_header')
    // get crop list method
    await this.$store.dispatch('dashboard/crop/get_crops')
  },
  computed: {
    ...mapGetters({
      crop_header: ['dashboard/crop/get_crop_header'],
      crops: ['dashboard/crop/get_crops'],
      crop: ['dashboard/crop/get_crop'],
      notify: ['dashboard/crop/get_errors'],
    }),
    cropLength() {
      return Object.keys(this.crop).length === 0
    },
  },
  methods: {
    async catchID(id) {
      this.$store.commit('dashboard/crop/SET_CROP_ID', id)
      this.crop_id = id
      await this.$store.dispatch('dashboard/crop/get_crop', id)
    },
    async addNewItem() {
      this.loading = true
      await this.$store.dispatch('dashboard/crop/add_crop')
      const generated_id = this.$store.getters['dashboard/crop/get_crops_id']
      this.crop_id = generated_id
      await this.$store.dispatch('dashboard/crop/get_crop', generated_id)
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_add'))
        await this.$store.dispatch('dashboard/crop/get_crops')
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
      this.loading = false
    },
    async deleteItem() {
      if (this.crop_id) {
        this.m_confirm = true
      } else {
        this.TriggerNotify('error', this.$t('admin.delete_btn_warn'))
      }
    },
    async confirmDelete(value) {
      if (value === true) {
        await this.$store.dispatch('dashboard/crop/delete_crop', this.crop_id)
        this.m_confirm = false
        if (this.notify.state === 200) {
          this.TriggerNotify('success', this.$t('admin.successful_delete'))
          this.$store.commit('dashboard/crop/SET_CROP', '')
        } else {
          this.TriggerNotify('error', this.$t('admin.req_error'))
        }
      } else {
        this.m_confirm = false
      }
    },
  },
}
