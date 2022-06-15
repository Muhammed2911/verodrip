import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ErrorsPage',
  layout: 'dashboard',
  components: { TextEditor, FileUpload },
  data() {
    return {}
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.errors'))
    // get errors items
    await this.$store.dispatch('dashboard/errors/get_errors')
  },
  computed: {
    ...mapGetters({
      error404_items: ['dashboard/errors/get_errors404'],
      error500_items: ['dashboard/errors/get_errors500'],
    }),
  },
  methods: {},
}
