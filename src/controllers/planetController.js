/**
*
* Arquivo: src/controllers/planetController.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por lidar com a camada de controle HTTP da api
*
*/

const PlanetService = require('../services/planetService')
const Planet = require('../models/planetModel')
// const axios = require('axios')

// const getPlanets = async (url, planets) => {
// 	let response = await axios.get(url);
// 	const resultPlanets = planets.concat(response.data.results);
// 	if(response.data.next !== null) {
// 		return getPlanets(response.data.next, resultPlanets);
// 	} else {
// 		return resultPlanets;
// 	}
// }

class PlanetController {

    constructor(){
        this.planetService = new PlanetService()
    }

    async create(req, res) {

        // const planets = getPlanets('https://swapi.co/api/planets', [])
        // planets.forEach(item => {
		// 	if(item.name === name) {
		// 		films = item.films.length
		// 	}
		// })

        const { name, climate, terrain } = req.body

        let planet = new Planet({name, climate, terrain, countFilms: films})

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
        const { id }= req.params

        this.planetService.deleteOne(id)
        .then(result => {
            return res.status(204).send()
        }, (err) => {
            return res.status(404).json({ error: {message: 'Planeta não encontrado', description: err.message}})
        })
    }
}

module.exports = PlanetController