/**
*
* Arquivo: src/repositories/planetRepository.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável pelo acesso ao banco
*
*/

const PlanetModel = require('../models/planetModel')


class PlanetRepository {

    constructor(){
        this.planetModel = PlanetModel    
    }

    async create(req){
        this.planetModel.create(req)
    }
 
    async getAll(){
        const query = this.planetModel.find()

        const promise = query.exec()

        return promise
    }

    async findByName(req){
        const name = req
        
        const query = this.planetModel.find({"name": {$regex: '^' + name, $options: 'i'}})

        const promise = query.exec()
        
        return promise
    }

    async findById(req, res){
        const id = req

        const query = this.planetModel.find({_id: id})

        const promise = query.exec()
        
        return promise
    }

    async deleteOne(req, res){
        const id = req

        const query = this.planetModel.deleteOne({_id: id})
        
        query.exec()
    }
}

module.exports = PlanetRepository