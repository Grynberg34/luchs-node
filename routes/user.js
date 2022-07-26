const express = require('express');
const router = express.Router();
const passport = require('passport');
const textosController = require('../controllers/textosController');
const userController = require('../controllers/userController');

router.get('/', passport.authenticate('jwt', {session: false}), userController.mostrarInfosUser);

router.get('/textos', passport.authenticate('jwt', {session: false}), textosController.mostrarTextos);

router.get('/textos/:id', passport.authenticate('jwt', {session: false}), textosController.mostrarTextoPorId);

router.post('/criar', passport.authenticate('jwt', {session: false}), textosController.criarTexto);

router.post('/deletar', passport.authenticate('jwt', {session: false}), textosController.deletarTexto);

router.post('/editar/:id', passport.authenticate('jwt', {session: false}), textosController.editarTexto);

module.exports = router;