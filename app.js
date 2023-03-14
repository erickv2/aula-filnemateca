// Importando express
const express = require('express');

const path = require('path')

// Criando app
const app = express();


// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static('public'));

//processando informações do formulário e colocando no req.body
app.use(express.urlencoded({ extended: false }));

// Configurando ejs como template engine
app.set('view engine', 'ejs')

// Importando e configurando router
const router = require('./router');
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
