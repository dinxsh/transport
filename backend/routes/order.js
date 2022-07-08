const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("../../frontend/order/index.html")
})

router.get("/new", (req,res)=>{
    res.render("../../frontend/order/index.html")
})

module.exports = router