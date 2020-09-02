

# DESAFIO B2W | API STAR WARS

Update date: 2020-01-09 |
Feito por: Alessio Paiva Bertolini

<p align="center">
  <img src="./public/img/planet-sw-tartooise.jpg"/>  
</p>

### Bem vindo ao README do aplicativo API StarWars do desafio da empresa B2W

Projeto foi desenvolvido com arquitetura API REST conjunto ao Node.js, aplicados Design Pattern Service e Repository e DTO.
Sendo assim, com objetivo de gerenciar dados de planetas do filme Star Wars.
As operações do HTTP destina-se em cadastrar, listar e deletar dados de planetas.

**URL Base:** [http://localhost:27017/api-sw-node/](http://localhost:27017/api-sw-node/)

**URL da API Star Wars:** [https://swapi.dev/api/planet](https://swapi.dev/api/planet)

## Utilizados no Desenvolvimento ##

* Node.Js
* Express.Js
* MongoDb
* Visual Studio Code
* Json data (para retornar os dados)
* PostMan (testar a API criada utilizando as operações)

## Observações ##

É necessario configurar a chave do mongo no arquivo .env


### Instalando as configurações via cmd ##

Com cmd aberto digite a url do diretório do seu projeto

Exemplo:

cd "C:\Users\NomeDoComputador\Desktop\..."

------------------------
Node.js usa um gerenciador de pacotes de NPM, para iniciar o Node no seu projeto:

npm init

-------------------------------
Logo em seguida haverá configurações para inicializar o seu projeto:

Exemplo:

package name: (b2w-desafio-back-end-nodejs-swapi)  -- apertar enter

version: (1.0.0) -- apertar enter

keywords: -- apertar enter

license(ISC) -- apertar enter

Is this Ok? -- conferir e apertar enter

------------------------
Após configurar o seu projeto, em seguida será instalado todas as dependências listadas e definidas na pasta package.json

------------------------
Com comando abaixo e nome da sua dependência, será possível utilizá-la no projeto:
(Instalada no ambiente de produção)

npm install (nome da depedência)

------------------------
As depedências que foram usadas no projeto:

express - (Configura a rota das aplicações)

mongo - (Configura o Banco ao Node)

mongoose - (Ferramenta de modelagem de objetos do MongoDB trabalhada em um ambiente assíncrono)

dotenv - (Configura uma variável de ambiente, no qual foi usada para chave ao acesso ao MongoDB)

axios - (Biblioteca Javascript para fazer request HTTP do Node)

------------------------

Para instalar apenas no ambiente de desenvolvimento:

npm install --save-dev (nome da dependência escolhida)

------------------------

Dependência instalada no ambiente desenvolvimento:

nodemon - (Ferramente utilizada para aplicações de carregamento automático)

------------------------
 
## PASSO A PASSO DAS EXECUÇÕES DO PROJETO

Para iniciar o projeto:

npm run dev (Para iniciar pelo ambiente de desenvolvimento)

ou

npm start (Para iniciar pelo ambiente de produção)

## OBSERVAÇÕES DA EXECUÇÃO

De acordo com a resquest do HTTP, será encaminhado pela rota na url, que está definido na classe planetRouter

O Projeto está dividido em 3 camadas (Controller, Service, Repository)

Após a escolha da rota, será encaminhado para função do controller.
A classe planetController é responsável pelo status do response.
Após isso será direcionado a classe planetService.
No qual essa classe é responsável pela regra de negócios.
Logo em seguida será encaminhado a classe planetRepository que está ligado diretamente ao Model, a classe planetModel.
Por sua vez será encarregado a criar/buscar/deletar as informações do Mongodb.

Objetivo esse é não ter tantas responsabilidades para cada classe, e encapsular as informações de cada dado.

A cada ação HTTP utilizei o programa PostMan, para assim testar a cada funcionalidade do projeto.

------------------------
Algumas observações das ações que adotei para criação desse projeto.
Como não havia restrição na descrição do desafio, então escolhi em obtar em fazer essas validações.

> create()

```
Há uma outra camada de classe que é a Client.
Ela está destinada a buscar as informações pelo nome através da url da api SWAPI, 
utilizando a dependência axios.

Observações na criação:
Só é possivel criar um planeta caso o nome seja igual ao que consta na API SWAPI.
E não é possível criar um novo planeta com o mesmo nome que está no banco.
```

>findByName()

```
É possível buscar todos planetas listados no banco.
E também é possível buscar apenas umas das primeiras letras da palavra.
```


## Adicionar planeta

`POST /planet`

> Status 201

Request Body

```json
{
	  "name": "Naboo",
	  "climate": "Frio",
	  "terrain": "Relevo"
}

Response

```json

{
    "_id": "5f50074e16f26031982c94ef",
    "name": "Hoth",
    "climate": "Frio",
    "terrain": "Relevo",
    "totalAppearances": 1
}
```

> Status 500 (Erro ao adicionar)

Response

```json

{
  "error":
  {
    "message": "Não foi possível adicionar o planeta",
  }
}
```

> Status 400 (Erro do nome já existente)

Response

```json

{
  "error":
  {
    "message": "Planeta já existente",
  }
}
```

> Status 404 (Erro do nome inválido)

Response

```json

{
  "error":
  {
    "message": "Planeta inválido",
  }
}
```

## Listar todos os planetas

`GET /planets`

> Status 200

Response

```json

{
    "_id": "5f50074e16f26031982c94ef",
    "name": "Hoth",
    "climate": "Frio",
    "terrain": "Relevo",
    "totalAppearances": 1
}
```

> Status 404

Response

```json

{
  "error":
  {
    "message": "Não foi possível encontrar os planetas",
  }
}
```

## Buscar planeta pelo nome

`GET /planet/name/name/Hoth`

> Status 200

Response

```json

{
    "_id": "5f50074e16f26031982c94ef",
    "name": "Hoth",
    "climate": "Frio",
    "terrain": "Relevo",
    "totalAppearances": 1
}
```

## Listar todos os planetas com a primeira letra da busca

`GET /planets/H`

> Status 200

Response

```json

{
    "_id": "5f50074e16f26031982c94ef",
    "name": "Hoth",
    "climate": "Frio",
    "terrain": "Relevo",
    "totalAppearances": 1
}
```

> Status 404

Response

```json

{
  "error":
  {
    "message": "Não foi possível encontrar o planeta",
  }
}
```


## Buscar planeta pelo id

`GET /planet/id/5f50074e16f26031982c94ef`

> Status 200

Response

```json

{
    "_id": "5f50074e16f26031982c94ef",
    "name": "Hoth",
    "climate": "Frio",
    "terrain": "Relevo",
    "totalAppearances": 1
}
```

> Status 404

Response

```json
{
  "error":
  {
    "message": "Não foi possível encontrar o planeta",
  }
}
```


## Remover planeta pelo id

`DELETE /planet/5f50074e16f26031982c94ef`

> Status 204

Response

```json

```

> Status 404

```json
{
  "error":
  {
    "message": "Planeta não encontrado",
  }
}
```

Dúvidas e/ou sugestões enviar email para: alessio.bertolini@gmail.com