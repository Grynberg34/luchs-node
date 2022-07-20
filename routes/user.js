const express = require('express');
const router = express.Router();
const passport = require('passport');
const textosController = require('../controllers/textosController');

router.get('/', passport.authenticate('jwt', {session: false}),
    function (req, res) {
        res.status(201).json('User')
    }
);

router.get('/textos', passport.authenticate('jwt', {session: false}), textosController.mostrarTextos);

module.exports = router;