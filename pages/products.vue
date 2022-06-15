<template>
  <div class="main_products_wrapping_container">
    <div class="container-fluid">
      <div class="main_content">
        <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
        <SharedDescriptionPages
          :title="main_product.title"
          :description="main_product.description"
          :button_text="main_product.button"
          :with_filter="true"
        ></SharedDescriptionPages>
        <!-- //? main routes wrapper  -->
      </div>
    </div>
    <div class="main_routes_wrapper">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Products',
          to: '/products',
        },
      ],
    }
  },

  async asyncData({ store }) {
    const get_main_product = await store.dispatch(
      'front/products/get_main_product'
    )
    return {
      get_main_product,
    }
  },
  computed: {
    main_product() {
      return this.$store.getters['front/products/get_main_product']
    },
  },
}
</script>

<style lang="scss" scoped>
.main_products_wrapping_container {
  padding-top: 90px;
  .main_content {
    background-image: url('@/assets/images/products/background shape.png');
    background-size: cover;
    background-position: center center;
  }
  .main_routes_wrapper {
    padding-top: 90px;
  }
}
</style>
