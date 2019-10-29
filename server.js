const express = require("express")
const app = express()
    // const fs = require("fs")
const port = process.env.USER ? 8080 : 5000
const bodyparser = require('body-parser');


// 在Express 中 没有内置获取表单POST请求体的API，这里我们需要使用一个第三方的包 ：body-parser
//req.body 识别
app.use(bodyparser.urlencoded({ extende: false }));
app.use(bodyparser.json())




app.use("/user", require("./parts/router/user"))






app.get("/", (req, res) => {
    res.send("ok")
})








app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})