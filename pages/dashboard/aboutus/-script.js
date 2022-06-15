// importing components
import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import ConfirmDelete from '~/components/Shared/ConfirmDelete'
import { mapGetters } from 'vuex'

export default {
  name: 'AboutUs',
  layout: 'dashboard',
  components: {
    FileUpload,
    TextEditor,
    ConfirmDelete,
  },
  data() {
    return {
      loading: false,
      m_confirm: false,
      company_id: null,
    }
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.about'))
    // get about_us items
    await this.$store.dispatch('dashboard/about/get_about')
    // get about_marketing items
    await this.$store.dispatch('dashboard/about/get_about_marketing')
    // get about_mission items
    await this.$store.dispatch('dashboard/about/get_about_mission')
    // get about_vision items
    await this.$store.dispatch('dashboard/about/get_about_vision')
    // get clients_main items
    await this.$store.dispatch('dashboard/about/get_main_clients')
    // get clients items
    await this.$store.dispatch('dashboard/about/get_clients')
  },
  computed: {
    ...mapGetters({
      about_us_items: ['dashboard/about/get_about'],
      about_market_items: ['dashboard/about/get_about_marketing'],
      about_mission_items: ['dashboard/about/get_about_mission'],
      about_vision_items: ['dashboard/about/get_about_vision'],
      about_clients_main: ['dashboard/about/get_main_clients'],
      about_clients: ['dashboard/about/get_clients'],
      about_client: ['dashboard/about/get_client'],
      notify: ['dashboard/about/get_errors'],
    }),
  },
  methods: {
    async addNewItem() {
      this.loading = true
      await this.$store.dispatch('dashboard/about/add_client')
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_add'))
        await this.$store.dispatch('dashboard/about/get_clients')
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
      this.loading = false
    },
    deleteItem(id) {
      this.company_id = id
      this.m_confirm = true
    },
    async confirmDelete(value) {
      this.loading = true
      if (value === true) {
        await this.$store.dispatch(
          'dashboard/about/delete_client',
          this.company_id
        )
        this.m_confirm = false
        if (this.notify.state === 200) {
          this.TriggerNotify('success', this.$t('admin.successful_delete'))
          await this.$store.dispatch('dashboard/about/get_clients')
          this.company_id = null
        } else {
          this.TriggerNotify('error', this.$t('admin.req_error'))
        }
      } else {
        this.m_confirm = false
      }
      this.loading = false
    },
  },
}
