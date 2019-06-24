const express = require("express");
// 创建服务器
const app = express();
// 注册中间件
app.use(express.static("./views"))
app.use("/css",express.static("./css"))

app.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
    
})