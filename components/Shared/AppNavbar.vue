<template>
  <main>
    <section class="nav_wrapper">
      <div class="page_title">
        <h4>{{ title }}</h4>
      </div>
      <nuxt-link :to="localePath('/dashboard/profile')" class="option_wrapper">
        <img src="~/assets/images/dashboard/avatar.png" alt="avatar" />
        <span> Admin Full Name </span>
      </nuxt-link>
    </section>

    <section class="res_navbar">
      <div class="flex_wrapper">
        <div class="menu_icon_wrapper">
          <svg class="icon" @click="togglePanel">
            <use xlink:href="~/static/svg/sprite.svg#menu"></use>
          </svg>
        </div>
        <!-- end:: menu_icon_wrapper -->

        <div class="logo_wrapper">
          <img src="~/assets/images/logo-sm.png" alt="logo" />
        </div>
        <!-- end:: logo_wrapper -->
      </div>

      <div class="panel_wrapper" :class="{ show: panel_status }">
        <div class="top_bar">
          <div class="menu_icon_wrapper">
            <svg class="icon" @click="togglePanel">
              <use xlink:href="~/static/svg/sprite.svg#menu"></use>
            </svg>
          </div>
          <!-- end:: menu_icon_wrapper -->

          <div class="logo_wrapper">
            <img src="~/assets/images/dashboard/p-logo.svg" alt="logo" />
          </div>
          <!-- end:: logo_wrapper -->

          <div class="lang_switcher">
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <img
                  :src="require(`~/assets/images/dashboard/${localize}.png`)"
                  alt="flag"
                />
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
                </svg>
              </template>
              <b-dropdown-item v-if="localize != 'en'">
                <img src="~/assets/images/dashboard/en.png" alt="flag" />
                <span>English</span>
              </b-dropdown-item>
              <b-dropdown-item v-if="localize != 'ru'">
                <img src="~/assets/images/dashboard/ru.png" alt="flag" />
                <span>Russian</span>
              </b-dropdown-item>
              <b-dropdown-item v-if="localize != 'tr'">
                <img src="~/assets/images/dashboard/tr.png" alt="flag" />
                <span>Turkey</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <!-- end:: top_bar -->
        <div class="menu_wrapper">
          <button type="button" class="btn btn-link">
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#close"></use>
            </svg>
          </button>
          <div class="menu">
            <nuxt-link :to="localePath('/dashboard/profile')" class="line">
              <img src="~/assets/images/dashboard/avatar.png" alt="avatar" />
              <span>Admin name</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#home"></use>
              </svg>
              <span>Home</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/services')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#services"></use>
              </svg>
              <span>Services</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/products')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#products"></use>
              </svg>
              <span>Products</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/projects')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#projects"></use>
              </svg>
              <span>Projects</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/crop')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#crop"></use>
              </svg>
              <span>Crop applications</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/aboutus')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#about"></use>
              </svg>
              <span>About us</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/contact')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#contact"></use>
              </svg>
              <span>Contact us</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/policies')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#policies"></use>
              </svg>
              <span>Policies</span>
            </nuxt-link>
            <!-- end:: line -->
            <nuxt-link :to="localePath('/dashboard/errors')" class="line">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#error"></use>
              </svg>
              <span>Errors</span>
            </nuxt-link>
            <!-- end:: line -->
          </div>
        </div>
        <!-- end:: menu_wrapper -->
      </div>
      <!-- end:: panel_wrapper -->
    </section>
  </main>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: ['title'],
  data() {
    return {
      panel_status: false,
      localize: 'en',
    }
  },
  methods: {
    togglePanel() {
      this.panel_status = !this.panel_status
    },
  },
}
</script>

<style lang="scss" scoped>
.nav_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .option_wrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
    span {
      font-size: 15px;
      color: #000;
      font-weight: 500;
      margin-left: 10px;
    }
  }
}
.res_navbar {
  display: none;
}
@media (max-width: 991px) {
  .nav_wrapper {
    display: none;
  }
  .res_navbar {
    padding: 15px 30px;
    border-bottom: 1px solid #eee;
    display: block;
    .flex_wrapper {
      display: flex;
      align-items: center;
      .menu_icon_wrapper {
        width: 40%;
        .icon {
          width: 17px;
          height: 12px;
          fill: $second-color;
        }
      }
      .logo_wrapper {
        width: 55%;
      }
    }
    .panel_wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #1f3857eb;
      z-index: 100;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s;
      &.show {
        opacity: 1;
        visibility: visible;
      }
      .top_bar {
        padding: 15px 25px;
        display: flex;
        align-items: center;
        background-color: #ffffff33;
        .menu_icon_wrapper {
          width: 20%;
          text-align: left;
          .icon {
            width: 22px;
            height: 17px;
            fill: #fff;
          }
        }
        .logo_wrapper {
          width: 60%;
          text-align: center;
          img {
            width: 58px;
            height: 47px;
          }
        }
        .lang_switcher {
          width: 20%;
          text-align: right;
        }
      }
      .menu_wrapper {
        position: relative;
        padding: 20px 25px;
        .btn-link {
          text-decoration: none;
          .icon {
            width: 22px;
            height: 22px;
            fill: #f89b48;
            position: absolute;
            top: 20px;
            right: 25px;
          }
        }
        .menu {
          padding: 12px 25px 12px 25px;
          overflow-y: auto;
          .line {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            padding: 15px 23px;
            border-radius: 8px;
            margin-bottom: 8px;
            &.nuxt-link-exact-active {
              background-color: #ff8f1514;
              .icon {
                fill: #ff8f15;
              }
              span {
                color: #ff8f15;
              }
            }
            &:first-child {
              padding: 15px 18px;
            }
            &:last-child {
              margin-bottom: 0;
            }
            img {
              width: 25px;
              height: 25px;
              border-radius: 100%;
            }
            .icon {
              width: 18px;
              height: 18px;
              fill: #fff;
            }
            span {
              font-weight: 600;
              color: #fff;
              margin-left: 16px;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.lang_switcher {
  .dropdown {
    .dropdown-menu {
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
      a {
        font-size: 14px;
        display: flex;
        align-items: center;
        &:active {
          background-color: $third-color;
          color: #fff;
        }
        span {
          margin-left: 12px;
        }
      }
    }
    .btn {
      padding: 0;
      outline: none;
      box-shadow: none;
    }
    .icon {
      width: 13px;
      height: 7px;
      fill: #fff;
    }
  }
}
</style>