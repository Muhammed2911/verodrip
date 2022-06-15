<template>
  <div class="auth_pages_wrapper">
    <div class="main_form_wrapper">
      <div class="instructions">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#lock"></use>
        </svg>
        <h4>Set a new password</h4>
        <p>Your new password must be different to previously used password</p>
      </div>
      <!-- //? Start  Form  -->
      <ValidationObserver ref="form">
        <form @submit.prevent="submitForm">
          <!-- //? Start Verification Code  -->
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="form_group floating">
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Verification Code"
                  id="code"
                  v-model="user_data.code"
                />
                <label for="code" class="control-label">
                  Verification Code
                </label>
              </div>
              <span v-if="errors[0]" class="validation-error">
                {{ errors[0] }}
              </span>
            </div>
          </ValidationProvider>
          <!-- //? End Verification Code  -->

          <!-- //? Start Password  -->
          <ValidationProvider
            rules="required|min:8|confirmed:confirm_password"
            v-slot="{ errors }"
            vid="confirm_password"
          >
            <div class="form_group floating">
              <div class="input-group">
                <input
                  :type="password_type"
                  class="form-control"
                  placeholder="user cpassowrd"
                  id="password"
                  v-model="user_data.password"
                />
                <label for="password" class="control-label"> Password </label>
                <span class="show_icon" @click="showPassword">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#eye"></use>
                  </svg>
                </span>
              </div>
              <span v-if="errors[0]" class="validation-error">
                {{ errors[0] }}
              </span>
            </div>
          </ValidationProvider>
          <!-- //? End Password  -->

          <!-- //? Start Confirm Password  -->
          <ValidationProvider
            rules="required|confirmed:confirm_password"
            v-slot="{ errors }"
          >
            <div class="form_group floating">
              <div class="input-group">
                <input
                  :type="password_type"
                  class="form-control"
                  placeholder="user cpassowrd"
                  id="c_password"
                  v-model="user_data.password_confirm"
                />
                <label for="c_password" class="control-label">
                  Confirm Password
                </label>
                <span class="show_icon" @click="showPassword">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#eye"></use>
                  </svg>
                </span>
              </div>
              <span v-if="errors[0]" class="validation-error">
                {{ errors[0] }}
              </span>
            </div>
          </ValidationProvider>
          <!-- //? End Confirm Password  -->

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
            <NuxtLink class="btn-back" :to="{ name: 'auth/login' }">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#long-arrow"></use>
              </svg>
              <span>Back to Login</span>
            </NuxtLink>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <!-- //? End  Form  -->

    <!-- //? all right reserved  -->
    <p class="right-reserved mb-0">Developed by <span>Glyceria</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewPassword',
  layout: 'auth',
  data() {
    return {
      password_type: 'password',
      processing: false,
      user_data: {
        email: null,
        code: '123456',
        password: '123456789',
        password_confirm: '123456789',
      },
    }
  },
  mounted() {
    this.user_data.email = this.$route.params.id
  },
  computed: {
    ...mapGetters({
      notify: ['front/auth/get_errors'],
    }),
  },
  methods: {
    //? show password
    showPassword() {
      this.password_type =
        this.password_type === 'password' ? 'text' : 'password'
    },
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
      await this.$store.dispatch('front/auth/reset_password', this.user_data)
      if (this.notify.state === 200) {
        this.$router.replace(
          this.localePath({
            name: 'auth/success',
          })
        )
        this.TriggerNotify(
          'success',
          'Your password has been successfuly reset. !'
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
