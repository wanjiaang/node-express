// 引入express包
const express = require("express");

// 创建服务器
const app = express();
// 监听客户端的get请求方式
app.get("/",(req,res)=>{
    res.send("你好习习哈哈")
})
// 在服务端监听客户端的请求 启动服务器
app.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
})