import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  products_main: [],
  categories: [],
  category: {},
  category_id: '',

  products: [],
  product: {},
  prodect_id: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_PRODUCTS_MAIN_ITEMS(state, payload) {
    state.products_main = payload
  },
  SET_CATEGORIES_ITEMS(state, payload) {
    state.categories = payload
  },
  SET_CATEGORY(state, payload) {
    state.category = payload
  },
  SET_CATE_ID(state, payload) {
    state.category_id = payload
  },

  SET_PRODUCTS_ITEMS(state, payload) {
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  SET_PRODUCT_ID(state, payload) {
    state.prodect_id = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_products_main(state) {
    return state.products_main
  },
  get_categories(state) {
    return state.categories
  },
  get_category(state) {
    return state.category
  },
  get_cate_id(state) {
    return state.category_id
  },

  get_products(state) {
    return state.products
  },
  get_product(state) {
    return state.product
  },
  get_prodect_id(state) {
    return state.prodect_id
  },
}

export const actions = {
  /********************* PRODUCTS MAIN *************************/
  // get products main items method
  async get_products_main({ commit }) {
    await this.$axios
      .get('/products-get-main')
      .then((res) => {
        commit('SET_PRODUCTS_MAIN_ITEMS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  async update_products_main({ commit }, data) {
    await this.$axios
      .post('/products-edit-main', data)
      .then((res) => {
        commit('SET_PRODUCTS_MAIN_ITEMS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* PRODUCTS CATEORIES *************************/
  // get products categories items method
  async get_categories({ commit }) {
    await this.$axios
      .get('/categories-get')
      .then((res) => {
        commit('SET_CATEGORIES_ITEMS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // get single category items method
  async get_category({ commit }, id) {
    await this.$axios
      .get(`/categories-show/${id}`)
      .then((res) => {
        commit('SET_CATEGORY', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update products category items method
  async update_categories({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/categories-edit/${id}`, data)
      .then((res) => {
        commit('SET_CATEGORY', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add products category items method
  async add_category({ commit }) {
    await this.$axios
      .post('/categories-add')
      .then((res) => {
        commit('SET_CATE_ID', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // delete product category method
  async delete_category({ commit }, id) {
    await this.$axios
      .delete(`/categories-delete/${id}`)
      .then((res) => {
        commit('SET_CATEGORIES_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* PRODUCTS *************************/
  // get all products method
  async get_products({ commit }) {
    await this.$axios
      .get('/products-get')
      .then((res) => {
        commit('SET_PRODUCTS_ITEMS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // get one product method
  async get_product({ commit }, id) {
    await this.$axios
      .get(`/products-show/${id}`)
      .then((res) => {
        commit('SET_PRODUCT', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add new product method
  async add_product({ commit }, data) {
    await this.$axios
      .post('/products-add', data)
      .then((res) => {
        commit('SET_PRODUCT_ID', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // edit product method
  async edit_product({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/products-edit/${id}`, data)
      .then((res) => {
        commit('SET_PRODUCT', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // delete product method
  async delete_product({ commit }, id) {
    await this.$axios
      .delete(`/products-delete/${id}`)
      .then((res) => {
        commit('SET_PRODUCTS_ITEMS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
