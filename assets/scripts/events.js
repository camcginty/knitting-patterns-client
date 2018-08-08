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
    // .then(setStartColors(data))
    .then(ui.createPatternSuccess(data))
    .then(ui.setColors)
    .then(api.updatePattern)
    .then(ui.showPattern)
    .catch(ui.error)
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

const onChangeColor = function () {
  console.log('events.changeColor function')
  console.log(this)
  const patternId = this.parentElement.parentElement.id
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
  setSquareValues(patternId)
  ui.changeColor(boxId, color)
}

const setSquareValues = function (patternId) {
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
  api.updatePattern(patternId, square0, square1, square2, square3)
}

module.exports = {
  onCreatePattern,
  onChangeColor,
  onShowAllPatterns,
  onShowOne,
  onDeletePattern
}
