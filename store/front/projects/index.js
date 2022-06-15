export const state = () => ({
  errorMsg: '',
  projects:[],
  main_projects:{},
  single_project:{}
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_PROJECTS(state, payload) {
    state.projects = payload
  },
  SET_MAIN_PROJECTS(state, payload) {
    state.main_projects = payload
  },
  SET_SINGLE_PROJECTS(state, payload) {
    state.single_project = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_projects(state) {
    return state.projects
  },
  get_main_projects(state) {
    return state.main_projects
  },
  get_single_project(state) {
    return state.single_project
  },
}
