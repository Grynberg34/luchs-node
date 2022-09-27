const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/banner', homeController.mostrarUltimosTextos);

router.get('/empresarias', homeController.mostrarTextosEmpresarias);

router.get('/marketeiras', homeController.mostrarTextosMarketeiras);

router.get('/texto/:id', homeController.mostrarTextoPorId);

module.exports = router;