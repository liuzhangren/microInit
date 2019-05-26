const { router } = require('microrouter')
const cors = require('micro-cors')
const myRouter = require('./route')

module.exports = cors()(router.apply(null, myRouter)) 