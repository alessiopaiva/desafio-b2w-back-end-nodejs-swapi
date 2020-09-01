/**
*
* Arquivo: src/app.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável por fazer a chamada do banco e server
* nos arquivos 'dataBaseConfig.js' e 'server.js', respectivamente
*
*/

const Server = require('../server')
const DataBaseConfig = require('../src/config/dataBaseConfig')

class App {

    start(){

        DataBaseConfig.connect()

        new Server().start()    
    }
}

new App().start()