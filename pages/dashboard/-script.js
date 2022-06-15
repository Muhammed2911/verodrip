// importing components
import NavbarDemo from '~/components/Modules/dashboard/NavbarDemo.vue'
import HeroSectionDemo from '~/components/Modules/dashboard/HeroSectionDemo.vue'
import FileUpload from '~/components/Shared/FileUpload.vue'
import LocaleDropdown from '~/components/Shared/LocaleDropdown.vue'
import TextEditor from '~/components/Shared/TextEditor.vue'
import SkeletonEditor from '~/components/Base/SkeletonEditor'
import { mapGetters } from 'vuex'

export default {
  name: 'DashHome',
  layout: 'dashboard',
  components: {
    NavbarDemo,
    HeroSectionDemo,
    LocaleDropdown,
    TextEditor,
    SkeletonEditor,
    FileUpload,
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      navbar: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        text_value: null,
      },
      herosection: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        call_action: null,
        paragraph: null,
        counter_name: null,
        counter_num: null,
      },
      services_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
        question: null,
      },
      products_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
      },
      cropapp_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
      },
      projects_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
      },
      areaaction_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
      },
      l_areaaction_items: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        header: null,
        paragraph: null,
        button: null,
      },
      footer_list: {
        locale: null,
        allowed: {
          items: null,
          value: null,
          value_file: null,
        },
        follow_us_on: null,
        all_rights_reserved: null,
        logo_text: null,
      },
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            Authorization: 'optional_token',
          },
        },
      },
      contentHolder: '',
      loading: false,
    }
  },
  async created() {
    // set default locale
    this.navbar.locale = this.$cookies.get('i18n_redirected')
    this.herosection.locale = this.$cookies.get('i18n_redirected')
    this.services_items.locale = this.$cookies.get('i18n_redirected')
    this.products_items.locale = this.$cookies.get('i18n_redirected')
    this.cropapp_items.locale = this.$cookies.get('i18n_redirected')
    this.projects_items.locale = this.$cookies.get('i18n_redirected')
    this.areaaction_items.locale = this.$cookies.get('i18n_redirected')
    this.l_areaaction_items.locale = this.$cookies.get('i18n_redirected')
    this.footer_list.locale = this.$cookies.get('i18n_redirected')
    // get navbar items
    await this.$store.dispatch('dashboard/home/get_navbar')
    // get hero section items
    await this.$store.dispatch('dashboard/home/get_herosection')
    // get services header items
    await this.$store.dispatch('dashboard/home/get_services_header')
    // get products item
    await this.$store.dispatch('dashboard/home/get_products')
    // get crop items
    await this.$store.dispatch('dashboard/home/get_crop')
    // get projects items
    await this.$store.dispatch('dashboard/home/get_projects')
    // get faqs items
    await this.$store.dispatch('dashboard/home/get_faqs')
    // get area action items
    await this.$store.dispatch('dashboard/home/get_area_action')
    // get last area action items
    await this.$store.dispatch('dashboard/home/get_larea_action')
    // get footer items
    await this.$store.dispatch('dashboard/home/get_footer')
  },
  mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.products'))
  },
  watch: {
    // hero section
    'herosection.header'(current) {
      this.herosection.allowed.value = current
    },
    'herosection.call_action'(current) {
      this.herosection.allowed.value = current
    },
    'herosection.paragraph'(current) {
      this.herosection.allowed.value = current
    },
    'herosection.counter_name'(current) {
      this.herosection.allowed.value = current
    },
    'herosection.counter_num'(current) {
      this.herosection.allowed.value = current
    },
  },
  computed: {
    ...mapGetters({
      notify: ['dashboard/home/get_errors'],
      navbar_list: ['dashboard/home/get_navbar'],
      hero_section: ['dashboard/home/get_hero_section'],
      services: ['dashboard/home/get_services_header'],
      products: ['dashboard/home/get_products'],
      crop: ['dashboard/home/get_crop'],
      projects: ['dashboard/home/get_projects'],
      faqs: ['dashboard/home/get_faqs'],
      area_action: ['dashboard/home/get_area_action'],
      l_area_action: ['dashboard/home/get_larea_action'],
      footer: ['dashboard/home/get_footer'],
    }),
  },
  methods: {
    async changeLocale(params) {
      this.loading = true
      if (params.type === 'navbar') {
        this.navbar.locale = params.value
        this.$store.commit('localStorage/SET_REQ_LANG', this.navbar.locale)
        await this.$store.dispatch('dashboard/home/get_navbar')
      } else if (params.type === 'hero_section') {
        this.herosection.locale = params.value
        this.$store.commit('localStorage/SET_REQ_LANG', this.herosection.locale)
        await this.$store.dispatch('dashboard/home/get_herosection')
      } else if (params.type === 'services') {
        this.services_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.services_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_services_header')
      } else if (params.type === 'products') {
        this.products_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.products_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_products')
      } else if (params.type === 'crop') {
        this.cropapp_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.cropapp_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_crop')
      } else if (params.type === 'projects') {
        this.projects_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.projects_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_projects')
      } else if (params.type === 'faqs') {
        this.projects_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.projects_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_projects')
      } else if (params.type === 'area_action') {
        this.areaaction_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.areaaction_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_area_action')
      } else if (params.type === 'l_area_action') {
        this.l_areaaction_items.locale = params.value
        this.$store.commit(
          'localStorage/SET_REQ_LANG',
          this.l_areaaction_items.locale
        )
        await this.$store.dispatch('dashboard/home/get_larea_action')
      } else if (params.type === 'footer') {
        this.footer_list.locale = params.value
        this.$store.commit('localStorage/SET_REQ_LANG', this.footer_list.locale)
        await this.$store.dispatch('dashboard/home/get_footer')
      }
      this.loading = false
    },
    // handle upload images
    async handleUpload(event) {
      const form_data = new FormData()

      this.loading = true
      if (event.target.classList[0] === 'nav_logo') {
        this.navbar.allowed.items = 'image'
        this.navbar.allowed.value_file = event.target.files[0]
        var allowed_items = this.navbar.allowed
      } else if (event.target.classList[0] === 'hero_section') {
        this.herosection.allowed.items = 'image'
        this.herosection.allowed.value_file = event.target.files[0]
        var allowed_items = this.herosection.allowed
      }

      for (const key in allowed_items) {
        if (allowed_items[key] != null) {
          form_data.append(key, allowed_items[key])
        }
      }
      if (event.target.classList[0] === 'nav_logo') {
        await this.$store.dispatch('dashboard/home/update_navbar', form_data)
      } else if (event.target.classList[0] === 'hero_section') {
        await this.$store.dispatch(
          'dashboard/home/update_herosection',
          form_data
        )
      }
      if (this.notify.state === 200) {
        this.TriggerNotify('success', 'Image has been uploaded !')
      } else {
        this.TriggerNotify('success', this.notify.message)
      }
      this.loading = false
    },
    // handle copy text value
    copyText(e) {
      const value = e.target.textContent.trim()
      const type = e.target.getAttribute('data-ref')
      const item = e.target.getAttribute('data-item')
      if (type === 'navbar_links') {
        this.navbar.text_value = value
        this.navbar.allowed.items = item
      } else if (type === 'hero_items') {
        this.herosection.allowed.items = item
        this.herosection.allowed.value = value
        if (item === 'header') {
          this.herosection.header = value
        } else if (item === 'button') {
          this.herosection.call_action = value
        } else if (item === 'paragraph') {
          this.herosection.paragraph = value
        } else if (
          item === 'finished_projects' ||
          item === 'customers' ||
          item === 'locations'
        ) {
          const counter_num = e.target.getAttribute('data-num')
          this.herosection.counter_name = value
          this.herosection.counter_num = counter_num
        }
        this.herosection.allowed.items = item
      } else if (type === 'ser_items') {
        this.services_items.allowed.items = item
        this.services_items.allowed.value = value
        if (item === 'header') {
          this.services_items.header = value
        } else if (item === 'paragraph') {
          this.services_items.paragraph = value
        } else if (item === 'button') {
          this.services_items.button = value
        } else if (item === 'question') {
          this.services_items.question = value
        }
      } else if (type === 'prod_items') {
        this.products_items.allowed.items = item
        this.products_items.allowed.value = value
        if (item === 'header') {
          this.products_items.header = value
        } else if (item === 'paragraph') {
          this.products_items.paragraph = value
        } else if (item === 'button') {
          this.products_items.button = value
        }
      } else if (type === 'crop_items') {
        this.cropapp_items.allowed.items = item
        this.cropapp_items.allowed.value = value
        if (item === 'header') {
          this.cropapp_items.header = value
        } else if (item === 'paragraph') {
          this.cropapp_items.paragraph = value
        } else if (item === 'button') {
          this.cropapp_items.button = value
        }
      } else if (type === 'proj_items') {
        this.projects_items.allowed.items = item
        this.projects_items.allowed.value = value
        if (item === 'header') {
          this.projects_items.header = value
        } else if (item === 'paragraph') {
          this.projects_items.paragraph = value
        } else if (item === 'button') {
          this.projects_items.button = value
        }
      } else if (type === 'area_items') {
        this.areaaction_items.allowed.items = item
        this.areaaction_items.allowed.value = value
        if (item === 'header') {
          this.areaaction_items.header = value
        } else if (item === 'paragraph') {
          this.areaaction_items.paragraph = value
        } else if (item === 'button') {
          this.areaaction_items.button = value
        }
      } else if (type === 'l_area_items') {
        this.l_areaaction_items.allowed.items = item
        this.l_areaaction_items.allowed.value = value
        if (item === 'header') {
          this.l_areaaction_items.header = value
        } else if (item === 'paragraph') {
          this.l_areaaction_items.paragraph = value
        } else if (item === 'button') {
          this.l_areaaction_items.button = value
        }
      } else if (type === 'foot_items') {
        this.footer_list.allowed.items = item
        this.footer_list.allowed.value = value
        if (item === 'follow_us_on') {
          this.footer_list.follow_us_on = value
        } else if (item === 'all_rights_reserved') {
          this.footer_list.all_rights_reserved = value
        } else if (item === 'logo_text') {
          this.footer_list.logo_text = value
        }
      }
    },
    //handle open editor
    openModal() {
      this.$refs['editor_modal'].show()
    },
    // handle form request
    async handleForm(e) {
      const type = e.target.getAttribute('data-ref')
      const item = e.target
        .querySelector('[data-id="input"]')
        .getAttribute('data-item')
      const form_data = new FormData()

      this.loading = true

      if (type === 'navbar_form') {
        this.navbar.allowed.value = this.navbar.text_value
        var allowed_items = this.navbar.allowed
      } else if (type === 'hero_form') {
        var allowed_items = this.herosection.allowed
      } else if (type === 'services_form') {
        this.services_items.allowed.items = item
        if (item === 'header') {
          this.services_items.allowed.value = this.services_items.header
        } else if (item === 'paragraph') {
          this.services_items.allowed.value = this.services_items.paragraph
        } else if (item === 'button') {
          this.services_items.allowed.value = this.services_items.button
        } else if (item === 'question') {
          this.services_items.allowed.value = this.services_items.question
        }
        var allowed_items = this.services_items.allowed
      } else if (type === 'prod_form') {
        this.products_items.allowed.items = item
        if (item === 'header') {
          this.products_items.allowed.value = this.products_items.header
        } else if (item === 'paragraph') {
          this.products_items.allowed.value = this.products_items.paragraph
        } else if (item === 'button') {
          this.products_items.allowed.value = this.products_items.button
        }
        var allowed_items = this.products_items.allowed
      } else if (type === 'crop_form') {
        this.cropapp_items.allowed.items = item
        if (item === 'header') {
          this.cropapp_items.allowed.value = this.cropapp_items.header
        } else if (item === 'paragraph') {
          this.cropapp_items.allowed.value = this.cropapp_items.paragraph
        } else if (item === 'button') {
          this.cropapp_items.allowed.value = this.cropapp_items.button
        }
        var allowed_items = this.cropapp_items.allowed
      } else if (type === 'projects_form') {
        this.projects_items.allowed.items = item
        if (item === 'header') {
          this.projects_items.allowed.value = this.projects_items.header
        } else if (item === 'paragraph') {
          this.projects_items.allowed.value = this.projects_items.paragraph
        } else if (item === 'button') {
          this.projects_items.allowed.value = this.projects_items.button
        }
        var allowed_items = this.projects_items.allowed
      } else if (type === 'area_form') {
        this.areaaction_items.allowed.items = item
        if (item === 'header') {
          this.areaaction_items.allowed.value = this.areaaction_items.header
        } else if (item === 'paragraph') {
          this.areaaction_items.allowed.value = this.areaaction_items.paragraph
        } else if (item === 'button') {
          this.areaaction_items.allowed.value = this.areaaction_items.button
        }
        var allowed_items = this.areaaction_items.allowed
      } else if (type === 'l_area_form') {
        this.l_areaaction_items.allowed.items = item
        if (item === 'header') {
          this.l_areaaction_items.allowed.value = this.l_areaaction_items.header
        } else if (item === 'paragraph') {
          this.l_areaaction_items.allowed.value =
            this.l_areaaction_items.paragraph
        } else if (item === 'button') {
          this.l_areaaction_items.allowed.value = this.l_areaaction_items.button
        }
        var allowed_items = this.l_areaaction_items.allowed
      } else if (type === 'footer_form') {
        this.footer_list.allowed.items = item
        if (item === 'follow_us_on') {
          this.footer_list.allowed.value = this.footer_list.follow_us_on
        } else if (item === 'all_rights_reserved') {
          this.footer_list.allowed.value = this.footer_list.all_rights_reserved
        } else if (item === 'logo_text') {
          this.footer_list.allowed.value = this.footer_list.logo_text
        }
        var allowed_items = this.footer_list.allowed
      }

      for (const key in allowed_items) {
        if (allowed_items[key] != null) {
          form_data.append(key, allowed_items[key])
        }
      }

      if (type === 'navbar_form') {
        await this.$store.dispatch('dashboard/home/update_navbar', form_data)
      } else if (type === 'hero_form') {
        await this.$store.dispatch(
          'dashboard/home/update_herosection',
          form_data
        )
      } else if (type === 'services_form') {
        await this.$store.dispatch(
          'dashboard/home/update_services_header',
          form_data
        )
      } else if (type === 'prod_form') {
        await this.$store.dispatch('dashboard/home/update_products', form_data)
      } else if (type === 'crop_form') {
        await this.$store.dispatch('dashboard/home/update_crop', form_data)
      } else if (type === 'projects_form') {
        await this.$store.dispatch('dashboard/home/update_projects', form_data)
      } else if (type === 'area_form') {
        await this.$store.dispatch(
          'dashboard/home/update_area_action',
          form_data
        )
      } else if (type === 'l_area_form') {
        await this.$store.dispatch(
          'dashboard/home/update_larea_action',
          form_data
        )
      } else if (type === 'footer_form') {
        await this.$store.dispatch('dashboard/home/update_footer', form_data)
      }
      this.$store.commit('localStorage/SET_REQ_LANG', '')
      if (this.notify.state === 200) {
        this.TriggerNotify('success', this.$t('admin.successful_update'))
      } else {
        this.TriggerNotify('success', this.notify.message)
      }
      this.loading = false
    },
  },
}
