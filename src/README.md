# DESAFIO B2W | API STAR WARS
# Feito por Alessio Paiva Bertolini

<p align="center">
  <img src="./src/img/planet-sw-tartooise.jpg"/>  
</p>

### Bem vindo ao ReadMe da API StarB2W.

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

## Dependências utilizadas ##



### Instalando as configurações via cmd ##

Com cmd aberto, e digite url do diretório do seu projeto

Exemplo:

cd "C:\Users\NomeDoComputador\Desktop\..."

------------------------
Para instalar as dependências, dentro do seu projeto digite o comando:


npm install

------------------------
Logo em seguida será instalado todas as dependências listadas e definidas no arquivo package.json:

------------------------

Para instalar o Mongodb:

mongod

------------------------

Para iniciar as funcionalidades dentro do seu projeto, o comando será:

npm start

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