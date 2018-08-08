'use strict'
const authEvents = require('./authEvents.js')
const events = require('./events.js')
// delete one of these or break authEvents into different file

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.pre-sign-in').show()
  $('.signed-in').hide()
  $('.pattern').hide()
  $('.patterns').hide()
  $('#new-pattern').on('submit', events.onCreatePattern)
  $('#get-patterns').on('click', events.onShowAllPatterns)
  $('body').on('click', '.delete-button', events.onDeletePattern)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('body').on('click', '.box', events.onChangeColor)
  $('body').on('click', '.pattern-name', events.onShowOne)
})
