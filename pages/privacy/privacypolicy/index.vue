<template>
  <div class="main_privacy_terms_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <div class="main_privacy_content">
        <div class="privacy_one mt-5">
          <h5 class="title mb-3">Privacy Policy</h5>
          <p>
            {{ privacy_policy.test }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Privacy Policy',
          to: '/privacy/privacypolicy',
        },
      ],
    }
  },
  async asyncData({ store }) {
    const get_privacy = await store.dispatch('front/about/get_privacy')
    return {
      get_privacy,
    }
  },
  computed: {
    privacy_policy() {
      return this.$store.getters['front/about/get_privacy']
    },
  },
}
</script>

<style lang="scss" scopped>
@import '@/assets/css/shared/privacy.scss';
</style>
