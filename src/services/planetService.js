/**
*
* Arquivo: src/services/planetService.js
* Author: Alessio Paiva Bertolini
* Description: Arquivo responsável por lidar com a lógica dos HTTP's da api.
*
*/

const PlanetModel = require('../models/planetModel')
const PlanetRepository = require('../repository/planetRepository')
const axios = require('axios')

const getPlanets = async (url, planets) => {
	let response = await axios.get(url);
	const returnedPlanets = planets.concat(response.data.results);
	if(response.data.next !== null) {
		return getPlanets(response.data.next, returnedPlanets);
	} else {
		return returnedPlanets;
	}
}

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

    async findByName(req, res){
        return this.planetRepository.findByName(req, res)
    }

    async findById(req, res){
        return this.planetRepository.findById(req, res)
    }

    async delete(req, res){
        this.planetRepository.delete(req, res)
    }
}

module.exports =  PlanetService