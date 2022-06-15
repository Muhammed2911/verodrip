import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  errorMsg: '',
  projects_header: [],
  projects: [],
  project: {},
  project_id: '',
})

export const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_PROJECTS_HEADERS(state, payload) {
    state.projects_header = payload
  },
  SET_PROJECTS(state, payload) {
    state.projects = payload
  },
  SET_PROJECT(state, payload) {
    state.project = payload
  },
  SET_PROJECT_id(state, payload) {
    state.project_id = payload
  },
}

export const getters = {
  get_errors(state) {
    return state.errorMsg
  },
  get_headers(state) {
    return state.projects_header
  },
  get_projects(state) {
    return state.projects
  },
  get_project(state) {
    return state.project
  },
  get_project_id(state) {
    return state.project_id
  },
}

export const actions = {
  /********************* PROJECTS HEADER *************************/
  // get projects header method
  async get_headers({ commit }) {
    await this.$axios
      .get('/projects-get-main')
      .then((res) => {
        commit('SET_PROJECTS_HEADERS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update projects header method
  async update_headers({ commit }, data) {
    await this.$axios
      .post('/projects-edit-main', data)
      .then((res) => {
        commit('SET_PROJECTS_HEADERS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },

  /********************* PROJECTS ITEMS *************************/
  // get all projects method
  async get_projects({ commit }) {
    await this.$axios
      .get('/projects-get')
      .then((res) => {
        commit('SET_PROJECTS', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // get one project method
  async get_project({ commit }, id) {
    await this.$axios
      .get(`/projects-show/${id}`)
      .then((res) => {
        commit('SET_PROJECT', res.data.data)
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // add new project method
  async add_project({ commit }) {
    await this.$axios
      .post('/projects-add')
      .then((res) => {
        commit('SET_PROJECT_id', res.data.data.id)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update project method
  async update_project({ commit }, formData) {
    const id = formData.id
    const data = formData.data
    await this.$axios
      .post(`/projects-edit/${id}`, data)
      .then((res) => {
        commit('SET_PROJECT', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // delete project method
  async delete_project({ commit }, id) {
    await this.$axios
      .delete(`/projects-delete/${id}`)
      .then((res) => {
        commit('SET_PROJECTS', res.data.data)
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
