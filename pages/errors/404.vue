<template>
  <div class="errors_cases_page">
    <div class="container-fluid">
      <div class="main_wrapping" v-for="i in err" :key="i.id">
        <div class="part_one" v-if="i.type == 404">
          <img
            class="d-block"
            src="@/assets/images/errors/ops.png"
            alt="text"
          />
          <div class="text">
            <p class="one">{{ i.header }}</p>
            <p class="one">{{ i.title }}</p>
            <!-- <p class="one">We are <span>sorry</span></p> -->
            <p class="two">{{ i.paragraph }}</p>
            <nuxt-link class="d-block link" to="/">{{ i.button }}</nuxt-link>
          </div>
        </div>
        <div class="part_tow" v-if="i.type == 404">
          <img class="w-100 d-block mt-5" :src="i.image" alt="404" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  layout: 'errorpages',
  // data test not important you can remove it
  // data() {
  //   return {
  //     err: [],
  //   }
  // },

  // test  not important you can remove it
  // asyncData({ $axios }) {
  //   return $axios.$get('/error-get').then((res) => {
  //     return {
  //       err: res.data,
  //     }
  //   })
  // },

  async asyncData({ store }) {
    const get_errors = await store.dispatch('front/about/get_errors')
    return {
      get_errors,
    }
  },
  computed: {
    err() {
      return this.$store.getters['front/about/get_errors']
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/css/shared/errors.scss';
</style>
