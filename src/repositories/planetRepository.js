
import PlanetModel from '../models/planetModel.js'
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

        this.model = PlanetModel
    }

    create(req, res){

        const { name, climate, terrain } = req.body;

        getPlanets('https://swapi.co/api/planets', [])
        .forEach(item => {
			if(item.name === name) {
				films = item.films.length
			}
		})

        this.planetModel.create(name, climate, terrain)
    }
 
    getAll(){

        const query = this.model.find()

        const promise = query.exec()

        return promise
    }

    findById(req, res){
        const { id } = req.params

        const query = this.model.findById(id)

        const promise = query.exec()

        return promise
    }

    findByName(req, res){
        const { name } = req.params

        const query = this.model.findOne(name)

        const promise = query.exec()
        
        return promise
    }

    delete(req, res){
        const { id } = req.params

        const query = this.model.deleteOne({ _id: id})

        const promise = query.exec()

        return promise
    }
}

export default PlanetRepository