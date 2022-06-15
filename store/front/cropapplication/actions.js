import responseHandler from '~/helpers/responseHandler'
export default{
  async get_crop_applications({ commit }) {
    await this.$axios
      .get('/crop-applications-get')
      .then((res) => {
        commit('SET_CROP_APPLICATIONS', res.data.data)

        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

    // ? get main crop_applications
    async get_main_crop_applications({ commit }) {
      await this.$axios
        .get('/crop-applications-get-main')
        .then((res) => {
          commit('SET_MAIN_CROP_APPLICATIONS', res.data.data)
          responseHandler(res, { commit }, 'then')
        })
        .catch((err) => {
          responseHandler(err, { commit }, 'catch')
        })
    },

     // ? get single crop_applications
    async get_single_crop_application({ commit }, id) {
      await this.$axios
        .get(`/crop-applications-show/${id}`)
        .then((res) => {
          commit('SET_SINGLE_CROP_APPLICATIONS', res.data.data)
          responseHandler(res, { commit }, 'then')
        })
        .catch((err) => {
          responseHandler(err, { commit }, 'catch')
        })
    },
}
