import responseHandler from '~/helpers/responseHandler'
export default{
  // ? get_main_product
  async get_main_product({ commit }) {
    await this.$axios
      .get('/products-get-main')
      .then((res) => {
        commit('SET_MAIN_PRODUCTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? all products
  async get_products({ commit }) {
    await this.$axios
      .get('/products-get')
      .then((res) => {
        commit('SET_PRODUCTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // ? all categories
  async get_categories({ commit }) {
    await this.$axios
      .get('/categories-get')
      .then((res) => {
        commit('SET_CATEGORIES', res.data.data)

        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  //? single category
  async get_single_category({ commit }, id) {
    await this.$axios
      .get(`/categories-show/${id}`)
      .then((res) => {
        commit('SET_SINGLE_CATEGORY', res.data.data)

        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },


}
