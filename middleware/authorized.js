export default async function ({ redirect, app, store }) {
  const accessToken = process.client ? store.state.localStorage.userToken : ''

  if (accessToken) {
  } else {
    return redirect(app.localePath('/auth/login'))
  }
}
