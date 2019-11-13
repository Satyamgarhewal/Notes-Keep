const faker = require('faker')
const Category = require('../app/models/category')
const ConfigureDb= require('../config/database')
const Notes = require('../app/models/note')
// const category = (faker.commerce.department())
ConfigureDb()

for(let i=0;i<=5;i++){
    const category= new Category({name :faker.commerce.department()})

    category.save()
    .then(category=>{
        console.log(category)
    })
   .catch(err=>{
    console.log(err)
})
}
const categoryId=["5d7c9fb7abd192247454b9b6","5d7c9fb7abd192247454b9b7","5d7c9fb7abd192247454b9b8","5d7c9fb7abd192247454b9b9","5d7c9fb7abd192247454b9bb","5d7c9fb7abd192247454b9ba"]
const append= function(categoryId){
    for(let i = 0;i<=categoryId.length;i++){
        categoryId= categoryId[i]
    }
}
for (let i=0;i<=100;i++){
    const note= new Notes({
                title:faker.lorem.sentence(),
                description: faker.lorem.sentences(),
                categoryId:append
    })
    note.save()
   .then(note=>{
       console.log(note)
   })
   .catch(err=>{
       console.log(err)
   })
}

