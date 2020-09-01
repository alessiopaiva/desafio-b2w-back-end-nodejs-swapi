/**
*
* Arquivo: src/models/planetModel.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável pelo modelo
*
*/

/**
 * Atributos do Schema:
 * Nome do Schema: Planeta
 * id: number
 * name: string
 * climate: string
 * terrain: string
 */

const mongoose = require('mongoose')

const PlanetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    terrain: {
        type: String,
        required: true
    },
    totalAppearances: {
		type: Number,
		required: false
	},
})


const Planet = mongoose.model('Planet', PlanetSchema)

module.exports = Planet