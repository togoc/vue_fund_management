const express = require("express")
const app = express()
const port = process.env.USER ? 5000 : 5000
const bodyparser = require('body-parser');
const passport = require("passport")



//history mode 防止刷新空白
// const history = require('connect-history-api-fallback');
// history({
//     index: '../public'
//   });
// app.use(history());
// app.use("/",express.static("public"))

app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();  
});


app.use(passport.initialize())
require("./parts/passport")(passport)

app.use(bodyparser.urlencoded({ extende: false }));
app.use(bodyparser.json())



app.use("/api/users", require("./parts/router/user"))
app.use("/api/profiles", require("./parts/router/profile"))








app.listen(port, () => {
    console.log(`资金管理 Server running on port ${port}`)
})