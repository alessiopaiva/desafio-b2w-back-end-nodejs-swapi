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

import mongoose from 'mongoose'

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
    }
})


const Planet = mongoose.model('Planet', PlanetSchema)

export default Planet