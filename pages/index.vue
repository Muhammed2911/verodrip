<template>
  <div>
    <Modules-Home-HeroSection
      :items="homepage.data.hero_section"
    ></Modules-Home-HeroSection>
    <Modules-Home-AboutSection
      :about_us="homepage.data.about_us"
      :about_mission="homepage.data.about_us_mission"
      :about_vision="homepage.data.about_us_vision"
    ></Modules-Home-AboutSection>
    <SharedScrollTopButton></SharedScrollTopButton>
    <Modules-Home-SliderPartners
      :main_client_header="homepage.data.about_us_clients"
    ></Modules-Home-SliderPartners>
    <Modules-Home-ServicesSection
      :items="homepage.data.service"
      :info="homepage.data.service_main"
    ></Modules-Home-ServicesSection>
    <Modules-Home-ProductsSection
      :items="homepage.data.projects_main"
      :products_images="homepage.data.product"
    ></Modules-Home-ProductsSection>
    <Modules-Home-CropApplicationSection
      :items="homepage.data.crop_applications_main"
      :crop_applications_images="homepage.data.crop_applications"
    ></Modules-Home-CropApplicationSection>
    <Modules-Home-ProjectSection
      :items="homepage.data.projects_main"
      :projects="homepage.data.projects"
    ></Modules-Home-ProjectSection>
    <Modules-Home-FaqSection
      :items="homepage.data.frequently_asked_questions"
    ></Modules-Home-FaqSection>
    <Modules-Home-ReadyProjectSection
      :items="homepage.data.action_area"
    ></Modules-Home-ReadyProjectSection>
    <Modules-Home-ContactSection
      :items="homepage.data.contact_us"
    ></Modules-Home-ContactSection>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'website_layout',
  async asyncData(context) {
    const homepage = await context.$axios.$get('/home')

    return {
      homepage,
    }
  },
  mounted() {
    $nuxt.$emit('navbarLoaded', this.homepage.data.navbar)
  },
}
</script>
