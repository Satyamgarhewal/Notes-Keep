const express = require ('express')
const router = express.Router()

const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')
const usersController = require('../app/controllers/usersController')
router.get('/notes',notesController.list)
router.post('/notes', notesController.create)
router.get('/notes/:id', notesController.show)
router.delete('/notes/:id', notesController.destroy)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id',categoriesController.show)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)

router.post('/users', usersController.create)
router.post('/login', usersController.login)

module.exports = router