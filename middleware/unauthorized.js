export default async function ({ redirect, app, store }) {
  const accessToken = app.$cookies('userToken')

  if (accessToken) {
    return redirect(app.localePath('/dashboard'))
  } else {
  }
}
