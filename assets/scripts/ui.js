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
  $('.signed-in').hide()
  $('.pre-sign-in').show()
}

const error = function (signOutError) {
  console.log('errored!')
  clearText()
  clearForms()
  $('#info').append("That didn't work.")
}

const createPatternSuccess = function (title) {
  console.log('got to ui', title)
  clearText()
  clearForms()
  // $('#info').append('Make a move. You are both Xs and Os.')
  store.pattern = createPatternSuccess.pattern
  $('.pattern').show()
}

const changeColor = function (boxId, color) {
  console.log(boxId, color)
  $('.black').css('background-color', 'black')
  $('.white').css('background-color', 'white')
}

// const getPatternsSuccess = function (data) {
//   clearText()
//   clearForms()
//   store.pattern = data
// }

// const updatePatternSuccess = function () {
// }

const clearText = function () {
  $('.info').textContent = ''
}

const clearForms = function () {
  if (signedIn === true) {
    document.getElementById('password').reset()
    // $('.new-pattern').reset()
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
  createPatternSuccess,
  error,
  changeColor
}
