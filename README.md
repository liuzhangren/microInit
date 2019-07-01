## 如何启动?

-  yarn | npm install

- yarn dev | npm run dev

## 如何使用?

- src下的route.js 为路由的配置项，格式模仿原有demo即可

- src下的Route文件夹为统一处理前端请求的地方
  * GET /user/123123123 路由参数从req.params取
  * POST /user/1231231  body参数从 await json(req)取
  * PUT、DELETE 同理; send(res, 200[状态码], [要返回的值])