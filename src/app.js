/**
*
* Arquivo: src/app.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável por fazer a chamada do banco e server
* nos arquivos 'dataBaseConfig.js' e 'server.js', respectivamente
*
*/

import Server from '../server.js'
import DataBaseConfig from './config/dataBaseConfig.js'

class App {

    start(){

        DataBaseConfig.connect()

        new Server().start()    
    }
}

new App().start()