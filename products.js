const express = require('express');
const router = express.Router();  

const auth = require('../middleware/auth');
const authorize = require('../middleware/admin');
const { getAll, create, update, delete: deleteProduct } = require('../controllers/productController');

router.get('/', getAll);
router.post('/', auth, authorize('admin'), create);
router.put('/:id', auth, authorize('admin'), update);
router.delete('/:id', auth, authorize('admin'), deleteProduct);

module.exports = router;

