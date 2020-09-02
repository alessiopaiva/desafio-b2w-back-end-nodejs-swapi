/**
*
* Arquivo: src/controllers/planetController.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável por lidar com a camada de controle HTTP da api
*
*/

const PlanetService = require('../services/planetService')
const Planet = require('../models/planetModel')
const StarWarsAPI = require('star-wars-api')

class PlanetController {

    constructor(){
        this.planetService = new PlanetService()
        this.swApi = new StarWarsAPI()
    }
    
    async create(req, res) {
        const { name, climate, terrain} = req.body
        
        this.planetService.findByName(name)
        .then( (result) => {
            if(result.length == 0){

                this.swApi.get(`https://swapi.dev/api/planets/?search=${name}`)
                .then( (result) =>  {
                    var totalFilms = 0
                    result.results.forEach(item => {
                        if(item.name === name) {
                            totalFilms = item.films.length
                        } 
                    })
                    
                console.log("O planeta ".concat(name).concat(" tem ").concat(totalFilms).concat(" aparições"))

                let planet = new Planet({name, climate, terrain, totalAppearances: totalFilms})
                this.planetService.create(planet)

                return res.status(201).json({result: { planet }})

                }, (err) => {
                    return res.status(400).send({error: { message: 'Não foi possível adicionar o planeta'}})
                })
            } else {
                return res.status(400).send({error: { message: 'Planeta já existente'}})
            }
        })
    }

    async getAll(req, res) {

        this.planetService.getAll()
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { message: "Não foi possível encontrar os planetas"}})
        })
    }

    async findByName(req, res){
        const { name } = req.params
        
        this.planetService.findByName(name)
        .then(result => {
            if(result.length == 0){
                return res.status(404).json({ error: { message: "Não foi possível encontrar o planeta"}})
            }
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({error: { message: err.message}})
        })
    }

    async findById(req, res){
        const { id } = req.params

        this.planetService.findById(id)
        .then(result => {
            if(result.length == 0){
                return res.status(404).json({ error: { message: "Não foi possível encontrar o planeta"}})
            } 
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({error: { message: err.message}})
        })
    }

    async deleteOne(req, res){
        const { id }= req.params

        this.planetService.deleteOne(id)
        .then(result => {
            return res.status(204).send()
        }, (err) => {
            return res.status(400).json({error: { message: 'Planeta não encontrado'}})
        })
    }
}

module.exports = PlanetController