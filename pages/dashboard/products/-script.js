// importing components
import TextEditor from '~/components/Shared/TextEditor.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import ProductsDemo from '~/components/Modules/dashboard/ProductsDemo.vue'
import ConfirmDelete from '~/components/Shared/ConfirmDelete'
import { mapGetters } from 'vuex'

export default {
  name: 'Products',
  layout: 'dashboard',
  components: {
    FileUpload,
    TextEditor,
    ProductsDemo,
    ConfirmDelete,
  },
  data() {
    return {
      cate_id: null,
      prod_id: null,
      m_confirm: false,
      loading: false,
      sub_settings: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  async mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.products'))
    // get products main items
    await this.$store.dispatch('dashboard/products/get_products_main')
    // get products categories items
    await this.$store.dispatch('dashboard/products/get_categories')
    // get products items
    await this.$store.dispatch('dashboard/products/get_products')
  },
  computed: {
    ...mapGetters({
      notify: ['dashboard/products/get_errors'],
      p_main_items: ['dashboard/products/get_products_main'],
      categories: ['dashboard/products/get_categories'],
      category: ['dashboard/products/get_category'],
      products: ['dashboard/products/get_products'],
      product: ['dashboard/products/get_product'],
    }),
    checkCateLength() {
      return Object.keys(this.category).length === 0
    },
    checkCateList() {
      return Object.keys(this.categories).length === 0
    },
    cateDropdown() {
      const list = this.categories
      const dropdown = []
      list.forEach((elem) => {
        dropdown.push({
          name: elem.name,
          value: elem.id,
        })
      })
      return dropdown
    },
    prodDropdown() {
      const list = this.products
      const dropdown = []
      list.forEach((elem) => {
        dropdown.push({
          name: elem.name,
          value: elem.id,
        })
      })
      return dropdown
    },
  },
  methods: {
    async catchID(id) {
      this.$store.commit('dashboard/products/SET_CATE_ID', id)
      this.cate_id = id
      await this.$store.dispatch('dashboard/products/get_category', id)
    },
    async addNewItem() {
      this.loading = true
      await this.$store.dispatch('dashboard/products/add_category')
      const generated_id = this.$store.getters['dashboard/products/get_cate_id']
      this.cate_id = generated_id
      await this.$store.dispatch(
        'dashboard/products/get_category',
        generated_id
      )
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_add'))
      } else {
        this.TriggerNotify('error', this.$t('admin.req_error'))
      }
      this.loading = false
    },
    async deleteItem() {
      if (this.cate_id) {
        this.m_confirm = true
      } else {
        this.TriggerNotify('error', this.$t('admin.delete_btn_warn'))
      }
    },
    async confirmDelete(value) {
      if (value === true) {
        await this.$store.dispatch(
          'dashboard/products/delete_category',
          this.cate_id
        )
        this.m_confirm = false
        if (this.notify.state === 200) {
          this.TriggerNotify('success', this.$t('admin.successful_delete'))
          this.$store.commit('dashboard/products/SET_CATEGORY', '')
        } else {
          this.TriggerNotify('error', this.$t('admin.req_error'))
        }
      } else {
        this.m_confirm = false
      }
    },
  },
}
