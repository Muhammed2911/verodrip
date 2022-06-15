import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  crop_headers: [],
  crop_list: [],
  crop: {},
  crop_id: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_CROP_HEADER(state, payload) {
    state.crop_headers = payload
  },

  SET_CROPS_ITEMS(state, payload) {
    state.crop_list = payload
  },
  SET_CROP(state, payload) {
    state.crop = payload
  },
  SET_CROP_ID(state, payload) {
    state.crop_id = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_crop_header(state) {
    return state.crop_headers
  },

  get_crops(state) {
    return state.crop_list
  },
  get_crop(state) {
    return state.crop
  },
  get_crops_id(state) {
    return state.crop_id
  },
}

export const actions = {
  /********************* CROP HEADER *************************/
  // get crop header method
  async get_crop_header({ commit }) {
    await this.$axios
      .get('/crop-applications-get-main')
      .then((res) => {
        commit('SET_CROP_HEADER', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update crop header method
  async update_crop_header({ commit }, data) {
    await this.$axios
      .post('/crop-applications-edit-main', data)
      .then((res) => {
        commit('SET_CROP_HEADER', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* CROP ITEMS *************************/
  // get all crop items method
  async get_crops({ commit }) {
    await this.$axios
      .get('/crop-applications-get')
      .then((res) => {
        commit('SET_CROPS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // get crop item method
  async get_crop({ commit }, id) {
    await this.$axios
      .get(`/crop-applications-show/${id}`)
      .then((res) => {
        commit('SET_CROP', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add new crop method
  async add_crop({ commit }) {
    await this.$axios
      .post('/crop-applications-add')
      .then((res) => {
        commit('SET_CROP_ID', res.data.data.id)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // edit crop method
  async edit_crop({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/crop-applications-edit/${id}`, data)
      .then((res) => {
        commit('SET_CROP', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // edit crop method
  async delete_crop({ commit }, id) {
    await this.$axios
      .delete(`/crop-applications-delete/${id}`)
      .then((res) => {
        //commit('SET_CROPS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
