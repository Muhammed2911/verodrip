<template>
  <div id="sidebar" class="sidebar">
    <div class="logo_wrapper">
      <img
        src="~/assets/images/dashboard/d-logo.png"
        draggable="false"
        alt="logo"
      />
    </div>
    <!-- end:: logo_wrapper -->

    <ul class="list_wrapper">
      <li class="item">
        <nuxt-link :to="localePath('/dashboard')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#home"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.home') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/products')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#products"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.products') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/projects')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#projects"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.projects') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/services')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#services"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.services') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/crop')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#crop"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.crop') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/aboutus')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#about"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.about') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link to="">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#contact"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.contact') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/policies')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#policies"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.policies') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link :to="localePath('/dashboard/errors')">
          <span class="icon">
            <svg>
              <use xlink:href="~/static/svg/sprite.svg#error"></use>
            </svg>
          </span>
          <span class="text"> {{ $t('admin.error') }} </span>
        </nuxt-link>
      </li>
      <!-- end:: item -->

      <li class="item">
        <nuxt-link to="">
          <span class="text">{{ $t('admin.preview_text') }}</span>
          <div class="text-center">
            <img
              src="~/assets/images/dashboard/preview.png"
              class="img"
              alt="thumb"
            />
            <span class="preview"> {{ $t('admin.preview_label') }} </span>
          </div>
        </nuxt-link>
      </li>
      <!-- end:: item -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background-image: url('~/assets/images/dashboard/sidebar-bg.png');
  width: 270px;
  //? logo_wrapper
  .logo_wrapper {
    text-align: center;
    padding: 40px 20px 20px;
    img {
      max-width: 200px;
      max-height: 34px;
    }
  }
  //? list_wrapper
  .list_wrapper {
    padding: 40px 0 20px;
    .item {
      a {
        text-decoration: none;
        padding: 12px 40px;
        display: flex;
        align-items: center;
        transition: all 0.2s;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 0px;
          width: 3px;
          height: 100%;
          background-color: $second-color;
          transition: all 0.2s;
        }
        &:hover {
          background-color: #008b7845;
          &::before {
            left: 0;
          }
          span {
            &.icon {
              background-color: $second-color;
            }
            &.text {
              color: $second-color;
            }
          }
        }
        .icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.25s;
          svg {
            width: 23px;
            height: 23px;
            fill: #fff;
          }
        }
        .text {
          color: #fff;
          margin-left: 8px;
          transition: all 0.2s;
        }
      }
      &:last-child {
        padding: 0 15px;
        margin-top: 20px;
        a {
          display: block;
          background-color: #425b7a82;
          border-radius: 20px;
          padding: 12px 25px;
          &::before {
            display: none;
          }
          .text {
            margin-left: 0;
            font-size: 15px;
            display: block;
            margin-bottom: 10px;
          }
          .img {
            display: inline-block;
            margin: 0 auto;
          }
          .preview {
            padding: 5px 15px;
            border-radius: 6px;
            background-color: $second-color;
            color: $third-color;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            display: inline-block;
            margin: 10px auto 0px;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .sidebar {
    display: none;
  }
}
</style>