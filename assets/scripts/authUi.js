'use strict'

const store = require('./store')

let signedIn = false

const signUpSuccess = function (signUpSuccess) {
  clearText()
  clearForms()
  $('.info').append('You now have an account.')
}

const signInSuccess = function (signInSuccess) {
  store.user = signInSuccess.user
  signedIn = true
  clearText()
  clearForms()
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  clearText()
  clearForms()
  $('.info').append('Password changed.')
}

const signOutSuccess = function (signOutSuccess) {
  signedIn = false
  clearText()
  clearForms()
  $('.info').append('Bye. Come again!')
  $('.patterns').hide()
  $('.pattern').hide()
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const error = function (signOutError) {
  clearText()
  clearForms()
  $('.info').append("That didn't work.")
}

const clearText = function () {
  $('.info').empty()
}

const clearForms = function () {
  if (signedIn === true) {
    document.getElementById('password').reset()
    document.getElementById('new-pattern').reset()
  } else {
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
  }
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  error
}
