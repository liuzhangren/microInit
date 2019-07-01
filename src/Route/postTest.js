const { json, send } = require('micro')


module.exports = async (req, res) => {
  const txt = await json(req)
  console.log('我是post请求', txt)
  send(res, 200, '请求成功')
}