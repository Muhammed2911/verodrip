<template>
  <div class="main_auth_layout">
    <nuxt-link to="/" class="logo_wrapper">
      <img src="~/assets/images/logo.png" alt="logo" />
      <h4 class="site_title mt-3 text-white">Vero<span>d</span>rip</h4>
    </nuxt-link>
    <!-- //? Wrap authentication pages  -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/shared/auth.scss';
</style>
