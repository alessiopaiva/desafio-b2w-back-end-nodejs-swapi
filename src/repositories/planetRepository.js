/**
*
* Arquivo: src/repositories/planetRepository.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável pelo acesso ao banco
*
*/

import PlanetModel from '../models/planetModel.js'
// import mongoose from 'mongoose'
import axios from 'axios'

const getPlanets = async (url, planets) => {
	let response = await axios.get(url);
	const resultPlanets = planets.concat(response.data.results);
	if(response.data.next !== null) {
		return getPlanets(response.data.next, resultPlanets);
	} else {
		return resultPlanets;
	}
}

class PlanetRepository {

    constructor(){
        this.planetModel = PlanetModel    
    }

    async create(req){
        getPlanets('https://swapi.co/api/planets', [])
        .forEach(item => {
			if(item.name === name) {
				films = item.films.length
			}
		})

        this.planetModel.create(req)
    }
 
    async getAll(){
        const query = this.planetModel.find()

        const promise = query.exec()

        return promise
    }

    async findByName(req){
        const name = req
        
        const query = this.planetModel.find({name: name})

        const promise = query.exec()
        
        return promise
    }

    async findById(req, res){
        const id = req

        const query = this.planetModel.find({_id: id })

        const promise = query.exec()
        
        return promise
    }

    async deleteOne(req, res){
        const id = req

        this.planetModel.deleteOne({_id: req})
        
        const promise = query.exec()
        
        return promise
    }
}

export default PlanetRepository