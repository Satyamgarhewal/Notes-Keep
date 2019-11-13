const configureDb = require('../config/database')
const Category  = require('../app/models/category')

configureDb()

Category.deleteMany({})
.then(c=>
{
    console.log('Data removed', c)
})
// configureDb()