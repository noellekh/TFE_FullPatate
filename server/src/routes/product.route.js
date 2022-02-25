const express = require('express');
const router = express.Router();

const productController = require('../controllers/produits.controller');

router.get('/all_products', productController.findallProduct);
router.post('new_product', productController.createProduct);
router.get('product/:id_product', productController.findProductById);
router.put('update_product/:id_product', productController.updateProduct);
router.delete('delete_product/:id_product', productController.deleteProduct);

module.exports=router