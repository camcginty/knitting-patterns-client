'use strict'
const config = require('./config.js')
const store = require('./store')
// const ui = require('./ui.js')

const signUp = function (data) {
  console.log('api.signUp function')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('api.signIn function')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('api.changePassword function')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log('api.signOut function')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createPattern = function (data) {
  console.log('api.createPattern function')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/patterns',
    data: data,
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

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPattern,
  showPatterns
}
