<template>
  <div class="auth_pages_wrapper">
    <!-- //? Start Login Form  -->
    <div class="main_form_wrapper">
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

            <!-- //? Start Password  -->
            <ValidationProvider rules="required|min:8" v-slot="{ errors }">
              <div class="form_group floating">
                <div class="input-group">
                  <input
                    :type="password_type"
                    class="form-control"
                    placeholder="user email"
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

            <!-- //? start remember me checkbox -->
            <div
              class="
                form-group
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <div class="remember">
                <input type="checkbox" id="rememberMe" />
                <label for="rememberMe">Remember me</label>
              </div>
              <div class="forgetPass">
                <nuxt-link :to="localePath({ name: 'auth/forgetpassword' })">
                  Forget Password ?
                </nuxt-link>
              </div>
            </div>
            <!-- //? end  remember me checkbox -->

            <!-- //? Start submit button  -->
            <div class="form-group d-flex justify-content-center">
              <BaseAppButton
                type="submit"
                class="submit_btn mt-2"
                :disabled="processing"
              >
                <span v-if="!processing">Sign In</span>
                <b-spinner variant="light" v-if="processing"></b-spinner
              ></BaseAppButton>
            </div>
            <!-- //? aeand submit button  -->
          </form>
        </ValidationObserver>
      </client-only>
    </div>
    <!-- //? End Login Form  -->

    <!-- //? all right reserved  -->
    <p class="right-reserved mb-0">Developed by <span>Glyceria</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      password_type: 'password',
      processing: false,
      user_data: {
        email: 'seeder@gmail.com',
        password: '123456789',
      },
    }
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
      await this.$store.dispatch('front/auth/user_login', this.user_data)
      if (this.notify.state === 200) {
        await this.$store.dispatch('front/auth/fetch_user')
        if (this.notify.state === 200) {
          this.$router.replace(this.localePath('/dashboard'))
          this.TriggerNotify('success', 'Welcome back to your area !')
        } else {
          this.TriggerNotify(
            'error',
            'Something went wrong .. please try again !'
          )
        }
      } else {
        this.TriggerNotify(this.notify.type, this.notify.message)
      }
      this.processing = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/shared/auth.scss';
</style>
