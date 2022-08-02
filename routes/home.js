const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/banner', homeController.mostrarUltimoTexto);

module.exports = router;