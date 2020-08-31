import Server from '../server.js'
import DataBaseConfig from './config/dataBaseConfig.js'
import dotenv from 'dotenv/config.js'

class App {

    start(){

        //Conexao ao Banco
        DataBaseConfig.connect()

        //Server
        new Server().start()    
    }
}

new App().start()