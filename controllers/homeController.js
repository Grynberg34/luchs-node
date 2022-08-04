const Texto = require('../models/Texto');

module.exports = {
    mostrarUltimoTexto: async function(req,res) {
        var texto = await Texto.findOne({
            order: [ [ 'id', 'DESC' ]],
        });

        console.log(texto)

        return res.status(200).json(texto);
    },
    mostrarTextosEmpresarias: async function (req,res) {
        var textos = await Texto.findAll({where: {
            categoria: 'Para empresárias'
        }, 
        order: [ [ 'id', 'DESC' ]],
        });

        return res.status(200).json(textos);
    }
}