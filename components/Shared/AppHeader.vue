<template>
  <header class="main_app_header">
    <b-navbar toggleable="lg">
      <nuxt-link class="navbar-brand" :to="localePath('/')">
        <img
          class="logo_lg"
          src="~/assets/images/home/logo.png"
          draggable="false"
          alt="logo"
        />
        <img
          class="logo_sm"
          src="~/assets/images/logo-sm.png"
          draggable="false"
          alt="logo"
        />
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line mb-0"></span>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link :to="localePath('/services')" class="nav-link">
              {{ items.services }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/products')" class="nav-link">
              {{ items.products }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/projects')" class="nav-link">
              {{ items.projects }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/cropapplication')" class="nav-link">
              {{ items.crop_applications }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/aboutus')" class="nav-link">
              {{ items.about_us }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/aboutus')" class="nav-link">
              {{ items.contact_us }}
            </nuxt-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.main_app_header {
  position: absolute;
  width: 100%;
  z-index: 77;
  .navbar {
    padding-left: 60px;
    padding-right: 60px;
    @media (min-width: 320px) and (max-width: 991px) {
      flex-direction: row-reverse;
      padding: 1.5rem 15px;
    }
  }
  //? logo
  .navbar-brand {
    color: $main-color;
    .logo_sm {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 991px) {
      flex-grow: 1;
      justify-content: center;
      display: flex;
      align-items: center;
      .logo_lg {
        display: none;
      }
      .logo_sm {
        display: block;
      }
    }
  }
  //? navbar links
  .navbar-collapse {
    .navbar-nav {
      .nav-item {
        padding: 0 0.6rem;

        .nav-link {
          color: $main-color;
          text-decoration: none;
          position: relative;
          text-transform: capitalize;
          @media (min-width: 320px) and (max-width: 991px) {
            width: fit-content;
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
        }
        &.active,
        &:hover {
          .nav-link {
            color: $second-color;
            transition: $main-transition;
            &::before {
              width: 100%;
            }
          }
        }
      }
    }
    &.show {
      background: rgba(31, 56, 87, 0.89);
      color: $white;
      width: 100%;
      // height: 100vh;
      .navbar {
        background: red !important;
      }
    }
  }
  //? navbar toggler button
  .navbar-toggler {
    position: relative;
    padding: 0;
    border: none;
    .line {
      display: block;
      width: 17px;
      height: 2px;
      background-color: $second-color;
      margin-bottom: 3px;
    }
  }
}
</style>
