const jwt = require('jsonwebtoken');

module.exports = {
    mostrarInfosUser: function (req,res) {
        var token = req.header('authorization').substr(7);
    
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
          res.status(200).json(decoded)
        });
    },
}