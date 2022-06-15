export const state = () => ({
  errorMsg: '',
  main_product:{},
  products:[],
  categories:[],
  single_category:{}
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_MAIN_PRODUCTS(state, payload) {
    state.main_product = payload
  },
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },

  SET_SINGLE_CATEGORY(state, payload) {
    state.single_category = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_main_product(state) {
    return state.main_product
  },
  get_products(state) {
    return state.products
  },
  get_all_categories(state) {
    return state.categories
  },
  get_single_category(state) {
    return state.single_category
  },
}
