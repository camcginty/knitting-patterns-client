'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const grid = []

const onShowAllPatterns = function () {
  api.showPatterns()
    .then(ui.showPatternsSuccess)
    .catch(ui.error)
}

const onShowOne = function () {
  const patternId = this.parentElement.id
  api.findPattern(patternId)
    .then(ui.showOneSuccess)
    .catch(ui.error)
}

const onCreatePattern = function () {
  event.preventDefault()
  $('.info').append('This will take a moment...')
  const data = getFormFields(event.target)
  api.createPattern(data)
    .then(onCreateSquares)
    .catch(ui.error)
}

const onCreateSquares = function (data) {
  const patternId = data.pattern.id
  for (let i = 0; i < 324; i++) {
    api.createSquares(data)
  }
  api.findPattern(patternId)
    .then(ui.showOneSuccess)
    .then(ui.createPatternSuccess)
}

const onDeletePattern = function () {
  event.preventDefault()
  const data = this.parentElement.id
  api.deletePattern(data)
    .then(ui.deletePatternSuccess(data))
    .then(onShowAllPatterns)
    .catch(ui.error)
}

let color
let sqId
let squareId
let on

const onChangeColor = function () {
  sqId = this.id
  if ($(this).hasClass('white')) {
    $(this).removeClass('white')
    $(this).addClass('black')
    color = 'black'
    on = true
  } else if ($(this).hasClass('black')) {
    $(this).removeClass('black')
    $(this).addClass('white')
    color = 'white'
    on = false
  } else {
    $(this).addClass('black')
    color = 'black'
    on = true
  }
  squareId = sqId.split('s', 1).toString()
  api.findSquare(squareId)
    .then(api.updateSquare(squareId, on))
    .then(ui.changeColor(sqId, color))
}


module.exports = {
  onCreatePattern,
  onChangeColor,
  onShowAllPatterns,
  onShowOne,
  onDeletePattern
}
