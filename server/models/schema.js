const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    mobileNumber:String,
    email:String,
    password:String,
    userType:String
}) 

const signupDetails = mongoose.model('signupDetails', roomSchema);


module.exports = signupDetails
