/**
*
* Arquivo: server.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por fazer chamada da rota no arquivo 'planetRouter.js'
* e carregar o acesso a porta
*/

const express = require('express')
const PlanetRouter = require('./src/routes/planetRouter')

class Server {

    constructor(){
        this.app = express()
        this.planetRouter = new PlanetRouter()
    }

    start(){

        // Express middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        // Acesso as rotas
        this.app.use('/api', this.planetRouter.router)

        const port = process.env.PORT || 3800
        
        this.app.listen(port, () => {
            console.log('Conectado na porta ' + port)
        })
    }

}

module.exports = Server