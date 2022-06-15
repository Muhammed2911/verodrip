<template>
  <div class="container-fluid">
    <div class="all_products_wrapper">
      <h3 class="title text-center mb-5">Product Categories</h3>
      <div class="row">
        <div
          class="wrap_slides col-lg-4 col-md-6 mb-5"
          v-for="i in categories_data"
          :key="i.id"
        >
          <SharedAppCard :items="i"></SharedAppCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'allproducts',

  async asyncData({ store }) {
    const get_categories_data = await store.dispatch(
      'front/products/get_categories'
    )
    return {
      get_categories_data,
    }
  },
  mounted() {
    this.$store.dispatch('front/products/get_categories', this.category_id)
  },
  computed: {
    ...mapGetters({
      categories_data: ['front/products/get_all_categories'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.all_products_wrapper {
  .title {
    color: $second-color;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }
}
</style>
