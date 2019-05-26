const { json, send } = require('micro')


module.exports = (req, res) => {
  console.log('我是get请求', req.params)
  send(res, 200, '请求成功')
}