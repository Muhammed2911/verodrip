<template>
  <div class="auth_pages_wrapper">
    <div class="main_form_wrapper">
      <div class="instructions">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#check"></use>
        </svg>
        <h4>Password reset</h4>
        <p>Your password has been successfully reset.</p>
      </div>
      <!-- //? start Open Email and send email again  -->
      <div class="form-group d-flex align-items-center flex-column">
        <div class="mb-4 mt-4">
          <!-- <button class="btn " type="button">Continue</button> -->
          <NuxtLink
            :to="localePath({ name: 'auth/login' })"
            class="btn open_email"
          >
            Continue
          </NuxtLink>
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
export default {
  name: 'SuccessReset',
  layout: 'auth',
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/shared/auth.scss';
</style>
