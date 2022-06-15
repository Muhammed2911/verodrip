<template>
  <main>
    <SharedAppHeader :items="items"></SharedAppHeader>
    <Nuxt />
    <SharedAppFooter></SharedAppFooter>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.$nuxt.$on('navbarLoaded', ($event) => (this.items = $event))
  },
}
</script>
