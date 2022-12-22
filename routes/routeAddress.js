const express = require('express')
const router = express()
const userModel = require("../models/user")


// router.route('/whitelist').post((req,res) => {
    
//     const address = req.body.address;
//     const email = req.body.email;

//     const newUser = new userModel({
//         email,
//         address
//     })

//     newUser.save();
// })

router.get('/read',(req,res)=>{
    userModel.find().then((userFound) => res.json(userFound))
})

module.exports = router;