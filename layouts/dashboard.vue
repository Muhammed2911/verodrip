<template>
  <main class="dashboard_wrapper">
    <SharedAppSidebar></SharedAppSidebar>
    <div class="inner_box">
      <SharedAppNavbar :title="title"></SharedAppNavbar>
      <Nuxt></Nuxt>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      title: null,
    }
  },
  mounted() {
    this.$nuxt.$on('pageTitle', ($event) => (this.title = $event))
  },
}
</script>

<style lang="scss" scoped>
</style>