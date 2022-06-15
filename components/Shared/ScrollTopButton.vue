<template>
  <button
    @click="scrollToTop"
    class="scroll-to-top"
    :class="{ 'show-button': scrollPosition > 200 }"
  >
    <svg class="icon">
      <use xlink:href="~/static/svg/sprite.svg#go_up"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  data() {
    return {
      scrollPosition: null,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.pageYOffset
    },
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  right: 25px;
  bottom: 50px;
  background: $second-color;
  z-index: 7777777;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 42px;
  height: 43px;
  display: none;
  .icon {
    width: 20px;
    height: 20px;
    fill: $white;
  }
  &.show-button {
    display: block;
  }
}
</style>
