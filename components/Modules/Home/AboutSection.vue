<template>
  <div class="about_us">
    <div class="container-fluid">
      <div class="main_about_container">
        <div class="row about_main_row">
          <div class="photo col-lg-7 text-center col-sm-12">
            <img :src="about_us.image" draggable="false" alt="person" />
          </div>
          <div class="tabs col-lg-5 col-sm-12">
            <div>
              <b-tabs content-class="mt-3">
                <b-tab :title="about_us.header" active>
                  <p>
                    {{ about_us.paragraph }}
                  </p>
                  <nuxt-link
                    class="d-block more_info"
                    :to="localePath('/aboutus')"
                  >
                    More info
                  </nuxt-link>
                  <!-- <span class="d-block more_info">More info</span> -->
                </b-tab>
                <b-tab title="Mission">
                  <p>
                    {{ about_mission.paragraph }}
                  </p>
                  <nuxt-link
                    class="d-block more_info"
                    :to="localePath('/aboutus')"
                    >More info</nuxt-link
                  >
                  <!-- <span class="d-block more_info">More info</span> -->
                </b-tab>
                <b-tab title="Vision">
                  <p>
                    {{ about_vision.paragraph }}
                  </p>
                  <nuxt-link
                    class="d-block more_info"
                    :to="localePath('/aboutus')"
                  >
                    More info
                  </nuxt-link>
                  <!-- <span ></span> -->
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['about_us', 'about_mission', 'about_vision'],
}
</script>

<style lang="scss" scoped>
.about_us {
  margin: $main-margin 0;
  padding-top: 70px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 70%;
    top: 0;
    left: 0;
    height: 100%;
    background-image: url('~/assets/images/home/about.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -1;
    @media (min-width: 320px) and (max-width: 991px) {
      width: 100%;
    }
  }
  //? main row
  .main_about_container {
    .about_main_row {
      @media (min-width: 320px) and (max-width: 991px) {
        flex-direction: column-reverse;
      }
    }
    .photo {
      @media (min-width: 320px) and (max-width: 991px) {
        margin-top: 2rem;
      }
      img {
        max-width: 100%;
        max-height: 412px;
      }
    }
    .more_info {
      color: $second-color;
      cursor: pointer;
      text-decoration: none;
      font-weight: 400;
    }
  }
}
</style>
<style lang="scss">
.about_us {
  .tabs {
    @media (min-width: 991px) {
      margin-top: 2rem;
    }
  }
  .nav-tabs {
    border: none;
    gap: 20px;
    @media (min-width: 320px) and (max-width: 991px) {
      justify-content: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      gap: 10px;
    }
    .nav-item {
      .nav-link {
        color: rgba($tabs-color, 0.48);
        border: none;
        font-weight: 500;
        font-size: 24px;
        position: relative;
        margin: 0 0.5rem;
        transition: $main-transition;
        padding: 0;
        color: rgba(#c4c4c4, 0.48);
        @media (min-width: 320px) and (max-width: 480px) {
          padding: 0.3rem;
          font-size: 16px;
        }
        &::before {
          position: absolute;
          content: '';
          height: 2px;
          width: 0;
          background: $second-color;
          left: 0;
          top: 100%;
          transition: $main-transition;
        }
        &.active,
        &:hover {
          color: $main-color;
          &::before {
            width: 100%;
          }
        }
      }
    }
  }

  .tab-content > .active {
    p {
      color: $main-color;
      font-weight: 400;
    }
  }
}
</style>
