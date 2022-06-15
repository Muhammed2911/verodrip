<template>
  <div class="main_about_us_wrapper">
    <div class="main_content">
      <div class="container-fluid">
        <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
        <div class="details_wrapper">
          <p class="text_wrap">
            {{ about_us.header }}
          </p>
          <div class="img_wrapper">
            <img class="img" :src="about_us.image" alt="about" />
          </div>
          <div class="about_description text-center mt-5">
            <h5 class="title mb-4">{{ about_us.header }}</h5>

            <p>
              {{ about_us.paragraph }}
            </p>
          </div>
          <div class="our_mission_wrapper">
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="every_item one">
                  <h6>{{ about_marketing.title }}</h6>
                  <p>
                    {{ about_marketing.paragraph }}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="every_item">
                  <img
                    class="mission_img"
                    :src="about_mission.image"
                    alt="Mission"
                  />
                  <h6>Our Mission</h6>
                  <p>
                    {{ about_mission.paragraph }}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="every_item our_vision">
                  <h6>
                    <img
                      class="mission_img"
                      :src="about_vision.image"
                      alt="Mission"
                    />
                    <span class="d-block mt-2">OurVision</span>
                  </h6>
                  <p>
                    {{ about_vision.paragraph }}
                  </p>
                  <a href="#">More info</a>
                </div>
              </div>
            </div>
          </div>
          <div class="header_title text-lg-center mt-5 about_description">
            <h5 class="title mb-4">{{ main_client.title }}</h5>
            <p class="text-lg-center">
              {{ main_client.paragraph }}
            </p>
            <div class="mt-5 our_clients_slider_wrapper">
              <client-only>
                <VueSlickCarousel v-bind="slider_settings">
                  <div
                    class="every_client"
                    v-for="item in all_clients"
                    :key="item.id"
                  >
                    <img class="client_img" :src="item.logo" :alt="item.name" />
                  </div>
                </VueSlickCarousel>
              </client-only>
            </div>
          </div>
          <div class="map_wrapper">
            <img class="w-100" src="@/assets/images/about/map.png" alt="map" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AboutUs',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About Us',
          to: '/aboutus',
        },
      ],

      slider_settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    }
  },
  async asyncData({ store }) {
    const get_about_us = await store.dispatch('front/about/get_about_us')
    const get_main_client = await store.dispatch('front/about/get_main_client')
    const get_all_clients = await store.dispatch('front/about/get_all_clients')
    const get_about_us_marketing = await store.dispatch(
      'front/about/get_about_us_marketing'
    )
    const get_about_us_mission = await store.dispatch(
      'front/about/get_about_us_mission'
    )
    const get_about_us_vision = await store.dispatch(
      'front/about/get_about_us_vision'
    )

    return {
      get_about_us,
      get_about_us_marketing,
      get_about_us_mission,
      get_about_us_vision,
      get_main_client,
      get_all_clients,
    }
  },

  computed: {
    ...mapGetters({
      about_us: ['front/about/get_about_us'],
      main_client: ['front/about/get_main_client'],
      all_clients: ['front/about/get_all_clients'],
      about_marketing: ['front/about/get_about_us_marketing'],
      about_mission: ['front/about/get_about_us_mission'],
      about_vision: ['front/about/get_about_us_vision'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_about_us_wrapper {
  padding-top: 90px;
  background-image: url('@/assets/images/about/01.png');
  background-size: cover;
  .main_content {
    .details_wrapper {
      .text_wrap {
        margin: auto;
        width: 50%;
        font-weight: 600;
        font-size: 32px;
        line-height: 120%;
        color: $second-color;
        @media (min-width: 320px) and (max-width: 991px) {
          width: 100%;
          text-align: center;
        }
        @media (min-width: 320px) and (max-width: 567px) {
          font-size: 20px;
        }
      }
      .img_wrapper {
        .img {
          width: 330px;
          height: 312px;
          margin: 20px auto 0;
          display: block;
          max-width: 100%;
        }
      }
      .about_description {
        .title {
          color: $third-color;
          font-weight: 700;
          font-size: 24px;
          line-height: 120%;
        }
        p {
          color: $main-color;
          font-weight: 400;
          font-size: 18px;
          line-height: 120%;
          margin-bottom: 30px;
          @media (min-width: 320px) and (max-width: 567px) {
            font-size: 16px;
          }
          a {
            color: $third-color;
            font-weight: 500;
            text-decoration: none;
          }
        }
      }
      .header_title {
        .title {
          color: $main-color;
        }
        p {
          color: $p-text-color;
          font-weight: 400;
          font-size: 16px;
          line-height: 120%;
          width: 70%;
          margin: auto;
          @media (min-width: 320px) and (max-width: 991px) {
            width: 100%;
          }
        }
        .about_slider_wrapper {
          margin: 50px 0;
          .icon {
            width: 70px;
            height: 70px;
            max-width: 100%;
            max-height: 100%;
            fill: #c6d8d5;
            transition: $main-transition;
            cursor: grab;
            &:hover {
              fill: $third-color;
            }
          }
        }
      }
      .our_mission_wrapper {
        margin: 110px 0 70px;
        // @media (min-width: 320px) and (max-width: 991px) {
        //   margin: 50px 0;
        // }
        .every_item {
          min-height: 433px;
          padding: 30px 20px;
          transition: $main-transition;
          margin-bottom: 30px;
          @media (min-width: 320px) and (max-width: 991px) {
            min-height: auto;
            border-radius: 20px;
          }
          // .icon {
          //   width: 17px;
          //   height: 17px;
          //   fill: $second-color;
          // }
          .mission_img {
            width: 50px;
            height: 50px;
          }
          h6 {
            margin: 10px 0 20px;
          }
          p {
            color: $p-text-color;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
          }
          &:hover {
            box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
          }
          &.one {
            h6 {
              color: $third-color;
              margin: 40px 0 20px;
              font-weight: 500;
              font-size: 18px;
              line-height: 120%;
            }
            p {
              color: $p-text-color;
              font-weight: 400;
              font-size: 24px;
              line-height: 29px;
              @media (min-width: 320px) and (max-width: 991px) {
                font-size: 16px;
              }
            }
            @media (min-width: 320px) and (max-width: 991px) {
              padding: 0;
              font-size: 16px;
            }
            &:hover {
              box-shadow: none !important;
            }
          }
          &.our_vision {
            position: relative;
            h6 {
              color: $third-color;
              margin: 80px 0 20px;
              font-weight: 500;
              font-size: 16px;
              line-height: 120%;
              @media (min-width: 320px) and (max-width: 991px) {
                margin: 0 0 20px;
              }
            }
            p {
              color: $p-text-color;
              font-weight: 400;
              font-size: 14px;
              line-height: 130%;
            }
            a {
              color: $third-color;
              text-decoration: none;
              font-weight: 400;
              font-size: 17px;
              line-height: 120%;
            }
            &::before {
              position: absolute;
              content: '';
              left: 0;
              bottom: 0;
              height: 70%;
              width: 2px;
              background-color: rgba(196, 196, 196, 0.45);
              @media (min-width: 320px) and (max-width: 991px) {
                bottom: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.main_about_us_wrapper {
  .our_clients_slider_wrapper {
    .every_client {
      .client_img {
        width: 70px;
        height: 70px;
        display: block;
        margin: auto;
        cursor: grab;
      }
    }
  }
}
</style>
