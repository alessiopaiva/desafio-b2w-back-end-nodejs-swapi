/**
*
* Arquivo: src/controllers/planetController.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável por lidar com a camada de controle HTTP da api
*
*/

const PlanetService = require('../services/planetService')

class PlanetController {

    constructor(){
        this.planetService = new PlanetService()
    }
    
    async create(req, res) {
        const { name, climate, terrain} = req.body

        const result = await this.planetService.create(name, climate, terrain, res)

        switch(result){
            case 'invalid':
                return res.status(404).json({ message: 'Planeta inválido'})
            case 'exist':
                return res.status(400).json({ message: 'Planeta existente'})
            case false:
                return res.status(500).json({ message: 'Não foi possível adicionar'})
            default:
                return res.status(201).json({result: result})
        }
    }

    async getAll(req, res) {
        const result = await this.planetService.getAll()
       
        if(result.length == 0){
            return res.status(404).json({ message: 'Não foi possível encontrar os planetas'})
        } else {
            return res.status(200).json(result)
        }
    }

    async findByName(req, res){
        const { name } = req.params
        const result = await this.planetService.findByName(name)
  
        if(result.length == 0){
            return res.status(404).json({ message: 'Não foi possível encontrar o planeta'}) 
        } else {
            return res.status(200).json(result)
        }
    }

    async findById(req, res){
        const { id } = req.params
        const result = await this.planetService.findById(id)
        
        if(result.length == 0){
            return res.status(404).json({ message: 'Não foi possível encontrar o planeta'})
        } else {
            return res.status(200).json(result)
        }
    }

    async deleteOne(req, res){
        const { id } = req.params
        const result = await this.planetService.deleteOne(id)
        
        if(result.deletedCount == 0){
            return res.status(404).json({ message: 'Planeta não encontrado'})
        } else {
            return res.status(204).send()  
        }
    }
}

module.exports = PlanetController