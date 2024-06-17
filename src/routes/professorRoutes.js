const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.post('/register', professorController.register);
router.get('/', professorController.getAll);

module.exports = router;