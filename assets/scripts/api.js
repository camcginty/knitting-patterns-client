'use strict'
const config = require('./config.js')
const store = require('./store')

const createPattern = function (data) {
  console.log('api.createPattern function, ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/patterns',
    data: {
      'pattern': data.pattern,
      'title': data.pattern.title,
      'square0': false,
      'square1': false,
      'square2': false,
      'square3': false
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePattern = function (patternId, square0, square1, square2, square3) {
  console.log('api.updatePattern function, ', patternId, square0, square1, square2, square3)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/patterns/' + patternId,
    data: {
      'pattern': {
        'square0': square0,
        'square1': square1,
        'square2': square2,
        'square3': square3
      },
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
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

// const editPattern = function (boxId) {
//   console.log('api.editPattern function')
//   console.log(boxId)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/patterns/' + boxId,
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

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
  deletePattern
}
