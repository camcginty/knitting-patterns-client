'use strict'

// const store = require('./store')
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

// const onGetGames = function () {
//   return authApi.getGames()
//     .then(authUi.getGamesSuccess)
//     .catch(authUi.getGamesError)
// }

// const grid = []
let title

const onShowPatterns = function () {
  event.preventDefault()
  console.log('events.showPatterns function')
  authApi.showPatterns()
}

const onCreatePattern = function (x, y) {
  event.preventDefault()
  console.log('events.createPattern function')
  const data = getFormFields(event.target)
  // x = this.x.value
  // y = this.y.value
  title = this.title.value
  // for (let i = 0; i < x; i++) {
  //   grid[i] = []
  //   for (let j = 0; j < y; j++) {
  //     grid[i][j] = 0
  //   }
  // }
  // console.log(grid)
  authApi.createPattern(data)
    .then(authUi.createPatternSuccess(title))
    .catch(authUi.error)
}

let color
let boxId

const onChangeColor = function () {
  console.log('events.changeColor function')
  console.log(this)
  boxId = this.id
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
  authUi.changeColor(boxId, color)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePattern,
  onChangeColor,
  onShowPatterns
  // onGetGames
}
