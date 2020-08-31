const mongoose = require('mongoose')
const PlanetDomain = require('../domains/planetDomain')

// Definindo o modelo (estrutura da collection)
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

// Objeto que contem os dados
PlanetSchema.loadClass(PlanetDomain)

// Exporta o Schema
module.exports = mongoose.model('Planet', PlanetSchema)