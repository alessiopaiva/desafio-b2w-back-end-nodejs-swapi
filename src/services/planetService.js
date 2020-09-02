/**
*
* Arquivo: src/services/planetService.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável pela regra de negócio da aplicação
*
*/

const PlanetRepository = require('../repositories/planetRepository')
const Client = require('../client/client')
const PlanetModel = require('../models/planetModel')
const Planet = require('../models/planetModel')

class PlanetService {

    constructor(){
        this.planetRepository = new PlanetRepository()
        this.client = new Client()
        this.planetModel = PlanetModel
    }

    async create(name, climate, terrain, res) {
        let planet = await this.client.get(name)

        if (planet == false){
            return false
        }

        var totalAppearances = 0

        var planetFound = await this.planetRepository.findByName(name)

        var planetInfo = planet.results[0]

        if(planet.count != 1 || planetInfo.name != name){
            const invalid = 'invalid'
            return invalid
        }

        if(planetFound.length >= 1){
            const exist = 'exist'
            return exist
        }

        totalAppearances = planetInfo.films.length
        let planetModel = new Planet({name, climate, terrain, appearances: totalAppearances})

        this.planetRepository.create(planetModel, res)
        
        return planetModel
    }

    async getAll() {
        return this.planetRepository.getAll()
    }

    async findByName(req){
        return this.planetRepository.findByName(req)
    }

    async findById(req){
        return this.planetRepository.findById(req)
    }

    async deleteOne(req, res){
        return this.planetRepository.deleteOne(req)
    }
}

module.exports = PlanetService