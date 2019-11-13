const express = require ('express')
const app = express()
const port = 3015
const router = require('./config/routes')
app.use(express.json())
const ConfigureDb = require('./config/database')
ConfigureDb()

app.use('/',router)
app.get('/', (req,res)=>{
    res.json({notice:'welcome to the note taking app'})
})
app.listen(port, ()=>{
    console.log('listening to port ', port)
} )