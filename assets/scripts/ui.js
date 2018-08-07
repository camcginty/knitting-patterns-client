'use strict'

const store = require('./store')
const showPatternsTemplate = require('./templates/show-patterns.handlebars')
const patternDisplay = require('./templates/pattern-display.handlebars')

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

const createPatternSuccess = function (data) {
  console.log('ui.creatPattern function', data)
  clearText()
  clearForms()
  $('.patterns').hide()
}

const showPattern = function (data) {
  console.log('ui.showPattern function')
  console.log(data)
  const patternTemplate = patternDisplay({ pattern: data })
  $('.pattern').show().append(patternTemplate)
}

const setColors = function (data) {
  console.log('ui.setColors function')
  if ($('.box').hasClass('.black') !== true) {
    $('.box').addClass('.white')
  }
  $('.black').css('background-color', 'black')
  $('.white').css('background-color', 'white')
}

const changeColor = function (boxId, color) {
  console.log(boxId, color)
  $('.black').css('background-color', 'black')
  $('.white').css('background-color', 'white')
}

const showPatternsSuccess = function (data) {
  console.log('ui.showPatterns function')
  clearText()
  clearForms()
  $('.pattern').hide()
  listPatterns(data)
  $('.patterns').show()
}

const showOneSuccess = function (patternId) {
  console.log('ui.showOne function')
  $('.patterns').hide()
  $('.pattern').hide()
  showPattern(patternId)
}

const listPatterns = function (data) {
  console.log('listPatterns function')
  $('.pattern-list').remove()
  const patternListHbs = showPatternsTemplate({ pattern: data.patterns })
  console.log(data.patterns)
  $('.patterns').append(patternListHbs)
}

const deletePatternSuccess = function (data) {
  console.log('ui.deletePattern function')
  clearText()
  clearForms()
}

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
  showPattern,
  showPatternsSuccess,
  listPatterns,
  deletePatternSuccess,
  error,
  changeColor,
  setColors,
  showOneSuccess
}
