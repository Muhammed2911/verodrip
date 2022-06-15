<template>
  <div class="main_projects_wrapper">
    <div class="container-fluid">
      <div class="for_breadcrumb_wrap">
        <SharedAppBreadcrumb :items="items"></SharedAppBreadcrumb>
      </div>

      <div class="main_content d-flex">
        <div class="photo">
          <img :src="main_projects.image" alt="projects" />
        </div>
        <div class="details">
          <h3>{{ main_projects.title }}</h3>
          <p>
            {{ main_projects.description }}
          </p>
          <BaseAppButton class="without_bg mt-3">{{
            main_projects.button
          }}</BaseAppButton>
        </div>
      </div>
      <div class="project_cards">
        <div class="content mb-5">
          <h3>{{ main_projects.title_two }}</h3>
          <p>
            {{ main_projects.description_two }}
          </p>
          <BaseAppButton class="btn_project without_bg mt-3">{{
            main_projects.button_two
          }}</BaseAppButton>
        </div>
        <!-- // todo: select boxes  -->
        <div class="years_locations_wrapper mb-5">
          <div class="one">
            <BaseAppSelectBox
              :isLabel="false"
              :options="years"
              placeholder="Year"
              class="search_project"
              v-model="year"
            ></BaseAppSelectBox>
          </div>
          <div>
            <BaseAppSelectBox
              :isLabel="false"
              :options="location"
              placeholder="Location"
              class="search_project"
              v-model="year"
            ></BaseAppSelectBox>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-5" v-for="i in projects_data" :key="i.id">
            <nuxt-link
              :to="localePath({ name: 'projects/id', params: { id: i.id } })"
            >
              <ModulesProjectsCardDetails
                :itemObj="i"
              ></ModulesProjectsCardDetails>
              <!-- /projects/${i.id} -->
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Projects',
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
      ],
      year: null,
      years: [
        { name: '2000', value: 2000 },
        { name: '2001', value: 2001 },
        { name: '2020', value: 2020 },
        { name: '2022', value: 2022 },
      ],
      location: [
        { name: 'Egypt', value: 'Egypt' },
        { name: 'Egypt', value: 'Egypt' },
        { name: 'Egypt', value: 'Egypt' },
        { name: 'Egypt', value: 'Egypt' },
      ],
    }
  },
  async asyncData({ store }) {
    const projects = await store.dispatch('front/projects/get_projects')
    const get_main_projects = await store.dispatch(
      'front/projects/get_main_projects'
    )
    return {
      projects,
      get_main_projects,
    }
  },
  computed: {
    ...mapGetters({
      projects_data: ['front/projects/get_projects'],
      main_projects: ['front/projects/get_main_projects'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.main_projects_wrapper {
  padding-top: 90px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    right: 0;
    left: 0;
    width: 80%;
    left: 20%;
    height: 100%;
    background-image: url('../../assets/images/projects/leaf.png');
    background-repeat: no-repeat;
    z-index: -1;
    z-index: -1;
    top: -9px;
    background-position-x: center;
    @media (min-width: 320px) and (max-width: 991px) {
      width: 100%;
    }
  }
  .for_breadcrumb_wrap {
    padding: 0 50px;
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 0;
    }
  }
  .main_content {
    margin: 3rem 0;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 1200px) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      text-align: center;
      margin: 0.5rem 0 2rem;
    }
    .details {
      margin-top: 60px;
      @media (min-width: 320px) and (max-width: 991px) {
        margin-top: 20px;
      }
      h3 {
        font-weight: 700;
        font-size: 32px;
        line-height: 120%;
        color: $second-color;
      }
      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 120%;
        color: $p-text-color;
        @media (min-width: 1500px) {
          width: 80%;
        }
      }
    }
    .photo {
      width: 600px;
      height: 330px;
      @media (min-width: 320px) and (max-width: 767px) {
        width: auto;
        height: 260px;
      }
      @media (min-width: 767px) and (max-width: 1200px) {
        margin: auto;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
        @media (min-width: 320px) and (max-width: 991px) {
          // width: 100%;
          height: 100%;
          max-height: 515px;
          max-width: 100%;
        }
      }
    }
  }
  .project_cards {
    .content {
      text-align: center;
      @media (min-width: 320px) and (max-width: 767px) {
        text-align: left;
      }
      h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        color: $second-color;
        @media (min-width: 1500px) {
          font-size: 30px;
        }
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: $p-text-color;
        @media (min-width: 1500px) {
          font-size: 24px;
        }
      }
      .btn_project {
        min-width: auto;
        @media (min-width: 1500px) {
          min-width: 170px;
        }
      }
    }
    .years_locations_wrapper {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      @media (min-width: 320px) and (max-width: 767px) {
        display: none;
      }
    }
  }
}
</style>
