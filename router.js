// Importando express
const express = require('express');
const path = require('path')
// const { check } = require('express-validator')
const multer = require('multer')

const upload = multer({dest: 'public/img/cartazes'})

// importando controllers

const PaginasController = require('./controllers/PaginasController')
const FilmesController = require('./controllers/FilmesController')

// Criando router

const router = express.Router();

// configurando express validator

// const validations = [
//     check('titulo').notEmpty,
//     check('genero').notEmpty
// ]


// definindo rotas

router.get('/', PaginasController.index)
router.get('/filmes/:id', PaginasController.showFilme)
router.get('/adm/filmes/create', FilmesController.showCreate)
router.get('/busca', FilmesController.buscarFilmes)
router.get('/adm/filmes/:id/edit', PaginasController.editFilme)
// router.get('/', PaginasController.buscarFilme)
router.post('/adm/filmes/create', upload.single('cartaz'), FilmesController.postFilme)
router.post('/adm/filmes/:id/update', PaginasController.updateFilme)


// Exportando router
module.exports = router;