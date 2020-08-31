# DESAFIO B2W | API STAR WARS

<p align="center">
  <img src="./public/img/planet-sw-tartooise.jpg"/>  
</p>

### Bem vindo ao README do aplicativo API StarWars do desafio da empresa B2W

Projeto foi desenvolvido com arquitetura API REST conjunto ao Node.js e com objetivo de gerenciar dados de planetas do filme Star Wars.
As operações do HTTP destina-se em cadastrar, listar e deletar dados de planetas.

**URL Base:** [http://localhost:27017/api-sw-node/](http://localhost:27017/api-sw-node/)

## Utilizados no Desenvolvimento ##

* Node.Js
* Express.Js
* MongoDb
* Visual Studio Code
* Json data (para retornar os dados)
* PostMan (testar a API criada utilizando as operações)


### Instalando as configurações via cmd ##

Com cmd aberto, e digite url do diretório do seu projeto

Exemplo:

cd "C:\Users\NomeDoComputador\Desktop\..."

------------------------
Para iniciar Node no seu projeto:

npm init

------------------------
Logo em seguida será instalado todas as dependências listadas e definidas no arquivo package.json

E com isso há outras depedências que foi usado no projeto, que são:

axios

express

mongo

mongoose

dotenv

------------------------

Para instalar o Mongodb:

mongod

------------------------

Para instalar o Nodemon no seu projeto mas no ambiente desenvolvimento:

npm i -D nodemon
------------------------
Para iniciar seu projeto. No caso foi inicializado pelo ambiente desenvolvimento:

npm run dev

------------------------

## PASSO A PASSO DAS EXECUÇÕES DO PROJETO

## Adicionar planeta

`POST /planet`

## Buscar planeta pelo nome

`GET /planet/find/:name` 

## Buscar planeta pelo id

`GET /planet/find/:id`

## Remover planeta pelo id

`DELETE /planet/delete/:id`

## Listar todos os planetas

`GET /planet/list`