const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    address: String,
    email: String,
    phno: String
});

// Model
const User = mongoose.model('users', userSchema);

module.exports =  User;
    