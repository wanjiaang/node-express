const express = require("express");
// 生成路由对象
const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile("./views/1.html",{root:__dirname})

})
router.get("/css/1.css",(req,res)=>{
    res.sendFile("./css/1.css",{root:__dirname})

})
router.get("/about",(req,res)=>{

    res.sendFile("./views/about.html",{root:__dirname})
})
router.get("/movie",(req,res)=>{

    res.sendFile("./views/movie.html",{root:__dirname})
})

// 导出路由
module.exports = router