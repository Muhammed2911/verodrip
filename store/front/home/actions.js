import responseHandler from '~/helpers/responseHandler'

export default {
  //! fetch navbar items method
  async fetch_navabr({ commit }) {
    await this.$axios
      .get('/home-get-navbar')
      .then((res) => {
        commit('SET_NAVBAR_ITEMS', res.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  //! fetch footer items method
  async fetch_footer({ commit }) {
    await this.$axios
      .get('/home-get-footer')
      .then((res) => {
        commit('SET_FOOTER', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // ! send contact us request
  async send_contact({ commit },payload) {
    await this.$axios
      .post('/contact-add',payload)
      .then((res) => {
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

}
