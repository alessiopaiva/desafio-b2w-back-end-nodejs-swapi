const express = require('express')
const router = express.Router()
const planetController = require('../controllers/planetController')

router.post('/planet', planetController.create)
router.get('/planet/list', planetController.getAll)
router.get('/planet/find/:name', planetController.findByName)
router.get('/planet/find/:id', planetController.findById)
router.delete('/planet/delete/:id', planetController.delete)

module.exports = router