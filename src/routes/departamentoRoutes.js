const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');

router.post('/register', departamentoController.register);

module.exports = router;