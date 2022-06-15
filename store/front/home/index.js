export const state = () => ({
  navbar: [],
  footer:[]
})

export const mutations = {
  SET_NAVBAR_ITEMS(state, payload) {
    state.navbar = payload
  },
  SET_FOOTER(state, payload) {
    state.footer = payload
  },
}

export const getters = {
  get_navbar(state) {
    return state.navbar
  },
  get_footer(state) {
    return state.footer
  },
}
