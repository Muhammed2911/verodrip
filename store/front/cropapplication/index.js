export const state = () => ({
  errorMsg: '',
  crop_applications:[],
  main_crop_applications:{},
  single_crop_applications:{}
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_CROP_APPLICATIONS(state, payload) {
    state.crop_applications = payload
  },
  SET_MAIN_CROP_APPLICATIONS(state, payload) {
    state.main_crop_applications = payload
  },
  SET_SINGLE_CROP_APPLICATIONS(state, payload) {
    state.single_crop_applications = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_crop_applications(state) {
    return state.crop_applications
  },
  get_main_crop_applications(state) {
    return state.main_crop_applications
  },
  get_single_crop_applications(state) {
    return state.single_crop_applications
  },
}
