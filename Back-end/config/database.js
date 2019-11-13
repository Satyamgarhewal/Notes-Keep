const mongoose = require('mongoose')

//DB configuration 
const ConfigureDb=()=>{
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/notes-app',{
    useNewUrlParser: true })
    .then(()=>{
        console.log('successfully connected to db')
    })
    .catch((err)=>{
        console.log('error connecting to db', err)
    })  

    
}
module.exports = ConfigureDb    