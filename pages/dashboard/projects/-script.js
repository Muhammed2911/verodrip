import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import ProjectsDemo from '~/components/Modules/dashboard/ProjectsDemo'
import ConfirmDelete from '~/components/Shared/ConfirmDelete'
import { mapGetters } from 'vuex'

export default {
  name: 'Projects',
  layout: 'dashboard',
  components: { TextEditor, FileUpload, ProjectsDemo, ConfirmDelete },
  data() {
    return {
      proj_id: null,
      loading: false,
      m_confirm: false,
    }
  },
  async mounted() {
    $nuxt.$emit('pageTitle', this.$t('admin.projects'))
    // get projects header items
    await this.$store.dispatch('dashboard/projects/get_headers')
    // get projects items
    await this.$store.dispatch('dashboard/projects/get_projects')
  },
  computed: {
    ...mapGetters({
      get_headers: ['dashboard/projects/get_headers'],
      projects: ['dashboard/projects/get_projects'],
      project: ['dashboard/projects/get_project'],
      notify: ['dashboard/projects/get_errors'],
    }),
  },
  methods: {
    async catchID(id) {
      this.$store.commit('dashboard/projects/SET_PROJECT_id', id)
      this.proj_id = id
      await this.$store.dispatch('dashboard/projects/get_project', id)
    },
    async addNewItem() {
      this.loading = true
      await this.$store.dispatch('dashboard/projects/add_project')
      const generated_id =
        this.$store.getters['dashboard/projects/get_project_id']
      this.proj_id = generated_id
      await this.$store.dispatch('dashboard/projects/get_project', generated_id)
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_add'))
        await this.$store.dispatch('dashboard/projects/get_projects')
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
      this.loading = false
    },
    async deleteItem() {
      if (this.proj_id) {
        this.m_confirm = true
      } else {
        this.TriggerNotify('error', this.$t('admin.delete_btn_warn'))
      }
    },
    async confirmDelete(value) {
      if (value === true) {
        await this.$store.dispatch(
          'dashboard/projects/delete_project',
          this.proj_id
        )
        this.m_confirm = false
        if (this.notify.state === 200) {
          this.TriggerNotify('success', this.$t('admin.successful_delete'))
          this.proj_id = null
          this.$store.commit('dashboard/projects/SET_PROJECT', '')
        } else {
          this.TriggerNotify('error', this.$t('admin.req_error'))
        }
      } else {
        this.m_confirm = false
      }
    },
  },
}
