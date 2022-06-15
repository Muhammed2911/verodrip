<template>
  <div class="app_footer">
    <!-- //? start footer content  -->
    <div class="footer_wrapper">
      <div class="container">
        <div class="logo mb-5">
          <img src="@/assets/images/home/Logo-footer.png" alt="" />
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 part_one for_sm">
            <!-- <h6 class="mb-3">Grow more with less ...</h6> -->
            <p>
              {{ footer.logo_text }}
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 part_two for_sm">
            <p>Республики Узбекистан, г. Джиззак, Промзона 1А Индекс: 100161</p>
            <p>+998909614444</p>
            <p>+998909614444</p>
            <p>info@verodrip.uz</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 for_sm">
            <ul class="list-unstyled links_list">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Crop Applications</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 part_three for_sm">
            <p>{{ footer.follow_us_on }}</p>
            <ul class="list-unstyled social_media d-flex align-items-center">
              <li>
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#twitter"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#linkedin"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#facebook"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="all_terms mt-5">
          <span class="d-block">
            <nuxt-link to="/">Quality Policy</nuxt-link>
          </span>
          |
          <span class="d-block">
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </span>
          |
          <span class="d-block">
            <nuxt-link to="/">Terms &amp; Conditions</nuxt-link>
          </span>
        </div>
        <div class="all_right_reserved">
          <span>{{ footer.all_rights_reserved }}</span>
          <div class="with_love">
            <img
              class="d-block mb-2"
              src="../../assets/images/home/with.png"
              alt="with-love"
            />
            <img
              class="d-block"
              src="../../assets/images/home/loveby.png"
              alt="with-love"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- //? end footer content  -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppFooter',
  mounted() {
    this.$store.dispatch('front/home/fetch_footer')
  },
  computed: {
    ...mapGetters({
      footer: ['front/home/get_footer'],
    }),
  },
}
</script>

<style lang="scss" scoped>
.app_footer {
  min-height: 600px;
  background-image: url('~/assets/images/home/footer.png');
  background-size: cover;
  position: relative;
  margin-top: 90px;
  .logo {
    @media (min-width: 320px) and (max-width: 576px) {
      padding-top: 100px;
    }
  }
  .help_you {
    background-image: url('~/assets/images/home/footer-bg-01.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 50%;
    left: 50%;
    top: -35px;
    transform: translateX(-50%);
    border-radius: 15px;
    padding: 30px 30px;
    h6 {
      color: $third-color;
      font-weight: 400;
      font-size: 32px;
      letter-spacing: 3px;
    }
    p {
      color: $main-color;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 0;
    }
    button {
      color: #ff8f15;
      background: #ffeedb;
      border-radius: 4px;
      border: 1px solid #ffeedb;
      padding: 5px;
      margin-top: 10px;
    }
  }
  .footer_wrapper {
    padding-top: 200px;
    color: $white;
    .part_one {
      h6 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
    }
    .part_two {
      p {
        font-size: 15px;
        margin-bottom: 12px;
      }
    }
    .links_list {
      li {
        margin-bottom: 12px;
        a {
          color: $white;
          text-decoration: none;
        }
      }
    }
    .part_three {
      p {
        margin-bottom: 10px;
        font-size: 15px;
      }
      .social_media {
        gap: 15px;
        li {
          a {
            color: $white;
            text-decoration: none;
            .icon {
              width: 22px;
              height: 22px;
              fill: $white;
            }
          }
        }
      }
    }
  }
  .all_terms {
    display: flex;
    gap: 30px;
    a {
      color: $white;
      text-decoration: none;
    }
    @media (min-width: 440px) and (max-width: 576px) {
      gap: 0;
      justify-content: space-between;
      span {
        font-size: 16px;
      }
    }
    @media (min-width: 320px) and (max-width: 440px) {
      gap: 0;
      justify-content: space-between;
      span {
        font-size: 11px;
      }
    }
  }
  .all_right_reserved {
    margin-top: 20px;
    padding: 20px;
    position: relative;
    text-align: center;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 90%;
      height: 1px;
      background-color: rgba(#fff, 0.32);
    }
    .with_love {
      position: absolute;
      right: -50px;
      bottom: 25px;
      @media (min-width: 320px) and (max-width: 576px) {
        position: relative;
        right: auto;
        // display: flex;
        bottom: auto;
      }
    }
  }
  .for_sm {
    @media (min-width: 320px) and (max-width: 576px) {
      width: 100%;
      margin-top: 40px;
    }
  }
}
</style>
