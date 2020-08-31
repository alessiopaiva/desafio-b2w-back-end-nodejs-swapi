
import PlanetRepository from '../repositories/planetRepository.js'
import axios from 'axios'

const getPlanets = async (url, planets) => {

    let response = await axios.get(url)
    
    const resultPlanets = planets.concat(response.data.results)
    
	if(response.data.next !== null) {
		return getPlanets(response.data.next, resultPlanets)
	} else {
		return resultPlanets
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

export default PlanetService