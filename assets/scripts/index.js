'use strict'
const authEvents = require('./authEvents.js')
const events = require('./events.js')

$(() => {
  $('.pre-sign-in').show()

  $('.signed-in').hide()
  $('.pattern').hide()
  $('.patterns').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#new-pattern').on('submit', events.onCreatePattern)
  $('#get-patterns').on('click', events.onShowAllPatterns)

  $('body').on('click', '.delete-button', events.onDeletePattern)
  $('body').on('click', '.box', events.onChangeColor)
  $('body').on('click', '.pattern-name', events.onShowOne)
})
