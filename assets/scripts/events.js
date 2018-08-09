'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const grid = []

const onShowAllPatterns = function () {
  console.log('events.showPatterns function')
  api.showPatterns()
    .then(ui.showPatternsSuccess)
    .catch(ui.error)
}

const onShowOne = function () {
  console.log('events.showOne function')
  console.log(this)
  const patternId = this.parentElement.id
  api.findPattern(patternId)
    .then(ui.showOneSuccess)
    .catch(ui.error)
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
  api.createPattern(data)
    .then(onCreateSquares)
    .catch(ui.error)
}

const onCreateSquares = function (data) {
  console.log('events.onCreateSqs function, ', data)
  const patternId = data.pattern.id
  for (let i = 0; i < 4; i++) {
    api.createSquares(data)
  }
  api.findPattern(patternId)
    .then(ui.showOneSuccess)
    .then(ui.createPatternSuccess)
}

const onDeletePattern = function () {
  event.preventDefault()
  console.log('events.deletePattern function')
  const data = this.parentElement.id
  api.deletePattern(data)
    .then(ui.deletePatternSuccess(data))
    .then(onShowAllPatterns)
    .catch(ui.error)
}

let color
let sqId
let squareId

const onChangeColor = function () {
  console.log('events.changeColor function')
  console.log(this)
  const patternId = this.parentElement.parentElement.id
  sqId = this.id
  console.log(sqId)
  console.log('patternId is ', patternId)
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

let on

module.exports = {
  onCreatePattern,
  onChangeColor,
  onShowAllPatterns,
  onShowOne,
  onDeletePattern
}
