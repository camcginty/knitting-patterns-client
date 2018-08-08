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

// const grid = []

const onShowAllPatterns = function () {
  console.log('events.showPatterns function')
  authApi.showPatterns()
    .then(authUi.showPatternsSuccess)
    .catch(authUi.error)
}

const onShowOne = function () {
  console.log('events.showOne function')
  console.log(this)
  const patternId = this.parentElement.id
  authApi.findPattern(patternId)
    .then(authUi.showOneSuccess)
    .catch(authUi.error)
}

const onCreatePattern = function () {
  event.preventDefault()
  console.log('events.createPattern function')
  const data = getFormFields(event.target)
  // x = this.x.value
  // y = this.y.value
  // for (let i = 0; i < x; i++) {
  //   grid[i] = []
  //   for (let j = 0; j < y; j++) {
  //     grid[i][j] = 0
  //   }
  // }
  // console.log(grid)
  console.log(data)
  authApi.createPattern(data)
    .then(authUi.createPatternSuccess)
    .catch(authUi.error)
}

const onDeletePattern = function () {
  event.preventDefault()
  console.log('events.deletePattern function')
  const data = this.parentElement.id
  authApi.deletePattern(data)
    .then(authUi.deletePatternSuccess(data))
    .then(onShowAllPatterns)
    .catch(authUi.error)
}

let color

const onChangeColor = function () {
  console.log('events.changeColor function')
  console.log(this)
  const patternId = this.parentElement.parentElement.id
  const patternTitle = this.parentElement.parentElement.title
  console.log('patternId is ', patternId)
  const boxId = this.id
  if ($(this).hasClass('white')) {
    $(this).removeClass('white')
    $(this).addClass('black')
    color = 'black'
  } else if ($(this).hasClass('black')) {
    $(this).removeClass('black')
    $(this).addClass('white')
    color = 'white'
  } else {
    $(this).addClass('black')
  }
  setSquareValues(patternId, patternTitle)
  authUi.changeColor(boxId, color)
}

const setSquareValues = function (patternId, patternTitle) {
  let square0 = false
  let square1 = false
  let square2 = false
  let square3 = false
  if ($('#sq0').hasClass('black')) {
    square0 = true
  }
  if ($('#sq1').hasClass('black')) {
    square1 = true
  }
  if ($('#sq2').hasClass('black')) {
    square2 = true
  }
  if ($('#sq3').hasClass('black')) {
    square3 = true
  }
  console.log(patternId, square0, square1, square2, square3)
  authApi.updatePattern(patternId, patternTitle, square0, square1, square2, square3)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePattern,
  onChangeColor,
  onShowAllPatterns,
  onShowOne,
  onDeletePattern
}
