const express = require("express");
const router = express.Router();

const Suco = require('../controllers/suco');

router.post('/suco/criar', Suco.criar);
router.get('/suco/listar', Suco.listar);
router.get('/suco/listar/:id', Suco.listar);
router.put('/suco/alterar', Suco.alterar);
router.delete('/suco/excluir/:id', Suco.excluir);

module.exports = router