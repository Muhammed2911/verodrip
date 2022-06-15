import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  services_header: [],
  services: [],
  service: {},
  service_id: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_SERVICES_HEADER(state, payload) {
    state.services_header = payload
  },
  SET_ALL_SERVICES(state, payload) {
    state.services = payload
  },
  SET_SERVICE(state, payload) {
    state.service = payload
  },
  SET_SERVICE_ID(state, payload) {
    state.service_id = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_services_header(state) {
    return state.services_header
  },
  get_services(state) {
    return state.services
  },
  get_service(state) {
    return state.service
  },
  get_service_id(state) {
    return state.service_id
  },
}

export const actions = {
  /********************* SERVICES HEADER *************************/
  async get_services_header({ commit }) {
    await this.$axios
      .get('/services-get-main-services')
      .then((res) => {
        commit('SET_SERVICES_HEADER', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  async update_services_header({ commit }, data) {
    await this.$axios
      .post('/services-edit-main-services', data)
      .then((res) => {
        commit('SET_SERVICES_HEADER', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* SERVICES ITEMS *************************/
  // get all services method
  async get_services({ commit }) {
    await this.$axios
      .get('/services-get-services')
      .then((res) => {
        commit('SET_ALL_SERVICES', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // get one service methd
  async get_service({ commit }, id) {
    await this.$axios
      .get(`/services-show-services/${id}`)
      .then((res) => {
        commit('SET_SERVICE', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add new service method
  async add_service({ commit }) {
    await this.$axios
      .post('/services-add-services')
      .then((res) => {
        commit('SET_SERVICE_ID', res.data.data.id)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update existing service method
  async update_service({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/services-edit-services/${id}`, data)
      .then((res) => {
        commit('SET_SERVICE', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // delete existing service method
  async delete_service({ commit }, id) {
    await this.$axios
      .delete(`/services-delete-services/${id}`)
      .then((res) => {
        commit('SET_ALL_SERVICES', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
