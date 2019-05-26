const { buffer, text, json, send } = require('micro')


module.exports = async (req, res) => {
  const txt = await text(req)
  console.log('我是post请求', txt)
  send(res, 200, '请求成功')
}