/**
*
* Arquivo: src/services/planetService.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável pela regra de negócio da aplicação
*
*/

const PlanetRepository = require('../repositories/planetRepository')

class PlanetService {

    constructor(){
        this.planetRepository = new PlanetRepository()
    }

    async create(req, res) {
        this.planetRepository.create(req, res)
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
        this.planetRepository.deleteOne(req)
    }
}

module.exports = PlanetService