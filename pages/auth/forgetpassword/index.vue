<template>
  <div class="auth_pages_wrapper">
    <div class="main_form_wrapper">
      <div class="instructions">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#lock"></use>
        </svg>
        <h4>Forget Password ?</h4>
        <p>No worries, we’ll send you reset instruction</p>
      </div>
      <!-- //? Start  Form  -->
      <client-only>
        <ValidationObserver ref="form">
          <form @submit.prevent="submitForm">
            <!-- //? Start Email  -->
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <div class="form_group floating">
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="user email"
                    id="email"
                    v-model="user_data.email"
                  />
                  <label for="email" class="control-label">
                    Email Address
                  </label>
                </div>
                <span v-if="errors[0]" class="validation-error">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
            <!-- //? End Email  -->

            <!-- //? Start submit button  -->
            <div class="form-group d-flex justify-content-center">
              <BaseAppButton
                type="submit"
                class="submit_btn mt-2"
                :disabled="processing"
              >
                <span v-if="!processing">Reset Password</span>
                <b-spinner variant="light" v-if="processing"></b-spinner
              ></BaseAppButton>
            </div>
            <!-- //? end submit button  -->
            <!-- //? Back to login  -->
            <div class="text-center">
              <nuxt-link
                class="btn-back"
                :to="localePath({ name: 'auth/login' })"
              >
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#long-arrow"></use>
                </svg>
                <span>Back to Login</span>
              </nuxt-link>
            </div>
          </form>
        </ValidationObserver>
      </client-only>
    </div>
    <!-- //? End  Form  -->

    <!-- //? all right reserved  -->
    <p class="right-reserved mb-0">Developed by <span>Glyceria</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ForgetPassword',
  layout: 'auth',
  data() {
    return {
      processing: false,
      user_data: {
        email: 'seeder@gmail.com',
      },
    }
  },
  computed: {
    ...mapGetters({
      notify: ['front/auth/get_errors'],
    }),
  },
  methods: {
    //? submit form
    async submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          this.handleRequest()
        }
      })
    },
    //? handle request
    async handleRequest() {
      this.processing = true
      await this.$store.dispatch('front/auth/send_otp_code', this.user_data)
      if (this.notify.state === 200) {
        this.$router.replace(
          this.localePath({
            name: 'auth/ckeckemail/id',
            params: { id: this.user_data.email },
          })
        )
        this.TriggerNotify(
          'success',
          'Please check your email for Verificatio code !'
        )
      } else {
        this.TriggerNotify('error', this.notify.message)
      }
      this.processing = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/shared/auth.scss';
</style>
