<template>
  <div class="main_services_wrapper">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <h5 class="title mb-3 mt-5">{{ service_details.name }}</h5>
      <div class="main_content">
        <!-- //? start main details and img  -->
        <div class="details">
          <div class="description">
            <p class="mb-5">
              {{ service_details.summary }}
            </p>

            <div class="categories mt-5">
              <h6 class="mb-2">Product Category:</h6>
              {{ service_details.description }}
            </div>
          </div>
          <div class="photo">
            <img class="img_1" :src="service_details.icon" alt="products" />
            <img class="img_2" :src="service_details.icon" alt="products" />
          </div>
        </div>
        <!-- //? end main details and img  -->
        <div class="items_list">
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Turpis egestas ornare sed nunc. Vel consequat sem duis iaculis
              luctus quisque.
            </li>
            <li>
              fermentum justo ultricies libero. Dignissim id sit nulla viverra
            </li>
          </ol>
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
        </div>
      </div>

      <div class="mt-5 text-center">
        <BaseAppButton class="without_bg">{{
          service_details.button
        }}</BaseAppButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SingleServices',
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
        {
          name: 'Single Services',
          to: '/services',
        },
      ],
    }
  },
  async asyncData({ store, route }) {
    const single_details = await store.dispatch(
      'front/services/get_single_services',
      route.params.id
    )
    return {
      single_details,
    }
  },
  computed: {
    ...mapGetters({
      service_details: ['front/services/get_single_service'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_services_wrapper {
  padding-top: 90px;
  .title {
    color: $main-color;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }
  .main_content {
    background-image: url('@/assets/images/products/background.png');
    background-size: cover;
    background-position: center center;
    .details {
      display: flex;
      justify-content: space-between;
      @media (min-width: 320px) and (max-width: 991px) {
        display: block;
      }
      .description {
        p {
          color: $text-input-color;
          width: 85%;
          @media (min-width: 320px) and (max-width: 991px) {
            width: 100%;
          }
        }
        .categories {
          @media (min-width: 320px) and (max-width: 991px) {
            display: none;
          }
          h6 {
            color: $second-color;
            font-weight: 700;
            font-size: 16px;
            line-height: 120%;
          }
          p {
            color: $p-text-color;
            width: 60%;
          }
        }
      }
      .photo {
        .img_1 {
          @media (min-width: 320px) and (max-width: 991px) {
            display: none;
          }
        }
        .img_2 {
          display: none;
          @media (min-width: 320px) and (max-width: 991px) {
            display: block;
            margin: 20px 0;
            max-width: 100%;
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
  p {
    color: $p-text-color;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
  }
  .without_bg {
    @media (min-width: 320px) and (max-width: 991px) {
      display: none;
    }
  }
}
</style>
