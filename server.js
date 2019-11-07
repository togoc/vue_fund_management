const express = require("express")
const app = express()
const port = process.env.USER ? 5000 : 5000
const bodyparser = require('body-parser');
const passport = require("passport")

//history mode 防止刷新空白
const history = require('connect-history-api-fallback');
history({
    index: '../public'
  });
app.use(history());
app.use("/",express.static("public"))

app.use(passport.initialize())
require("./parts/passport")(passport)

app.use(bodyparser.urlencoded({ extende: false }));
app.use(bodyparser.json())



app.use("/api/users", require("./parts/router/user"))
app.use("/api/profiles", require("./parts/router/profile"))





// app.get("/", (req, res) => {
//     res.send("ok")
// })








app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})