const Texto = require('../models/Texto');

module.exports = {
    mostrarTextos: async function(req,res) {
        var textos = await Texto.findAll();

        return res.status(400).json(textos);
    },
    criarTexto: async function(req,res) {
        var autor = req.body.autor;
        var titulo = req.body.titulo;
        var data = req.body.data;
        var categoria = req.body.categoria;
        var texto = req.body.texto;

        await Texto.create({
            autor: autor,
            titulo: titulo,
            data: data,
            categoria: categoria,
            texto: texto
        });

        return res.status(400).json('Texto criado.');
    },
    editarTexto: async function(req,res) {
        var autor = req.body.autor;
        var titulo = req.body.titulo;
        var data = req.body.data;
        var categoria = req.body.categoria;
        var texto = req.body.texto;
        var id = req.body.id;

        await Texto.update({
            autor: autor,
            titulo: titulo,
            data: data,
            categoria: categoria,
            texto: texto
        },{ where: { id: id } });

        return res.status(400).json('Texto criado.');
    },
    deletarTexto: async function(req,res) {
        var id = req.body.id;

        Texto.destroy({where: { id:id }});
    }

}