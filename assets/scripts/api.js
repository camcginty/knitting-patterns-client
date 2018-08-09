'use strict'
const config = require('./config.js')
const store = require('./store')

const createPattern = function (data) {
  console.log('api.createPattern function, ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/patterns',
    data: {
      'pattern': {
        'title': data.pattern.title
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSquares = function (data) {
  console.log('api.createSquares function, ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/squares',
    data: {
      'square': {
        'on': false,
        'pattern_id': data.pattern.id
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePattern = function (patternId) {
  console.log('api.updatePattern function, ', patternId)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/patterns/' + patternId,
    data: {
      'pattern': {
        'squares': [

        ]
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSquare = function (squareId, on) {
  console.log('api.updatePattern function, ', squareId)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/squares/' + squareId,
    data: {
      'square': {
        'on': on
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPatterns = function () {
  console.log('api.showPatterns function')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/patterns',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findPattern = function (patternId) {
  console.log('api.findPattern function')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/patterns/' + patternId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findSquare = function (squareId) {
  console.log('api.findPattern function')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/squares/' + squareId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePattern = function (data) {
  console.log('api.deletePattern function')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/patterns/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPattern,
  updatePattern,
  showPatterns,
  findPattern,
  deletePattern,
  createSquares,
  updateSquare,
  findSquare
}
