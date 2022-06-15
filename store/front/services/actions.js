import responseHandler from '~/helpers/responseHandler'
export default{
  // ? get all services
  async get_services({ commit }) {
    await this.$axios
      .get('/services-get-services')
      .then((res) => {
        commit('SET_SERVICES', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? get main services
  async get_main_services({ commit }) {
    await this.$axios
      .get('/services-get-main-services')
      .then((res) => {
        commit('SET_MAIN_SERVICES', res.data.data)

        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

   // ? get single services
  async get_single_services({ commit }, id) {
    await this.$axios
      .get(`/services-show-services/${id}`)
      .then((res) => {
        commit('SET_SINGLE_SERVICES', res.data.data)
        console.log(res.data.data);
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
