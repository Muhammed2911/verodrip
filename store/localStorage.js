export const state = () => ({
  userToken: null,
  userData: null,
  request_lang: '',
})

export const mutations = {
  SET_USER_TOKEN(state, payload) {
    state.userToken = payload
  },
  SET_USER_DATA(state, payload) {
    state.userData = payload
  },
  SET_REQ_LANG(state, payload) {
    state.request_lang = payload
  },
}

export const getters = {
  userToken(state) {
    return state.userToken
  },
  userData(state) {
    return state.userData
  },
  get_req_lang(state) {
    return state.request_lang
  },
}
