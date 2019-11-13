const mongoose = require('mongoose')

 // note schema
 const Schema = mongoose.Schema // It decides the shape of the document
 const noteSchema = new Schema({
     title:{
         type:String,
         required:true
     },
     description:{
         type:String,
         required:true  
     },
     createdAt:{
         type:Date,
         default: Date.now
     },
    //  userId:{
    //      type:Schema.Types.ObjectId,
    //      ref:'User'
    //  }
 })

 //note constructor function
const Note = mongoose.model('Note', noteSchema)

module.exports = Note