// 引入express包
const express = require("express");

// 创建服务器
const app = express();
// 设置模板引擎
app.set("views engine","ejs");
app.set("views","./ejs_pages");
app.get("/",(req,res)=>{
    res.render("index.ejs",{"name":"呆呆大师兄","age":20,"hobby":["耍双截棍","无内鬼","南征北战"]})
})
// 在服务端监听客户端的请求 启动服务器
app.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
})