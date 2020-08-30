const mongoose = require('mongoose')

// Criação do Schema
const PlanetSchema = new mongoose.Schema({
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

// Exporta o model

module.exports = mongoose.model('Planet', PlanetSchema)