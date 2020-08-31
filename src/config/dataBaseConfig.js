const mongoose = require('mongoose')

class dataBaseConfig {

   static async connect(){
      // Conexao com Banco
      await mongoose.connect(
         `mongodb://localhost:27017/api-sw-node`,
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

module.exports = dataBaseConfig