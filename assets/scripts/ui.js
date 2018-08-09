'use strict'

const showPatternsTemplate = require('./templates/show-patterns.handlebars')
const patternDisplay = require('./templates/pattern-display.handlebars')
const authUi = require('./ui')

const error = function (signOutError) {
  console.log('errored!')
  clearText()
  clearForms()
  $('#info').append("That didn't work.")
}

const createPatternSuccess = function (data) {
  console.log('ui.createPattern function', data)
  clearText()
  $('.patterns').hide()
  $('.pattern').text = data.pattern.title
  clearForms()
  // setColors(data)
  console.log(data)
  showPattern(data)
}

const showPattern = function (data) {
  console.log('ui.showPattern function')
  console.log(data)
  const patternTemplate = patternDisplay({ pattern: data.pattern })
  $('.pattern').empty()
  $('.pattern').show().append(patternTemplate)
  renewColors(data)
}

const setColors = function (data) {
  console.log('ui.setColors function, ', data)
  if ($('.box').hasClass('black') !== true) {
    $('.box').addClass('white')
  }
  changeColor()
}

const renewColors = function (data) {
  console.log('ui.renewColors function, ', data)
  let sqId
  for (let i = 0; i < data.pattern.squares.length; i++) {
    console.log(data.pattern.squares[i].id, data.pattern.squares[i].on)
    sqId = data.pattern.squares[i].id + 'sq'
    console.log(sqId)
    if (data.pattern.squares[i].on === true) {
      $('#' + sqId).addClass('black')
    } else {
      $('#' + sqId).addClass('white')
    }
  }

  changeColor()
}

const changeColor = function () {
  console.log()
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

const showOneSuccess = function (thisPattern) {
  console.log('ui.showOne function')
  $('.patterns').hide()
  $('.pattern').hide()
  console.log(thisPattern)
  showPattern(thisPattern)
}

const listPatterns = function (data) {
  console.log('listPatterns function, ', data)
  $('.pattern-list').remove()
  const patternListHbs = showPatternsTemplate({ pattern: data.patterns })
  console.log(data.patterns)
  $('.patterns').append(patternListHbs)
}

const deletePatternSuccess = function (data) {
  console.log('ui.deletePattern function, ', data)
  clearText()
  clearForms()
}

const clearText = function () {
  $('.info').textContent = ''
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
