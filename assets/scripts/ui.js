'use strict'

const showPatternsTemplate = require('./templates/show-patterns.handlebars')
const patternDisplay = require('./templates/pattern-display.handlebars')
const authUi = require('./ui')

const error = function (signOutError) {
  clearText()
  clearForms()
  $('.info').append("That didn't work.")
}

const createPatternSuccess = function (data) {
  clearText()
  clearForms()
  $('.patterns').hide()
  $('.pattern').text = data.pattern.title
  // setColors(data)
  showPattern(data)
}

const showPattern = function (data) {
  $('.pattern').empty()
  const patternTemplate = patternDisplay({ pattern: data.pattern })
  $('.pattern').show().append(patternTemplate)
  renewColors(data)
}

const setColors = function (data) {
  if ($('.box').hasClass('black') !== true) {
    $('.box').addClass('white')
  }
  changeColor()
}

const renewColors = function (data) {
  let sqId
  for (let i = 0; i < data.pattern.squares.length; i++) {
    sqId = data.pattern.squares[i].id + 'sq'
    if (data.pattern.squares[i].on === true) {
      $('#' + sqId).addClass('black')
    } else {
      $('#' + sqId).addClass('white')
    }
  }
  changeColor()
}

const changeColor = function () {
  $('.black').css('background-color', 'black')
  $('.white').css('background-color', 'white')
}

const showPatternsSuccess = function (data) {
  clearText()
  clearForms()
  $('.pattern').hide()
  listPatterns(data)
  $('.patterns').show()
}

const showOneSuccess = function (thisPattern) {
  $('.patterns').hide()
  $('.pattern').hide()
  showPattern(thisPattern)
}

const listPatterns = function (data) {
  $('.pattern-list').remove()
  const patternListHbs = showPatternsTemplate({ pattern: data.patterns })
  $('.patterns').append(patternListHbs)
}

const deletePatternSuccess = function (data) {
  clearText()
  clearForms()
}

const clearText = function () {
  $('.info').empty()
}

const clearForms = function () {
  if (authUi.signedIn === true) {
    document.getElementById('password').reset()
    document.getElementById('new-pattern').reset()
  } else {
    document.getElementById('sign-up').reset()
    document.getElementById('sign-in').reset()
  }
}

module.exports = {
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
