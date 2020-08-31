/**
 *
 * Arquivo: src/router/planetRouter.js
 * Author: Alessio Paiva Bertolini
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 *
 */

const express = require('express')
const PlanetController = require('../controllers/planetController')

class PlanetRouter {

    constructor(){
        this.planetController = new PlanetController()
        this.router = express.Router()
        this.loadRoutes()
    }

    loadRoutes(){

        this.router.get('/', (req, res) => 
            res.status(201).json({ 
                message: "Seja bem vindo(a) ao desafio B2W com API STAR WARS"
            })
        )

        this.router.post('/planet', this.planetController.create.bind(this.planetController))

        this.router.get('/planet/list', this.planetController.getAll.bind(this.planetController))

        this.router.get('/planet/find/:name', this.planetController.findByName.bind(this.planetController))

        this.router.get('/planet/find/:id', this.planetController.findById.bind(this.planetController))

        this.router.delete('/planet/delete/:id', this.planetController.delete.bind(this.planetController))

    }
}


module.exports = PlanetRouter