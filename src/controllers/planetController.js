/**
*
* Arquivo: src/controllers/planetController.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por lidar com a camada de controle HTTP da api
*
*/

import PlanetService from '../services/planetService.js'
import Planet from '../models/planetModel.js'
// import Planet from '../domains/planetDomain.js'

class PlanetController {

    constructor(){
        this.planetService = new PlanetService()
    }

    async create(req, res) {

        const { name, climate, terrain } = req.body

        let planet = new Planet({name, climate, terrain})

        this.planetService.create(planet)
        .then(result => {
            return res.status(201).json({result: {description: 'Planeta adicionado'}})
        }, (err) => {
            return res.status(400).send({error: { message: 'Não foi possível adicionar o planeta', description: err.message}})
        })
    }

    async getAll(req, res) {

        this.planetService.getAll()
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({ error: { message: 'Não foi possível encontrar os planetas', description: err.message }})
        })
    }

    async findByName(req, res){
        const { name } = req.params
        
        this.planetService.findByName(name)
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({ error: { message: "Não foi possível encontrar o planeta", description: err.message }})
        })
    }

    async findById(req, res){
        const { id } = req.params

        this.planetService.findById(id)
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { message: "Não foi possível encontrar o planeta", description: err.message }})
        })
    }

    async deleteOne(req, res){
        const { id } = req.params
        
        this.planetService.deleteOne(id)
        .then(result => {
            return res.status(204)
        }, (err) => {
            return res.status(404).json({ erro: {message: 'Planeta não encontrado', description: err.message}})
        })
    }
}

export default PlanetController