import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  error404: [],
  error500: [],
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_ERRORS_ITEMS(state, payload) {
    payload.forEach((obj) => {
      if (obj.type === '404') {
        state.error404 = obj
      } else if (obj.type === '500') {
        state.error500 = obj
      }
    })
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_errors404(state) {
    return state.error404
  },
  get_errors500(state) {
    return state.error500
  },
}

export const actions = {
  // get errors items method
  async get_errors({ commit }) {
    await this.$axios
      .get('/error-get')
      .then((res) => {
        commit('SET_ERRORS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // upodate errors items method
  async update_errors({ commit }, data) {
    await this.$axios
      .post('/error-edit', data)
      .then((res) => {
        commit('SET_ERRORS_ITEMS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
