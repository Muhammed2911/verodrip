<template>
  <div class="main_services_wrapper">
    <div class="container-fluid">
      <div class="main_content">
        <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
        <SharedDescriptionPages
          :title="main_services.header"
          :description="main_services.paragraph"
          :button_text="main_services.button"
          :with_filter="true"
        ></SharedDescriptionPages>
        <div class="all_products">
          <div class="row">
            <div
              class="col-lg-4 col-sm-6"
              v-for="item in services_data"
              :key="item.id"
            >
              <nuxt-link
                class="test_link"
                :to="
                  localePath({
                    name: 'SingleServices',
                    params: { id: item.id },
                  })
                "
              >
                <div class="product_card text-center">
                  <img class="d-block m-auto" :src="item.icon" alt="products" />
                  <h6>{{ item.name }}</h6>
                  <p>
                    {{ item.description }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Services',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Services',
          to: '/services',
        },
      ],
    }
  },
  async asyncData({ store }) {
    const services = await store.dispatch('front/services/get_services')
    const get_main_services = await store.dispatch(
      'front/services/get_main_services'
    )
    return {
      services,
      get_main_services,
    }
  },
  computed: {
    ...mapGetters({
      services_data: ['front/services/get_services'],
      main_services: ['front/services/get_main_services'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_services_wrapper {
  padding-top: 90px;
  .main_content {
    background-image: url('@/assets/images/products/background shape.png');
    background-size: cover;
    background-position: center center;
  }
  .all_products {
    padding-top: 80px;
    .test_link {
      text-decoration: none;
    }
    .product_card {
      margin-bottom: 4rem;
      h6 {
        font-weight: 500;
        font-size: 24px;
        color: $third-color;
        margin: 15px 0;
      }
      p {
        color: $p-text-color;
        font-weight: 400;
        font-size: 16px;
        padding: 0 25px;
        @media (min-width: 320px) and (max-width: 991px) {
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
