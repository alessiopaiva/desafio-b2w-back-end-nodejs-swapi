
import mongoose from 'mongoose'
import Planet from '../domains/planetDomain.js'

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
PlanetSchema.loadClass(Planet )

// Exporta o Schema
export default mongoose.model('Planet', PlanetSchema)