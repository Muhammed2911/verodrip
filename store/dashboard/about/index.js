import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  about_us: [],
  about_marketing: [],
  about_mission: [],
  about_vision: [],
  clients_main: [],
  clients: [],
  client: {},
  client_id: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_ABOUT_ITEMS(state, payload) {
    state.about_us = payload
  },
  SET_ABOUT_MARKETING_ITEMS(state, payload) {
    state.about_marketing = payload
  },
  SET_ABOUT_MISSION_ITEMS(state, payload) {
    state.about_mission = payload
  },
  SET_ABOUT_VISION_ITEMS(state, payload) {
    state.about_vision = payload
  },
  SET_CLIENS_MAIN(state, payload) {
    state.clients_main = payload
  },
  SET_CLIENTS(state, payload) {
    state.clients = payload
  },
  SET_CLIENT(state, payload) {
    state.client = payload
  },
  SET_CLIENT_ID(state, payload) {
    state.client_id = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_about(state) {
    return state.about_us
  },
  get_about_marketing(state) {
    return state.about_marketing
  },
  get_about_mission(state) {
    return state.about_mission
  },
  get_about_vision(state) {
    return state.about_vision
  },
  get_main_clients(state) {
    return state.clients_main
  },
  get_clients(state) {
    return state.clients
  },
  get_client(state) {
    return state.client
  },
  get_client_id(state) {
    return state.client_id
  },
}

export const actions = {
  /********************* ABOUT US *************************/
  //get about_us items method
  async get_about({ commit }) {
    await this.$axios
      .get('/about-us-get')
      .then((res) => {
        commit('SET_ABOUT_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update about_us method
  async update_about({ commit }, data) {
    await this.$axios
      .post('/about-us-edit', data)
      .then((res) => {
        commit('SET_ABOUT_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* ABOUT MARKETING *************************/
  //get about_marketing items method
  async get_about_marketing({ commit }) {
    await this.$axios
      .get('/about-us-marketing-get')
      .then((res) => {
        commit('SET_ABOUT_MARKETING_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update about_marketing method
  async update_about_marketing({ commit }, data) {
    await this.$axios
      .post('/about-us-marketing-edit', data)
      .then((res) => {
        commit('SET_ABOUT_MARKETING_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* ABOUT MISSION *************************/
  //get about_mission items method
  async get_about_mission({ commit }) {
    await this.$axios
      .get('/about-us-mission-get')
      .then((res) => {
        commit('SET_ABOUT_MISSION_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update about_mission method
  async update_about_mission({ commit }, data) {
    await this.$axios
      .post('/about-us-mission-edit', data)
      .then((res) => {
        commit('SET_ABOUT_MISSION_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* ABOUT VISION *************************/
  //get about_vision items method
  async get_about_vision({ commit }) {
    await this.$axios
      .get('/about-us-vision-get')
      .then((res) => {
        commit('SET_ABOUT_VISION_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update about_vision method
  async update_about_vision({ commit }, data) {
    await this.$axios
      .post('/about-us-vision-edit', data)
      .then((res) => {
        commit('SET_ABOUT_VISION_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* ABOUT CLIENTS MAIN *************************/
  //get main_clients items method
  async get_main_clients({ commit }) {
    await this.$axios
      .get('/about-us-clients-main-get')
      .then((res) => {
        commit('SET_CLIENS_MAIN', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  //update main_clients items method
  async update_main_clients({ commit }, data) {
    await this.$axios
      .post('/about-us-clients-main-edit', data)
      .then((res) => {
        commit('SET_CLIENS_MAIN', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* ABOUT CLIENTS *************************/
  //get clients items method
  async get_clients({ commit }) {
    await this.$axios
      .get('/clients-get-clients')
      .then((res) => {
        commit('SET_CLIENTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  //get client method
  async get_client({ commit }, id) {
    await this.$axios
      .get(`/clients-show-clients/${id}`)
      .then((res) => {
        commit('SET_CLIENT', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add client method
  async add_client({ commit }) {
    await this.$axios
      .post(`/clients-add-clients`)
      .then((res) => {
        commit('SET_CLIENT_ID', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update client method
  async update_client({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/clients-edit-clients/${id}`, data)
      .then((res) => {
        commit('SET_CLIENT', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  //delete client method
  async delete_client({ commit }, id) {
    await this.$axios
      .delete(`/clients-delete-clients/${id}`)
      .then((res) => {
        //commit('SET_CLIENTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
