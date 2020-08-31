const express = require('express')
const bodyParser = require('body-parser')
const PlanetRouter = require('./src/routes/planetRouter')

class Server {

    constructor(){
        //Configuraçao do server
        this.app = express()
        this.planetRouter = new PlanetRouter()
    }

    start(){
        // Express middlewares
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())

        // Acesso as rotas
        this.app.use('/api', this.planetRouter.router)

        // Configuração da porta
        const port = process.env.PORT || 3800
        // Acesso a porta
        this.app.listen(port, () => {
            console.log('Conectado na porta ' + port)
        })
    }

}

module.exports = Server