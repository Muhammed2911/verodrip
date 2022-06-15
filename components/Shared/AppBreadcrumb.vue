<template>
  <div class="main_breadcrumb_wrapper">
    <b-breadcrumb>
      <b-breadcrumb-item v-for="(item, index) in items" :key="index">
        <nuxt-link :to="localePath(item.to)">{{ item.name }}</nuxt-link>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: {
    items: {
      type: Array,
      default: [],
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.main_breadcrumb_wrapper {
  .breadcrumb {
    background: transparent;
    color: $p-text-color;
    padding-left: 0;
    .breadcrumb-item {
      a {
        color: $p-text-color;
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        transition: $main-transition;
        &:hover {
          color: $second-color;
        }
      }
      &:last-of-type {
        a {
          color: $second-color;
        }
      }
    }
  }
}
</style>
