const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require ('../middlewares/password');
const {registerCheck, validator} = require('../middlewares/userValidator');

//Signup
router.post('/signup', registerCheck(), validator, async(req,res)=>{
    const {email,fullName,password} = req.body;
    try {
        const userFound = await User.findOne({email,fullName})
        if (userFound) {
            return res.status(400).send({msg:'User already exists'})
        }
        const newUser = new User(req.body)
        const hashedPassword= await bcrypt.hash(password, 10)
        newUser.password = hashedPassword;
        await newUser.save();
        res.send({msg:'User added successfully', user: newUser});
    } catch (error) {
        res.status(400).send({msg:'No user added'})
    }
});

module.exports = router;