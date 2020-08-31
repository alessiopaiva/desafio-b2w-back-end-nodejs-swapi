/**
*
* Arquivo: src/routes/planetRouter.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por carregar todas as rotas
*
*/

const express = require('express')
const PlanetController = require('../controllers/planetController.js')

class PlanetRouter {

    constructor(){
        this.planetController = new PlanetController()
        this.router = express.Router()
        this.loadRoutes()
    }

    loadRoutes(){

        this.router.get('/', (req, res) => 
            res.status(200).json({ 
                message: "Seja bem vindo(a) ao desafio B2W com API STAR WARS"
            })
        )

        this.router.post('/planet', this.planetController.create.bind(this.planetController))

        this.router.get('/planet/list', this.planetController.getAll.bind(this.planetController))

        this.router.get('/planet/find/name/:name', this.planetController.findByName.bind(this.planetController))

        this.router.get('/planet/find/id/:id', this.planetController.findById.bind(this.planetController))

        this.router.delete('/planet/delete/:id', this.planetController.deleteOne.bind(this.planetController))

    }
}


module.exports = PlanetRouter