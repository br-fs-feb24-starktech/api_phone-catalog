const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers');

//ATENÇÃO!!!! ROTAS PRECISAM SER ATUALIZADAS!!!!

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/');
router.patch('/');
router.delete('/');

module.exports = router;
