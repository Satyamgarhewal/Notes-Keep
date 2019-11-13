const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
              return validator.isEmail(value)
            },
            message:function(){
                return('Invalid email format')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    },
    tokens:[
        {
            token:{
                type:String,
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
})

//pre-hook
userSchema.pre('save',function (next){
    const user = this
if(user.isNew){
    bcryptjs.genSalt(10)
    .then(function(salt){
        bcryptjs.hash(user.password, salt)
        .then(function(encryptedPassword){
            user.password = encryptedPassword
            next()
        })
    })
    .catch(err=>{
        console.log(err)
    })
}
else {
    next()
}
})

userSchema.statics.findByCredentials=function (email, password){
    const User = this
    return User.findOne({email})
    .then((user)=>{
        if(!user){
            return Promise.reject('Invalid email')
        }
        return bcryptjs.compare(password, user.password)
        .then((result)=>{
            if(result){
                return Promise.resolve(user)
            }
            else{
                return Promise.reject('Invalid password')
            }
        })
    })
    .catch(err=>{
      return Promise.reject(err)
    })
}

userSchema.methods.generateToken = function(){
    const User = this
    const tokenData ={
        id: User._id,
        username : User.username,
        createdAt:Number(new Date())
    }
    const token = jwt.sign(tokenData,'jwt@123')
    User.tokens.push({token})

    return User.save()
    .then(function(User){
    
        return Promise.resolve(token)
    })
    .catch(function (err){
        return Promise.reject(err)
    })
}
const User = mongoose.model('User', userSchema)

module.exports={User}