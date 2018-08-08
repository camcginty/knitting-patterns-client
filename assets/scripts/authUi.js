'use strict'

const store = require('./store')

let signedIn = false

const signUpSuccess = function (signUpSuccess) {
  console.log('ui.signUpSuccess function')
  clearText()
  clearForms()
  // $('#info').append('You now have an account. Sign in to play.')
}

const signInSuccess = function (signInSuccess) {
  console.log('ui.signInSuccess function')
  store.user = signInSuccess.user
  signedIn = true
  console.log('signedIn = ', signedIn)
  clearText()
  clearForms()
  // document.getElementById('info').textContent = 'Welcome, ' + store.user.email + '!'
  $('.pre-sign-in').hide()
  $('.signed-in').show()
}

const changePasswordSuccess = function (changePasswordSuccess) {
  console.log('ui.changePasswordSuccess function')
  clearText()
  clearForms()
  // $('#info').append('Password changed.')
}

const signOutSuccess = function (signOutSuccess) {
  console.log('ui.signOutSuccess function')
  signedIn = false
  console.log('signedIn = ', signedIn)
  clearText()
  clearForms()
  // $('#info').append('Bye. Come again!')
  $('.patterns').hide()
  $('.pattern').hide()
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const error = function (signOutError) {
  console.log('errored!')
  clearText()
  clearForms()
  $('#info').append("That didn't work.")
}

const clearText = function () {
  $('.info').textContent = ''
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
