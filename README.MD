# 管理系统

## 服务器: node + express + mongoose
* 基础内容---
## 测试: postman + nodemon

## 加密/验证: bcrypt
* 如果安装不了改用 `bcryptjs`
``` js
    //加密
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        });
    });
    //验证
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        // res == true
    });
```
[npm](https://www.npmjs.com/package/bcrypt)

## 头像: gravatar
* mongoose userSchema 
``` js
     avatar: {
        type: String
    }
     let avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });
```
可以连接GitHub头像的 [头像设置地址](http://cn.gravatar.com/)