const Texto = require('../models/Texto');

module.exports = {
    mostrarTextos: async function(req,res) {
        var textos = await Texto.findAll({
            order: [['data', 'DESC']]
        });

        return res.status(200).json(textos);
    },
    mostrarTextoPorId: async function(req,res) {
        var id = req.params.id;

        var texto = await Texto.findByPk(id);

        return res.status(200).json(texto);
    },
    criarTexto: async function(req,res) {
        var autora = req.body.autora;
        var titulo = req.body.titulo;
        var data = req.body.data;
        var categoria = req.body.categoria;
        var texto = req.body.texto;
        
        if (autora == undefined || titulo == undefined || data == undefined || texto == undefined) {
            return res.status(400).json('Preencha todos os campos.');
        }

        var textos = await Texto.findAll({
            where: {
                categoria: categoria
            }
        })

        var numero = 0;

        numero = numero + textos.length + 1;

        
        if (numero < 10) {
            numero = '0' + numero.toString();
        }

        await Texto.create({
            autora: autora,
            titulo: titulo,
            data: data,
            categoria: categoria,
            texto: texto,
            numero: numero
        });

        return res.status(200).json('Texto criado.');
    },
    editarTexto: async function(req,res) {
        var autora = req.body.autora;
        var titulo = req.body.titulo;
        var data = req.body.data;
        var texto = req.body.texto;
        var id = req.params.id;

        await Texto.update({
            autora: autora,
            titulo: titulo,
            data: data,
            texto: texto
        },{ where: { id: id } });

        return res.status(200).json('Texto editado.');
    },
    deletarTexto: async function(req,res) {
        var id = req.body.id;

        Texto.destroy({where: { id:id }});

        return res.status(200).json('Texto deletado.');

    }

}