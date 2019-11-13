const mongoose = require('mongoose')

//note schema
const Schema= mongoose.Schema
const categorySchema = new Schema ({
    name:{
        type:String,
        required:true
    }
})
const Category  = mongoose.model ('Category', categorySchema)
module.exports = Category