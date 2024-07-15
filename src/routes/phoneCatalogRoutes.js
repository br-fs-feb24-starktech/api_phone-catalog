const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers');

//ATENÇÃO!!!! ROTAS PRECISAM SER ATUALIZADAS!!!!

router.get('/products', getProducts);
router.post('/');
router.patch('/');
router.delete('/');

module.exports = router;
