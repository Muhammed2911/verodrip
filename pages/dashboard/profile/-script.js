import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminProfile',
  layout: 'dashboard',
  components: { VuePhoneNumberInput },
  data() {
    return {
      requestData: {
        first_name: null,
        last_name: null,
        phone: null,
        email: null,
        country: null,
        avatar: null,
        password: null,
        password_confirmation: null,
        local: null,
      },
      lang: 'English',
      password_type: 'password',
      countryCode: null,
      imgPreview: null,
      loading: false,
    }
  },
  mounted() {
    // page title
    $nuxt.$emit('pageTitle', this.$t('admin.profile'))
    // set inputs values
    this.requestData.first_name = this.user.first_name
    this.requestData.last_name = this.user.last_name
    this.requestData.phone = this.user.phone
    this.requestData.email = this.user.email
    this.requestData.local = this.user.c_local
    if (this.user.c_local === 'ru') {
      this.countryCode = 'RU'
      this.requestData.country = '+7'
    } else if (this.user.c_local === 'tr') {
      this.countryCode = 'TR'
      this.requestData.country = '+90'
    } else {
      this.countryCode = 'US'
      this.requestData.country = '+1'
    }
  },
  computed: {
    ...mapGetters({
      user: ['localStorage/userData'],
    }),
  },
  methods: {
    changeLocal(params, lang) {
      this.lang = lang
      this.requestData.local = params
    },
    showPassword() {
      this.password_type =
        this.password_type === 'password' ? 'text' : 'password'
    },
    catchCountry(value) {
      this.requestData.country = value.countryCallingCode
    },
    uploadAttach(event) {
      this.requestData.avatar = event.target.files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.imgPreview = e.target.result
      }
      reader.readAsDataURL(event.target.files[0])
    },
    async handleForm() {
      await this.$refs.form.validate().then((success) => {
        if (success) {
          this.handleInputs()
        }
      })
    },
    async handleInputs() {
      this.loading = true
      const allowed = this.requestData
      const form_data = new FormData()
      for (const key in allowed) {
        if (allowed[key] != null) {
          form_data.append(key, allowed[key])
        }
      }
      await this.$store.dispatch('front/auth/update_profile', form_data)
      this.loading = false
    },
  },
}
