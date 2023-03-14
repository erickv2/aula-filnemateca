const path = require('path')
const filmes = require('../database/filmes.json')
const fs = require('fs')
const {validationResult} = require('express-validator')
const uuid = require('uuid');

const FilmesController = {
    showCreate: (req, res) => {
        res.render('filme-create')
    },
    postFilme: (req, res) => {

        console.log(req.body)

        let filename = `${Date.now()}-${req.file.originalname}`

        fs.renameSync(req.file.path, `public/img/cartazes/${filename}`)

        let novoFilme = {
            id: uuid.v4(),
            cartaz: filename,
            titulo: req.body.titulo,
            generos: req.body.generos,
            censura: req.body.censura,
            trailer: req.body.trailer,
            sinopse: req.body.sinopse
        }

        filmes.push(novoFilme)

        const filmesString = JSON.stringify(filmes, null, 4)

        const pathFilmes = path.resolve(__dirname + "/../database/filmes.json");
        fs.writeFileSync(pathFilmes, filmesString);

        // const resultValidations = validationResult(req)
        // console.log(resultValidations)

        res.redirect('/')
    },
    buscarFilmes: (req, res) => {
        let trecho = req.query.busca
        let censuraFiltrada = req.query.censura
        let filmesFiltrados = filmes.filter(f => f.titulo.toLowerCase().includes(trecho.toLowerCase()) || f.censura < censuraFiltrada)
        res.render('index', {filmes: filmesFiltrados})
    }
}

module.exports = FilmesController