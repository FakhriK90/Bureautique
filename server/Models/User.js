const mongoose = require('mongoose')

const usreSchema = new mongoose.Schema({
    lastName:{type: String},
    firstName:{type: String},
    email:{type: String},
    password:{type: String},
    adress:{type: String, required:true},
    phoneNumber:{type: String, required:true},
    role:{type: String, enum:['admin','client'], default:'client'},
})

module.exports = User = mongoose.model('User', usreSchema)