/**
*
* Arquivo: src/services/planetService.js
* Autor: Alessio Paiva Bertolini
* Descrição: Arquivo responsável pela configuração do banco
*
*/

import mongoose from 'mongoose'

class dataBaseConfig {

   static async connect(){
      await mongoose.connect(
         process.env.MONGODB_REMOTO_KEY,
          { useUnifiedTopology: true ,  useNewUrlParser: true, useFindAndModify: false})
          .then(() => {
           console.log('Conectado ao MongoDB');
        }).catch((err) => {
           console.log('Erro: ', err)
      })
   }

   static async close() {
      await mongoose.connection.close()
         .then(() => {
            console.log('Banco fechado com sucesso')
         }).catch((err) => {
            console.log('Erro: ', err)
         })
   }
}

export default dataBaseConfig