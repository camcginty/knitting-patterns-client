'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = function (event) {
  console.log('events.signUp function')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .then(onSignIn)
    .catch(authUi.error)
}

const onSignIn = function (event) {
  console.log('events.signIn function')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.error)
}

const onChangePassword = function (event) {
  console.log('events.changePassword function')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.error)
}

const onSignOut = function (event) {
  console.log('events.signOut function')
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
