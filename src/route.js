// import { get, post, put, del } from 'microrouter'
const { get, post, put, del } = require('microrouter')
const getTest = require('./Route/getTest')
const postTest = require('./Route/postTest')

module.exports = 
  [
    get('/getTest/:id', getTest),
    post('/postTest', postTest)
  ]