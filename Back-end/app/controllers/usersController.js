const express = require('express')
const {User} = require('../models/users')

//create
module.exports.create=function(req, res){
    const body = req.body
    const user = new User(body)
    user.save()
    .then(user=>{
        res.send("You are successfully registered")
    })
    .catch(err=>{
        res.send(err)
    })
}

//login 
module.exports.login = function(req,res){
    const body = req.body
    console.log(body)
    User.findByCredentials(body.email, body.password)
    .then((user)=>{
        return user.generateToken()
    })
    .then(function(token){
        console.log(token)
        res.send(token)
    })

    .catch(err=>{
        res.status('401').send(err)
    })
}