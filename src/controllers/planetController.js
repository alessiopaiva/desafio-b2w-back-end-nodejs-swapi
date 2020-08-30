const planetModel = require('../models/PlanetModel');

const axios = require('axios');

const getPlanets = async (url, planets) => {
	let response = await axios.get(url);
	const returnedPlanets = planets.concat(response.data.results);
	if(response.data.next !== null) {
		return getPlanets(response.data.next, returnedPlanets);
	} else {
		return returnedPlanets;
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

        await planetModel.create(body)
        .then(resultado => {
            return res.status(201).json(resultado)
        }, (err) => {
            return res.status(400).send({ error: { description: "Não foi possível adicionar o planeta."}})
        })
    }

    /**
	 * @async getAll
	 * @description Lista todos os planetas
	 */

    async getAll(req, res) {
        await planetModel.find((err, resultado) => {
            if(err)
                return res.status(404).json({ error: { description: "Não foi possível encontrar o planeta", description: err.message } })
            return res.status(200).json(resultado)
        })
    }

    /**
	 * @async findByName
	 * @description Busca planeta pelo nome
	 */

    async findByName(req, res){
        const { nome } = req.params

        await planetModel.findByOne(nome, (err, resultado) => {
            if(err)
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

        await planetModel.findById(id, (err, resultado) => {
            if(err)
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

        await planetModel.deleteOne({ _id: id}, (err) => {
            if(err)
                return res.status(404).json({ result: "Planeta não foi deletado.", description: err.message })
            return res.status(204).json({ status: true, message: 'Planeta deletado com sucesso'})
        })
    }
}

module.exports = new PlanetController()