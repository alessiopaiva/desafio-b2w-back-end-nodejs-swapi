/**
*
* Arquivo: src/client/client.js
* Autor: Alessio Paiva Bertolini
* Descrição: Classe responsável por lidar com o retorno dados da API Star Wars
*
*/

const axios = require('axios')

class Client {

        async get(name){
                let response = await axios.get('https://swapi.dev/api/planets/?search=' + name)
                const returned = response.data
                if(response.status != 200) {
                        return false
                }
                return returned
        }
}

module.exports = Client