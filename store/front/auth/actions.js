import responseHandler from '~/helpers/responseHandler'

export default {
  // user login method
  async user_login({ commit }, data) {
    await this.$axios
      .post('/login', data)
      .then((res) => {
        const accessToken = `Bearer ${res.data.data.token}`
        commit('localStorage/SET_USER_TOKEN', accessToken, {
          root: true,
        })
        const options = {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        }
        this.$cookies.setAll([
          { name: 'userToken', value: accessToken, opts: options },
        ])
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // fetch user data method
  async fetch_user({ commit }) {
    await this.$axios
      .get('/getMe')
      .then((res) => {
        // const response = JSON.stringify(res.data.data)
        commit('localStorage/SET_USER_DATA', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // send/resend forget password code to client email method
  async send_otp_code({ commit }, data) {
    await this.$axios
      .post('/requestCodeResetPassword', data)
      .then((res) => {
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // reset client password method
  async reset_password({ commit }, data) {
    await this.$axios
      .post('/confirmCodeWithPassword', data)
      .then((res) => {
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  // update profile for admin
  async update_profile({ commit }, data) {
    await this.$axios
      .post('/updateMe', data)
      .then((res) => {
        commit('localStorage/SET_USER_DATA', res.data.data, {
          root: true,
        })
        responseHandler(res, { commit }, 'then')
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
}
