// const PlanetModel = require('../models/planetModel')
// const PlanetService = require('../repository/planetRepository')
// const axios = require('axios')

// class PlanetController {

//     constructor(){
//         this.planetService = new PlanetService()
//     }

//     async create(req, res) {
//         const { body } = req

//         await this.planetService.create(body)
//         .then(result => {
//             return res.status(201).json(result)
//         }, (err) => {
//             return res.status(400).send({ error: { description: "Não foi possível adicionar o planeta.", description: err.message}})
//         })
//     }

//     async getAll(req, res) {

//         await this.planetService.getAll()
//         .then(result => {
//             return res.status(200).json(result)
//         }, (err) => {
//             return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
//         }) 
//     }

//     async findByName(req, res){
//         const { name } = req.params

//         await this.planetService.findOne(name)
//         .then(result => {
//             return res.status(200).json(result)
//         }, (err) => {
//             return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
//         })
//     }

//     async findById(req, res){
//         const { id } = req.params

//         await this.planetService.findById(id)
//         .then(result => {
//             return res.status(200).json(result)
//         }, (err) => {
//             return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } });
//         })
//     }

//     async delete(req, res){
//         const { id } = req.params

//         await this.planetService.deleteOne({ _id: id})
//         .then(result => {
//             return res.status(204).json({ status: true, message: 'Planeta deletado com sucesso'})
//         }, (err) => {
//             return res.status(404).json({ result: "Planeta não foi deletado.", description: err.message })
//         })
//     }
// }

// module.exports = PlanetController