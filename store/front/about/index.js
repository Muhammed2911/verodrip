export const state = () => ({
  errorMsg: '',
  about_us:{},
  main_client:{},
  all_clients:[],
  about_us_marketing:{},
  about_us_mission:{},
  about_us_vision:{},
  privacy:{},
  quality_policy:{},
  terms_policy:{},
  errors:[]
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_ABOUT_US(state, payload) {
    state.about_us = payload
  },
  SET_MAIN_CLIENTS(state, payload) {
    state.main_client = payload
  },
  SET_ALL_CLIENTS(state, payload) {
    state.all_clients = payload
  },
  SET_ABOUT_US_MARKETING(state, payload) {
    state.about_us_marketing = payload
  },
  SET_ABOUT_US_MISSION(state, payload) {
    state.about_us_mission = payload
  },
  SET_ABOUT_US_VISION(state, payload) {
    state.about_us_vision = payload
  },
  SET_PRIVACY_POLICY(state, payload) {
    state.privacy = payload
  },
  SET_QUALITY_POLICY(state, payload) {
    state.quality_policy = payload
  },
  SET_TERMS_POLICY(state, payload) {
    state.terms_policy = payload
  },
  SET_ERRORS(state, payload) {
    state.errors = payload
  },

}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_about_us(state) {
    return state.about_us
  },
  get_main_client(state) {
    return state.main_client
  },
  get_all_clients(state) {
    return state.all_clients
  },
  get_about_us_marketing(state) {
    return state.about_us_marketing
  },
  get_about_us_mission(state) {
    return state.about_us_mission
  },
  get_about_us_vision(state) {
    return state.about_us_vision
  },
  get_privacy(state) {
    return state.privacy
  },
  get_quality_policy(state) {
    return state.quality_policy
  },
  get_terms_policy(state) {
    return state.terms_policy
  },
  get_errors(state) {
    return state.errors

  },

}
