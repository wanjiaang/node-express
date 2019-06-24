const express = require('express')
const querystring = require("querystring")
const app = express()
// 自定义一个中间件  用来解析post请求的数据

app.use((req,res,next)=>{
    let datastr = ''
    req.on('data',chunk=>{
        datastr += chunk
    })

    req.on('end',()=>{
        // console.log(datastr);
        let obj = querystring.parse(datastr)
        console.log(obj);
        req.body = obj
        next()
    })
})


app.get('/', (req, res) => {
    res.sendFile("./1.html", { root: __dirname })
})
app.post('/postData',(req,res)=>{
    // console.log("ok");
    console.log(req.body);
    
    res.send(req.body)
    
})

app.listen(3000, () => {

    console.log('server running at http://127.0.0.1:3000')

})
