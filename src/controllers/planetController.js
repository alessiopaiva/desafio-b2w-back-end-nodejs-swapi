const planetModel = require('../models/PlanetModel');

const axios = require('axios');

const getPlanets = async (url, planets) => {
	let response = await axios.get(url)
	const resultPlanet = planets.concat(response.data.results)
	if(response.data.next !== null) {
		return getPlanets(response.data.next, resultPlanet)
	} else {
		return resultPlanet
	}
}

class PlanetController {

    /**
	 * @async create
	 * @description Adiciona um planeta novo
	 */

    async create(req, res) {
        const { body } = req

        getPlanets('https://swapi.co/api/planets', [])
        .forEach(item => {
			if(item.name === name) {
				films = item.films.length
			}
		})

        await PlanetModel.create(body)
        .then(result => {
            return res.status(201).json(result)
        }, (err) => {
            return res.status(400).send({ error: { description: "Não foi possível adicionar o planeta.", description: err.message}})
        })
    }


    /**
	 * @async getAll
	 * @description Lista todos os planetas
	 */

    async getAll(req, res) {
        
        await PlanetModel.find()
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
            return res.status(200).json(resultado)
        }) 
    }

    /**
	 * @async findByName
	 * @description Busca planeta pelo nome
	 */

    async findByName(req, res){
        const { name } = req.params

        await PlanetModel.findOne(name )
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
            return res.status(200).json(resultado)
        })
    }

    /**
	 * @async findById
	 * @description Busca planeta pelo id
	 */

    async findById(req, res){
        const { id } = req.params

        await PlanetModel.findById(id)
        .then(result => {
            return res.status(200).json(result)
        }, (err) => {
            return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } });
            return res.status(200).json(resultado)
        })
    }

    /**
	 * @async delete
	 * @description Deletar planeta pelo id
	 */

    async delete(req, res){
        const { id } = req.params

        await PlanetModel.deleteOne({ _id: id})
        .then(result => {
            return res.status(204).json({ status: true, message: 'Planeta deletado com sucesso'})
        }, (err) => {
            return res.status(404).json({ result: "Planeta não foi deletado.", description: err.message })
            return res.status(204).json({ status: true, message: 'Planeta deletado com sucesso'})
        })
    }
}

module.exports = new PlanetController()