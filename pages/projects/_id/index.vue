<template>
  <div class="single_project_details">
    <div class="container-fluid">
      <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      <div class="main_details">
        <div
          class="part_one mb-4"
          :style="{
            backgroundImage: `url(${project_details.image})`,
          }"
        >
          <div class="pro_details">
            <h4 class="title">{{ project_details.name }}</h4>
            <div class="icons_wrapping">
              <div>
                <h4>
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#location"></use>
                  </svg>
                  <span>Location</span>
                </h4>
                <span class="d-block">{{ project_details.location }}</span>
              </div>
              <div>
                <h4>
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#location"></use>
                  </svg>
                  <span>Year</span>
                </h4>
                <span class="d-block">May, 2010</span>
              </div>
            </div>
            <div class="main_text_wrapping">
              <h4 class="summary">Summarization</h4>
              <p class="text_wrapping">
                {{ project_details.summary }}
              </p>
            </div>
          </div>
        </div>

        <div class="part_two">
          <h3>Description</h3>
          <p>
            {{ project_details.description }}
          </p>

          <div class="mt-5 mb-5 img2_wrapper">
            <img class="d-block w-100" :src="project_details.image" alt="img" />
          </div>
        </div>

        <div class="other_projects">
          <h3 class="text-center mb-5">Other Projects</h3>
          <div class="row">
            <div class="col-md-6 col-sm-12 mb-5" v-for="i in 4" :key="i">
              <ModulesProjectsCardDetails
                :itemObj="itemObj"
              ></ModulesProjectsCardDetails>
            </div>
          </div>

          <div
            class="text-center browse_projects mt-3 d-flex justify-content-center align-items-center"
          >
            <nuxt-link to="/projects">{{
              project_details.browse_button
            }}</nuxt-link>
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
            </svg>
          </div>
          <div class="d-flex justify-content-center mt-5 align-items-center">
            <BaseAppButton class="btn_project without_bg m-auto">{{
              project_details.button
            }}</BaseAppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Project Details',
  data() {
    return {
      items: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Projects',
          to: '/projects',
        },
        {
          name: 'Single Project',
          to: '/projects',
        },
      ],
      itemObj: {
        image:
          'http://master.verodrip.uz/storage/image_projects/default_image.png',
        summary: 'summary project seeder',
      },
    }
  },
  async asyncData({ store, route }) {
    const single_details = await store.dispatch(
      'front/projects/get_single_projects',
      route.params.id
    )
    return {
      single_details,
    }
  },
  computed: {
    ...mapGetters({
      project_details: ['front/projects/get_single_project'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.single_project_details {
  padding-top: 90px;
  .main_details {
    .part_one {
      position: relative;
      // background-image: url('@/assets/images/projects/05.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: flex-end;
      height: 500px;
      @media (min-width: 1500px) {
        min-height: 500px;
      }
      @media (min-width: 320px) and (max-width: 767px) {
        border-radius: 10px;
        overflow: hidden;
      }
      .pro_details {
        width: 50%;
        right: 0;
        top: 0;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.2625) 11.77%,
          rgba(0, 0, 0, 0.75) 94.06%
        );
        padding: 20px;
        @media (min-width: 320px) and (max-width: 991px) {
          width: 100%;
        }
        @media (min-width: 1500px) {
          height: auto;
        }
        .title {
          color: $white;
          border-bottom: 1px solid $white;
          padding-bottom: 10px;
          @media (min-width: 1200px) {
            padding-bottom: 20px;
          }
        }
        .summary {
          color: $second-color;
          @media (min-width: 1500px) {
            margin-bottom: 20px;
          }
        }
        .text_wrapping {
          color: $white;
          margin-bottom: 10px;
          font-weight: 400;
          font-size: 16px;
          line-height: 120%;
          @media (min-width: 1200px) {
            margin-bottom: 20px;
          }
          &.three_text {
            @media (min-width: 320px) and (max-width: 767px) {
              display: none;
            }
          }
        }

        .icons_wrapping {
          color: $white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
          @media (min-width: 1200px) {
            margin: 30px 0;
          }
          .icon {
            width: 17px;
            height: 17px;
            fill: $white;
          }
          h4 {
            color: $second-color;
          }
        }
      }
    }
    .part_two {
      h3 {
        color: $second-color;
        font-weight: 700;
        font-size: 25px;
        line-height: 130%;
      }
      p {
        color: $p-text-color;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
      }
      .texts {
        p {
          a {
            display: inline-block;
            color: $main-color;
            font-weight: 500;
            font-size: 16px;
            line-height: 120%;
            text-decoration: underline;
          }
          &.link_two {
            a {
              color: $third-color;
            }
          }
        }
      }
    }
    .img2_wrapper {
      height: 400px;
      @media (min-width: 320px) and (max-width: 767px) {
        height: 260px;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .other_projects {
      margin-top: 50px;
      h3 {
        color: $main-color;
        font-weight: 700;
        font-size: 25px;
        line-height: 130%;
      }
      .browse_projects {
        a {
          color: $second-color;
          cursor: pointer;
          text-decoration: none;
        }
        .icon {
          width: 17px;
          height: 17px;
          fill: $second-color;
        }
      }
    }
  }
}
</style>
