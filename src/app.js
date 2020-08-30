const express = require('express')
const bodyParser = require('body-parser')
const planetRouter = require('./router/planetRouter')
const database = require('./config/dataBaseConfig')
const app = express()
const router = express.Router()

//Config
const configureExpress = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.text())
    app.use(bodyParser.json({ type: "application/json" }))

    

router.get('/', (req, res) => 
    res.status().json({ message: "Bem vindo(a) ao desafio B2W com API STAR WARS"})
)

    //Routes
    app.use('/api', planetRouter)

    return app
}

module.export = () => database.connect().
                        then(configureExpress)