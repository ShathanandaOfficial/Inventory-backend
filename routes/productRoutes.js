import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  restockProduct,
  getLowStockProducts
} from '../controllers/productController.js';

const router = express.Router();

router.route('/')
  .post(createProduct)
  .get(getProducts);

router.route('/:id')
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/:id/restock')
  .put(restockProduct);

router.route('/low-stock')
  .get(getLowStockProducts);

export default router;