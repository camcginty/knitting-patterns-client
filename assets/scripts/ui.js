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
  console.log('ui.creatPattern function', data)
  clearText()
  clearForms()
  $('.patterns').hide()
  $('.pattern').text = data.pattern.title
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
  console.log('ui.setColors function')
  if ($('.box').hasClass('black') !== true) {
    $('.box').addClass('white')
  }
  $('.black').css('background-color', 'black')
  $('.white').css('background-color', 'white')
}

const renewColors = function (data) {
  console.log('ui.renewColors function')
  if (data.pattern.square0 === true) {
    $('#sq0').addClass('black')
  } else {
    $('#sq0').addClass('white')
  }
  if (data.pattern.square1 === true) {
    $('#sq1').addClass('black')
  } else {
    $('#sq1').addClass('white')
  }
  if (data.pattern.square2 === true) {
    $('#sq2').addClass('black')
  } else {
    $('#sq2').addClass('white')
  }
  if (data.pattern.square3 === true) {
    $('#sq3').addClass('black')
  } else {
    $('#sq3').addClass('white')
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

const showOneSuccess = function (thisPattern) {
  console.log('ui.showOne function')
  $('.patterns').hide()
  $('.pattern').hide()
  console.log(thisPattern)
  showPattern(thisPattern)
}

const listPatterns = function (data) {
  console.log('listPatterns function')
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

// const updatePatternSuccess = function () {
// }

const clearText = function () {
  $('.info').textContent = ''
}

const clearForms = function () {
  if (authUi.signedIn === true) {
    document.getElementById('password').reset()
    // $('.new-pattern').reset()
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
