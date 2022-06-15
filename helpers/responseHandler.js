const responseHandler = (error, { commit }, type) => {
  let code =
    type == 'catch'
      ? parseInt(error.response && error.response.status)
      : error.status

  switch (code) {
    case 200:
      commit('SET_ERROR_MSG', {
        type: 'success',
        method: 'success',
        message: 'Request has been done successfully !',
        state: 200,
      })
      break
    case 201:
      commit('SET_ERROR_MSG', {
        type: 'success',
        method: 'success',
        message: 'Request has been done successfully !',
        state: 201,
      })
      break
    case 204:
      commit('SET_ERROR_MSG', {
        type: 'success',
        method: 'success',
        message: 'Request has been done successfully !',
        state: 200,
      })
      break
    case 400:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 400,
      })
      break
    case 401:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 401,
      })
      break
    case 403:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 403,
      })
      break
    case 404:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 404,
      })
      break
    case 412:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 412,
      })
      break
    case 422:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 422,
      })
      break
    case 503:
      commit('SET_ERROR_MSG', {
        type: 'error',
        method: 'Cancel',
        message: Object.values(error.response.data.errors)[0],
        state: 503,
      })
      break
  }
}

export default responseHandler
