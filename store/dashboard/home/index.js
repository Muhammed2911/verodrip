import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  top_navbar: [],
  hero_section: [],
  services: [],
  products: [],
  crop: [],
  projects: [],
  area_action: [],
  l_area_action: [],
  footer: [],
  faqs: [],
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_NAVBAR_ITEMS(state, payload) {
    state.top_navbar = payload
  },
  SET_HERO_SECTION(state, payload) {
    state.hero_section = payload
  },
  SET_SERVICES_HEADER(state, payload) {
    state.services = payload
  },
  SET_PRODUCTS_ITEMS(state, payload) {
    state.products = payload
  },
  SET_CROP_ITEMS(state, payload) {
    state.crop = payload
  },
  SET_PROJECTS_ITEMS(state, payload) {
    state.projects = payload
  },
  SET_FAQS_ITEMS(state, payload) {
    state.faqs = payload
  },
  SET_AREA_ACTION_ITEMS(state, payload) {
    state.area_action = payload
  },
  SET_LAREA_ACTION_ITEMS(state, payload) {
    state.l_area_action = payload
  },
  SET_FOOTER_ITEMS(state, payload) {
    state.footer = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_navbar(state) {
    return state.top_navbar
  },
  get_hero_section(state) {
    return state.hero_section
  },
  get_services_header(state) {
    return state.services
  },
  get_products(state) {
    return state.products
  },
  get_crop(state) {
    return state.crop
  },
  get_projects(state) {
    return state.projects
  },
  get_faqs(state) {
    return state.faqs
  },
  get_area_action(state) {
    return state.area_action
  },
  get_larea_action(state) {
    return state.l_area_action
  },
  get_footer(state) {
    return state.footer
  },
}

export const actions = {
  /********************* NAVBAR *************************/
  // get navbar method
  async get_navbar({ commit }) {
    await this.$axios
      .get('/home-get-navbar')
      .then((res) => {
        commit('dashboard/home/SET_NAVBAR_ITEMS', res.data.data, { root: true })
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update navbar method
  async update_navbar({ commit }, data) {
    await this.$axios
      .post('/home-edit-navbar-item', data)
      .then((res) => {
        commit('dashboard/home/SET_NAVBAR_ITEMS', res.data.data, { root: true })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* HERO SECTION *************************/
  // get hero section items method
  async get_herosection({ commit }) {
    await this.$axios
      .get('/home-get-hero-section')
      .then((res) => {
        commit('dashboard/home/SET_HERO_SECTION', res.data.data, { root: true })
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update hero section items method
  async update_herosection({ commit }, data) {
    await this.$axios
      .post('/home-edit-hero-section-item', data)
      .then((res) => {
        commit('dashboard/home/SET_HERO_SECTION', res.data.data, { root: true })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* SERVICES SECTION *************************/
  // gero services hero method
  async get_services_header({ commit }) {
    await this.$axios
      .get('/home-get-services')
      .then((res) => {
        commit('dashboard/home/SET_SERVICES_HEADER', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  // update services item method
  async update_services_header({ commit }, data) {
    await this.$axios
      .post('/home-edit-services-item', data)
      .then((res) => {
        commit('dashboard/home/SET_SERVICES_HEADER', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* PRODUCTS SECTION *************************/
  // get products items method
  async get_products({ commit }) {
    await this.$axios
      .get('/home-get-products')
      .then((res) => {
        commit('dashboard/home/SET_PRODUCTS_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update products items method
  async update_products({ commit }, data) {
    await this.$axios
      .post('/home-edit-products-item', data)
      .then((res) => {
        commit('dashboard/home/SET_PRODUCTS_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* CROP APPLICATIONS SECTION *************************/
  // get crop items method
  async get_crop({ commit }) {
    await this.$axios
      .get('/home-get-crop-application')
      .then((res) => {
        commit('dashboard/home/SET_CROP_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update crop items method
  async update_crop({ commit }, data) {
    await this.$axios
      .post('/home-edit-crop-application-item', data)
      .then((res) => {
        commit('dashboard/home/SET_CROP_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* PROJECTS SECTION *************************/
  // get projects items method
  async get_projects({ commit }) {
    await this.$axios
      .get('/home-get-projects')
      .then((res) => {
        commit('dashboard/home/SET_PROJECTS_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update projects items method
  async update_projects({ commit }, data) {
    await this.$axios
      .post('/home-edit-projects-item', data)
      .then((res) => {
        commit('dashboard/home/SET_PROJECTS_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* FAQ SECTION *************************/
  // get faq items method
  async get_faqs({ commit }) {
    await this.$axios
      .get('/home-get-asked-and-questions')
      .then((res) => {
        commit('dashboard/home/SET_FAQS_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* AREA ACTION SECTION *************************/
  // get area action items method
  async get_area_action({ commit }) {
    await this.$axios
      .get('/home-get-action-area')
      .then((res) => {
        commit('dashboard/home/SET_AREA_ACTION_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update area action items method
  async update_area_action({ commit }, data) {
    await this.$axios
      .post('/home-edit-action-area-item', data)
      .then((res) => {
        commit('dashboard/home/SET_AREA_ACTION_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* LAST AREA ACTION SECTION *************************/
  // get last area action items method
  async get_larea_action({ commit }) {
    await this.$axios
      .get('/home-get-last-action-area')
      .then((res) => {
        commit('dashboard/home/SET_LAREA_ACTION_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update last area action items method
  async update_larea_action({ commit }, data) {
    await this.$axios
      .post('/home-edit-last-action-area-item', data)
      .then((res) => {
        commit('dashboard/home/SET_LAREA_ACTION_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* FOOTER SECTION *************************/
  // get last area action items method
  async get_footer({ commit }) {
    await this.$axios
      .get('/home-get-footer')
      .then((res) => {
        commit('dashboard/home/SET_FOOTER_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update last area action items method
  async update_footer({ commit }, data) {
    await this.$axios
      .post('/home-edit-footer-item', data)
      .then((res) => {
        commit('dashboard/home/SET_FOOTER_ITEMS', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
