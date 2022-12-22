const express = require("express")
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config()
const favicon = require("serve-favicon")


const userModel = require("./models/user")

const app = express()
const PORT = process.env.PORT || 3002

const db = process.env.MONGODB_URI




app.use(express.static("public"))
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(cors())
app.use(express.json())


app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})




// Step 2
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// app.use("/", require("./routes/routeAddress"))


app.post("/adduser", async (req,res) => {

    const userAddress = req.body.address
    const userEmail = req.body.email
    // const userPhno = req.body.phno

    userModel.findOne({address:userAddress})
        .then((userExist) => {
            if(userExist){
                return res.status(422).json("Address Already Whitelisted")
            }

            const newUser = new userModel({
                address:userAddress,
                email: userEmail,
            })
            newUser.save()
            res.send("Inserted")
        })

    
    // console.log("Inserted data")
})
// app.get("/read", async (req,res) => {
//     userModel.find()
//     .then((foundUser) => {
//         res.json(foundUser)
//         console.log(foundUser)
//         })
// })
app.get("/read", async (req,res) => {
    userModel.find({}, (err, result) => {
        if(err){
            res.send(err)
            // console.log(err)
        }
        else{
            res.send(result)
            // console.log("resuce",result)
        }
    })
})

    app.listen(PORT, ()=>{
        console.log(`Connected to ${PORT}`)
    })