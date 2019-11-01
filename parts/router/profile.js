const express = require("express")
const Profile = require("../db/db_profile")
const router = express.Router()
const passport = require("passport")

//  测试: $router : /profile/test
router.get("/test", (req, res) => {
    res.send("ok profiles")
})

router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const profileFields = {}
    if (req.body.type) profileFields.type = req.body.type
    if (req.body.describe) profileFields.describe = req.body.describe
    if (req.body.expend) profileFields.expend = req.body.expend
    if (req.body.income) profileFields.income = req.body.income
    if (req.body.cash) profileFields.cash = req.body.cash
    if (req.body.remark) profileFields.remark = req.body.remark
    new Profile(profileFields).save()
        .then(profile => console.log(profile))
    res.json({ msg: "success" })
})

router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log(req.params)
    Profile.findOne({ _id: req.params.id })
        .then(profile => {
            if (!profile)
                return res.status(404).json("没有匹配内容")
            res.json(profile)
        }).catch(err => res.status(404).json(err))
})
router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const profileFields = {}
    if (req.body.type) profileFields.type = req.body.type
    if (req.body.describe) profileFields.describe = req.body.describe
    if (req.body.expend) profileFields.expend = req.body.expend
    if (req.body.income) profileFields.income = req.body.income
    if (req.body.cash) profileFields.cash = req.body.cash
    if (req.body.remark) profileFields.remark = req.body.remark
    console.log(req.params)
    Profile.updateOne({ _id: req.params.id }, { $set: profileFields }, { new: true })
        .then(profile => res.json(profile))
})
router.get("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.deleteOne({ _id: req.params.id })
        .then(profile => {
            if (profile)
                res.json(profile)
        })
        .catch(err => res.status(404).json("删除失败!"))
})


module.exports = router