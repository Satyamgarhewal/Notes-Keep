const Note = require('../models/note')
const Category = require('../models/category')

//list
module.exports.list =(req,res)=>{
    Note.find().populate('categoryId')
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//create
module.exports.create = (req,res)=>{
    const body = req.body
    const note= new Note(body)
    note.save()
        .then((note)=>{
            console.log('printing response',note)
            res.json(note)
        })
        .catch((err)=>{
            console.log('printing error',err)
            res.json(err)
        })
}

//show
module.exports.show=(req,res)=>{
    const id = req.params.id
    Note.findById(id)
    .then((note)=>{
        if(note){
            console.log("inside notes")
            // res.json(note)
           const Id = note.categoryId
            Category.findById(Id)
            .then((category)=>{
                if(category){
                    const newNote= Object.assign({}, note.toObject())
                    if(category){
                        NewNote.categoryId = category
                        res.json(newNote)
                    }
                //     console.log('inside category')
                //    note.categoryId=category
                   res.json(note)
                }
            })
                .catch((err)=>{
                    res.json(err)
                })
            }
        
        else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.destroy=function(req,res){
    const {id} = req.params
    Note.findByIdAndDelete(id)
    .then(note=>{
        res.send(note)
    })
    .catch(err=>{
        res.send(err)
    })
}


 
