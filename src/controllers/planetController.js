/**
 *
 * Arquivo: src/controllers/planetController.js
 * Author: Alessio Paiva Bertolini
 * Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
 *
 */

const PlanetModel = require('../models/PlanetModel')

class PlanetController {

    constructor(){
        this.planetModel = new PlanetModel()
    }

    async create(req, res) {
        const { body } = req

        this.planetModel.create(body)
        .then(result => {
            return res.status(201).json(result)
        }, (err) => {
            return res.status(400).send({ error: { description: "Não foi possível adicionar o planeta."}})
        })
    }

    async getAll(req, res) {
        this.planetModel.find()
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async findByName(req, res){
        const { nome } = req.params

        this.planetModel.findByOne(nome)
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async findById(req, res){
        const { id } = req.params

        this.planetModel.findById(id)
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
        })
    }

    async delete(req, res){
        const { id } = req.params

        this.planetModel.deleteOne({ _id: id})
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(204).json({ status: true, message: 'Planeta deletado com sucesso'})
        })
    }
}

module.exports =  PlanetController