<template>
  <div class="main_privacy_terms_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <div class="main_privacy_content">
        <div class="privacy_one mt-5">
          <h5 class="title mb-3">Privacy Policy</h5>
          <p>
            {{ quality_policy.test }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quality Policy',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Quality  Policy',
          to: '/privacy/qualitypolicy',
        },
      ],
    }
  },
  async asyncData({ store }) {
    const get_privacy_quality = await store.dispatch(
      'front/about/get_privacy_quality'
    )
    return {
      get_privacy_quality,
    }
  },
  computed: {
    quality_policy() {
      return this.$store.getters['front/about/get_quality_policy']
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/shared/privacy.scss';
</style>
