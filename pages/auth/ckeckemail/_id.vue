<template>
  <div class="auth_pages_wrapper">
    <div class="main_form_wrapper">
      <div class="instructions">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#arrow_down"></use>
        </svg>
        <h4>Check your email</h4>
        <p>We sent a password reset link to</p>
        <p>{{ email }}</p>
      </div>
      <!-- //? start Open Email and send email again  -->
      <div class="form-group d-flex align-items-center flex-column">
        <a
          :href="`mailto:${email}`"
          target="_blank"
          class="open_email"
          @click="handleRedirect"
        >
          Open mail
        </a>
        <div class="mb-4 mt-4">
          <span>Didn’t Recieve the email ?</span>
          <button
            class="btn-back btn p-0"
            type="button"
            @click="resendCode"
            :disabled="processing"
          >
            click to resend
          </button>
        </div>
      </div>
      <!-- //? end Open Email and send email again  -->
      <!-- //? Back to login  -->
      <div class="text-center">
        <NuxtLink class="btn-back" :to="localePath({ name: 'auth/login' })">
          <svg class="icon">
            <use xlink:href="~/static/svg/sprite.svg#long-arrow"></use>
          </svg>
          <span>Back to Login</span>
        </NuxtLink>
      </div>
    </div>

    <!-- //? all right reserved  -->
    <p class="right-reserved mb-0">Developed by <span>Glyceria</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CheckEmail',
  layout: 'auth',
  data() {
    return {
      processing: false,
      email: null,
    }
  },
  mounted() {
    this.email = this.$route.params.id
  },
  computed: {
    ...mapGetters({
      notify: ['front/auth/get_errors'],
    }),
  },
  methods: {
    async resendCode() {
      this.processing = true
      await this.$store.dispatch('front/auth/send_otp_code', {
        email: this.email,
      })
      if (this.notify.state === 200) {
        this.$router.replace(
          this.localePath({
            name: 'auth/newpassword/id',
            params: { id: this.email },
          })
        )
        this.TriggerNotify(
          'success',
          'Verificatio code send .. please check your email !'
        )
      } else {
        this.TriggerNotify('error', this.notify.message)
      }
    },
    // handle redirect to next page on click
    handleRedirect() {
      setTimeout(() => {
        this.$router.replace(
          this.localePath({
            name: 'auth/newpassword/id',
            params: { id: this.email },
          })
        )
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/shared/auth.scss';
</style>
