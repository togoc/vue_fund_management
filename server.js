const express = require("express")
const app = express()
const port = process.env.USER ? 5000 : 5000
const bodyparser = require('body-parser');
const passport = require("passport")
app.use(passport.initialize())
require("./parts/passport")(passport)
    // 在Express 中 没有内置获取表单POST请求体的API，这里我们需要使用一个第三方的包 ：body-parser
    //req.body 识别
app.use(bodyparser.urlencoded({ extende: false }));
app.use(bodyparser.json())


//跨域
// app.use(require('cors')());

app.use("/api/users", require("./parts/router/user"))
app.use("/api/profiles", require("./parts/router/profile"))






app.get("/", (req, res) => {
    res.send("ok")
})








app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})