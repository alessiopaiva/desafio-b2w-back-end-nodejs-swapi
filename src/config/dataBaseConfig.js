const mongoose = require('mongoose')

mongoose.connect(
  `mongodb://localhost:27017/api-sw-node`,
   { useUnifiedTopology: true ,  useNewUrlParser: true},)
   .then(() => {
    console.log('Conectado ao MongoDB');
 }).catch((e) => {
    console.log('Erro: ', e.message)
 })
 
mongoose.Promise = global.Promise

module.exports = mongoose