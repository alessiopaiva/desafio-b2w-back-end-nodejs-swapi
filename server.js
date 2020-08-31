import express from 'express'
import path from 'path'
import PlanetRouter from './src/routes/planetRouter.js'
// import {fileURLToPath} from 'url'

class Server {

    constructor(){
        //Configuraçao do server
        this.app = express()
        this.planetRouter = new PlanetRouter()
    }

    start(){

        // const __dirname = path.dirname(fileURLToPath(import.meta.url))

        // Express middlewares
        this.app.use(express.json())
        // this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(express.urlencoded({ extended: true }))

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
import { fileURLToPath } from 'url'

export default Server