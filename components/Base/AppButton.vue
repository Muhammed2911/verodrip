<template>
  <button
    class="app_button"
    v-if="!isLink"
    @click="emitClick"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
  <NuxtLink :to="toRoute" class="btn" v-else>
    <slot name="link"></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['emit-click'],
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    toRoute: {
      type: Object,
    },
    type: {
      type: String,
      default: 'btn',
    },
    disabled: {
      type: Boolean,
    },
  },
  methods: {
    emitClick() {
      this.$emit('emit-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.app_button {
  padding: 10px 25px;
  font-size: 14px;
  font-weight: 500;
  border-radius: $radius;
  border: 1px solid $main-color;
  box-shadow: none;
  min-width: 169px;
  background-color: $main-color;
  color: $white;
  transition: all 0.25s;
  @media (min-width: 1500px) and (max-width: 1920px) {
    min-width: 170px;
  }
  &:hover {
    box-shadow: $shadow;
  }
  &:active {
    background-color: $main-color;
  }
  &.bg_green {
    background-color: $third-color;
    border-color: $third-color;
  }
  &.bg_yellow {
    background-color: $second-color;
    border-color: $second-color;
  }
  &.without_bg {
    background-color: transparent;
    border-color: $third-color;
    color: $third-color;
    // @media (min-width: 1500px) and (max-width: 1920px) {
    //   min-width: 170px;
    // }
  }
}
</style>
