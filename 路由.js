// 引入express包
const express = require("express");

// 创建服务器
const app = express();
// 引入路由模块    //路由就是一种对应关系
const router = require("./router.js");
// 用中间件把router挂到本页面中 将路由对象挂载到服务器对象上
app.use(router)
// 在服务端监听客户端的请求 启动服务器
app.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
})