const path = require('path')

const PaginasController = {
    index: (req, res) => {
        // carregar os filmes de filmes.json
        const filmes = require('../database/filmes.json')

        // passar os filmes para a view
        res.render('index', {filmes})
    },
    showFilme: (req, res) => {
        const filmes = require('../database/filmes.json')

        let id = req.params.id

        const filme = filmes.find( p => p.id == id)
        res.render('filme', {filme})
    },
    editFilme: (req, res) => {
        const filmes = require('../database/filmes.json')
        //capturar o id do filme
        let id = req.params.id
        //carregar o filme (na variável filme)
        const filme = filmes.find( p => p.id == id)

        //renderizar a view filme-edit.ejs
        //passar o filme a ser editado
        res.render('filme-edit', {filme})
    },
    updateFilme: (req, res) => {
        //capturar o id do filme
        let id = req.params.id
        //capturar o filme
        const filmes = require('../database/filmes.json')
        const filmeIndex = filmes.find( p => p.id == id)

        //capturar informações digitadas nos campos (req.body)
        const novoFilme = req.body

        //atualizar o filme
        filmes[filmeIndex] = novoFilme

        //salvar o array de filmes no filmes.json (fs.writefilesync)
        const fs = require('fs')
        fs.writeFileSync('filmeIndex', 'novoFilme')

        res.redirect('/')
    }
}   

module.exports = PaginasController