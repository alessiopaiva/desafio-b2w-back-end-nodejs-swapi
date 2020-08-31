/**
*
* Arquivo: src/services/planetService.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável pela regra de negócio da aplicação
*
*/

import PlanetRepository from '../repositories/planetRepository.js'

class PlanetService {

    constructor(){
        this.planetRepository = new PlanetRepository()
    }

    async create(req, res) {
        console.log('Service' + req)
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
        return this.planetRepository.deleteOne(req)
    }
}

export default PlanetService