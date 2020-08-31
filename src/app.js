const Server = require('../server')
const DataBaseConfig = require('./config/dataBaseConfig')

class App {

    start(){
        //Conexao ao Banco
        DataBaseConfig.connect()

        //Server
        new Server().start()    
    }
}

new App().start()