const express = require('express')
const router = express.Router()

router.post("/foodData",(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory])
        console.log(global.food_items)
    } catch (error) {
        console.log(error.message)
        res.send("server error")
    }
})
module.exports=router