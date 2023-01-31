const Texto = require('../models/Texto');

module.exports = {
    mostrarUltimosTextos: async function(req,res) {
        var textos = await Texto.findAll({
            order: [ [ 'id', 'DESC' ]],
        });

        var ultimos_textos = [textos[0], textos[1], textos[2], textos[3]];

        
        return res.status(200).json(ultimos_textos);
    },
    mostrarTextosEmpresarias: async function (req,res) {
        var textos = await Texto.findAll({where: {
            categoria: 'Para empresárias'
        }, 
        order: [ [ 'id', 'DESC' ]],
        });
        

        for (var i=0; i < textos.length; i++) {
            textos[i].texto = textos[i].texto.substring(0,100) + '...'
        }
        
        return res.status(200).json(textos);
    },
    mostrarTextosMarketeiras: async function (req,res) {
        var textos = await Texto.findAll({where: {
            categoria: 'Para marketeiras'
        }, 
        order: [ [ 'id', 'DESC' ]],
        });

        for (var i=0; i < textos.length; i++) {
            textos[i].texto = textos[i].texto.substring(0,100) + '...'
        }
        
        return res.status(200).json(textos);
    },
    mostrarTextoPorId: async function(req,res) {
        var id = req.params.id;

        var texto = await Texto.findByPk(id);

        return res.status(200).json(texto);
    },

}