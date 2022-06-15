export const state = () => ({
  errorMsg: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
}
