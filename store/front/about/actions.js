import responseHandler from '~/helpers/responseHandler'
export default{
  // ? get about us
  async get_about_us({ commit }) {
    await this.$axios
      .get('/about-us-get')
      .then((res) => {
        commit('SET_ABOUT_US', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get about us
  async get_main_client({ commit }) {
    await this.$axios
      .get('/about-us-clients-main-get')
      .then((res) => {
        commit('SET_MAIN_CLIENTS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get about us
  async get_all_clients({ commit }) {
    await this.$axios
      .get('/clients-get-clients')
      .then((res) => {
        commit('SET_ALL_CLIENTS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? get about us marketing
  async get_about_us_marketing({ commit }) {
    await this.$axios
      .get('/about-us-marketing-get')
      .then((res) => {
        commit('SET_ABOUT_US_MARKETING', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? get about us mission
  async get_about_us_mission({ commit }) {
    await this.$axios
      .get('/about-us-mission-get')
      .then((res) => {
        commit('SET_ABOUT_US_MISSION', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? get about us mission
  async get_about_us_vision({ commit }) {
    await this.$axios
      .get('/about-us-vision-get')
      .then((res) => {
        commit('SET_ABOUT_US_VISION', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get_privacy
  async get_privacy({ commit }) {
    await this.$axios
      .get('/privacy-policy-get')
      .then((res) => {
        commit('SET_PRIVACY_POLICY', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get_privacy
  async get_privacy_quality({ commit }) {
    await this.$axios
      .get('/quality-policy-get')
      .then((res) => {
        commit('SET_QUALITY_POLICY', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get_privacy
  async get_privacy_terms({ commit }) {
    await this.$axios
      .get('/terms-get')
      .then((res) => {
        commit('SET_TERMS_POLICY', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ? get_errors
  async get_errors({ commit }) {
    await this.$axios
      .get('/error-get')
      .then((res) => {
        commit('SET_ERRORS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

}
