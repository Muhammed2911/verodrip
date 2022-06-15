import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  privacy: [],
  terms: [],
  quality: [],
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_PRIVACY_ITEMS(state, payload) {
    state.privacy = payload
  },
  SET_TERMS_ITEMS(state, payload) {
    state.terms = payload
  },
  SET_QUALITY_ITEMS(state, payload) {
    state.quality = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_privacy(state) {
    return state.privacy
  },
  get_terms(state) {
    return state.terms
  },
  get_quality(state) {
    return state.quality
  },
}

export const actions = {
  /********************* PRIVACY POLICY *************************/
  // get privacy items method
  async get_privacy({ commit }) {
    await this.$axios
      .get('/privacy-policy-get')
      .then((res) => {
        commit('SET_PRIVACY_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update privacy items method
  async update_privacy({ commit }, data) {
    await this.$axios
      .post('/privacy-policy-edit', data)
      .then((res) => {
        commit('SET_PRIVACY_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* TERMS POLICY *************************/
  // get terms items method
  async get_terms({ commit }) {
    await this.$axios
      .get('/terms-get')
      .then((res) => {
        commit('SET_TERMS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update terms items method
  async update_terms({ commit }, data) {
    await this.$axios
      .post('/terms-edit', data)
      .then((res) => {
        commit('SET_TERMS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* TERMS POLICY *************************/
  // get quality items method
  async get_quality({ commit }) {
    await this.$axios
      .get('/quality-policy-get')
      .then((res) => {
        commit('SET_QUALITY_ITEMS')
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update quality items method
  async update_quality({ commit }, data) {
    await this.$axios
      .post('/quality-policy-edit', data)
      .then((res) => {
        commit('SET_QUALITY_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
