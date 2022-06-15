<template>
  <div class="single_crop_wrapper">
    <div class="main_content">
      <div class="container-fluid">
        <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
        <div class="details_content">
          <div class="part_one mt-5">
            <h5 class="title mb-3">{{ crop_applications_details.name }}</h5>
            <p>
              {{ crop_applications_details.description }}
            </p>
          </div>
        </div>

        <div class="details">
          <div class="description">
            <div class="categories mt-5">
              <h6 class="mb-2">Product Category:</h6>
              <p>
                {{ crop_applications_details.description }}
              </p>

              <!-- <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>
                  Turpis egestas ornare sed nunc. Vel consequat sem duis iaculis
                  luctus quisque.
                </li>
                <li>
                  fermentum justo ultricies libero. Dignissim id sit nulla
                  viverra
                </li>
              </ol> -->
            </div>
          </div>
          <div class="photo">
            <img :src="crop_applications_details.image" alt="products" />
          </div>
        </div>

        <!-- <div class="items_list">
          <p class="mt-5 mb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Turpis egestas ornare sed nunc. Vel consequat sem duis iaculis
              luctus quisque.
            </li>
            <li>
              fermentum justo ultricies libero. Dignissim id sit nulla viverra
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="mt-5 text-center">
      <BaseAppButton class="without_bg">{{
        crop_applications_details.button
      }}</BaseAppButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SingleCrop',
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
        {
          name: 'Single Crop application',
          to: '/cropapplications',
        },
      ],
    }
  },
  async asyncData({ store, route }) {
    const single_details = await store.dispatch(
      'front/cropapplication/get_single_crop_application',
      route.params.id
    )
    return {
      single_details,
    }
  },
  computed: {
    ...mapGetters({
      crop_applications_details: [
        'front/cropapplication/get_single_crop_applications',
      ],
    }),
  },
}
</script>

<style lang="scss" scoped>
.single_crop_wrapper {
  padding-top: 90px;
  .main_content {
    background-image: url('@/assets/images/crop/04.png');
    background-size: cover;
    background-position: center center;
  }
  .details_content {
    .title {
      color: $main-color;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }
    p {
      color: $p-text-color;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      width: 70%;
      @media (min-width: 320px) and (max-width: 991px) {
        width: 100%;
      }
    }
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) and (max-width: 991px) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: unset;
    }
    .description {
      .categories {
        h6 {
          color: $second-color;
          font-weight: 700;
          font-size: 16px;
          line-height: 120%;
          margin-top: 30px;
        }
        p {
          color: $p-text-color;
          width: 85%;
          @media (min-width: 320px) and (max-width: 991px) {
            width: 100%;
          }
        }
      }
      ol {
        padding: 0.7rem;
        li {
          color: $p-text-color;
          margin-bottom: 5px;
          font-weight: 400;
          font-size: 16px;
          line-height: 125%;
        }
      }
    }
    .photo {
      img {
        @media (min-width: 320px) and (max-width: 991px) {
          max-width: 100%;
          margin-top: 30px;
        }
      }
    }
  }
  .items_list {
    ol,
    ul {
      padding: 0.7rem;
      li {
        color: $p-text-color;
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
      }
    }
    p {
      color: $p-text-color;
    }
  }
}
</style>
