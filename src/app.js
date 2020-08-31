/**
*
* Arquivo: src/app.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por fazer a chamada do banco e server
* nos arquivos 'dataBaseConfig.js' e 'server.js', respectivamente
*
*/

const Server = require('../server.js')
const DataBaseConfig = require('../config/dataBaseConfig')

class App {

    start(){

        DataBaseConfig.connect()

        new Server().start()    
    }
}

new App().start()