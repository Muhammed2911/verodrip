<template>
  <div class="main_privacy_terms_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <div class="main_privacy_content">
        <div class="privacy_one mt-5">
          <h5 class="title mb-3">Privacy Policy</h5>
          <p>
            {{ terms_policy.test }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms Conditions',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Terms Conditions',
          to: '/privacy/termsconditions',
        },
      ],
    }
  },
  async asyncData({ store }) {
    const get_privacy_terms = await store.dispatch(
      'front/about/get_privacy_terms'
    )
    return {
      get_privacy_terms,
    }
  },
  computed: {
    terms_policy() {
      return this.$store.getters['front/about/get_terms_policy']
    },
  },
}
</script>

<style lang="scss" scopped>
@import '@/assets/css/shared/privacy.scss';
</style>
