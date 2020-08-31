
import PlanetService from '../services/planetService.js'
import Planet from '../domains/planetDomain.js'

class PlanetController {

    constructor(){

        this.planetService = new PlanetService()
    }

    async create(req, res) {

        let planet = new Planet(req.body.name, req.body.climate, req.body.terrain)

        this.planetService.create(planet)

        .then(result => {
            return res.status(201).json(result)
        }, (err) => {
            return res.status(400).send({ error: { description: "Não foi possível adicionar o planeta."}})
        })
    }

    async getAll(req, res) {

        this.planetService.getAll()

        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async findByName(req, res){
        const { nome } = req.params

        this.planetService.findByName(nome)

        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async findById(req, res){

        const { id } = req.params

        this.planetService.findById(id)

        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async delete(req, res){
        
        const { id } = req.params

        this.planetService.delete({ _id: id})

        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(400).json({ status: true, message: 'Planeta deletado com sucesso'})
        })
    }
}

export default PlanetController