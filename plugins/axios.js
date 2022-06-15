export default function ({ $axios, redirect, app, store }) {
  /* set axios baseurl for all requests */
  $axios.setBaseURL(`http://master.verodrip.uz/api`)

  function setHeader() {
    let accessToken = null
    accessToken = app.$cookies.get('userToken')
    const requestLang = store.state.localStorage.request_lang
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept-Language': requestLang ? requestLang : app.i18n.locale,
    }
    headers.Authorization = accessToken ?? ''

    return headers
  }
  // Add a request interceptor
  $axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = setHeader(config)

    return config
  })
}
