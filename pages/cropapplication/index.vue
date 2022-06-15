<template>
  <div class="main_crop_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <SharedDescriptionPages
        :title="main_crop_applications.header"
        :description="main_crop_applications.paragraph"
        :button_text="main_crop_applications.button"
      ></SharedDescriptionPages>
      <div class="main_content">
        <div class="row">
          <div
            class="wrapping col-lg-3 col-md-4 col-sm-6 mb-5"
            v-for="i in crop_applications_data"
            :key="i.id"
          >
            <div class="card_container">
              <nuxt-link
                :to="
                  localePath({
                    name: 'cropapplication/id',
                    params: { id: i.id },
                  })
                "
              >
                <img class="d-block w-100" :src="i.image" alt="img" />
                <h6>{{ i.name }}</h6>
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
  name: 'CropApplication',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Crop Applications',
          to: '/cropapplications',
        },
      ],
      title: 'Crop Application',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      button_text: 'Download Crop Brochure',
    }
  },
  async asyncData({ store }) {
    const crop_applications = await store.dispatch(
      'front/cropapplication/get_crop_applications'
    )
    const get_main_crop_applications = await store.dispatch(
      'front/cropapplication/get_main_crop_applications'
    )
    return {
      crop_applications,
      get_main_crop_applications,
    }
  },
  computed: {
    ...mapGetters({
      crop_applications_data: ['front/cropapplication/get_crop_applications'],
      main_crop_applications: [
        'front/cropapplication/get_main_crop_applications',
      ],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_crop_wrapper {
  padding-top: 90px;
  .main_content {
    margin-top: 50px;
    .card_container {
      position: relative;
      img {
      }
      h6 {
        position: absolute;
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        background: rgba(0, 0, 0, 0.35);
        border-radius: 8px;
        color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: $main-transition;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
      }
      &:hover {
        h6 {
          opacity: 1;
        }
      }
    }
  }
  .wrapping {
    @media (min-width: 480px) and (max-width: 575px) {
      width: 50% !important;
    }
  }
}
</style>
