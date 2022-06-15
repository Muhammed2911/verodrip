export const state = () => ({
  errorMsg: '',
  services:[],
  main_services:{},
  single_service:{}

})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_SERVICES(state, payload) {
    state.services = payload
  },
  SET_MAIN_SERVICES(state, payload) {
    state.main_services = payload
  },
  SET_SINGLE_SERVICES(state, payload) {
    state.single_service = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_services(state) {
    return state.services
  },
  get_main_services(state) {
    return state.main_services
  },
  get_single_service(state) {
    return state.single_service
  },
}
