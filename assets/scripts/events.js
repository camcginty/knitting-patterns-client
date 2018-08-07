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

const onShowPatterns = function () {
  console.log('events.showPatterns function')
  authApi.showPatterns()
    .then(authUi.showPatternsSuccess)
    .catch(authUi.error)
}

const onShowOne = function () {
  console.log('events.showOne function')
  console.log(this)
  debugger
  const patternId = this.id
  authApi.findPattern(patternId)
    .then(authUi.showOneSuccess(patternId))
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
    // .then(setStartColors(data))
    .then(authUi.createPatternSuccess(data))
    .catch(authUi.error)
}

const onDeletePattern = function () {
  event.preventDefault()
  console.log('events.deletePattern function')
  const data = this.id
  authApi.deletePattern(data)
    .then(authUi.deletePatternSuccess(data))
    .then(onShowPatterns)
    .catch(authUi.error)
}

let color

const setStartColors = function (data) {
  console.log('events.startColors function')
  console.log(data)
  authUi.setColors(data)
  authApi.updatePattern(data)
}

const onChangeColor = function () {
  console.log('events.changeColor function')
  console.log(this)
  debugger
  const patternId = this.parent.id
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
    authUi.error()
  }
  authApi.updatePattern(patternId)
  authUi.changeColor(boxId, color)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePattern,
  onChangeColor,
  onShowPatterns,
  onShowOne,
  onDeletePattern
}
