import responseHandler from '~/helpers/responseHandler'
export default{
  // ? get projects
  async get_projects({ commit }) {
    await this.$axios
      .get('/projects-get')
      .then((res) => {
        commit('SET_PROJECTS', res.data.data)
        responseHandler(res, { commit }, 'then')

      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? get main projects
  async get_main_projects({ commit }) {
    await this.$axios
      .get('/projects-get-main')
      .then((res) => {
        commit('SET_MAIN_PROJECTS', res.data.data)
        responseHandler(res, { commit }, 'then')
        console.log(res.data.data);
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

   // ? get single projects
  async get_single_projects({ commit }, id) {
    await this.$axios
      .get(`/projects-show/${id}`)
      .then((res) => {
        commit('SET_SINGLE_PROJECTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
