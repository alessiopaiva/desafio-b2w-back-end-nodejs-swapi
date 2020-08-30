const express = require('express')
const router = express.Router()

router.get('/', (req, res) => 
    res.status().json({ message: "Bem vindo(a) ao desafio B2W com API STAR WARS"})
)

module.exports = router